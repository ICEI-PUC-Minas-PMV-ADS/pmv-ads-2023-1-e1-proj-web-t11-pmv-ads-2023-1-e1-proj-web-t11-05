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

   