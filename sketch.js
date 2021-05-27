var bg, bgImg, brand, brandImg, box1;
var load, loadImg;
var home, homeImg, main, mainImg, world, pvp, skin, shop, quest, sett;
var w1, w2, w3, w4, w5, w6, w7, back1;
var bg2, bg3, bg4, bg6, bg7, bg2Img, bg3Img, bg4Img, bg6Img, bg7Img, n1, n2, n3, n4, n5, n6, n7, back2, lvl, lvlImg;
var tl1, tl2, tl3, tl4, tl5, tl6, tl7, tl8, tl9, tl0;
var jl1, jl2, jl3, jl4, jl5, jl6, jl7, jl8, jl9, jl0;
var sl1, sl2, sl3, sl4, sl5, sl6, sl7, sl8, sl9, sl0;
var il1, il2, il3, il4, il5, il6, il7, il8, il9, il0;
var ll1, ll2, ll3, ll4, ll5, ll6, ll7, ll8, ll9, ll0;
var ol1, ol2, ol3, ol4, ol5, ol6, ol7, ol8, ol9, ol0;
var hl1, hl2, hl3, hl4, hl5, hl6, hl7, hl8, hl9, hl0;
var g1, g1Img;

var gameState = "BRAND";

function preload(){

   bgImg = loadImage("bg.jpeg");
   brandImg = loadImage("brand.png");
   loadImg = loadImage("load.jpg");
   homeImg = loadImage("home.jpeg");
   mainImg = loadImage("main.png");
   bg2Img = loadImage("bg2.jpeg");
   bg3Img = loadImage("bg3.jpeg");
   bg4Img = loadImage("bg4.jpeg");
   bg6Img = loadImage("bg6.jpeg");
   bg7Img = loadImage("bg7.png");
   lvlImg = loadImage("lvl.png");
   g1Img = loadImage("g1.png");

}

