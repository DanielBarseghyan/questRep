"use strict"

let loader = `<div id="loader">
<i class="fa-solid fa-spinner load"></i>
</div>`

ansBtn.onclick = start;
let curentWin = `<h2 id="question" class="question">
Html is a programing languig</h2>
<div class="">
    <input type="text" placeholder="Ansuer" id="ley">
    <button id="ansBtn" onclick="load()">Reply</button>
</div>`;

let questArr = [
    {
        question: "Html is a programing languig",
        ansuer: "no",
        triger: false
    },
    {
        question: "Js is the same as java",
        ansuer: "no",
        triger: false
    },
    {
        question: "DOM is a Document Object Model",
        ansuer: "yes",
        triger: false
    },
    {
        question: `let obj = {}; <br>      
                    let obj2 = {};  <br>  
                   obj==obj2`,
        ansuer: "no",
        triger: false
    },
    {
        question: "Lavner ?",
        ansuer: "yes",
        triger: false
    }
]
alert("Ansuer 'yes' or 'no' ")
let flag = 0,
    redF = 50,
    greenF = 50;
function start() {
    wind.innerHTML = curentWin;
    ansBtn.onclick = load;
    newQuest();
}


function load() {
    checkAnsuer();
    wind.innerHTML = loader;
    setTimeout(() => {
        wind.innerHTML = curentWin;
        newQuest();
    }, 1300);
}
function newQuest() {
    if (flag < questArr.length) {
        question.innerHTML = questArr[flag].question;
        flag++;

    }
    else {
        rezalts();
    }
}
function checkAnsuer() {
    if (ley.value == questArr[flag - 1].ansuer) {
        good();
        questArr[flag - 1].triger = true
    }
    else {
        bad();
    }
}
function good() {
    redF -= 10;
    greenF += 10;
    fail.style.width = redF + "%";
    hit.style.width = greenF + "%";
}
function bad() {
    redF += 10;
    greenF -= 10;
    fail.style.width = redF + "%";
    hit.style.width = greenF + "%";
}
function rezalts() {
    wind.innerHTML = "";
    let rezFlag = 5;
    for (let i = 0; i < questArr.length; i++) {
        let box = document.createElement("div");
        box.classList.add("wind");
        let quest = document.createElement("h2");
        quest.innerHTML = questArr[i].question;
        quest.classList.add("question");
        if (questArr[i].triger == false) {
            quest.setAttribute("id", "bedAns");
            rezFlag--;
        }
        box.appendChild(quest);
        lol.appendChild(box);
    }
    let rez = document.createElement("h2");
    rez.innerHTML = `${questArr.length}/${rezFlag}`;
    rez.classList.add("question");
    wind.style.textAlign = "center";
    wind.appendChild(rez);
}
