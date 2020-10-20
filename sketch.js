var ball;
var location,database;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
     var ref1 = database.ref('ball/position');
     ref1.on("value",readball );
}
function readball(data){
    //location = data.val()
    console.log(data.val())
    ball.x=data.val().x
    ball.y = data.val().y
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    var ref2 = database.ref('ball/position');
    ref2.update({
        x:ball.x+x,y:ball.y+y
    })
    
}
