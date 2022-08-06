<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<%@ include file="/resources/include/head.jsp"%>
<script type="text/javascript">
$(function(){
	//관람인증 zone form의 초기화
	$("#certizone").on("click", function(e){
		e.preventDefault();
		$("#zoningForm")[0].reset();
	});
	
	//zoning 검색모달
	$("#zoning, #zoningSearch").on("click", function(e){
		e.preventDefault();
		var dummy = [];
		if ($('#zoningForm ._dummy-zoning').length > 0) {     //_dummy- class가 있는 항목은 신규추가 항목임을 구분하기 위한것.
			$('#zoningForm ._dummy-zoning').each(function() {
		        dummy.push($(this).val());
		    });
			$("#EXCLUDED_DATA").val(dummy);
		}
		//선택한 Zoning는 제외시키기 위한...
		/* if (dummy.length > 0) {
			param.EXCLUDED_DATA = dummy;
		} */
		
		var param = {
				SEARCH_KEYWORD : $("#P_SEARCH_KEYWORD").val(),
				SEARCH_OPT : $("#P_SEARCH_KEYWORD option:selected").val(),
				ZONING_VIEW : "Y",
				EXCLUDED_DATA : $("#EXCLUDED_DATA").val()
		};
		$.ajax({
	        url: "/contents/visitorCertiZoningList.adm",
	        type : "POST",
	        dataType : 'json',
	        data : JSON.stringify(param),
	        contentType : "application/json",
	        success : function(data) {
	            var rtnDataList = data.ZONING_LIST,
	                len = rtnDataList.length,
	                rtnData = "",
	                dom = "";
	            if (len > 0) {
	                for(var i=0; i<len; i++) {
	                    rtnData = rtnDataList[i];
	                    
	                    dom += "<tr>";
	                    dom += "  <td><input type='checkbox' class='list-btn _dummy-zoning' value='"+ rtnData.BEACON_GROUP_SRL +"' name='BEACON_GROUP_SRL'></td>";
	                    dom += "  <td>"+ rtnData.BEACON_GROUP_NM +"</td>";
	                    dom += "  <td>"+ rtnData.BEACON_ID +"</td>";
	                    dom += "  <td>"+ rtnData.USE_YN +"</td>";
	                    dom += "</tr>";
	                }
	            } else {
	                dom += "<tr><td colspan='4'><div class='empty-box'><i></i><p></p></div></td></tr>";
	            }
	            
	            $("#zoningList").html(dom);
	            $("#zoningCount").text(len);
	        },
	        error : function(req, status, err){
	            console.log("code:"+req.status+"\n"+"message:"+req.responseText+"\n"+"error:"+err);
	            alert("데이터를 불러오는 중 에러가 발생하였습니다.\n관리자에게 문의바랍니다.");
	           }
	    });
	});
	
	 $('#vctile tr').click(function(){
		$(this).find('input[type=radio]').prop('checked', true);
	 });
});

//UI변경으로 사용안함.
function getZoningItem_unused() {
    if (!$("input:checkbox[name=BEACON_GROUP_SRL]").is(':checked')) {
        alert("선택한 Zoning이 없습니다.");
        return;
    }
    var _selected = [],
        _seltext  = [];
    $("input:checkbox[name='BEACON_GROUP_SRL']:checked").each(function(i){
        _selected.push($(this).val());
        _seltext.push($(this).closest('tr').find('.groupnm').text());
    });
    //if (_selected.length > 0) {}
    $("#BEACON_GROUP_SRL").val(_selected);
    $("#BEACON_GROUP_SRL_VI").val(_seltext);    //코드값이 시리얼번호라 네임으로 보여줘야 할것 같아서
    $("#pClsbtn").trigger("click"); //close
}

function onSearch() {
    var form = $("#surveyForm");
    form.attr("action", "/contents/AdminVisitorCertiSurveyService.adm");
    form.submit();
}

