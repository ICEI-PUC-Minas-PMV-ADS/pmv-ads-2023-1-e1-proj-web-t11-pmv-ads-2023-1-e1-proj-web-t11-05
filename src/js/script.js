const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Selecione a imagem";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});

function dragStart (ev) {
  /* acao.dataTransfer.effectAll='move'; */
   ev.dataTransfer.setData("ID", ev.target.getAttribute('id'));
  /* acao.dataTransfer.setDragImage(acao.target,0,0); */
}

function dragOver (ev) { 
   return false;
   /*var produtoSelecionado = acao.dataTransfer.getData("ID");
   var id = acao.target.getAttribute("id");
   if ((produtoSelecionado == 'produto1' || produtoSelecionado == 'produto2' || produtoSelecionado == 'produto3'));*/
}

function dragDrop (acao){
  var produtoSelecionado = acao.dataTransfer.getData("ID");
  acao.target.appendChild(document.getElementById(produtoSelecionado));
}

function load_page(x, y) {
  var indice = x
  var target = y
  var url = './../src/' + indice + '.html'

  var xml = new XMLHttpRequest()

  xml.onreadystatechange = function () {
      if (xml.readyState == 4 && xml.status == 200) {
          document.getElementById(target).innerHTML = xml.responseText
      }
  }

  xml.open("GET", url, true)

  xml.send()
}


