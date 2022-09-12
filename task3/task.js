const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function hasMole(hole){
    if (hole.classList.contains("hole_has-mole")){
        dead.innerHTML = parseInt(dead.innerHTML) + 1;
        if (dead.innerHTML == 5){
            alert("Победа!")
        }
    }
    else {
        lost.innerHTML = parseInt(lost.innerHTML) + 1;
        if (lost.innerHTML == 3){
            alert("Вы проиграли!")
        }
    }
} 

for (i = 1; i <= 9; i++) {
    let element = document.getElementById(`hole${i}`);
    element.onclick = () => {hasMole(element)};
}
