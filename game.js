const coders = [
  {
  id: 1,
  name: 'Andrés',
  scream: 'Briefing!'
  },
  {
  id: 2,
  name: 'Rocío',
  scream: 'Cuidado radioactivoman!'
  },
  {
  id: 3,
  name: 'Gary',
  scream: 'Ayuda bibliotecareo!'
  },
  {
  id: 4,
  name: 'Matt',
  scream: 'Viva el punk!'
  },
  {
  id: 5,
  name: 'Cristian',
  scream: 'Mamasita!'
  },
  {
  id: 6,
  name: 'Camilo',
  scream: 'Aaaaaagh!'
  },
  {
  id: 7,
  name: 'Mario',
  scream: 'Viva Led Zeppelin!'
  },
  {
  id: 8,
  name: 'Alejandra',
  scream: 'Hasta la vista baby!'
  },
  {
  id: 9,
  name: 'Lídia',
  scream: 'Rayos y retruécanos!'
  },
  {
  id: 10,
  name: 'Jerry',
  scream: 'WTF bro!'
  },
  {
  id: 11,
  name: 'Erick',
  scream: 'Tengo miedo!'
  },
  {
  id: 12,
  name: 'Oksana',
  scream: 'Aaaaaaaaaaa!'
  },
  {
  id: 13,
  name: 'Fede',
  scream: 'Aguante Argentina!'
  },
  {
  id: 14,
  name: 'Adrián',
  scream: 'C3PO te quiero!'
  },
  {
  id: 15,
  name: 'Mamadou',
  scream: 'I will be back!'
  },
  {
  id: 16,
  name: 'Alexandra',
  scream: 'Mamaaaaaaa!'
  },
  {
  id: 17,
  name: 'Aless',
  scream: 'Adiós mundo cruel!'
  },
  {
  id: 18,
  name: 'Albert',
  scream: 'Collons!'
  },
  {
  id: 19,
  name: 'Ingrid',
  scream: 'Nooooooo!'
  },
  {
  id: 20,
  name: 'Francisco',
  scream: 'Livin la vida loca!'
  },
  {
  id: 21,
  name: 'Isabel',
  scream: 'Hasta luegoooo!'
  },
  {
  id: 22,
  name: 'Rodrigo',
  scream: 'Volveré!'
  },
  {
  id: 23,
  name: 'Carla',
  scream: 'Por qué a mi!'
  },
  {
  id: 24,
  name: 'Eduard',
  scream: 'Mamawebo!'
  },
  {
  id: 25,
  name: 'Judit',
  scream: 'Pilotes que en són de bones!'
  },
  {
  id: 26,
  name: 'Teix',
  scream: 'Visca les Terres!'
  },
  {
  id: 27,
  name: 'Guillem',
  scream: 'Hakuna Matata!'
  }
]

const btnAdd = document.querySelector('.btnAddCoder');
const codersContainerList = document.getElementById('monster');

btnAdd.addEventListener('click', addCoder);


function addCoder(e) {
  const codersList = document.createElement('div');

  codersContainerList.appendChild(codersList);
  codersContainerList.lastElementChild.classList.add('coders__list');

  coders.forEach((el) => {
    const singleCoder = document.createElement('div');
 
    codersContainerList.lastElementChild.appendChild(singleCoder);
    codersContainerList.lastElementChild.lastElementChild.innerHTML = `${el.name}`;
    singleCoder.classList.add('coder');
  })
}










//how to make div inside div js
//how to take data from js to html
//function transform scale img when coder eaten

//function random
//function reset