function setup() {
createCanvas(1920, 1080);

    bg = createSprite(980 , 670, 1000, 1000);
    bg.addAnimation("bg", bgImg);
    bg.scale = 2.1;

    brand = createSprite(980 , 670, 100, 100);
    brand.addAnimation("brand", brandImg);
    brand.scale = 3.75;

    box1 = createSprite(980 , 670, 1000, 1000);
    box1.velocityX = 5;
    box1.visible = false;

    box2 = createSprite(980 , 670, 1000, 1000);
    box2.visible = false;

    load = createSprite(960 , 540, 1000, 1000);
    load.addAnimation("load", loadImg);
    load.scale = 1.29;

    home = createSprite(960 , 540, 1000, 1000);
    home.addAnimation("home", homeImg);
    home.scale = 0.65;

    main = createSprite(940 , 400, 1000, 1000);
    main.addAnimation("main", mainImg);
    main.scale = 2.5;

    world = createImg('world.png');
    world.position(260, 800);
    world.mousePressed(wScreen);

    pvp = createImg('pvp.png');
    pvp.position(760, 800);
    pvp.mousePressed(pvpScreen);

    skin = createImg('skin.png');
    skin.position(1360, 800);
    skin.mousePressed(sScreen);

    shop = createImg('shop.png');
    shop.position(1560, 50);
    shop.mousePressed(shScreen);

    sett = createImg('sett.png');
    sett.position(1760, 50);
    sett.mousePressed(settScreen);

    quest = createImg('quest.png');
    quest.position(1360, 50);
    quest.mousePressed(htpScreen);

    w1 = createImg('w1.png');
    w1.position(60, 250);
    w1.mousePressed(w1Screen);

    w2 = createImg('w2.png');
    w2.position(560, 250);
    w2.mousePressed(w2Screen);

    w3 = createImg('w3.png');
    w3.position(1160, 250);
    w3.mousePressed(w3Screen);

    w4 = createImg('w4.png');
    w4.position(1660, 250);
    w4.mousePressed(w4Screen);

    w5 = createImg('w5.png');
    w5.position(310, 700);
    w5.mousePressed(w5Screen);

    w6 = createImg('w6.png');
    w6.position(860, 700);
    w6.mousePressed(w6Screen);

    w7 = createImg('w7.png');
    w7.position(1410, 700);
    w7.mousePressed(w7Screen);

    bg2 =  createSprite(960 , 540, 1000, 1000);
    bg2.addAnimation("bg2", bg2Img);
    bg2.scale = 7.35;   

    bg3 =  createSprite(960 , 540, 1000, 1000);
    bg3.addAnimation("bg3", bg3Img);
    bg3.scale = 3.5;

    bg4 =  createSprite(960 , 290, 1000, 1000);
    bg4.addAnimation("bg4", bg4Img);
    bg4.scale = 3.5;

    bg6 =  createSprite(960 , 540, 1000, 1000);
    bg6.addAnimation("bg6", bg6Img);
    bg6.scale = 3.5;

    bg7 =  createSprite(960 , 540, 1000, 1000);
    bg7.addAnimation("bg7", bg7Img);
    bg7.scale = 0.85;

    back1 = createImg('back.png');
    back1.position(0, 0);
    back1.mousePressed(homeScreen);

    back2 = createImg('back.png');
    back2.position(0, 0);
    back2.mousePressed(wScreen);

    n1 = createButton("TRAINING CAMP");
    n1.position(40, 550);
    n1.size(300, 100)
    n1.style("font-size","40px");
    n1.style("background-color","#000000")
    n1.style("color","#ffffff");

    n2 = createButton("THE LOST JUNGLE");
    n2.position(540, 550);
    n2.size(300, 100)
    n2.style("font-size","40px");
    n2.style("background-color","#000000")
    n2.style("color","#ffffff");

    n3 = createButton("SPOOKY TOWN");
    n3.position(1140, 550);
    n3.size(300, 100)
    n3.style("font-size","40px");
    n3.style("background-color","#000000")
    n3.style("color","#ffffff");

    n4 = createButton("FROZEN KINGDOM");
    n4.position(1620, 550);
    n4.size(300, 100)
    n4.style("font-size","38px");
    n4.style("background-color","#000000")
    n4.style("color","#ffffff");

    n5 = createButton("THE TIME LAPSE");
    n5.position(290, 950);
    n5.size(300, 100)
    n5.style("font-size","40px");
    n5.style("background-color","#000000")
    n5.style("color","#ffffff");

    n6 = createButton("THE OUTER SPACE");
    n6.position(840, 950);
    n6.size(300, 100)
    n6.style("font-size","40px");
    n6.style("background-color","#000000")
    n6.style("color","#ffffff");

    n7 = createButton("THE HELL OF DOOM");
    n7.position(1390, 950);
    n7.size(300, 100)
    n7.style("font-size","40px");
    n7.style("background-color","#000000")
    n7.style("color","#ffffff");

    lvl = createSprite(960 , 100, 100, 100);
    lvl.addAnimation("lvl", lvlImg);
    lvl.scale = 2.5;

    tl1 = createImg('l1.png');
    tl1.position(260, 350);
    tl1.mousePressed(tl1Screen);

    tl2 = createImg('l2.png');
    tl2.position(580, 350);
    tl2.mousePressed(tl2Screen);

    tl3 = createImg('l3.png');
    tl3.position(900, 350);
    tl3.mousePressed(tl3Screen);

    tl4 = createImg('l4.png');
    tl4.position(1220, 350);
    tl4.mousePressed(tl4Screen);

    tl5 = createImg('l5.png');
    tl5.position(1540, 350);
    tl5.mousePressed(tl5Screen);

    tl6 = createImg('l6.png');
    tl6.position(260, 700);
    tl6.mousePressed(tl6Screen);

    tl7 = createImg('l7.png');
    tl7.position(580, 700);
    tl7.mousePressed(tl7Screen);

    tl8 = createImg('l8.png');
    tl8.position(900, 700);
    tl8.mousePressed(tl8Screen);

    tl9 = createImg('l9.png');
    tl9.position(1220, 700);
    tl9.mousePressed(tl9Screen);

    tl10 = createImg('l10.png');
    tl10.position(1540, 700);
    tl10.mousePressed(tl10Screen);

    jl1 = createImg('l1.png');
    jl1.position(260, 350);
    jl1.mousePressed(jl1Screen);

    jl2 = createImg('l2.png');
    jl2.position(580, 350);
    jl2.mousePressed(jl2Screen);

    jl3 = createImg('l3.png');
    jl3.position(900, 350);
    jl3.mousePressed(jl3Screen);

    jl4 = createImg('l4.png');
    jl4.position(1220, 350);
    jl4.mousePressed(jl4Screen);

    jl5 = createImg('l5.png');
    jl5.position(1540, 350);
    jl5.mousePressed(jl5Screen);

    jl6 = createImg('l6.png');
    jl6.position(260, 700);
    jl6.mousePressed(jl6Screen);

    jl7 = createImg('l7.png');
    jl7.position(580, 700);
    jl7.mousePressed(jl7Screen);

    jl8 = createImg('l8.png');
    jl8.position(900, 700);
    jl8.mousePressed(jl8Screen);

    jl9 = createImg('l9.png');
    jl9.position(1220, 700);
    jl9.mousePressed(jl9Screen);

    jl10 = createImg('l10.png');
    jl10.position(1540, 700);
    jl10.mousePressed(jl10Screen);

    sl1 = createImg('l1.png');
    sl1.position(260, 350);
    sl1.mousePressed(sl1Screen);

    sl2 = createImg('l2.png');
    sl2.position(580, 350);
    sl2.mousePressed(sl2Screen);

    sl3 = createImg('l3.png');
    sl3.position(900, 350);
    sl3.mousePressed(sl3Screen);

    sl4 = createImg('l4.png');
    sl4.position(1220, 350);
    sl4.mousePressed(sl4Screen);

    sl5 = createImg('l5.png');
    sl5.position(1540, 350);
    sl5.mousePressed(sl5Screen);

    sl6 = createImg('l6.png');
    sl6.position(260, 700);
    sl6.mousePressed(sl6Screen);

    sl7 = createImg('l7.png');
    sl7.position(580, 700);
    sl7.mousePressed(sl7Screen);

    sl8 = createImg('l8.png');
    sl8.position(900, 700);
    sl8.mousePressed(sl8Screen);

    sl9 = createImg('l9.png');
    sl9.position(1220, 700);
    sl9.mousePressed(sl9Screen);

    sl10 = createImg('l10.png');
    sl10.position(1540, 700);
    sl10.mousePressed(sl10Screen);

    il1 = createImg('l1.png');
    il1.position(260, 350);
    il1.mousePressed(il1Screen);

    il2 = createImg('l2.png');
    il2.position(580, 350);
    il2.mousePressed(il2Screen);

    il3 = createImg('l3.png');
    il3.position(900, 350);
    il3.mousePressed(il3Screen);

    il4 = createImg('l4.png');
    il4.position(1220, 350);
    il4.mousePressed(il4Screen);

    il5 = createImg('l5.png');
    il5.position(1540, 350);
    il5.mousePressed(il5Screen);

    il6 = createImg('l6.png');
    il6.position(260, 700);
    il6.mousePressed(il6Screen);

    il7 = createImg('l7.png');
    il7.position(580, 700);
    il7.mousePressed(il7Screen);

    il8 = createImg('l8.png');
    il8.position(900, 700);
    il8.mousePressed(il8Screen);

    il9 = createImg('l9.png');
    il9.position(1220, 700);
    il9.mousePressed(il9Screen);

    il10 = createImg('l10.png');
    il10.position(1540, 700);
    il10.mousePressed(il10Screen);

    ll1 = createImg('l1.png');
    ll1.position(260, 350);
    ll1.mousePressed(ll1Screen);

    ll2 = createImg('l2.png');
    ll2.position(580, 350);
    ll2.mousePressed(ll2Screen);

    ll3 = createImg('l3.png');
    ll3.position(900, 350);
    ll3.mousePressed(ll3Screen);

    ll4 = createImg('l4.png');
    ll4.position(1220, 350);
    ll4.mousePressed(ll4Screen);

    ll5 = createImg('l5.png');
    ll5.position(1540, 350);
    ll5.mousePressed(ll5Screen);

    ll6 = createImg('l6.png');
    ll6.position(260, 700);
    ll6.mousePressed(ll6Screen);

    ll7 = createImg('l7.png');
    ll7.position(580, 700);
    ll7.mousePressed(ll7Screen);

    ll8 = createImg('l8.png');
    ll8.position(900, 700);
    ll8.mousePressed(ll8Screen);

    ll9 = createImg('l9.png');
    ll9.position(1220, 700);
    ll9.mousePressed(ll9Screen);

    ll10 = createImg('l10.png');
    ll10.position(1540, 700);
    ll10.mousePressed(ll10Screen);

    ol1 = createImg('l1.png');
    ol1.position(260, 350);
    ol1.mousePressed(ol1Screen);

    ol2 = createImg('l2.png');
    ol2.position(580, 350);
    ol2.mousePressed(ol2Screen);

    ol3 = createImg('l3.png');
    ol3.position(900, 350);
    ol3.mousePressed(ol3Screen);

    ol4 = createImg('l4.png');
    ol4.position(1220, 350);
    ol4.mousePressed(ol4Screen);

    ol5 = createImg('l5.png');
    ol5.position(1540, 350);
    ol5.mousePressed(ol5Screen);

    ol6 = createImg('l6.png');
    ol6.position(260, 700);
    ol6.mousePressed(tl6Screen);

    ol7 = createImg('l7.png');
    ol7.position(580, 700);
    ol7.mousePressed(ol7Screen);

    ol8 = createImg('l8.png');
    ol8.position(900, 700);
    ol8.mousePressed(ol8Screen);

    ol9 = createImg('l9.png');
    ol9.position(1220, 700);
    ol9.mousePressed(ol9Screen);

    ol10 = createImg('l10.png');
    ol10.position(1540, 700);
    ol10.mousePressed(ol10Screen);

    hl1 = createImg('l1.png');
    hl1.position(260, 350);
    hl1.mousePressed(hl1Screen);

    hl2 = createImg('l2.png');
    hl2.position(580, 350);
    hl2.mousePressed(hl2Screen);

    hl3 = createImg('l3.png');
    hl3.position(900, 350);
    hl3.mousePressed(hl3Screen);

    hl4 = createImg('l4.png');
    hl4.position(1220, 350);
    hl4.mousePressed(hl4Screen);

    hl5 = createImg('l5.png');
    hl5.position(1540, 350);
    hl5.mousePressed(hl5Screen);

    hl6 = createImg('l6.png');
    hl6.position(260, 700);
    hl6.mousePressed(hl6Screen);

    hl7 = createImg('l7.png');
    hl7.position(580, 700);
    hl7.mousePressed(hl7Screen);

    hl8 = createImg('l8.png');
    hl8.position(900, 700);
    hl8.mousePressed(hl8Screen);

    hl9 = createImg('l9.png');
    hl9.position(1220, 700);
    hl9.mousePressed(hl9Screen);

    hl10 = createImg('l10.png');
    hl10.position(1540, 700);
    hl10.mousePressed(hl10Screen);

}

