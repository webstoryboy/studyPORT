<div class="listPage">
    <ul class="pagination">

        <?php
        //count : 숫자를 가져옴
        $sql = 'SELECT count(boardID) FROM myPortBoard';
        $result = $dbConnect->query($sql);

        // 토탈 갯수 넣어주기(변수 값 가져와서 다시 변수에 값을 넣음)
        $boardTotalCount = $result->fetch_array(MYSQLI_ASSOC);
        $boardTotalCount = $boardTotalCount['count(boardID)'];

        //총 페이지 수
        // ceil : 소수점을 정수로 바꿔줌
        $boardTotalPage = ceil($boardTotalCount / $numView);

        // 범위설정 : 내 위치를 기준으로 해서 그 전에 5개 후에 5개
        // 현재 페이지를 기준으로 보여주고 싶은 갯수
        $pageView = 5;

        // 페이지 보여주는 범위 제한
        $startPage = $page - $pageView; // 10페이지면 15까지만 보여줌
        $endPage = $page + $pageView;

        //처음 페이지 초기화
        if ($startPage < 1) {
            $startPage = 1;
        } // -3이 나오면 1로 초기화

        //마지막 페이지 초기화
        if ($endPage >= $boardTotalPage) {
            $endPage = $boardTotalPage;
        } // 25가 되면 20으로

        //처음으로
        if ($page != 1) {
            echo "<li><a href='board.php?page=1'>처음으로</a></li>";
        }

        //이전 페이지
        if ($page != 1) {
            $prevPage = $page - 1;
            echo "<li><a href='board.php?page={$prevPage}'>이전</a></li>";
        }

        for ($i = $startPage; $i <= $endPage; $i++) {
            $active = '';
            if ($i == $page) {
                $active = 'active';
            }

            echo "<li class='{$active}'><a href='board.php?page={$i}'>{$i}</a></li>"; /// 20페이지니까 20개가 나 올 것임

            // 결론 : 총 페이지 갯수를 구해서 반복 시켜 줌
        }

        //다음 페이지
        if ($page != $endPage) {
            $nextPage = $page + 1;
            echo "<li><a href='board.php?page={$nextPage}'>다음</a></li>";
        }

        //마지막
        if ($page != $endPage) {
            echo "<li><a href='board.php?page={$boardTotalPage}'>마지막으로</a></li>";
        }
        ?>
        <!-- <li><a href="#">처음으로</a></li>
        <li><a href="#">이전</a></li>
        <li><a href="#">1</a></li>
        <li class="active"><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li><a href="#">7</a></li>
        <li><a href="#">다음</a></li>
        <li><a href="#">마지막으로</a></li> -->
    </ul>
</div>