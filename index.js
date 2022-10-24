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
}

function refreshPage() {
    window.location.reload();
}