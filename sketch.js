const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var platform;
var slingshot;

function setup(){
    createCanvas(1200,600)

    engine = Engine.create();
    world = engine.world

    ground = new Ground(600,565,1200,80);
    
    //bottom
    block1 = new Box(500,500,50,50);
    block2 = new Box(580,500,50,50);
    block3 = new Box(660,500,50,50);
    block4 = new Box(740,500,50,50);
    block5 = new Box(820,500,50,50);
    block6 = new Box(900,500,50,50);
    block7 = new Box(980,500,50,50);
    //level two
    block8 = new Box(540,450,50,50);
    block9 = new Box(620,450,50,50);
    block10 = new Box(700,450,50,50);
    block11 = new Box(780,450,50,50);
    block12 = new Box(860,450,50,50);
    block13 = new Box(940,450,50,50);
    //level three
    block14 = new Box(580,400,50,50);
    block15 = new Box(660,400,50,50);
    block16 = new Box(740,400,50,50);
    block17 = new Box(820,400,50,50);
    block18 = new Box(900,400,50,50);
    //level four
    block19 = new Box(620,350,50,50);
    block20 = new Box(700,350,50,50);
    block21 = new Box(780,350,50,50);
    block22 = new Box(860,350,50,50);
    //level five
    block23 = new Box(660,300,50,50);
    block24 = new Box(740,300,50,50);
    block25 = new Box(820,300,50,50);
    //level six
    block26 = new Box(700,250,50,50);
    block27 = new Box(780,250,50,50);
    //top
    block28 = new Box(740,200,50,50);
}

function draw(){
    background(0);

    ground.display();

    fill(random(0,255),random(0,255),random(0,255));
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
}