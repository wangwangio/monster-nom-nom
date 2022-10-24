const btnAdd = document.querySelector('.btnAddCoder');
const codersContainerList = document.getElementById('monster');

btnAdd.addEventListener('click', addCoder);

function addCoder() {
  const codersList = document.createElement('div');
  const coder = document.createElement('div');
  
  codersList.classList.add('coders__list');
  coder.classList.add('coder');

  codersList.appendChild(coder);

  codersContainerList.appendChild(codersList);
}


