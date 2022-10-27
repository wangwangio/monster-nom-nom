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
  name: 'Alex.',
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
  name: 'Fran.',
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
];

//librería sonidos monster
const monsterSounds = [
  {
    id: 1,
    name: 'monster',
    sound: './assets/Sounds/sounds-2/impactsplat01.mp3.flac',
  },
  {
    id: 2,
    name: 'monster2',
    sound: './assets/Sounds/sounds-2/impactsplat02.mp3.flac',
  },
  {
    id: 3,
    name: 'monster3',
    sound: './assets/Sounds/sounds-2/impactsplat03.mp3.flac',
  },
  {
    id: 4,
    name: 'monster4',
    sound: './assets/Sounds/sounds-2/impactsplat04.mp3.flac',
  },
];

//librería de sonidos FX
const sounds = [
  {
    id: 1,
    name: 'button1',
    sound: './assets/Sounds/sounds-5/inventory/bubble.wav',
  },
  {
    id: 2,
    name: 'button2',
    sound: './assets/Sounds/sounds-5/inventory/bubble2.wav',
  },
  {
    id: 3,
    name: 'button3',
    sound: './assets/Sounds/sounds-5/inventory/bubble3.wav',
  },
]

//para que suene la cancion principal al abrir el juego
const mainTheme = new Audio('./assets/Sounds/monster-theme.mp3');
mainTheme.volume = 0.3;
//mainTheme.play();

//monster sonido
const monsterEats = document.getElementById('monsterSound');

monsterEats.addEventListener('click', monsterSound);

function monsterSound(){
  let randomMonsterAudio = Math.floor(Math.random() * (3-0) + 0);
  const monsterAudio = new Audio(`${monsterSounds[randomMonsterAudio].sound}`)
  monsterAudio.volume = 0.3;
  monsterAudio.loop = false;
  monsterAudio.play();
}

//button 1 sonido
const buttonSound1 = document.getElementById('addCoder');

buttonSound1.addEventListener('click', btnSound);

function btnSound(){
  const btnAudio1 = new Audio(`${sounds[0].sound}`);
  btnAudio1.volume = 0.3;
  btnAudio1.loop = false;
  btnAudio1.play();
}

//button 2 sonido
const buttonSound2 = document.getElementById('addAllCoders');

buttonSound2.addEventListener('click', btnSound2);

function btnSound2(){
  const btnAudio2 = new Audio(`${sounds[1].sound}`);
  btnAudio2.volume = 0.3;
  btnAudio2.loop = false;
  btnAudio2.play();
}

//button return sonido
const buttonSound3 = document.getElementById('btnReturn');

buttonSound3.addEventListener('click', btnSound3);

function btnSound3(){
  const btnAudio3 = new Audio(`${sounds[2].sound}`);
  btnAudio3.volume = 0.3;
  btnAudio3.play();
}

//boton Add Coder
const btnAdd = document.querySelector('.btnAddAllCoders');
const codersContainerList = document.getElementById('coders');

btnAdd.addEventListener('click', addCoder);

function addCoder(e) {
  const codersList = document.createElement('div');
  codersList.setAttribute('id', 'codersList');

  codersContainerList.appendChild(codersList);
  codersContainerList.lastElementChild.classList.add('coders__list');

  coders.forEach((el) => {
    const singleCoder = document.createElement('div');
    singleCoder.setAttribute('id', 'singleCoder');
    singleCoder.classList.add('coder');
 
    codersContainerList.lastElementChild.appendChild(singleCoder);
    codersContainerList.lastElementChild.lastElementChild.innerHTML = `${el.name}`;
  })
}

const monsterKill = document.getElementById('monsterSound');
monsterKill.addEventListener('click', randomKill);

/* function randomKill(){
  var randomIndex = Math.floor(Math.random() * coders.length);
  var randomSplice = coders.splice(randomIndex, 1);
  return randomSplice;
} */

function coderKill(){
  var coderDead = document.getElementById('singleCoder');
  coderDead.parentNode.removeChild(singleCoder[0]);
}




 /*
  //ahora añadimos que cuando se haga click en el singleCoder que aparezca un nuevo div con sus datos
  const btnAddChosen = document.getElementById('singleCoder');
  const codersContainerChosen = document.getElementById('monster');

  for (i=0; i < btnAddChosen.length; i++){
    btnAddChosen[i].addEventListener('click', coderSacrifice(btnAddChosen[i]));
  }

  function coderSacrifice(el){
    const coderChosen = document.createElement('div');
    codersContainerChosen.appendChild(coderChosen);
    codersContainerChosen.lastElementChild.classList.add('coders__chosen');

    codersContainerChosen.lastElementChild.innerHTML = `${el.innerHTML}`;
  }
} */


//function transform scale img when coder eaten

//function random
//function reset
