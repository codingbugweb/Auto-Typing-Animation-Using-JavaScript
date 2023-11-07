const box = document.querySelector("#box");
let i = 0;

let text = `Lorem ipsum dolor sit amet, consectetur adipiscingelit. Morbi dignissim mauris sed velit porta, vel laoreet ex tempor. Donec varius mauris varius, mollis lorem et, molestie risus. Phasellus mattis felis lectus, eget hendrerit ligula molestie eget. Curabitur pulvinar bibendum metus eget aliquet.`;

const autoType = ()=>{
    text.split("");
    box.innerHTML+=text[i];
    if(i == (text.length-1)){
        clearInterval(m);
    }
    i++;
}

const m = setInterval(autoType, 100);