function Avaliar(estrela) {
  var url = window.location;
  url = url.toString()
  url = url.split("consultores.html");
  url = url[0];
 
  var s1 = document.getElementById("s1").src;
  var s2 = document.getElementById("s2").src;
  var s3 = document.getElementById("s3").src;
  var s4 = document.getElementById("s4").src;
  var s5 = document.getElementById("s5").src;
 
 if (estrela == 5){ 
  if (s5 == url + "img/star0.png") {
  document.getElementById("s1").src = "img/star1.png";
  document.getElementById("s2").src = "img/star1.png";
  document.getElementById("s3").src = "img/star1.png";
  document.getElementById("s4").src = "img/star1.png";
  document.getElementById("s5").src = "img/star1.png";
  } else {
  document.getElementById("s1").src = "img/star1.png";
  document.getElementById("s2").src = "img/star1.png";
  document.getElementById("s3").src = "img/star1.png";
  document.getElementById("s4").src = "img/star1.png";
  document.getElementById("s5").src = "img/star0.png";
 }}
  
  //ESTRELA 4
 if (estrela == 4){ 
  if (s4 == url + "img/star0.png") {
  document.getElementById("s1").src = "img/star1.png";
  document.getElementById("s2").src = "img/star1.png";
  document.getElementById("s3").src = "img/star1.png";
  document.getElementById("s4").src = "img/star1.png";
  document.getElementById("s5").src = "img/star0.png";
  } else {
  document.getElementById("s1").src = "img/star1.png";
  document.getElementById("s2").src = "img/star1.png";
  document.getElementById("s3").src = "img/star1.png";
  document.getElementById("s4").src = "img/star0.png";
  document.getElementById("s5").src = "img/star0.png";
 }}
 
 //ESTRELA 3
 if (estrela == 3){ 
  if (s3 == url + "img/star0.png") {
  document.getElementById("s1").src = "img/star1.png";
  document.getElementById("s2").src = "img/star1.png";
  document.getElementById("s3").src = "img/star1.png";
  document.getElementById("s4").src = "img/star0.png";
  document.getElementById("s5").src = "img/star0.png";
  } else {
  document.getElementById("s1").src = "img/star1.png";
  document.getElementById("s2").src = "img/star1.png";
  document.getElementById("s3").src = "img/star0.png";
  document.getElementById("s4").src = "img/star0.png";
  document.getElementById("s5").src = "img/star0.png";
 }}
  
 //ESTRELA 2
 if (estrela == 2){ 
  if (s2 == url + "img/star0.png") {
  document.getElementById("s1").src = "img/star1.png";
  document.getElementById("s2").src = "img/star1.png";
  document.getElementById("s3").src = "img/star0.png";
  document.getElementById("s4").src = "img/star0.png";
  document.getElementById("s5").src = "img/star0.png";
  } else {
  document.getElementById("s1").src = "img/star1.png";
  document.getElementById("s2").src = "img/star0.png";
  document.getElementById("s3").src = "img/star0.png";
  document.getElementById("s4").src = "img/star0.png";
  document.getElementById("s5").src = "img/star0.png";
 }}
  
  //ESTRELA 1
 if (estrela == 1){ 
  if (s1 == url + "img/star0.png") {
  document.getElementById("s1").src = "img/star0.png";
  document.getElementById("s2").src = "img/star0.png";
  document.getElementById("s3").src = "img/star0.png";
  document.getElementById("s4").src = "img/star0.png";
  document.getElementById("s5").src = "img/star0.png";
  } else {
  document.getElementById("s1").src = "img/star0.png";
  document.getElementById("s2").src = "img/star0.png";
  document.getElementById("s3").src = "img/star0.png";
  document.getElementById("s4").src = "img/star0.png";
  document.getElementById("s5").src = "img/star0.png";
 }}
  
  document.getElementById('rating').innerHTML = avaliacao;
  
 }

 function Avaliar2(estrela2) {
  var url = window.location;
  url = url.toString()
  url = url.split("consultores.html");
  url = url[0];
 
  var s12 = document.getElementById("s12").src;
  var s22 = document.getElementById("s22").src;
  var s32 = document.getElementById("s32").src;
  var s42 = document.getElementById("s42").src;
  var s52 = document.getElementById("s52").src;
 
 if (estrela2 == 5){ 
  if (s52 == url + "img/star0.png") {
  document.getElementById("s12").src = "img/star1.png";
  document.getElementById("s22").src = "img/star1.png";
  document.getElementById("s32").src = "img/star1.png";
  document.getElementById("s42").src = "img/star1.png";
  document.getElementById("s52").src = "img/star1.png";
  } else {
  document.getElementById("s12").src = "img/star1.png";
  document.getElementById("s22").src = "img/star1.png";
  document.getElementById("s32").src = "img/star1.png";
  document.getElementById("s42").src = "img/star1.png";
  document.getElementById("s52").src = "img/star0.png";
 }}
  
  //ESTRELA 4
 if (estrela2 == 4){ 
  if (s42 == url + "img/star0.png") {
  document.getElementById("s12").src = "img/star1.png";
  document.getElementById("s22").src = "img/star1.png";
  document.getElementById("s32").src = "img/star1.png";
  document.getElementById("s42").src = "img/star1.png";
  document.getElementById("s52").src = "img/star0.png";
  } else {
  document.getElementById("s12").src = "img/star1.png";
  document.getElementById("s22").src = "img/star1.png";
  document.getElementById("s32").src = "img/star1.png";
  document.getElementById("s42").src = "img/star0.png";
  document.getElementById("s52").src = "img/star0.png";
 }}
 
 //ESTRELA 3
 if (estrela2 == 3){ 
  if (s32 == url + "img/star0.png") {
  document.getElementById("s12").src = "img/star1.png";
  document.getElementById("s22").src = "img/star1.png";
  document.getElementById("s32").src = "img/star1.png";
  document.getElementById("s42").src = "img/star0.png";
  document.getElementById("s52").src = "img/star0.png";
  } else {
  document.getElementById("s12").src = "img/star1.png";
  document.getElementById("s22").src = "img/star1.png";
  document.getElementById("s32").src = "img/star0.png";
  document.getElementById("s42").src = "img/star0.png";
  document.getElementById("s52").src = "img/star0.png";
 }}
  
 //ESTRELA 2
 if (estrela2 == 2){ 
  if (s22 == url + "img/star0.png") {
  document.getElementById("s12").src = "img/star1.png";
  document.getElementById("s22").src = "img/star1.png";
  document.getElementById("s32").src = "img/star0.png";
  document.getElementById("s42").src = "img/star0.png";
  document.getElementById("s52").src = "img/star0.png";
  } else {
  document.getElementById("s12").src = "img/star1.png";
  document.getElementById("s22").src = "img/star0.png";
  document.getElementById("s32").src = "img/star0.png";
  document.getElementById("s42").src = "img/star0.png";
  document.getElementById("s52").src = "img/star0.png";
 }}
  
  //ESTRELA 1
 if (estrela2 == 1){ 
  if (s12 == url + "img/star0.png") {
  document.getElementById("s12").src = "img/star0.png";
  document.getElementById("s22").src = "img/star0.png";
  document.getElementById("s32").src = "img/star0.png";
  document.getElementById("s42").src = "img/star0.png";
  document.getElementById("s52").src = "img/star0.png";
  } else {
  document.getElementById("s12").src = "img/star0.png";
  document.getElementById("s22").src = "img/star0.png";
  document.getElementById("s32").src = "img/star0.png";
  document.getElementById("s42").src = "img/star0.png";
  document.getElementById("s52").src = "img/star0.png";
 }}
  
  document.getElementById('rating').innerHTML = avaliacao;
  
 }

 function Avaliar3(estrela3) {
  var url = window.location;
  url = url.toString()
  url = url.split("consultores.html");
  url = url[0];
 
  var s13 = document.getElementById("s13").src;
  var s23 = document.getElementById("s23").src;
  var s33 = document.getElementById("s33").src;
  var s43 = document.getElementById("s43").src;
  var s53 = document.getElementById("s53").src;
 
 if (estrela3 == 5){ 
  if (s53 == url + "img/star0.png") {
  document.getElementById("s13").src = "img/star1.png";
  document.getElementById("s23").src = "img/star1.png";
  document.getElementById("s33").src = "img/star1.png";
  document.getElementById("s43").src = "img/star1.png";
  document.getElementById("s53").src = "img/star1.png";
  } else {
  document.getElementById("s13").src = "img/star1.png";
  document.getElementById("s23").src = "img/star1.png";
  document.getElementById("s33").src = "img/star1.png";
  document.getElementById("s43").src = "img/star1.png";
  document.getElementById("s53").src = "img/star0.png";
 }}
  
  //ESTRELA 4
 if (estrela3 == 4){ 
  if (s43 == url + "img/star0.png") {
  document.getElementById("s13").src = "img/star1.png";
  document.getElementById("s23").src = "img/star1.png";
  document.getElementById("s33").src = "img/star1.png";
  document.getElementById("s43").src = "img/star1.png";
  document.getElementById("s53").src = "img/star0.png";
  } else {
  document.getElementById("s13").src = "img/star1.png";
  document.getElementById("s23").src = "img/star1.png";
  document.getElementById("s33").src = "img/star1.png";
  document.getElementById("s43").src = "img/star0.png";
  document.getElementById("s53").src = "img/star0.png";
 }}
 
 //ESTRELA 3
 if (estrela3 == 3){ 
  if (s33 == url + "img/star0.png") {
  document.getElementById("s13").src = "img/star1.png";
  document.getElementById("s23").src = "img/star1.png";
  document.getElementById("s33").src = "img/star1.png";
  document.getElementById("s43").src = "img/star0.png";
  document.getElementById("s53").src = "img/star0.png";
  } else {
  document.getElementById("s13").src = "img/star1.png";
  document.getElementById("s23").src = "img/star1.png";
  document.getElementById("s33").src = "img/star0.png";
  document.getElementById("s43").src = "img/star0.png";
  document.getElementById("s53").src = "img/star0.png";
 }}
  
 //ESTRELA 2
 if (estrela3 == 2){ 
  if (s23 == url + "img/star0.png") {
  document.getElementById("s13").src = "img/star1.png";
  document.getElementById("s23").src = "img/star1.png";
  document.getElementById("s33").src = "img/star0.png";
  document.getElementById("s43").src = "img/star0.png";
  document.getElementById("s53").src = "img/star0.png";
  } else {
  document.getElementById("s13").src = "img/star1.png";
  document.getElementById("s23").src = "img/star0.png";
  document.getElementById("s33").src = "img/star0.png";
  document.getElementById("s43").src = "img/star0.png";
  document.getElementById("s53").src = "img/star0.png";
 }}
  
  //ESTRELA 1
 if (estrela3== 1){ 
  if (s13 == url + "img/star0.png") {
  document.getElementById("s13").src = "img/star0.png";
  document.getElementById("s23").src = "img/star0.png";
  document.getElementById("s33").src = "img/star0.png";
  document.getElementById("s43").src = "img/star0.png";
  document.getElementById("s53").src = "img/star0.png";
  } else {
  document.getElementById("s13").src = "img/star0.png";
  document.getElementById("s23").src = "img/star0.png";
  document.getElementById("s33").src = "img/star0.png";
  document.getElementById("s43").src = "img/star0.png";
  document.getElementById("s53").src = "img/star0.png";
 }}
  
  document.getElementById('rating').innerHTML = avaliacao;
  
 }

   