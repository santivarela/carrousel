const items = document.getElementsByName("item");
const itemslenght = items.length;
const slide = document.getElementById("slides-container");
let offset = 0;

// for (let i = 0; i < itemslenght;  i++){
//     const listItem = document.createElement('li');
//     const text = document.createCommentNode(i +1);
//     listItem.appendChild(text)
//     slide.appendChild(listItem)
// }

function backward() {
    console.log(1)
    const container = document.getElementById( `slider`);
    offset  = offset  - 50;
    container.style.left = `${offset}px`;
}

function forward() {
    console.log(2)
    const container = document.getElementById( `slider`);
    offset  = offset  + 50;
    container.style.left = `${offset}px`;
}

// function gotoSlide( number) {
//     const slide = document.getElementById("slider");
//     slider.style.left =(number -1) *120 * -1+ "px";
// }