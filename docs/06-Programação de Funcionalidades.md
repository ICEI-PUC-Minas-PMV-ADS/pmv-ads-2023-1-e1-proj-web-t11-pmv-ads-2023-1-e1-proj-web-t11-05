# Programação de Funcionalidades

As Telas desenvolvidas para as funcionalidades do sistema serão apresentadas nesta seção, bem como os requisitos funcionais à estas correspondentes, os artefatos criados e orientações de acesso.

# Login

Contém os campos de email e senha que, se preenchidos corretamente, permitem o encaminhamento à tela Home. Através do botão "criar conta", realiza o direcionamento à "tela de cadastro" e através do botão "esqueceu sua senha?", realiza o direcionamento à "tela de recuperação de senha".

![Login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-05/assets/126190493/6884221e-c370-49b4-bdc4-82dc46d15f84)

### Requisitos atendidos:
RF-01

### Artefatos da Funcionalidade:
```
login.html
style.css
script.js
```
 
### Estrutura de dados:

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

# Cadastro de usuário

Tela que permite ao usuário realizar o cadastro através do preenchimento dos seguintes dados: nome, telefone, email, senha e sexo.

![cadastro](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-05/assets/126190493/3fc6e9c8-6da2-4863-a8f6-24cc2424230e)

### Requisitos atendidos:
RF-01

### Artefatos da Funcionalidade:
```
criarconta.html
style.css
script.js
```
 
### Estrutura de dados:

      <div class="conteudo">
        <div id="cadastro">
            <form method="post" action=""> 
              <div>
              <img src="img/Closetmatesfundo.png" class="closetimagemcad" alt="Closetmate">
              </div>
              <div class="subtitulo_cad" h6 >Preencha os dados abaixo para a criação do seu cadastro:</div></h6> 
              <p> 
                <label style="font-weight: 600" for="nome_cad">Seu nome:</label>
                <input style ="width:95%" id="nome_cad" name="nome_cad" type="text" placeholder="nome" required="required"/>
              </p>
               
              <p> 
                <label style="font-weight: 600" for="tel_cad">Seu telefone:</label>
                <input style ="width:95%" id="tel_cad" name="tel_cad" type="tel" placeholder="(00) 0 0000-0000" />

              <p> 
                <label style="font-weight: 600" for="email_cad">Seu email:</label>
                <input style ="width:95%" id="email_cad" name="email_cad" type="email" placeholder="contato@closetmate.com"/> 
              </p>
               
              <p> 
                <label style="font-weight: 600" for="conf_email_cad">Confirme o email:</label>
                <input style ="width:95%" id="conf_email_cad" name="conf_email_cad" type="email" placeholder="contato@closetmate.com"/>
              </p>

              <p> 
                <label style="font-weight: 600" for="senha_cad">Sua senha:</label>
                <input style ="width:95%" id="senha_cad" name="senha_cad" type="password" placeholder="ex. Ca1234"/>
              </p>

              <p> 
                <label style="font-weight: 600" for="senha_cad">Confirme a senha:</label>
                <input style ="width:95%" id="conf_senha_cad" name="conf_senha_cad" type="password" placeholder="ex. Ca1234"/>
              </p>

              <div class="row">
                <label style="font-weight: 600" for="Sexo_cad">Selecione o sexo:</label>
                <select class="opcoes" name="assunto">
                    <option disabled="disabled" selected="selected">Selecione a opção</option>
                    <option>Feminino</option>
                    <option>Masculino</option>
                    <option>Prefiro não dizer</option>
                </select>
              </div> 
            </form>
            <div class="link_cadastro">
              <a href="index.html"><button type="submit" class= "btn btn-cadastro" style="text-decoration:none">Cadastrar</button></a>
            </div>
            <p class="link">  
              Já tem conta?
              <a href="login.html"> Ir para Login </a>
            </p>
          </div>
        </div>
      </div>  
    </div> 
    
# Homepage:

Tela que permite ao usuário realizar toda a nvageção na aplicação, montagem do look, acesso a todas as categorias e acesso as "tela de cadastro de itens", "tela de consultores", "tela de looks salvos" e "tela de perfil de usuário".

![homepage](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e1-proj-web-t11-pmv-ads-2023-1-e1-proj-web-t11-05/assets/126190493/79be9782-7677-445c-9f12-6259ee89719c)


### Requisitos atendidos:
```
RF-02
RF-03
RF-06
RF-07
```

### Artefatos da Funcionalidade:
```
index.html
home.html
style.css
script.js
bioep.js
bioep.min.js
editar.js
```
 
### Estrutura de dados:

