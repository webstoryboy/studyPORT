// 선택자
const quiz = document.querySelector("#quiz");
const quizWrap = document.querySelector(".quizWrap");
const questionQuiz = document.querySelector(".question__quiz");
const questionAnswerConfirm = document.querySelector(".question__answer__confirm");
const questionAnswerView = document.querySelector(".question__answer__view");
const questionAnswerEx = document.querySelector(".question__answer__ex");

// 문제 정보
const siteInfo = [
    {
        siteHtml : `&lt;main&gt;

    &lt;div class="paraScroll"&gt;scrollTop : &lt;span&gt;0&lt;/span&gt;px&lt;/div&gt;
    &lt;!-- //paraScroll --&gt;

    &lt;nav class="paraNav"&gt;
        &lt;ul&gt;
            &lt;li class="active"&gt;&lt;a href="#section1"&gt;메뉴1&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#section2"&gt;메뉴2&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#section3"&gt;메뉴3&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#section4"&gt;메뉴4&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#section5"&gt;메뉴5&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#section6"&gt;메뉴6&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#section7"&gt;메뉴7&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#section8"&gt;메뉴8&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#section9"&gt;메뉴9&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/nav&gt;
    &lt;!-- //paraNav --&gt;

    &lt;div class="paraCont"&gt;
        &lt;section id="section1" class="content-item"&gt;
            &lt;span class="num"&gt;01&lt;/span&gt;
            &lt;h2 class="title"&gt;Section1&lt;/h2&gt;
            &lt;figure class="img-Wrap"&gt;
                &lt;div class="img"&gt;&lt;/div&gt;
            &lt;/figure&gt;
            &lt;p class="desc"&gt;Be true to thyself.&lt;/p&gt;
        &lt;/section&gt;
        &lt;!-- //section1 --&gt;
​
        &lt;section id="section2" class="content-item"&gt;
            &lt;span class="num"&gt;02&lt;/span&gt;
            &lt;h2 class="title"&gt;Section2&lt;/h2&gt;
            &lt;figure class="img-Wrap"&gt;
                &lt;div class="img"&gt;&lt;/div&gt;
            &lt;/figure&gt;
            &lt;p class="desc"&gt;Attitude is everything.&lt;/p&gt;
        &lt;/section&gt;
        &lt;!-- //section2 --&gt;
​
        &lt;section id="section3" class="content-item"&gt;
            &lt;span class="num"&gt;03&lt;/span&gt;
            &lt;h2 class="title"&gt;Section3&lt;/h2&gt;
            &lt;figure class="img-Wrap"&gt;
                &lt;div class="img"&gt;&lt;/div&gt;
            &lt;/figure&gt;
            &lt;p class="desc"&gt;It hurt because it mattered.&lt;/p&gt;
        &lt;/section&gt;
        &lt;!-- //section3 --&gt;
​
        &lt;section id="section4" class="content-item"&gt;
            &lt;span class="num"&gt;04&lt;/span&gt;
            &lt;h2 class="title"&gt;Section4&lt;/h2&gt;
            &lt;figure class="img-Wrap"&gt;
                &lt;div class="img"&gt;&lt;/div&gt;
            &lt;/figure&gt;
            &lt;p class="desc"&gt;Sometimes the right path is not the easiest one.&lt;/p&gt;
        &lt;/section&gt;
        &lt;!-- //section4 --&gt;
​
        &lt;section id="section5" class="content-item"&gt;
            &lt;span class="num"&gt;05&lt;/span&gt;
            &lt;h2 class="title"&gt;Section5&lt;/h2&gt;
            &lt;figure class="img-Wrap"&gt;
                &lt;div class="img"&gt;&lt;/div&gt;
            &lt;/figure&gt;
            &lt;p class="desc"&gt;Yesterday you said tomorrow. Just do it.&lt;/p&gt;
        &lt;/section&gt;
        &lt;!-- //section5 --&gt;
​
        &lt;section id="section6" class="content-item"&gt;
            &lt;span class="num"&gt;06&lt;/span&gt;
            &lt;h2 class="title"&gt;Section6&lt;/h2&gt;
            &lt;figure class="img-Wrap"&gt;
                &lt;div class="img"&gt;&lt;/div&gt;
            &lt;/figure&gt;
            &lt;p class="desc"&gt;Happiness depends upon ourselves.&lt;/p&gt;
        &lt;/section&gt;
        &lt;!-- //section6 --&gt;
​
        &lt;section id="section7" class="content-item"&gt;
            &lt;span class="num"&gt;07&lt;/span&gt;
            &lt;h2 class="title"&gt;Section7&lt;/h2&gt;
            &lt;figure class="img-Wrap"&gt;
                &lt;div class="img"&gt;&lt;/div&gt;
            &lt;/figure&gt;
            &lt;p class="desc"&gt;Faith makes all things possible.&lt;/p&gt;
        &lt;/section&gt;
        &lt;!-- //section7 --&gt;
​
        &lt;section id="section8" class="content-item"&gt;
            &lt;span class="num"&gt;08&lt;/span&gt;
            &lt;h2 class="title"&gt;Section8&lt;/h2&gt;
            &lt;figure class="img-Wrap"&gt;
                &lt;div class="img"&gt;&lt;/div&gt;
            &lt;/figure&gt;
            &lt;p class="desc"&gt;Time you enjoy wasting is not wasted time.&lt;/p&gt;
        &lt;/section&gt;
        &lt;!-- //section8 --&gt;
​
        &lt;section id="section9" class="content-item"&gt;
            &lt;span class="num"&gt;09&lt;/span&gt;
            &lt;h2 class="title"&gt;Section9&lt;/h2&gt;
            &lt;figure class="img-Wrap"&gt;
                &lt;div class="img"&gt;&lt;/div&gt;
            &lt;/figure&gt;
            &lt;p class="desc"&gt;Don’t dream it, be it.&lt;/p&gt;
        &lt;/section&gt;
        &lt;!-- //section9 --&gt;
    &lt;/div&gt;
    &lt;!-- //paraCont --&gt;
&lt;/main&gt;`,
        siteCss : `.paraNav {
    top: 20px;
    transition: top 0.4s ease;
}
.paraNav.hide {
    top: -200px;
}
.paraNav li a {
    width: auto;
    padding: 5px 20px;
}
.paraNav li.active a {
    border-radius: 30px;
}`,
        siteJs : `document.querySelectorAll(".paraNav ul li a").forEach(li => {
    li.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(li.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

let nowScrollTop;
let lastScrollTop = 0;

function scrollProgress(){
    nowScrollTop = true;

    setTimeout(() => {
        if(nowScrollTop){
            nowScrollTop = false;
            hasScroll();
        }
    }, 500);
}

function hasScroll(){
    let scrollTop = document.documentElement.scrollTop || window.scrollY || window.pageYOffset;

    if(scrollTop >= lastScrollTop){
        document.querySelector(".paraNav").classList.add("hide");
    } else {
        document.querySelector(".paraNav").classList.remove("hide");
    }
    lastScrollTop = scrollTop;

    // 메뉴용
    document.querySelectorAll(".content-item").forEach((item, index) => {
        if(scrollTop >= item.offsetTop){
            document.querySelectorAll(".paraNav ul li").forEach(li => {
                li.classList.remove("active");
            })
            document.querySelector(".paraNav ul li:nth-child("+(index+1)+")").classList.add("active");
        }
    })

    // 출력용
    document.querySelector(".paraScroll span").innerText = parseInt(scrollTop);
}

window.addEventListener("scroll", scrollProgress);`,
    },
        {
        siteHtml : `&lt;main&gt;

    &lt;div class="paraScroll"&gt;scrollTop : &lt;span&gt;0&lt;/span&gt;px&lt;/div&gt;
    &lt;!-- //paraScroll --&gt;

    &lt;nav class="paraNav"&gt;
        &lt;ul&gt;
            &lt;li class="active"&gt;&lt;a href="#section1"&gt;메뉴1&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#section2"&gt;메뉴2&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#section3"&gt;메뉴3&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#section4"&gt;메뉴4&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#section5"&gt;메뉴5&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#section6"&gt;메뉴6&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#section7"&gt;메뉴7&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#section8"&gt;메뉴8&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#section9"&gt;메뉴9&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/nav&gt;
    &lt;!-- //paraNav --&gt;

    &lt;div class="paraCont"&gt;
        &lt;section id="section1" class="content-item"&gt;
            &lt;span class="num"&gt;01&lt;/span&gt;
            &lt;h2 class="title"&gt;Section1&lt;/h2&gt;
            &lt;figure class="img-Wrap"&gt;
                &lt;div class="img"&gt;&lt;/div&gt;
            &lt;/figure&gt;
            &lt;p class="desc"&gt;Be true to thyself.&lt;/p&gt;
        &lt;/section&gt;
        &lt;!-- //section1 --&gt;
​
        &lt;section id="section2" class="content-item"&gt;
            &lt;span class="num"&gt;02&lt;/span&gt;
            &lt;h2 class="title"&gt;Section2&lt;/h2&gt;
            &lt;figure class="img-Wrap"&gt;
                &lt;div class="img"&gt;&lt;/div&gt;
            &lt;/figure&gt;
            &lt;p class="desc"&gt;Attitude is everything.&lt;/p&gt;
        &lt;/section&gt;
        &lt;!-- //section2 --&gt;
​
        &lt;section id="section3" class="content-item"&gt;
            &lt;span class="num"&gt;03&lt;/span&gt;
            &lt;h2 class="title"&gt;Section3&lt;/h2&gt;
            &lt;figure class="img-Wrap"&gt;
                &lt;div class="img"&gt;&lt;/div&gt;
            &lt;/figure&gt;
            &lt;p class="desc"&gt;It hurt because it mattered.&lt;/p&gt;
        &lt;/section&gt;
        &lt;!-- //section3 --&gt;
​
        &lt;section id="section4" class="content-item"&gt;
            &lt;span class="num"&gt;04&lt;/span&gt;
            &lt;h2 class="title"&gt;Section4&lt;/h2&gt;
            &lt;figure class="img-Wrap"&gt;
                &lt;div class="img"&gt;&lt;/div&gt;
            &lt;/figure&gt;
            &lt;p class="desc"&gt;Sometimes the right path is not the easiest one.&lt;/p&gt;
        &lt;/section&gt;
        &lt;!-- //section4 --&gt;
​
        &lt;section id="section5" class="content-item"&gt;
            &lt;span class="num"&gt;05&lt;/span&gt;
            &lt;h2 class="title"&gt;Section5&lt;/h2&gt;
            &lt;figure class="img-Wrap"&gt;
                &lt;div class="img"&gt;&lt;/div&gt;
            &lt;/figure&gt;
            &lt;p class="desc"&gt;Yesterday you said tomorrow. Just do it.&lt;/p&gt;
        &lt;/section&gt;
        &lt;!-- //section5 --&gt;
​
        &lt;section id="section6" class="content-item"&gt;
            &lt;span class="num"&gt;06&lt;/span&gt;
            &lt;h2 class="title"&gt;Section6&lt;/h2&gt;
            &lt;figure class="img-Wrap"&gt;
                &lt;div class="img"&gt;&lt;/div&gt;
            &lt;/figure&gt;
            &lt;p class="desc"&gt;Happiness depends upon ourselves.&lt;/p&gt;
        &lt;/section&gt;
        &lt;!-- //section6 --&gt;
​
        &lt;section id="section7" class="content-item"&gt;
            &lt;span class="num"&gt;07&lt;/span&gt;
            &lt;h2 class="title"&gt;Section7&lt;/h2&gt;
            &lt;figure class="img-Wrap"&gt;
                &lt;div class="img"&gt;&lt;/div&gt;
            &lt;/figure&gt;
            &lt;p class="desc"&gt;Faith makes all things possible.&lt;/p&gt;
        &lt;/section&gt;
        &lt;!-- //section7 --&gt;
​
        &lt;section id="section8" class="content-item"&gt;
            &lt;span class="num"&gt;08&lt;/span&gt;
            &lt;h2 class="title"&gt;Section8&lt;/h2&gt;
            &lt;figure class="img-Wrap"&gt;
                &lt;div class="img"&gt;&lt;/div&gt;
            &lt;/figure&gt;
            &lt;p class="desc"&gt;Time you enjoy wasting is not wasted time.&lt;/p&gt;
        &lt;/section&gt;
        &lt;!-- //section8 --&gt;
​
        &lt;section id="section9" class="content-item"&gt;
            &lt;span class="num"&gt;09&lt;/span&gt;
            &lt;h2 class="title"&gt;Section9&lt;/h2&gt;
            &lt;figure class="img-Wrap"&gt;
                &lt;div class="img"&gt;&lt;/div&gt;
            &lt;/figure&gt;
            &lt;p class="desc"&gt;Don’t dream it, be it.&lt;/p&gt;
        &lt;/section&gt;
        &lt;!-- //section9 --&gt;
    &lt;/div&gt;
    &lt;!-- //paraCont --&gt;
&lt;/main&gt;`,
        siteCss : `.paraNav {
    top: 20px;
    transition: top 0.4s ease;
}
.paraNav.hide {
    top: -200px;
}
.paraNav li a {
    width: auto;
    padding: 5px 20px;
}
.paraNav li.active a {
    border-radius: 30px;
}`,
        siteJs : `document.querySelectorAll(".paraNav ul li a").forEach(li => {
    li.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(li.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

let nowScrollTop;
let lastScrollTop = 0;

function scrollProgress(){
    nowScrollTop = true;

    setTimeout(() => {
        if(nowScrollTop){
            nowScrollTop = false;
            hasScroll();
        }
    }, 500);
}

function hasScroll(){
    let scrollTop = document.documentElement.scrollTop || window.scrollY || window.pageYOffset;

    if(scrollTop >= lastScrollTop){
        document.querySelector(".paraNav").classList.add("hide");
    } else {
        document.querySelector(".paraNav").classList.remove("hide");
    }
    lastScrollTop = scrollTop;

    // 메뉴용
    document.querySelectorAll(".content-item").forEach((item, index) => {
        if(scrollTop >= item.offsetTop){
            document.querySelectorAll(".paraNav ul li").forEach(li => {
                li.classList.remove("active");
            })
            document.querySelector(".paraNav ul li:nth-child("+(index+1)+")").classList.add("active");
        }
    })

    // 출력용
    document.querySelector(".paraScroll span").innerText = parseInt(scrollTop);
}

window.addEventListener("scroll", scrollProgress);`,
    }
]

