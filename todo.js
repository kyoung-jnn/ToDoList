const toDoInput = document.querySelector(".toDoInput");
const input = toDoInput.querySelector("input");
const list = document.querySelector(".toDoList");

let toDoArray = []; //객체를 담을 배열, 새로 고침해도 배열을 이용하여 리스트를 불러온다

function saveToDoList(){
    localStorage.setItem("toDoArray",JSON.stringify(toDoArray));
}

function loadToDoList(){
    let loadedList = JSON.parse(localStorage.getItem("toDoArray"));

    if(loadedList != null){
        loadedList.forEach(function(todo){
           makeList(todo.text);
        })
    }
}

function delBtnClickHandler(event){
    const delObj = event.target.parentNode;
    list.removeChild(delObj);

     for(var i=0; i <toDoArray.length; i++){
         if(delObj.id == toDoArray[i].id)
             toDoArray.splice(i,1); //배열에서 객체 삭제
     }

    saveToDoList();
}

function makeList(input){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = toDoArray.length +1;
    span.innerText = input;
    delBtn.innerText = "Delete";
    delBtn.addEventListener("click",delBtnClickHandler);

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    list.appendChild(li);

    const Obj = {
        'id': newId, //id값을 이용하여 삭제하기
        'text': input
    }
    toDoArray.push(Obj);

    saveToDoList();
}

function submitHandler(event){
    event.preventDefault();
    const currentInput = input.value;
    input.value = ""; //입력창 지우기
    makeList(currentInput);
}

function init(){
    loadToDoList();
    toDoInput.addEventListener("submit",submitHandler);
}

init();