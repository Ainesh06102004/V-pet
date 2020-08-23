//Create variables here
var dog, dogImg, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  
  createCanvas(500,500);
  dog = createSprite(10,10, 250,250);
  dog.addImage(dogImg);

  foodstock = database.ref('Food');
  foodstock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentdown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);

  }

  drawSprites();
  //add styles here

  Text("press UP arrow key to feed the doggo", 200, 400);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food : x
  })
}



