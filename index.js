let foodArray = [
    [
        "Phở",
        "Cơm tấm",
        "Hủ tiếu",
        "Bánh mì",
        "Bún bò Huế",
        "Bánh xèo",
        "Cháo lòng",
        "Bún chả",
    ],
    [
        "Cơm sườn",
        "Thịt kho tàu",
        "Hủ tiếu",
        "Bún bò",
        "Bùn riêu",
        "Phở",
        "Táo"
    ],
    [
        "Cơm gà",
        "Gà rán",
        "Bánh canh",
        "Bún riêu",
        "Bánh hỏi",
        "Mì xào",
    ],
    [
        "Buffet hải sản",
        "Bún đậu mắm tôm",
        "Gỏi cá",
        "Cháo gà",
        "Bò kho",
        "Bánh bèo",
        "Cơm niêu",
    ],
]
let timeMessage = [
    "Buổi sáng", "Buổi trưa", "Buổi chiều", "Buổi tối"
]
let last = 99;
let flag = 0;

function getHour() {
    return new Date().getHours()
}

function setFlag() {
    let hours = getHour()
    if (hours> 6 && hours < 12) {
        flag = 0;
    } else if (hours >= 12 && hours < 14) {
        flag = 1;
    } else if (hours >= 14 && hours < 18) {
        flag = 2;
    } else {
        flag = 3;
    }
}
function setQuestion() {
    let question = document.querySelector(".request")
    question.textContent = `${timeMessage[flag]} nên ăn gì?`
}
function setRandomFood() {
    let random = Math.floor(Math.random() * foodArray[flag].length)
    while (random == last) {
        random = Math.floor(Math.random() * foodArray[flag].length)
    }
    last = random;
    let food = document.querySelector(".food")
    food.textContent = `${timeMessage[flag]} bạn nên ăn: ${foodArray[flag][random]}`
}
setFlag()
setRandomFood()
setQuestion()