//zoning그룹 삭제 - 실제는 저장버튼으로 삭제됨
function delItem() {
    if (!$("input:checkbox[name='BEACON_GROUP_SRL']").is(":checked")) {
        alert("선택한 항목이 없습니다.");
        return;
    }
    if (!confirm("선택한 항목을 삭제하시겠습니까?")){ return; }
    var _selected = [];
    $("input:checkbox[name='BEACON_GROUP_SRL']:checked").each(function(){
        if (!$(this).hasClass("_dummy-zoning")) {
            _selected.push($(this).val());
        }
        $(this).parent().parent().remove();
    });
    
    if (_selected.length > 0){
        $("#DELETE_BEACON_GROUP_SRL").val(_selected);
    }
}

//설문목록 가져오기
function getSurveyList(srl) {
	$.ajax({
        url: "/contents/visitorCertiSurveyList.adm",
        type : "POST",
        dataType : 'json',
        data : { SLDR_PREVW_SRL : srl },
        success : function(data) {
            var rtnDataList = data.SURVEY_LIST,
                len = rtnDataList.length,
                rtnData = "",
                dom = "";

            if (len > 0) {
	            for(var i=0; i<len; i++) {
	            	rtnData = rtnDataList[i];
	            	
	            	dom += "<tr onClick=\"javascript:getSurveyInfo('"+rtnData.SLDR_PREVW_PROBLM_SRL+"', '"+rtnData.SLDR_PREVW_SRL+"')\">";
	            	//dom += "  <td>"+ rtnData.SLDR_PREVW_PROBLM_SRL +"</td>";
	            	dom += "  <td>"+ rtnData.TITL +"</td>";
	            	dom += "  <td style='text-align:left;'>"+ rtnData.CONTNTS +"</td>";
	            	dom += "  <td>"+ rtnData.SURVEY_ANSWER +"</td>";
	            	dom += "  <td>"+ rtnData.USE_YN +"</td>";
	            	dom += "  <td>"+ rtnData.REGIST_MANGR_SRL +"</td>";
	            	dom += "  <td>"+ rtnData.REGIST_DATE +"</td>";
	            	dom += "</tr>";
	            }
            } else {
            	dom += "<tr><td colspan='6'><div class='empty-box'><i></i><p></p></div></td></tr>";
            }
            
            $("#surveyList").html(dom);
            $("#surveyCount").text(len);
        },
        error : function(req, status, err){
            console.log("code:"+req.status+"\n"+"message:"+req.responseText+"\n"+"error:"+err);
            alert("데이터를 불러오는 중 에러가 발생하였습니다.\n관리자에게 문의바랍니다.");
           }
    });
	
	$("#SLDR_PREVW_SRL").val(srl);
}

function getSurveyInfo(m_srl, s_srl) {
	window.location.href = "/contents/visitorCertiSurveyView.adm?SLDR_PREVW_PROBLM_SRL="+ m_srl +"&SLDR_PREVW_SRL="+ s_srl;
}

//관람인증  Zone저장
function regVisCertiSave() {
	var regNum = /^[0-9]*$/;
	if ($("#TITL").val() == "") {
		alert("관람인증 주제를 입력하세요");
		$("#TITL").focus();
		return;
	}
	if ($("#VISIT_MINUTE").val() == "") {
        alert("인증체류 최소시간을 입력하세요");
        $("#VISIT_MINUTE").focus();
        return;
    }
	if(!regNum.test($("#VISIT_MINUTE").val())) {
        alert("인증체류 최소시간은 숫자만 입력하세요.");
        $("#VISIT_MINUTE").focus();
        return;
    }
	if ($("#SLDR_PREVW_SRL").val() == "" && $('#zoningForm ._dummy-zoning').length<1) {
		alert("인증대상 Zone을 매핑하세요\nZoning검색 버튼을 눌러 추가하세요.");
        return;
	}
	if (!$("input:radio[name='USE_YN']").is(":checked")) {
        alert("사용여부를 선택하세요");
        return;
    }
	
	if(!confirm("등록 하시겠습니까?")) {
        return;
    }
	var formData = $('#zoningForm').serializeObject();
	$.ajax({
        url: "/contents/zoningRegProc.adm",
        type : "POST",
        dataType : 'json',
        data : JSON.stringify(formData),
        contentType : "application/json",
        success : function(result) {
            if (result.STATUS_CODE > 0) {
                alert("저장 되었습니다.");
                _callBack();
                //return;
            } else {
                alert("처리중 오류가 발생하였습니다.");
                return;
            }
        }
    });
}

