const keys = document.querySelectorAll(".piano-key");

let mouseDown = 0;
document.body.onmousedown = function () {
    mouseDown = 1;
};
document.body.onmouseup = function () {
    mouseDown = 0;
};

keys.forEach((key) => {
    key.addEventListener("mouseover", () => playNoteHover(key));
    key.addEventListener("click", () => playNote(key));
});

function playNoteHover(key) {
    if (mouseDown) {
        const noteAudio = document.getElementById(key.dataset.note);
        noteAudio.currentTime = 0;
        noteAudio.play();
    }
}

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
}

window.addEventListener('keydown', function(e){
    playSound(e.keyCode);
});

function playSound(keyId){
    const audio = document.querySelector(`audio[data-key="${keyId}"]`);
    const key = document.querySelector(`.key[data-key="${keyId}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !== 'background-color')
        return;
    this.classList.remove('playing');
}


const btn = document.getElementById('btn'),
    btn1 = document.getElementById('btn1'),
    change1 = document.getElementById("change1"),
    change2 = document.getElementById("change2"),
    change3 = document.getElementById("change3"),
    change4 = document.getElementById("change4"),
    change5 = document.getElementById("change5"),
    change6 = document.getElementById("change6"),
    change7 = document.getElementById("change7"),
    change8 = document.getElementById("change8"),
    change9 = document.getElementById("change9"),
    change10 = document.getElementById("change10"),
    change11 = document.getElementById("change11"),
    change12 = document.getElementById("change12");


btn1.addEventListener("click",() => {
    console.log("shinima huin9")
    change1.classList.add("piano-key-letter");
    change2.classList.add("piano-key-letter");
    change3.classList.add("piano-key-letter");
    change4.classList.add("piano-key-letter");
    change5.classList.add("piano-key-letter");
    change6.classList.add("piano-key-letter");
    change7.classList.add("piano-key-letter");
    change8.classList.add("piano-key-letter");
    change9.classList.add("piano-key-letter");
    change10.classList.add("piano-key-letter");
    change11.classList.add("piano-key-letter");
    change12.classList.add("piano-key-letter");
    btn.style.backgroundColor = "#454c53";
    btn1.style.backgroundColor = "#00b4a4";
});

btn.addEventListener('click',() =>{
    console.log('lkjhgfds')
    change1.classList.remove("piano-key-letter");
    change2.classList.remove("piano-key-letter");
    change3.classList.remove("piano-key-letter");
    change4.classList.remove("piano-key-letter");
    change5.classList.remove("piano-key-letter");
    change6.classList.remove("piano-key-letter");
    change7.classList.remove("piano-key-letter");
    change8.classList.remove("piano-key-letter");
    change9.classList.remove("piano-key-letter");
    change10.classList.remove("piano-key-letter");
    change11.classList.remove("piano-key-letter");
    change12.classList.remove("piano-key-letter");
    btn.style.backgroundColor = "#00b4a4";
    btn1.style.backgroundColor = "#454c53";
});


//fullscreen
document.querySelector('.fullscreen').addEventListener('click',toggleScreen);

function toggleScreen (){
    if(!document.fullscreenElement){
        document.documentElement.requestFullscreen();
    }else{
        if(document.fullscreenEnabled){
            document.exitFullscreen();
        }
    }
}