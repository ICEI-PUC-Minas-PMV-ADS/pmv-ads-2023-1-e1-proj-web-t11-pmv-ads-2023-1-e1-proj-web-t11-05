      bioEp.init({
            html: '<div id="bio_ep_content"> ' +
            
            '<span class="pop-up"><h4 id="pop-up">Olá! Parece que você ainda não contratou um consultor para ajudar com a organização do seu closet. <br> <br> Recomendamos escolher um dos nossos Personal Organizers para proporcionar uma experiência única, personalizada e completa com o seu Closetmate. <br> No entanto, se você achar que ainda não é o momento certo, fique à vontade para continuar gerenciando o seu closet <br> da sua forma. <br><br> Estamos aqui para ajudar quando você precisar.<h4></span>' +
            '<span class="img-popup"><img src ="img/magua.png"></span>' +
            '<span></span>' +
            '<a href="consultores.html" target="_blank" class="bio_btn">&nbsp &nbspEscolha um  consultor &nbsp; <i class="fa fainstagram"></i></a>' + 
            '</div>',
            css: '#bio_ep {width: 700px; height: 500px; color: #333; background-color: #fafafa; text-align: center;background-image: url(pop-up/imagens-pop/);background-size: cover;}' +
            '#bio_ep_content {font-family: inherit;}' +
            '#bio_ep_content span:nth-child(2) {display: block; color: #000; font-size: 32px; font-weight: 600;}' +
            '#bio_ep_content span:nth-child(3) {display: block; font-size: 16px;}' +
            '#bio_ep_content span:nth-child(4) {display: block; margin: -5px 0 0 0; font-size: 16px; font-weight: 600;}' +
            '.bio_btn {padding: 8px 25px 8px 25px; color: #fff; font-size: 19px; background-color: #a7a7a7; border: 1px solid #fff; cursor: pointer; -webkit-appearance: none; -moz-appearance: none; border-radius: 10px; text-decoration: none;}',
      
            cookieExp: 0
        });

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
            var avaliacao = 0;
           
           if (estrela == 5){ 
            if (s5 == url + "img/star0.png") {
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star1.png";
            document.getElementById("s4").src = "img/star1.png";
            document.getElementById("s5").src = "img/star1.png";
            avaliacao = 5;
            } else {
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star1.png";
            document.getElementById("s4").src = "img/star1.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 4;
           }}
            
            //ESTRELA 4
           if (estrela == 4){ 
            if (s4 == url + "img/star0.png") {
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star1.png";
            document.getElementById("s4").src = "img/star1.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 4;
            } else {
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star1.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 3;
           }}
           
           //ESTRELA 3
           if (estrela == 3){ 
            if (s3 == url + "img/star0.png") {
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star1.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 3;
            } else {
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star0.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 2;
           }}
            
           //ESTRELA 2
           if (estrela == 2){ 
            if (s2 == url + "img/star0.png") {
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star1.png";
            document.getElementById("s3").src = "img/star0.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 2;
            } else {
            document.getElementById("s1").src = "img/star1.png";
            document.getElementById("s2").src = "img/star0.png";
            document.getElementById("s3").src = "img/star0.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 1;
           }}
            
            //ESTRELA 1
           if (estrela == 1){ 
            if (s1 == url + "img/star0.png") {
            document.getElementById("s1").src = "img/star0.png";
            document.getElementById("s2").src = "img/star0.png";
            document.getElementById("s3").src = "img/star0.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 1;
            } else {
            document.getElementById("s1").src = "img/star0.png";
            document.getElementById("s2").src = "img/star0.png";
            document.getElementById("s3").src = "img/star0.png";
            document.getElementById("s4").src = "img/star0.png";
            document.getElementById("s5").src = "img/star0.png";
            avaliacao = 0;
           }}
            
            document.getElementById('rating').innerHTML = avaliacao;
            
           }