//저장후 페이지 재호출
function _callBack() {
	$("#clsbtn").trigger("click"); //modal close
	window.location.href = "/contents/visitorCertiSurveyPage.adm";
}

//혹시몰라 충돌나지 말라고 익명함수 감싸기
(function(){
    $(function(){
        $('a[data-modal-page]').on("click", function(e){
        	if (!e) var e = window.event;
            e.cancelBubble = true;
            if (e.stopPropagation) e.stopPropagation();
            
        	var srl = this.getAttribute("data-modal-page");
        	e.preventDefault();
        	$.ajax({
                url: "/contents/visitorCertiInfo.adm",
                type : "POST",
                dataType : 'json',
                data : { SLDR_PREVW_SRL : srl },
                success : function(data) {
                	$("#certizone").trigger("click");
                    var rtnData = data.VCERTI_INFO;
                    
                    var useyn = rtnData.USE_YN;
                    $("#SLDR_PREVW_SRL").val(rtnData.SLDR_PREVW_SRL);
                    $("#TITL").val(rtnData.TITL);
                    $("#VISIT_MINUTE").val(rtnData.VISIT_MINUTE);
                    if (useyn == "Y") { $("#radio5").prop("checked", true); }
                    else if (useyn == "N") { $("#radio6").prop("checked", true); }
                    
                    _callBackAjax(rtnData.SLDR_PREVW_SRL);
                },
                error : function(req, status, err){
                    console.log("code:"+req.status+"\n"+"message:"+req.responseText+"\n"+"error:"+err);
                    alert("데이터를 불러오는 중 에러가 발생하였습니다.\n관리자에게 문의바랍니다.");
                   }
            });
        });
    });
})();

function _callBackAjax(srl) {
    $.ajax({
        url: "/contents/visitorCertiZoningList.adm",
        type : "POST",
        dataType : 'json',
        data : { SLDR_PREVW_SRL : srl },
        success : function(data) {
            var rtnDataList = data.ZONING_LIST,
                len = rtnDataList.length,
                rtnData = "",
                dom = "";
            if (len > 0) {
                for(var i=0; i<len; i++) {
                    rtnData = rtnDataList[i];
                    
                    dom += "<tr>";
                    dom += "  <td><input type='checkbox' class='list-btn' value='"+ rtnData.BEACON_GROUP_SRL +"' name='BEACON_GROUP_SRL'></td>";
                    dom += "  <td>"+ rtnData.BEACON_GROUP_NM +"</td>";
                    dom += "  <td>"+ rtnData.BEACON_ID +"</td>";
                    dom += "  <td>"+ rtnData.USE_YN +"</td>";
                    dom += "</tr>";
                }
            } else {
                dom += "<tr id='zoning_empty'><td colspan='4'>등록된 Zoning이 없습니다.</td></tr>";
            }
            
            $("#x-zone").html(dom);
        },
        error : function(req, status, err){
            console.log("code:"+req.status+"\n"+"message:"+req.responseText+"\n"+"error:"+err);
            alert("데이터를 불러오는 중 에러가 발생하였습니다.\n관리자에게 문의바랍니다.");
           }
    });
}

function getZoningItem() {
    if (!$("input:checkbox[name=BEACON_GROUP_SRL]").is(':checked')) {
        alert("선택한 Zoning이 없습니다.");
        return;
    }
    if($("#zoning_empty").length > 0) $("#zoning_empty").remove();
    $("input:checkbox[name=BEACON_GROUP_SRL]:checked").closest("tr").each(function(){
        $('#zoning_tbl > tbody:last-child').append(this);
    });
    $("#pClsbtn").trigger("click"); //modal close
}

//문제등록
function surveyReg() {
	if (!$("input:radio[name='survey-radio']").is(":checked")) {
        alert("문제를 등록 할 관람인증 주제를 먼저 선택하세요");
        return;
    }
	$("#surveyForm > input[name='SLDR_PREVW_SRL']").val($("input:radio[name=survey-radio]:checked").val());
    var form = $("#surveyForm");
    form.attr("action", "/contents/visitorCertiSurveyRegView.adm");
    form.submit();
}

