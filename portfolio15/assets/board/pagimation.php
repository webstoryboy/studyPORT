<div class="paging">
    <ul class="pagination">

        <?php 
        //숫자만 가져올수 있음
            $sql = "SELECT count(boardID) FROM portBoard";
            $result = $dbConnect -> query($sql);

            $boardTotalCount = $result -> fetch_array(MYSQLI_ASSOC);  //fetch_array(MYSQLI_ASSOC) mysql 정보가져와서
            $boardTotalCount = $boardTotalCount['count(boardID)'];

            //총 페이지 수
            $boardTotalPage = ceil($boardTotalCount / $numView);

            //현재 페이지를 기준으로 보여주고 싶은 버튼 갯수
            $pageView = 3;
            $startPage = $page - $pageView;   //버튼 갯수 제한걸기
            $endPage = $page + $pageView;

            //처음 페이지 초기화
            if( $startPage < 1 ) $startPage = 1;

            //마지막 페이지 초기화
            if( $endPage >= $boardTotalPage ) $endPage = $boardTotalPage;

            //처음으로
            if( $page != 1 ){
                echo "<li><a href='board.php?page=1'><i class='fa fa-angle-double-left' aria-hidden='true'></i></a></li>";
            }

            //이전 페이지
            if( $page != 1 ){
                $prevPage = $page - 1;
                echo "<li><a href='board.php?page={$prevPage}'><i class='fa fa-angle-left' aria-hidden='true'></i></a></li>";
            }

            for( $i = $startPage; $i <= $endPage; $i++ ){
                $active = '';
                if( $i == $page ) $active = 'active';

                echo "<li class='{$active}'><a href='board.php?page={$i}'>{$i}</a></li>";
            }

            //다음 페이지
            if( $page != $endPage ){
                $nextPage = $page + 1;
                echo "<li><a href='board.php?page={$nextPage}'><i class='fa fa-angle-right' aria-hidden='true'></i></a></li>";
            }

            //마지막
            if( $page != $endPage ){
                echo "<li><a href='board.php?page={$boardTotalPage}'><i class='fa fa-angle-double-right' aria-hidden='true'></i></a></li>";
            }

        ?>
    </ul>
</div>