function draw() {
  background("bg");
  
  if(gameState === "BRAND"){

      load.visible = false;
      home.visible = false;
      main.visible = false;
      lvl.visible = false;

      back1.hide();
      back2.hide();

      skin.hide();
      world.hide();
      pvp.hide();

      sett.hide();
      shop.hide();
      quest.hide();

      w1.hide();
      w2.hide();
      w3.hide();
      w4.hide();
      w5.hide();
      w6.hide();
      w7.hide();

      n1.hide();
      n2.hide();
      n3.hide();
      n4.hide();
      n5.hide();
      n6.hide();
      n7.hide();

      tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

      brand.visible = true;
      bg.visible = true;

      bg2.visible = false;
      bg3.visible = false;
      bg4.visible = false;
      bg6.visible = false;
      bg7.visible = false;

  }

  if(box1.x > 1920 && gameState === "BRAND"){

      gameState = "LOAD";
      loadScreen();

  }

  if(box2.x > 1920 && gameState === "LOAD"){

      gameState = "HOME";
      homeScreen();

  }
  
  console.log(gameState);
  drawSprites();
}

function loadScreen(){

    if(gameState === "LOAD"){
       
       brand.visible = false;
       home.visible = false;
       main.visible = false;
       lvl.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back2.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();
       
       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 5;

       load.visible = true;

    }

}