$.fn.serializeObject = function() {
    var obj = {};
    var extend = function(i, el){
      var node = obj[el.name];
      if ("undefined" !== typeof node && node !== null) {
        if ($.isArray(node)) {
          node.push(el.value);
        } else {
            obj[el.name] = [node, el.value];
        }
      } else {
          obj[el.name] = el.value;
      }
    }
    $.each(this.serializeArray(), extend);
    return obj;
  }

function onSearch() {
    var form = $("#surveyForm");
    form.attr("action", "/contents/visitorCertiSurveyPage.adm");
    form.submit();
}
</script>
</head>
    <body>
        <%@ include file="/resources/include/header.jsp"%>
<section class="main">
        <div class="container">
            <div class="tit-area clear-fix">
                <div class="title">
                    <h2>관람인증 문제은행 관리<span> 목록</span></h2>
                </div>
                <div class="loc-line float-right">
                    <a href="#">홈</a><img src="/statics/images/icon/right01.png" alt="" class="arrow-right-m">
                    <a href="#">컨텐츠 및 서비스관리</a><img src="/statics/images/icon/right01.png" alt="" class="arrow-right-m">
                    <a href="#" class="active">관람인증 문제은행 관리</a>
                </div>
            </div>
            <form id="surveyForm" name="surveyForm" method="post">
            <input type="hidden" id="EXCLUDED_DATA" name="EXCLUDED_DATA">
            <input type="hidden" name="SLDR_PREVW_SRL">
            <div class="main-box filter" style="margin-bottom:20px;">
                <div>
                    <ul class="row" style="margin-bottom: 14px;">

                        <li class="col-1 name">
                            등록일
                        </li>
                        <li class="col-4">
                            <div class="input-group">
                                  <input class="form-control form-control-md" name="SEARCH_START_DATE" type="text" id="SEARCH_START_DATE" autocomplete="off"
                                      data-toggle="datepicker"><button class="custom-day-btn docs-datepicker-trigger" type="button">검색</button>
                                  <div class="input-group-prepend input-group-append">
                                      <span class="input-group-text border-0 bg-white">~</span>
                                  </div>
                                  <input class="form-control  form-control-md" name="SEARCH_END_DATE" type="text" id="SEARCH_END_DATE" autocomplete="off"
                                      data-toggle="datepicker"><button class="custom-day-btn docs-datepicker-trigger" type="button">검색</button>
                              </div>
                        </li>
                        <li class="col-1 name">
                            Zoning맵핑
                        </li>
                        <li class="col-2">
                            <input class="form-control form-control-md" id="SEARCH_ZONING" name="SEARCH_ZONING" value="${param.SEARCH_ZONING}">
                        </li>
                        <li class="col-1 name">
                            사용여부
                        </li>
                        <li class="col-2">
                            <select class="custom-select" id="SEARCH_YN" name="SEARCH_YN">
                                <option value="" selected>전체</option>
                                <option value="Y">Y</option>
                                <option value="N">N</option>
                            </select>
                        </li>
                    </ul>
                    <ul class="row">
                        <li class="col-1 name">
                            검색어
                        </li>
                        <li class="col-11">
                            <div class="input-group">
                                <div class="input-group-append">
                                <select class="custom-select bg-white mr-2" style="width:140px" id="SEARCH_OPT" name="SEARCH_OPT">
	                                <option value="TITL">관람인증 주제</option>
	                                <option value="REGIST_MANGR_SRL">등록자</option>
                                </select>
                                </div>
                                <input type="text" class="form-control form-control-md" id="SEARCH_KEYWORD" name="SEARCH_KEYWORD">
                                <div class="input-group-append ml-3" style="width:100px">
                                    <button type="button" class="btn btn-keyword btn-block" onClick="onSearch();">검색  <i class="fa fa-search ml-1"></i></button>
                                </div>
                            </div>
                       </li>
                    </ul>
                </div>
            </div>
            </form>
            <div class="main-box mb30">
                <ul class="table-con justify-content-between">
                    <li class="table-tit">
                        목록
                        <span class="table-search-num">총 <strong>${VIS_CERTI_LIST_COUNT}</strong>건</span>
                    </li>

                    <li style="float:right">
                        <button class="btn btn-sm btn-primary rounded"  data-toggle="modal" data-target="#dp-popup01" id="certizone">관람인증 Zone 추가<i class="xi-library-add ml-1"></i></button>
                    </li>
                </ul>
                <div style="width: 1158px;height: 350px;overflow-y: auto;">
                <table class="w-100 table-list" id="vctile">
                    <thead>
                        <tr>
                            <th>선택</th>
                            <th>관람인증 주제</th>
                            <th>인증 체류시간</th>
                            <th>Zoning 맵핑</th>
                            <th>인증사용여부</th>
                            <th>등록자</th>
                            <th>등록일</th>
                        </tr>
                    </thead>
                    <c:choose>
                        <c:when test="${!empty VIS_CERTI_LIST}">
                            <c:forEach items="${VIS_CERTI_LIST}" var="DATA" varStatus="i">
                    <tbody>
                        <tr onClick="javascript:getSurveyList('${DATA.SLDR_PREVW_SRL}');">
                            <td><input type="radio" name="survey-radio" id="survey-radio-"${i.index} value="${DATA.SLDR_PREVW_SRL}"></td>
                            <td><a href="javascript:void(0);" data-modal-page="${DATA.SLDR_PREVW_SRL}"><c:out value="${DATA.TITL}"/></a></td>
                            <td><c:out value="${DATA.VISIT_MINUTE}"/>분</td>
                            <td><c:out value="${DATA.BEACON_GROUP_NM}"/></td>
                            <td><c:out value="${DATA.USE_YN}"/></td>
                            <td><c:out value="${DATA.REGIST_MANGR_SRL}"/></td>
                            <td><c:out value="${DATA.REGIST_DATE}"/></td>
                        </tr>
                        </c:forEach>
                        </c:when>
                        <c:otherwise>
                        <tr>
                            <td colspan="7">
                                                                                        등록된 데이터가 없습니다.
                            </td>
                        </tr>
                       </c:otherwise>
                     </c:choose>
                    </tbody>
                </table>
            </div>
            </div>

            <div class="main-box mb-5">
                <ul class="table-con justify-content-between">
                    <li class="table-tit">
                        목록
                        <span class="table-search-num">총 <strong id="surveyCount"></strong>건</span>
                    </li>

                    <li style="float:right">
                        <button type="submit" class="btn btn-secondary rounded btn-sm"> 엑셀다운로드
                            <i class="fa fa-download" aria-hidden="true"></i> </button>
                        <button class="btn btn-sm btn-danger rounded" onClick="javascript:surveyReg();">문제등록</button>
                    </li>
                </ul>
               <div style="width: 1158px;height: 600px;overflow-y: auto;">
               <table class="table table-bordered table-list">
                    <thead>
                        <tr>
                            <!-- <th>문제코드</th> -->
                            <th>제목/주제</th>
                            <th>질문(Q)</th>
                            <th>정답</th>
                            <th>사용여부</th>
                            <th>등록자</th>
                            <th>등록일</th>
                        </tr>
                    </thead>
                   <tbody id="surveyList">
                    </tbody>
                </table>
                </div>
        </div>
    </section>
    <%@ include file="/resources/include/footer.jsp"%>
    <!-- 관람인증주제 등록 START -->
    <div class="modal fade" id="dp-popup01" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document" style="width:600px;max-width:600px;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel" >관람인증 Zone 정보</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
