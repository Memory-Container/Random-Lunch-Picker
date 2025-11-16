let foodArray = ["Cơm sườn","Thịt kho tàu","Hủ tiếu","Bún bò","Bùn riêu","Phở","Táo"]
let last = 99;
getRandomFood()
function getRandomFood() {
    let random = Math.floor(Math.random() * foodArray.length)
    while (random == last) {
        random = Math.floor(Math.random() * foodArray.length)
    }
    last = random;
    console.log(random)
    let food = document.querySelector(".food")
    food.innerHTML = foodArray[random]
}