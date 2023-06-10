# Programação de Funcionalidades

As Telas desenvolvidas para as funcionalidades do sistema serão apresentadas nesta seção, bem como os requisitos funcionais à estas correspondentes, os artefatos criados e orientações de acesso.

# Login

Contém os campos de email e senha que, se preenchidos corretamente, permitem o encaminhamento à tela Home. Através do botão "criar conta", realiza o direcionamento à "tela de cadastro" e através do botão "esqueceu sua senha?", realiza o direcionamento à "tela de recuperação de senha".

![Login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-05/assets/126190493/6884221e-c370-49b4-bdc4-82dc46d15f84)

### Requisitos atendidos:
RF-01

### Artefatos da Funcionalidade:
login.html
style.css
script.js

### Estrutura de dados:
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Closetmate</title>
    <link rel="icon" type="image/x-icon" href="img/hanger.ico">

    <!-- CSS Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- CSS do Projeto -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!--Div principal onde vai englobar todas as outras-->
    <div class="main-login">
        <div class="imagem">
           <img src="img/Closetmatesfundo.png" class="closetimagem" alt="Closetmate" title="Closetmate, o seu closet virtual.">
           <div class="texfield">
                <div class="titulo"><h5>O Closetmate ajuda você a gerenciar seu closet de<br>
                  forma organizada e eficiente.</h5>
                </div>
            </div>
         </div> 
      <!--Div do painel do login onde os elementos irão ficar dentro--> 
        <div class="login">
            <div class="painel-login">
                <div class="textfield">  
                    <h2>Faça o seu login</h2>
                    <div class="sublogin">
                        Utilize seu email e senha para ter acesso<br>
                        personalizado ao seu closet virtual.</div>
                    </div>
                <div class="textfield">
                    <input type="email" name="email" id="email" class="form-control" placeholder="Email">
                </div>
                <div class="textfield">
                    <input type="password" name="email" id="email" class="form-control" placeholder="Senha">
                </div>
                <div class="form-check">
                   <input type="checkbox" name="lembrar" id="lembrar" class="form-check-input">
                   <label for="lembrar" class="form-check-label">Manter conectado</label>
                </div>
                <div class="link_entrada">
                    <a href="index.html"><button type="submit" class= "btn btn-entrar">Entrar</button></a>
                </div>
                 <!--link criar a conta-->
                <div class="link">
                   <a href="criarconta.html">Criar conta</a> 
                </div>
                 <!-- link esqueceu a senha -->
                <div class="link">
                   <a href="recuperacaosenha.html">Esqueceu sua senha?</a>
                </div>
            </div> 
        </div>

    <!-- JS Bootstrap -->
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> 
    <!-- JS do Projeto -->
    <script src="js/script.js"></script>

</body>
</html>