<form id="zoningForm" method="post">
<input type="hidden" id="SLDR_PREVW_SRL" name="SLDR_PREVW_SRL">
<input type="hidden" id="DELETE_BEACON_GROUP_SRL" name="DELETE_BEACON_GROUP_SRL">
                        <div class="inner p0">
                            <table class="table-list-2t">
                                <tbody>
                                    <tr>
                                        <th style="width:150px;">
                                            <span class="en-check">관람인증 주제</span>
                                        </th>
                                        <td>
                                            <input class="form-control" type="text" id="TITL" name="TITL">
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span class="en-check">인증체류 최소시간</span>
                                        </th>
                                        <td>
                                            <div class="form-inline">
                                                <input class="form-control mr5" style="width:100px" type="text" maxlength="3" id="VISIT_MINUTE" name="VISIT_MINUTE"> 분
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span class="en-check">인증 대상 Zone 맵핑</span>
                                        </th>
                                        <td>
                                            <button type="button" class="btn btn-secondary rounded btn-xs mb-2" onClick="javascript:delItem();"> 선택삭제 <i class="xi-trash"></i></button>
                                            <button class="btn btn-primary btn-xs rounded mb-2"  data-toggle="modal" data-target="#dp-popup02" id="zoning">Zonig 검색 <i class="fa fa-search"></i></button>
                                            <!-- <textarea type="text" id="BEACON_GROUP_SRL_VI" name="BEACON_GROUP_SRL_VI" class="form-control _abled" style="height: 70px;" disabled></textarea>
                                            <input type="hidden" name="BEACON_GROUP_SRL" id="BEACON_GROUP_SRL"> -->
                                            <div style="padding-top: 0;width: 450px;height: 200px;overflow-y: auto;" id="zoning_mp">
                                            <table class="table table-bordered table-list" id="zoning_tbl">
                                                <thead>
                                                    <tr>
                                                        <th>선택</th>
                                                        <th>Zoning코드(명)</th>
                                                        <th>비콘목록</th>
                                                        <th>사용여부</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="x-zone">
                                                </tbody>
                                            </table></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span class="en-check">사용여부</span>
                                        </th>
                                        <td>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="USE_YN" id="radio5" value="Y">
                                                <label class="form-check-label" for="radio5"> Y </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="USE_YN" id="radio6" value="N">
                                                <label class="form-check-label" for="radio6"> N </label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </form>
                </div>
                <div class="modal-footer mt10">
                    <button type="button" class="btn btn-danger btn-md" onClick="javascript:regVisCertiSave();">등록</button>
                    <button type="button" id="clsbtn" class="btn btn-cancel btn-md" data-dismiss="modal">닫기</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 관람인증주제 등록 END -->
    <!-- Zoning START -->
    <div class="modal fade" id="dp-popup02" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document" style="width:600px;max-width:600px;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Zoning 검색</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                <form id="zoningSearchForm" method="post">
                    <div class="filter-box-gray mb15">
                        <dl>
                            <!-- <dd class="table-tit" style="width: 130px">
                                <h5>상태</h5>
                                <span class="table-num-view">
                                    <select class="custom-select" style="width: 76px;">
                                        <option>전체</option>
                                        <option>미전시</option>
                                        <option>전시</option>
                                    </select>
                                </span>
                            </dd> -->
                            <dd class="table-tit" style="width: 456px">
                                <h5>검색어</h5>
                                <span class="table-num-view">
                                    <select class="custom-select" style="width: 96px;" name="P_SEARCH_OPT" id="P_SEARCH_OPT">
                                        <option value="BEACON_GROUP_NM">Zoning ID</option>
                                        <option value="BEACON_SRL">비콘 ID</option>
                                    </select>
                                </span>
                                <div class="search-m">
                                    <input type="text" class="search-m-text" placeholder="입력하세요." id="P_SEARCH_KEYWORD" name="P_SEARCH_KEYWORD">
                                    <button type="button" class="search-m-btn" id="zoningSearch">검색</button>
                                </div>
                            </dd>

                        </dl>
                    </div>
                    <div class="table-tit bt0 d-inline" style="line-height: 3;">
                        목록 <span class="float-right table-search-num" style="margin:0; text-align: right;">총
                            <strong id="zoningCount"</strong>건</span>
                    </div>
                    <div class="inner pt0" style="padding-top: 0;height: 320px;overflow-y: auto;">
                        <table class="table table-bordered table-list-t3">
                            <thead>
                                <tr>
                                    <th>선택</th>
                                    <th>Zoning코드(명)</th>
                                    <th width="43%">비콘목록</th>
                                    <th>사용여부</th>
                                </tr>
                            </thead>
                            <tbody id="zoningList">
                            </tbody>
                        </table>
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger btn-lg" onClick="javascript:getZoningItem();">적용</button>
                    <button type="button" class="btn btn-cancel btn-lg" data-dismiss="modal" id="pClsbtn">닫기</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Zoning END -->
    </body>
</html>