// 코드
function updateQuiz(){
    const output = [];

    siteInfo.forEach((el, index) => {
        output.push(`
        <div class="modal-bg">
          <div class="modal-cont">
            <div class="code-view">
                <div class="view-header">
                    <div class="dot" aria-hidden="true">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="view-title">
                    <ul>
                        <li class="active"><a href="#">Html</a></li>
                        <li><a href="#">CSS</a></li>
                        <li><a href="#">Javascript</a></li>
                    </ul>
                </div>
                <div class="view-cont">
                    <div class="html">
<pre><code class="language-html">${el.siteHtml}
</code></pre>
                    </div>
                    <div class="css">
<pre><code class="language-css">${el.siteCss}
</code></pre>
                    </div>
                    <div class="javascript">
<pre><code class="language-js">${el.siteJs}
</code></pre> 
                    </div>
                </div>
            </div>

            <button>닫기</button>
          </div>
        </div>
        `)
    });
    document.querySelector("#modal").innerHTML = output.join(' ');    
}
updateQuiz();

console.log(document.querySelector(".sites__info .site__btn button"));

function modalPE01(){
    document.querySelector(".sites__info .site__btn button").addEventListener("click", function(){
        document.querySelector("#modal").classList.remove("hide");
        document.querySelector("#modal").classList.add("show");
        document.querySelector(".view-cont > div:nth-child(1)").classList.add("active");
    });
    
    document.querySelector(".modal-cont button").addEventListener("click", function(){
        document.querySelector("#modal").classList.add("hide");
    });
}