/* let divCoders = document.getElementById("1");

coders = [{ name: "Adrian", id: "1" }, { name: "Albert", id:"2" }, ...]
divCoder.inlinerHTML = `
<div> ${coders.map((coder) => {document.getElementById("1").delete} )}
`
function deleteCoder(id) {
    coders.filter((coder => coder.id !== id))
} 

//////*RESTART 
 function newFunction() {
            document.getElementById("newGame").reset();

/* const btnReset = document.querySelector('btnReset');

btnReset.onclick = function() {
    document.getElementByClassName('btnReset').reset();
} */

const buttons = document.getElementsByClassName('btnCoders');

for (let btnCoders of buttons) {
    btnCoders.addEventListener('click', function() {
        console.log("KILLED")
    })
};

buttons.onclick = function() {
    console.log("KILLED")
};

const list = document.getElementsByClassName('btnCoders');
for (let btnCoders of list) {
    btnCoders.addEventListener('click', function() {
        btnCoders.remove();
    })
};


function refreshPage() {
    window.location.reload();
}



let counterScore = 0;

function incrementClick() {
    updateDisplay(++counterScore);

}

function gameOver() {
    if (counterScore === 27) {
        alert('GAME OVER');
    }
}

function updateDisplay(score) {
    document.getElementById("counter-label").innerHTML = score;
}

/* let random_name = [“Player 1”, “Player 4 ", “Player 3”, “Player 4", “Player 5”, “Player 6 ", “Player 7”, “Player 8", “Player 9”, “Player 10 ", “Player 11”, “Player 12"];
document.querySelector(“#button”).addEventListener(“click”, die);
let sacrified = [];

function die() {
    if (random_name.length === 0) {
        alert(“: skull: START AGAIN: skull: ”);
    }
    let randomNumber = Math.round(Math.random() * (random_name.length - 1));
    let sacrificio = random_name[randomNumber];
    sacrified.push(random_name.splice(randomNumber, 1));
    document.querySelector(“#resultado”).innerHTML = sacrificio;
} */
/* 
Swal.fire({
    title: 'YOU JUST MAKE YOUR WORST MISTAKE',
    color: '#fff',
    background: '#240433',
    imageUrl: '/monster-nom-nom/assets/Images/monsterGO.jpg',
    imageHeight: '100%',
    width: '100%',
    imageAlt: 'GAME OVER',
}) */

/*POPUPS  */
function finPOP() {
    Swal.fire({
        customClass: { confirmButton: 'btnPA', cancelButton: 'btnPA', title: 'titleAlert' },
        title: 'ARE YOU SURE?',
        icon: 'question',
        color: '#F7FC00',
        background: '#240433',
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: 'Yes',
        closeButton: true,
        width: '45%',
        height: '48%',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                customClass: { confirmButton: 'btnPA', cancelButton: 'btnPA', title: 'titleAlert' },
                title: "COME BACK SOON",
                buttonsStyling: false,
                background: '#240433',
                imageUrl: '/monster-nom-nom/assets/Images/monster.png',
                imageHeight: '78%',
                width: '50%',
                confirmButtonText: '<a href="/monster-nom-nom/index.html" > I AM DONE',
            })
        }
    });
}

function exitBtn() {
    Swal.fire({
        customClass: { confirmButton: 'btnPA', cancelButton: 'btnPA', title: 'titleAlert' },
        title: 'ARE YOU SURE',
        color: '#fff',
        background: '#240433',
        imageUrl: '/monster-nom-nom/assets/Images/monsterGO.jpg',
        imageHeight: '100%',
        width: '100%',
        imageAlt: 'GAME OVER',
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: '<a href="/monster-nom-nom/fin.html" > Yes, I am!',
        cancelButtonText: 'NO',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                customClass: { confirmButton: 'btnPA', cancelButton: 'btnPA', title: 'titleAlert' },
                title: "COME BACK SOON",
                buttonsStyling: false,
                background: '#240433',
                imageUrl: '/monster-nom-nom/assets/Images/monster.png',
                imageHeight: '78%',
                width: '50%',
            })
        }
    });
}

function killed() {
    Swal.fire({
        customClass: { title: 'titleAlert' },
        title: 'KILLED!',
        imageUrl: '/monster-nom-nom/assets/Images/monster.png',
        imageWidth: '50%',
        imageHeight: '50%',
        showConfirmButton: false,
        background: 'rgb(255, 9, 210)',
        width: '50%',
        height: '90%',
        timer: '1000',
    });
}