<!--<header class="menu-principal">  
        <div class="logo_index">
            <img src="img/Closetmatecinza.png" style="width:12em" floar="left" title="Closetmate, o seu closet virtual.">
        </div>
       <!-- <div class="header_1">-->
         <div class="nome_usuario">
            <h2>Olá, Ana Alves</h2>
         </div>
        <div> -->

            <form class="d-flex" role="search">
                <input class="form-control" type="search" placeholder="Pesquisar" aria-label="pesquisar" style="width: 200px">
                <button class="btn btn-pesquisar" type="submit">Pesquisar</button>
              </form>
        </div> 
        <div class="logo_perfil">
          <a href="perfil.html" target="_blank"><img src="img/perfil.png" style="width:5em" id="logo-perfil" title="Acesse o seu perfil."></a> 
            <p class="link_perfil"> 
                <strong><a href="login.html" Style="color: rgb(61, 60, 60); text-decoration: none;"> Sair </a></strong>
        </div>
         </div>
    <!-- <ul class="menu_index">
        <li> 
            <a href="home.html">Home</a>
        </li>

        <li>
            <a href="consultores.html">Consultores</a>
        </li>

        <li>
           <a href="seuslooks.html">Seus Looks</a>
        </li>
     </ul> -->

          <!-- Menu Categorias -->
      <div class="tit-categoria">
        <h4 class="titulo">Categorias</h4>
        <div class="barra-lateral">
          <nav>
            <div class="menu-btn">
              <i class="fas fa-bars"></i>
            </div>
            <div class="side-bar active">
              <div class="close-btn">
                <i class="fas fa-times"></i>
              </div>
              <div class="menu">
              <div class="item">
                <a class="sub-btn"><i class="fas fa-tshirt"></i>Roupas<i class="fas fa-angle-right dropdown"></i></a>
                <div class="sub-menu">
                      <a onclick="load_page('camisas','conteudo')" class="sub-item">Camisas</a>
                      <a onclick="load_page('calcas','conteudo')" class="sub-item">Calças</a>
                     
                </div>
                <div class="item">
                  <a class="sub-btn"><i class="fas fa-solid fa-socks"></i>Calçados<i class="fas fa-angle-right dropdown"></i></a>
                  <div class="sub-menu">
                    <a onclick="load_page('salto','conteudo')" class="sub-item">Salto Alto</a>
                    <a onclick="load_page('tenis','conteudo')" class="sub-item">Tênis</a>
                   
                  </div>
                  <div class="item">
                      <a class="sub-btn"><i class="fas fa-solid fa-gem"></i>Acessórios<i class="fas fa-angle-right dropdown"></i></a>
                      <div class="sub-menu">
                       <a onclick="load_page('oculos','conteudo')" class="sub-item">Óculos de sol</a>
                                      
                      </div>
                </div>  
          </nav>
        </div>
      </div>
      <div class="itens" id="conteudo">
        <span>
          <div class="espaco"></div>
        </span>

          <h3>Camisas</h3>
          <span id="tdsitens">
             <h6>Camisa Listrada</h6>
             <div class="fundo" ondrop="return dragDrop(event)" ondragover="return dragOver(event)"><img src="img/Camisa1.jpg"  id="camisa1" class="swing imgitens" draggable="true" ondragstart="return dragStart(event)" title="Arraste para criar o seu look!"></div>
             <div class="informacoes">
                <div class="detalhesitens">
                  <a  onclick="load_page('detalhes1','conteudo')"><button class="btndetalhes" title="Clique para detalhes do item.">Detalhes</button></a>
                </div>
                <div class="quantidadevz">
                  <h6>0 vezes utilizada</h6>
               </div>
              </div> 
          </span>

          <span id="tdsitens">
             <h6>Camisa Slim Branca</h6>
             <div class="fundo" ondrop="return dragDrop(event)" ondragover="return dragOver(event)"><img src="img/Camisa2.jpg" id="camisa2" class="swing imgitens" draggable="true" ondragstart="return dragStart(event)" title="Arraste para criar o seu look!"></div>
             <div class="informacoes">
              <div class="detalhesitens">
                <a  onclick="load_page('detalhes2','conteudo')"><button class="btndetalhes"  title="Clique para detalhes do item.">Detalhes</button></a>
              </div>
              <div class="quantidadevz">
                <h6>01 vezes utilizada</h6>
             </div>
            </div> 
             <a href="itens.html"><button type="submit" class= "btn btn-adicionar" title="Clique para adicionar novos itens.">+</button></a>
          </span>

          <span id="tdsitens">
             <h6>Camisa Branca Regata</h6>
             <div class="fundo" ondrop="return dragDrop(event)" ondragover="return dragOver(event)"><img src="img/Camisa 3.3.jpg" id="camisa3" class="swing imgitens" draggable="true" ondragstart="return dragStart(event)" title="Arraste para criar o seu look!"></div>
             <div class="informacoes">
              <div class="detalhesitens">
                <a  onclick="load_page('detalhes3','conteudo')"><button class="btndetalhes" title="Clique para detalhes do item.">Detalhes</button></a>
              </div>
              <div class="quantidadevz">
                <h6>02 vezes utilizada</h6>
             </div>
            </div> 
          </span>

          <span>
            <div class="espaco"></div>
          </span>
      </div>
                
        <div class="painel-look" title="Crie seu look aqui.">
          <div class="tit"><h5>Crie seu look</h5></div>
            <div class="monte_look">
              <div class=dropzone id="carrinho1" ondrop="return dragDrop(event)" ondragover="return dragOver(event)"></div>
              <div class=dropzone id="carrinho2" ondrop="return dragDrop(event)" ondragover="return dragOver(event)"></div>
            </div>
            <div class="monte_look2"> 
              <div class=dropzone id="carrinho3" ondrop="return dragDrop(event)" ondragover="return dragOver(event)"></div>
              <div class=dropzone id="carrinho4" ondrop="return dragDrop(event)" ondragover="return dragOver(event)"></div>
            </div>
            <input type="button" class= "btn btn-salvar" onclick="funcao1()" value="Salvar Look" title="Clique para salvar seu look.">
        </div> 
  
        <!-- MODAL -->
        <script type="text/javascript" src="pop-up/js/bioep.min.js"></script>
        <script type="text/javascript" src="pop-up/js/editar.js"></script>
        <!-- MODAL -->


      <script>
        function funcao1()
        {
        alert("Look salvo com sucesso!");
        window.location="seuslooks.html";
        }
        </script>
        

      <script type="text/javascript">
        $(document).ready(function(){

          $('.sub-btn').click(function(){
            $(this).next('.sub-menu').slideToggle();
            $(this).find('.dropdown').toggleClass('rotate');
          });

          $('.menu-btn').click(function(){
            $('.side-bar').addClass('active');
            $('.menu-btn').css("visibility", "hidden");
          });

          $('.close-btn').click(function(){
            $('.side-bar').removeClass('active');
            $('.menu-btn').css("visibility", "visible");
          });

        });
    </script>
    