function homeScreen(){

    gameState = "HOME";

    if(gameState === "HOME"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       skin.show();
       world.show();
       pvp.show();

       sett.show();
       shop.show();
       quest.show();

       back1.hide();
       back2.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       main.visible = true;
       home.visible = true;

    }

}

function wScreen(){

    gameState = "WORLD";

    if(gameState === "WORLD"){

       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;      
       main.visible = false;

       home.visible = true;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();
       back2.hide();

       back1.show();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       w1.show();
       w2.show();
       w3.show();
       w4.show();
       w5.show();
       w6.show();
       w7.show();

       n1.show();
       n2.show();
       n3.show();
       n4.show();
       n5.show();
       n6.show();
       n7.show();
       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function pvpScreen(){

    gameState = "PVP";

    if(gameState === "PVP"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.show();
       back2.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();
       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function sScreen(){

    gameState = "SKIN";

    if(gameState === "SKIN"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back2.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.show();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function shScreen(){

    gameState = "SHOP";

    if(gameState === "SHOP"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.show();

       back2.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function settScreen(){

    gameState = "SETT";

    if(gameState === "SETT"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back2.hide();

       sett.hide();
       shop.hide();
       quest.hide();
       back1.show();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function htpScreen(){

    gameState = "HTP";

    if(gameState === "HTP"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back2.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.show();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function w1Screen(){

    gameState = "W1";

    if(gameState === "W1"){
       
       brand.visible = false;

       lvl.visible = true;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.show();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

      tl1.show();
      tl2.show();
      tl3.show();
      tl4.show();
      tl5.show();
      tl6.show();
      tl7.show();
      tl8.show();
      tl9.show();
      tl10.show();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function w2Screen(){

    gameState = "W2";

    if(gameState === "W2"){
       
       brand.visible = false;
       lvl.visible = true;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = true;

       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.show();

       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.show();
      jl2.show();
      jl3.show();
      jl4.show();
      jl5.show();
      jl6.show();
      jl7.show();
      jl8.show();
      jl9.show();
      jl10.show();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function w3Screen(){

    gameState = "W3";

    if(gameState === "W3"){
       
       brand.visible = false;
       lvl.visible = true;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = true;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       back1.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.show();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.show();
       sl2.show();
       sl3.show();
       sl4.show();
       sl5.show();
       sl6.show();
       sl7.show();
       sl8.show();
       sl9.show();
       sl10.show();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function w4Screen(){

    gameState = "W4";

    if(gameState === "W4"){
       
       brand.visible = false;
       lvl.visible = true;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = true;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.show();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.show();
       il2.show();
       il3.show();
       il4.show();
       il5.show();
       il6.show();
       il7.show();
       il8.show();
       il9.show();
       il10.show();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function w5Screen(){

    gameState = "W5";

    if(gameState === "W5"){
       
       brand.visible = false;
       lvl.visible = true;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       back2.show();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.show();
       ll2.show();
       ll3.show();
       ll4.show();
       ll5.show();
       ll6.show();
       ll7.show();
       ll8.show();
       ll9.show();
       ll10.show();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function w6Screen(){

    gameState = "W6";

    if(gameState === "W6"){
       
       brand.visible = false;
       lvl.visible = true;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = true;
       bg7.visible = false;

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.show();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.show();
       ol2.show();
       ol3.show();
       ol4.show();
       ol5.show();
       ol6.show();
       ol7.show();
       ol8.show();
       ol9.show();
       ol10.show();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function w7Screen(){

    gameState = "W7";

    if(gameState === "W7"){
       
       brand.visible = false;
       lvl.visible = true;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = true;

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.show();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.show();
       hl2.show();
       hl3.show();
       hl4.show();
       hl5.show();
       hl6.show();
       hl7.show();
       hl8.show();
       hl9.show();
       hl10.show();

    }

}

function tl1Screen(){

    gameState = "TL1";

    if(gameState === "TL1"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function tl2Screen(){

    gameState = "TL2";

    if(gameState === "TL2"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function tl3Screen(){

    gameState = "TL3";

    if(gameState === "TL3"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function tl4Screen(){

    gameState = "TL4";

    if(gameState === "TL4"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function tl5Screen(){

    gameState = "TL5";

    if(gameState === "TL5"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function tl6Screen(){

    gameState = "TL6";

    if(gameState === "TL6"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function tl7Screen(){

    gameState = "TL7";

    if(gameState === "TL7"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function tl8Screen(){

    gameState = "TL8";

    if(gameState === "TL8"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function tl9Screen(){

    gameState = "TL9";

    if(gameState === "TL9"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function tl10Screen(){

    gameState = "TL10";

    if(gameState === "TL10"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function jl1Screen(){

    gameState = "JL1";

    if(gameState === "JL1"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = true;

       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function jl2Screen(){

    gameState = "JL2";

    if(gameState === "JL2"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = true;

       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function jl3Screen(){

    gameState = "JL3";

    if(gameState === "JL3"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = true;

       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function jl4Screen(){

    gameState = "JL4";

    if(gameState === "JL4"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = true;

       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function jl5Screen(){

    gameState = "JL5";

    if(gameState === "JL5"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = true;

       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function jl6Screen(){

    gameState = "JL6";

    if(gameState === "JL6"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = true;

       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function jl7Screen(){

    gameState = "JL7";

    if(gameState === "JL7"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = true;

       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function jl8Screen(){

    gameState = "JL8";

    if(gameState === "JL8"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = true;

       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function jl9Screen(){

    gameState = "JL9";

    if(gameState === "JL9"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = true;

       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function jl10Screen(){

    gameState = "JL10";

    if(gameState === "JL10"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = true;

       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
      tl2.hide();
      tl3.hide();
      tl4.hide();
      tl5.hide();
      tl6.hide();
      tl7.hide();
      tl8.hide();
      tl9.hide();
      tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function sl1Screen(){

    gameState = "SL1";

    if(gameState === "SL1"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = true;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       back1.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function sl2Screen(){

    gameState = "SL2";

    if(gameState === "SL2"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = true;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       back1.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function sl3Screen(){

    gameState = "SL3";

    if(gameState === "SL3"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = true;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       back1.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function sl4Screen(){

    gameState = "SL4";

    if(gameState === "SL4"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = true;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       back1.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function sl5Screen(){

    gameState = "SL5";

    if(gameState === "SL5"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = true;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       back1.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function sl6Screen(){

    gameState = "SL6";

    if(gameState === "SL6"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = true;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       back1.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function sl7Screen(){

    gameState = "SL7";

    if(gameState === "SL7"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = true;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       back1.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function sl8Screen(){

    gameState = "SL8";

    if(gameState === "SL8"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = true;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       back1.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function sl9Screen(){

    gameState = "SL9";

    if(gameState === "SL9"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = true;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       back1.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function sl10Screen(){

    gameState = "SL10";

    if(gameState === "SL10"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = true;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = false;

       back1.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function il1Screen(){

    gameState = "IL1";

    if(gameState === "IL1"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = true;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function il2Screen(){

    gameState = "IL2";

    if(gameState === "IL2"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = true;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function il3Screen(){

    gameState = "IL3";

    if(gameState === "IL3"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = true;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function il4Screen(){

    gameState = "IL4";

    if(gameState === "IL4"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = true;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function il5Screen(){

    gameState = "IL5";

    if(gameState === "IL5"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = true;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function il6Screen(){

    gameState = "IL6";

    if(gameState === "IL6"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = true;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function il7Screen(){

    gameState = "IL7";

    if(gameState === "IL7"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = true;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function il8Screen(){

    gameState = "IL8";

    if(gameState === "IL8"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = true;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function il9Screen(){

    gameState = "IL19";

    if(gameState === "IL9"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = true;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function il10Screen(){

    gameState = "IL10";

    if(gameState === "IL10"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = true;
       bg6.visible = false;
       bg7.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function ll1Screen(){

    gameState = "LL1";

    if(gameState === "LL1"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function ll2Screen(){

    gameState = "LL2";

    if(gameState === "LL2"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function ll3Screen(){

    gameState = "LL3";

    if(gameState === "LL3"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function ll4Screen(){

    gameState = "LL4";

    if(gameState === "LL4"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function ll5Screen(){

    gameState = "LL5";

    if(gameState === "LL5"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function ll6Screen(){

    gameState = "LL6";

    if(gameState === "LL6"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function ll7Screen(){

    gameState = "LL7";

    if(gameState === "LL7"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function ll8Screen(){

    gameState = "LL8";

    if(gameState === "LL8"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function ll9Screen(){

    gameState = "LL9";

    if(gameState === "LL9"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function ll10Screen(){

    gameState = "LL10";

    if(gameState === "LL10"){
       
       brand.visible = false;

       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;
       main.visible = false;

       home.visible = true;

       back2.hide();

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();

      jl1.hide();
      jl2.hide();
      jl3.hide();
      jl4.hide();
      jl5.hide();
      jl6.hide();
      jl7.hide();
      jl8.hide();
      jl9.hide();
      jl10.hide();

      sl1.hide();
      sl2.hide();
      sl3.hide();
      sl4.hide();
      sl5.hide();
      sl6.hide();
      sl7.hide();
      sl8.hide();
      sl9.hide();
      sl10.hide();

      il1.hide();
      il2.hide();
      il3.hide();
      il4.hide();
      il5.hide();
      il6.hide();
      il7.hide();
      il8.hide();
      il9.hide();
      il10.hide();

      ll1.hide();
      ll2.hide();
      ll3.hide();
      ll4.hide();
      ll5.hide();
      ll6.hide();
      ll7.hide();
      ll8.hide();
      ll9.hide();
      ll10.hide();

      ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();

      hl1.hide();
      hl2.hide();
      hl3.hide();
      hl4.hide();
      hl5.hide();
      hl6.hide();
      hl7.hide();
      hl8.hide();
      hl9.hide();
      hl10.hide();

    }

}

function ol1Screen(){

    gameState = "OL1";

    if(gameState === "OL1"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = true;
       bg7.visible = false;

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function ol2Screen(){

    gameState = "OL2";

    if(gameState === "OL2"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = true;
       bg7.visible = false;

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function ol3Screen(){

    gameState = "OL3";

    if(gameState === "OL3"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = true;
       bg7.visible = false;

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function ol4Screen(){

    gameState = "OL4";

    if(gameState === "OL4"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = true;
       bg7.visible = false;

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function ol5Screen(){

    gameState = "OL5";

    if(gameState === "OL5"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = true;
       bg7.visible = false;

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function ol6Screen(){

    gameState = "OL6";

    if(gameState === "OL6"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = true;
       bg7.visible = false;

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function ol7Screen(){

    gameState = "OL7";

    if(gameState === "OL7"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = true;
       bg7.visible = false;

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function ol8Screen(){

    gameState = "OL8";

    if(gameState === "OL8"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = true;
       bg7.visible = false;

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function ol9Screen(){

    gameState = "OL9";

    if(gameState === "OL9"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = true;
       bg7.visible = false;

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function ol10Screen(){

    gameState = "OL10";

    if(gameState === "OL10"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = true;
       bg7.visible = false;

       sett.hide();
       shop.hide();
       quest.hide();

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
      ol2.hide();
      ol3.hide();
      ol4.hide();
      ol5.hide();
      ol6.hide();
      ol7.hide();
      ol8.hide();
      ol9.hide();
      ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function hl1Screen(){

    gameState = "HL1";

    if(gameState === "HL1"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = true;

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function hl2Screen(){

    gameState = "HL2";

    if(gameState === "HL2"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = true;

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function hl3Screen(){

    gameState = "HL3";

    if(gameState === "HL3"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = true;

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function hl4Screen(){

    gameState = "HL4";

    if(gameState === "HL4"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = true;

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function hl5Screen(){

    gameState = "HL5";

    if(gameState === "HL5"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = true;

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function hl6Screen(){

    gameState = "HL6";

    if(gameState === "HL6"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = true;

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function hl7Screen(){

    gameState = "HL7";

    if(gameState === "HL7"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = true;

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();
    }

}

function hl8Screen(){

    gameState = "HL8";

    if(gameState === "HL8"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = true;

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function hl9Screen(){

    gameState = "HL9";

    if(gameState === "HL9"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = true;

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}

function hl10Screen(){

    gameState = "HL10";

    if(gameState === "HL10"){
       
       brand.visible = false;
       lvl.visible = false;

       box1.vellocityX = 0;
       box2.velocityX = 0;

       load.visible = false;

       main.visible = false;
       home.visible = false;

       skin.hide();
       world.hide();
       pvp.hide();

       sett.hide();
       shop.hide();
       quest.hide();

       back1.hide();

       bg2.visible = false;
       bg3.visible = false;
       bg4.visible = false;
       bg6.visible = false;
       bg7.visible = true;

       w1.hide();
       w2.hide();
       w3.hide();
       w4.hide();
       w5.hide();
       w6.hide();
       w7.hide();

       n1.hide();
       n2.hide();
       n3.hide();
       n4.hide();
       n5.hide();
       n6.hide();
       n7.hide();
       back2.hide();

       tl1.hide();
       tl2.hide();
       tl3.hide();
       tl4.hide();
       tl5.hide();
       tl6.hide();
       tl7.hide();
       tl8.hide();
       tl9.hide();
       tl10.hide();
 
       jl1.hide();
       jl2.hide();
       jl3.hide();
       jl4.hide();
       jl5.hide();
       jl6.hide();
       jl7.hide();
       jl8.hide();
       jl9.hide();
       jl10.hide();
 
       sl1.hide();
       sl2.hide();
       sl3.hide();
       sl4.hide();
       sl5.hide();
       sl6.hide();
       sl7.hide();
       sl8.hide();
       sl9.hide();
       sl10.hide();
 
       il1.hide();
       il2.hide();
       il3.hide();
       il4.hide();
       il5.hide();
       il6.hide();
       il7.hide();
       il8.hide();
       il9.hide();
       il10.hide();
 
       ll1.hide();
       ll2.hide();
       ll3.hide();
       ll4.hide();
       ll5.hide();
       ll6.hide();
       ll7.hide();
       ll8.hide();
       ll9.hide();
       ll10.hide();
 
       ol1.hide();
       ol2.hide();
       ol3.hide();
       ol4.hide();
       ol5.hide();
       ol6.hide();
       ol7.hide();
       ol8.hide();
       ol9.hide();
       ol10.hide();
 
       hl1.hide();
       hl2.hide();
       hl3.hide();
       hl4.hide();
       hl5.hide();
       hl6.hide();
       hl7.hide();
       hl8.hide();
       hl9.hide();
       hl10.hide();

    }

}