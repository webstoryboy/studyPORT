 // 투두리스트js
        // clock.js
        const clockContainer = document.querySelector(".js-clock"),
        clockTitle = clockContainer.querySelector("h1");

        function getTime() {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;
        }


        //To do list.js
        const toDoForm = document.querySelector(".js-toDoForm"),
            toDoInput = toDoForm.querySelector("input"),
            toDoList = document.querySelector(".js-toDoList");

        const TODOS_LS = 'toDos';


        let toDos = [];

        function deleteToDo(event){
            const btn = event.target;
            const li = btn.parentNode;
            toDoList.removeChild(li);
            const cleanToDos = toDos.filter(function(toDo){
                return toDo.id !== parseInt(li.id);
            });
            toDos = cleanToDos
            saveToDos();
        }

        function saveToDos(){
            localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
        }

        function paintToDo(text){
            const li = document.createElement("li");

            const check =document.createElement("input");//스펜 체크표시
            check.type = "checkbox";
            const num = toDos.length + 1;
            check.id = "list-"+num;
            check.className = "hidden-box";
            li.appendChild(check);
            
            const label = document.createElement("label");
            label.htmlFor = "list-"+num;
            label.className = "check-label";
            li.appendChild(label);
            

            const spanCheck =document.createElement("span");//TO DO LIST text나열
            spanCheck.className = "label-box";
            label.appendChild(spanCheck);
            
            const span =document.createElement("span");//TO DO LIST text나열
            span.className = "label-text";
            const newId = toDos.length + 1;
            span.innerText = text;
            label.appendChild(span);

            const delBtn = document.createElement("button");//리스트 지우기버튼
            delBtn.innerText = "X";
            delBtn.addEventListener('click', deleteToDo)
            li.appendChild(delBtn);
            
            li.id = newId;
            li.className = "list-item";

            toDoList.appendChild(li);
            const toDoObj = {
                text: text,
                id: newId
            };
            toDos.push(toDoObj);
            saveToDos();
        }
        function handleSubmit(event){
            event.preventDefault();
            const currentValue = toDoInput.value;
            paintToDo(currentValue);
            toDoInput.value = "";
        }

        function loadToDos(){
        const loadedToDos = localStorage.getItem(TODOS_LS);
        if(loadedToDos !== null){
            const parsedToDos = JSON.parse(loadedToDos);
            parsedToDos.forEach(function(toDo) {
                paintToDo(toDo.text);
            })
        };
    };


    // bg.js
    const likeBody = document.querySelector('.js_work1');

    const IMG_NUMBER = 3;

    function handleImgLoad() {
        console.log('finished loading');
    }


    //추가할 때마다 이미지 변경
    function paintImage(imgNumber){
        var image = document.createElement("image");
        image.src = `../img/${imgNumber + 1}.png`;
        image.classList.add('bgImage');
//            likeBody.appendChild(image);
        image.addEventListener('loadend', handleImgLoad);
    }

    function genRandom(){
        const number = Math.floor(Math.random() * IMG_NUMBER);
        return number;
    }

    // common
    function todolistInit(){
        getTime();
        setInterval(getTime, 1000);
        loadToDos();
        toDoForm.addEventListener("submit", handleSubmit)
        const randomNumber = genRandom();
        paintImage(randomNumber)
    }

    todolistInit();