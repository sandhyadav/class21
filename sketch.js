var fix ,moving;
function setup() {
  createCanvas(800,400);
  fix=createSprite(200,200,50,80)
  fix.shapeColor="green";
  moving=createSprite(400,200,80,30)
  moving.shapeColor="green";
  fix1=createSprite(100,100,50,50)
  fix1.shapeColor="green"
  fix2=createSprite(150,150,50,50)
  fix2.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  fix1.x=World.mouseX;
  fix1.y=World.mouseY;
  console.log(moving.x-fix.x)
  if(isTouching(fix1,fix2)){
    fix1.shapeColor="red"
  }
  else{
    fix1.shapeColor="green"
  }
  drawSprites();
}
function isTouching(obj1,obj2)
{
  if(obj1.x-obj2.x<obj2.width/2+obj1.width/2&&
    obj2.x-obj1.x<obj2.width/2+obj1.width/2&&
    obj1.y-obj2.y<obj2.height/2+obj1.height/2&&
    obj2.y-obj1.y<obj2.height/2+obj1.height/2)
  {
     return true
  }
  else{
    return false
  }
}