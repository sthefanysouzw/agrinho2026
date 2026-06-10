function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}// ======================================================
// 🌱 AGRO FORTE, FUTURO SUSTENTÁVEL 🌎
// PROJETO EDUCATIVO INTERATIVO - P5.js
// ======================================================

// CONTROLES:
// N = Dia/Noite
// C = Chuva
// Clique no botão = Informações
// Espaço = Troca curiosidades

let nightMode = false;

let infos = [
  "🌱 Agricultura sustentável preserva o meio ambiente.",
  "💧 O uso consciente da água evita desperdícios.",
  "☀ Energia solar ajuda a reduzir poluição.",
  "🚜 Máquinas modernas aumentam a produtividade.",
  "🌳 Preservar florestas protege os animais.",
  "🌎 Agro sustentável garante alimento no futuro.",
  "♻ Reciclagem reduz impactos ambientais.",
  "🐝 Abelhas ajudam na polinização das plantas.",
  "🌧 A chuva é importante para a agricultura.",
  "🌾 Tecnologia melhora a produção agrícola."
];

let infoAtual = 0;

function setup() {
  createCanvas(1200, 700);
}

function draw() {

  // ===================================================
  // CÉU
  // ===================================================

  if (nightMode) {

    background(15, 20, 50);

    // estrelas
    fill(255);

    for (let i = 0; i < 150; i++) {
      circle(random(width), random(height/2), random(1,4));
    }

    // lua
    fill(240);
    ellipse(1000, 100, 100);

  } else {

    background(135, 206, 235);

    // sol
    for(let i=0;i<8;i++){
      fill(255,220,0,30);
      ellipse(1000,100,180+i*20);
    }

    fill(255,220,0);
    ellipse(1000,100,120);
  }

  // ===================================================
￼
￼
Set status

  // MONTANHAS
  // ===================================================

  fill(90,140,90);

  triangle(0,400,250,180,500,400);
  triangle(300,400,600,150,900,400);
  triangle(700,400,1000,170,1300,400);

  // ===================================================
  // CHÃO
  // ===================================================

  fill(70,180,70);
  rect(0,400,width,300);

  // ===================================================
  // RIO
  // ===================================================

  fill(40,140,255);

  beginShape();

  vertex(0,600);

  bezierVertex(
    250,520,
    500,680,
    800,580
  );

  bezierVertex(
    950,540,
    1100,650,
    1200,600
  );

  vertex(1200,700);
  vertex(0,700);

  endShape(CLOSE);

  // ===================================================
  // ÁRVORES
  // ===================================================

  drawTree(120,280);
  drawTree(250,320);
  drawTree(950,300);

  // ===================================================
  // CASA
  // ===================================================

  drawHouse(430,300);

  // ===================================================
  // PAINEL SOLAR
  // ===================================================

  drawSolar(900,430);

  // ===================================================
  // TURBINA EÓLICA
  // ===================================================

  drawWindmill(1080,220);

  // ===================================================
  // TRATOR
  // ===================================================

  drawTractor(520,470);

  // ===================================================
  // PLANTAÇÃO
  // ===================================================

  for(let x=50;x<width;x+=70){
    drawPlant(x,450);
  }

  // ===================================================
  // TÍTULO
  // ===================================================

  fill(20);

  textAlign(CENTER);

  textSize(42);
  textStyle(BOLD);

  text(
    "🌱 AGRO FORTE, FUTURO SUSTENTÁVEL 🌎",
    width/2,
    50
  );

  textSize(20);

  text(
    "Tecnologia + Natureza + Produção Responsável",
    width/2,
    85
  );

  // ===================================================
  // QUADRO EDUCATIVO
  // ===================================================

  fill(255,255,255,230);

  rect(30,120,420,260,20);

  fill(20);

  textAlign(LEFT);

  textSize(28);
  textStyle(BOLD);
￼
￼
Set status


  text("📚 Saber Mais",50,165);

  textSize(20);
  textStyle(NORMAL);

  text(
    infos[infoAtual],
    50,
    240,
    360,
    200
  );

  // ===================================================
  // BOTÃO
  // ===================================================

  drawButton();

  // ===================================================
  // INSTRUÇÕES
  // ===================================================

  fill(255);

  textAlign(CENTER);

  textSize(18);

  text(
    "Pressione ESPAÇO para trocar as curiosidades",
    width/2,
    600
  );

  text(
    "Pressione N para alternar Dia/Noite",
    width/2,
    630
  );
}

