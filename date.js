const week = document.querySelector(".js-week h1");
const clock = document.querySelector(".js-date h1");

function getDate(){
    const weekArr = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekDay = new Date().getDay();
    const weekToday = weekArr[weekDay];

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    week.innerText = `${yyyy}.${mm}.${dd} ${weekToday}  `;
}

function init(){
    getDate();
}

init();