# Cadastro de item:

Tela que permite ao usuário adicionar novos items, adicionando descrições extras para auxiliar na organização fisica do closet.

### Requisitos atendidos:
```
RF-04
RF-09
```

### Artefatos da Funcionalidade:
```
index.html
itens.html
style.css
script.js
```
 
### Estrutura de dados:

      <div class="conteudo-itens">
        <div class="espaco-itens"></div>
        <div class="imagem-itens">
            <div class="espaco2-itens">
            <br><br><br><br><br><br><br>  
            </div>
            <label class="picture" for="picture__input" tabIndex="0">
            <span class="picture__image">Selecione a imagem</span>
          </label>
          
          <input type="file" name="picture__input" id="picture__input">
        </div>

        <div id="cadastro-itens">
            <form method="post" action=""> 
              <div id="imagem-sub">
              <img src="img/Closetmatesfundo.png" class="closetimagemcad" alt="Closetmate" style="width:200px">
              <strong><div class="subtitulo_caditens" h5 >Adicionar itens no Closetmate</div></h5></strong>
              </div>
              
              <br> 
              <p> 
                <strong><label style="font-weight: 600" for="nome_cad">Nome do item:</label></strong>
                <input style ="width:60%" id="nome_caditens" name="nome_caditens" type="text">
              </p>
               
              <p> 
                <strong><label style="font-weight: 600" for="marca_caditens">Marca:</label></strong>
                <input style ="width:60%" id="marca_caditens" name="marca_caditens" type="text">

              <p> 
                <strong></strong><label style="font-weight: 600" for="categoria_caditens">Categoria:</label></p></strong>
                <select class="opcoes-itens" name="opcoes-itens" style="width:60%">
                  <option disabled="disabled" selected="selected">Selecione a opção</option>
                  <option>Camisetas</option>
                  <option>Calças</option>
                  <option>Salto Alto</option>
                  <option>Tênis</option>
                  <option>Óculos de Sol</option>
              </select> 
              </p>
               
              <p> 
                <strong><label style="font-weight: 600" for="desc_itens">Descrição extra:</label></strong>
                <input id="desc-itens" name="desc-itens" type="text">
              </p>
              <div class="row">     
              </div> 
            </form>
            <div class="link_cadastro">
              <a href=""><button type="submit" class= "btn btn-cadastro1" style="text-decoration:none">Cadastrar</button></a>
            </div>
            <span>
            <a href="home.html"><button id="f-itens">X</button></a>
            </span>
        </div>
      </div>