// ======================================================
// FUNÇÕES
// ======================================================

function drawPlant(x,y){

  stroke(0,120,0);
  strokeWeight(4);

  line(x,y,x,y-40);

  noStroke();

  fill(50,200,50);

  ellipse(x-10,y-25,18,10);
  ellipse(x+10,y-25,18,10);
}

function drawTree(x,y){

  fill(101,67,33);
  rect(x,y,35,120);

  fill(30,140,30);

  ellipse(x+18,y-20,120);
  ellipse(x-20,y+20,90);
  ellipse(x+60,y+20,90);
}

function drawHouse(x,y){

  fill(230,200,150);
  rect(x,y,170,120);

  fill(180,60,60);

  triangle(
    x-15,
    y,
    x+85,
    y-80,
    x+185,
    y
  );

  fill(120,70,30);
  rect(x+65,y+55,40,65);

  fill(100,200,255);

  rect(x+20,y+30,35,35);
  rect(x+115,y+30,35,35);
}

function drawSolar(x,y){

  fill(20,30,120);

  rect(x,y,90,50);

  stroke(255);

  for(let i=1;i<4;i++){
    line(x+i*22,y,x+i*22,y+50);
  }

  line(x,y+25,x+90,y+25);

  noStroke();

  fill(80);

  rect(x+38,y+50,15,40);
}

function drawWindmill(x,y){

  stroke(220);
  strokeWeight(8);

  line(x,y,x,y+200);

  push();

  translate(x,y);

  rotate(frameCount*0.03);

  stroke(240);

  line(0,0,60,0);
  line(0,0,-60,0);
  line(0,0,0,60);
  line(0,0,0,-60);

  pop();
}

function drawTractor(x,y){

  fill(0,160,0);

  rect(x,y,140,60,10);

  fill(100,220,255);

  rect(x+80,y-40,45,40);

  fill(40);

  ellipse(x+30,y+65,50);
  ellipse(x+110,y+65,70);
}

function drawButton(){

  let bx = width/2 - 170;
  let by = 650;
  let bw = 340;
  let bh = 40;

  let hover =
    mouseX > bx &&
    mouseX < bx+bw &&
    mouseY > by &&
    mouseY < by+bh;

  fill(
    hover ?
    color(0,200,90) :
    color(0,150,70)
  );

  rect(bx,by,bw,bh,15);

  fill(255);

  textAlign(CENTER);

  textSize(22);
  textStyle(BOLD);

  text(
    "🔍 CLIQUE PARA SABER MAIS",
    width/2,
    678
  );
}

// ======================================================
// INTERAÇÕES
// ======================================================

function mousePressed(){

  let bx = width/2 - 170;
  let by = 650;
  let bw = 340;
  let bh = 40;

  if(
    mouseX > bx &&
    mouseX < bx+bw &&
    mouseY > by &&
    mouseY < by+bh
  ){

    infoAtual++;

    if(infoAtual >= infos.length){
      infoAtual = 0;
    }
  }
}

function keyPressed(){

  // Dia/Noite
  if(key === 'n' || key === 'N'){
    nightMode = !nightMode;
  }

  // Próxima curiosidade
  if(keyCode === 32){

    infoAtual++;

    if(infoAtual >= infos.length){
      infoAtual = 0;
    }
  }
}