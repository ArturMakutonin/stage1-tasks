
let keys = document.querySelectorAll(".key");

keys.forEach(key => {
    key.addEventListener('click',playNote);
});
function playNote(e) {
    let key = e.target;
    let note = document.getElementById(key.dataset.note);
    key.classList.add('active');
    note.currentTime = 0;
    note.play();
}
let selectButtons = document.querySelector(".btn");
selectButtons.forEach(btn => {
   btn.addEventListener('click',changeSimbols);
});
function changeSimbols(k) {

}