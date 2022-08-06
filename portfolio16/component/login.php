<!-- 로그인 모달 -->
<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalCenterTitle">환영합니다.</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="signUp">
                        <form name="signIn" method="post" action="signUpIn.php">
                            <fieldset>
                                <legend class="sr-only">회원 가입 폼입니다.</legend>
                                <div>
                                    <label for="userEmail" class="sr-only">이메일</label>
                                    <input type="email" name="userEmail" id="userEmail" class="input-text form-control" placeholder="이메일을 적어주세요." required="" autofocus="">
                                </div>
                                <div>
                                    <label for="userPW" class="sr-only">패스워드</label>
                                    <input type="text" name="userPW" id="userPW" class="input-text form-control" placeholder="패스워드를 적어주세요." required="">
                                </div>
                               
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="mx-auto">
                        <button class="btn btn-block btn-primary" type="submit" value="로그인">로그인</button>
                        <p class="signDesc">회원가입을 원한다면? <a href="./html/signUp.php">회원가입</a></p>
                    </div>
                </div>
            </div>
        </div>
</div>