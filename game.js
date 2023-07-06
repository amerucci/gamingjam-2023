/**********************
 * CREATION DU DECORS *
 **********************/

const room = document.createElement("div");
room.className="room";
room.style="width:500px; height:500px; border:1px solid black;"
document.body.appendChild(room)


/**************************
 * CREATION DU PERSONNAGE *
 **************************/

const boss = document.createElement("img");
boss.className = "boss";
boss.src = "./img/idle_face.png";
boss.style = "position:absolute;";
room.appendChild(boss);

/*************************
 * CREATION DU FORMATEUR *
 *************************/

const former = document.createElement("img");
former.className = "former";
former.src = "./img/idle_face.png";
former.style = "position:absolute;";
room.appendChild(former);

/**************************
 * GESTION DES COODONNEES *
 **************************/

//boss
let bossWidth = boss.getBoundingClientRect().width;

let bossX = boss.offsetLeft;
let bossXEnd = boss.offsetLeft;
let bossY = boss.offsetTop;

//Room

roomWidth = room.getBoundingClientRect().width;
roomHeight = room.getBoundingClientRect().height;

let roomX = room.offsetLeft;
let roomEnd = roomX+roomWidth;
let roomY = room.offsetTop;
let roomYEnd = roomY+roomHeight;

// console.table(room.getBoundingClientRect())
console.table(roomYEnd)

/*******************************
 * GESTION DES VARIABLE DE JEU *
 *******************************/

let speed = 7;



/**************************
 * FONCTIONS DU FORMATEUR *
 **************************/

var alreadyExecuted = false;

function idle(positionFinal) {
  if (!alreadyExecuted) {
   if(positionFinal=="top"){
    boss.src = "./img/idle_face.png";
    alreadyExecuted = true;
   }
  }

}
function move() {
  if (!alreadyExecuted) {
    boss.src = "./img/walk_side.gif";
    alreadyExecuted = true;
  }
}

function moveFace() {
  if (!alreadyExecuted) {
    boss.src = "./img/walk_face.gif";
    alreadyExecuted = true;
  }
}

function moveBack() {
  if (!alreadyExecuted) {
    boss.src = "./img/walk_back.gif";
    alreadyExecuted = true;
  }
}

function whip() {
  if (!alreadyExecuted) {
    boss.src = "./img/whip_face.gif";
    boss.style="left:" + bossX + "px; top:" + bossY + "px; position:absolute;transform:translate(-22%, -22%)" 
    alreadyExecuted = true;
  }
}

/*********************
 * ACTION AU CLAVIER *
 *********************/

// Fonction de gestion des événements clavier
function handleKeyDown(event) {
  console.log(event.key);
  if (event.key === "ArrowLeft") {
    
    move();
    bossX -= speed;

    boss.style =
      "transform: scaleX(-1); left : " + bossX + "px; position:absolute; top : " + bossY + "px;";
  }
  if (event.key === "ArrowRight") {
    move();

    bossX += speed;

    boss.style =
      "transform:  scaleX(1); left : " + bossX + "px; position:absolute; top : " + bossY + "px;";
  }
  if (event.key === " ") {
    console.log(event.key);
    whip();
      

  

    // Code à exécuter lorsque la touche du haut est enfoncée
  } else if (event.key === "ArrowDown") {
    moveFace() 
    bossY += speed;
    boss.style = "top : " + bossY + "px;left : " + bossX + "px; position:absolute";
    // Code à exécuter lorsque la touche du bas est enfoncée
  }
  else if (event.key === "ArrowUp") {
    moveBack()
    bossY -= speed;
    boss.style = "top : " + bossY + "px;left : " + bossX + "px; position:absolute";
    // Code à exécuter lorsque la touche du bas est enfoncée
  }
}

function handleKeyUp(event) {
  if (event.key === "ArrowLeft") {
    boss.src = "./img/idle_side.png";
    alreadyExecuted = false;
  } else if (event.key === "ArrowRight") {
    boss.src = "./img/idle_side.png";

    alreadyExecuted = false;
  } else if (event.key === " ") {
    alreadyExecuted = false;
    // Code à exécuter lorsque la touche du haut est enfoncée
  } else if (event.key === "ArrowUp") {
    boss.src = "./img/idle_back.png";
    alreadyExecuted = false;
  }
  else if (event.key === "ArrowDown") {
    boss.src = "./img/idle_face.png";
    alreadyExecuted = false;
  }
}

// Ajout de l'écouteur d'événements pour les touches directionnelles
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

//Initialisation
document.querySelector(".boss").style = "transform:  scaleX(-1)";
