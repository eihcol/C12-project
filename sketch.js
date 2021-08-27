var garden,rabbit,apple,grass,leaf,redleaf;
var gardenImg,rabbitImg,appleImg,grassImg,leafImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  grassImg = loadImage("grass.png");
  leafImg = loadImage("leaf.png");
  redImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);

  var rand =  Math.round(random(1,100));
  console.log(rand);

  
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);


  createRedLeafs();
  createLeafs();
  createApples();
  drawSprites();
}

function createApples(){
  
  if(frameCount % 90 === 0){
    apple = createSprite(200,600,40,10);

    apple.addImage(appleImg);
    apple.y = Math.round(random(100,0));
    apple.x = Math.round(random(400,0));
    apple.velocityY = 4;
    apple.scale = 0.07;

    apple.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;

    
     
 }
}

function createLeafs(){
  
  if(frameCount % 140 === 0){
    leaf = createSprite(200,600,40,10);

    leaf.addImage(leafImg);
    leaf.y = Math.round(random(100,0));
    leaf.x = Math.round(random(400,0));
    leaf.velocityY = 4;
    leaf.scale = 0.07;

    leaf.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;

    
     
 }
}


function createRedLeafs(){
  
  if(frameCount % 200 === 0){
    redleaf = createSprite(200,600,40,10);

    redleaf.addImage(redImg);
    redleaf.y = Math.round(random(100,0));
    redleaf.x = Math.round(random(400,0));
    redleaf.velocityY = 4;
    redleaf.scale = 0.07;

    redleaf.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;

    
     
 }
}


