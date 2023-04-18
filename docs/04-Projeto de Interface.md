
# Projeto de Interface

Estamos dando ênfase da usabilidade durante o processo de criação da interface da aplicação. Desta forma a aplicação será fácil de usar e de ser compreendida pelo usuário, proporcionando uma experiência intuitiva e eficiente onde as funções e recursos serão organizados de forma lógica e clara.

## Fluxo de usuário

O diagrama apresentado na figura abaixo representa o fluxo de interação do usuário pelas telas da aplicação. Cada uma dessas telas será detalhada na sessão seguinte.

![Fluxo Paginas](https://user-images.githubusercontent.com/126190493/232873448-19499e7a-9df9-4aad-bad2-9d58becb5e7e.jpg)

## Wireframes

Conforme fluxo de telas do projeto apresentado na sessão anterior, as telas da aplicação estão detalhadas nos itens que se seguem. As telas da aplicação exibem uma estrutura comum que será exposta na figura abaixo:

- Menu: elementos de navegação primária, associados a navegação entre as páginas da aplicação;
- Barra lateral: apresenta elementos de navageção secundária, asssociados aos elementos do bloco de conteúdo;
- Pesquisa: campo destinado a pesquisa de elementos do bloco de conteúdo;
- Nome de usuário: nome do usuário logado na aplicação;

![Estrutura Padrão](https://user-images.githubusercontent.com/126190493/232880590-54d3709c-111c-408e-9291-9f8bc4b6eb97.jpg)

- Tela de login

Efetuar a autenticação do usuário através do preenchimento dos campos email e senha. Caso seja o primeiro acesso, o usuário deverá realizar o cadastro por meio do link "Criar conta". Caso o usuário precise redefinir senha, ele pode acessar o link “Esqueceu a senha?”.

![Login](https://user-images.githubusercontent.com/126190493/232881893-06db8969-5037-4d1c-9bf2-6ce064b428a9.jpg)

- Tela de cadastro de usuário

Caso o usuário seja um usuário novo e deseja se cadastrar, após ele clicar no link “Criar conta” na tela de login, ele será direcionado para tela de cadastro que solicitará os seguintes dados: nome, sobrenome, email, confirmação de email, senha, confirmação de senha, e sexo para efetivar o cadastramento. Na sequência, a tela é fechada direcionando para Homepage do cliente já cadastrado.

![Cadastro](https://user-images.githubusercontent.com/126190493/232917205-d7ae96d2-71df-426e-a847-9313081bb304.jpg)

- Tela de recuperação de senha

Caso o usuário opte por recuperar senha, deverá clicar no link "Esqueceu a senha?" na tela de login, será direcionado para tela abaixo, que irá requerer um telefone cadastrado ou e-mail válidos para receber um código e efetivar a alteração.

![recuperacao](https://user-images.githubusercontent.com/126190493/232918480-185889ef-3565-4b9d-a607-4a662eed59d3.jpg)

- Tela Homepage

Após efetuar o login o usuário é direcionado para a HomePage, que é apresentado os seguintes componentes abaixo:

- Menu lateral – contém os acessos as suas categorias: roupas(camisas, casacos, calças, shorts), sapatos e acessóios;
- Categoria Escolhida - contém os itens correspondentes a categoria selecionada pelo usuário;
- Crie seu look – espaço destinado ao usuário incluir diversos itens e montar seus looks a seu gosto;
- Pesquise aqui - espaço para pesquisar itens cadastrados na aplicação;
- Menu principal - menu utilizado para navegação entre as páginas;
- Botão + - botão que abre a página de adição de novo item;
- Botão sair - botão responável por fazer logout e voltar a tela de login;
- Botão do avatar(perfil) - botão responsável para acessar o perfil do usuário logado.

![Home](https://user-images.githubusercontent.com/126190493/232920285-a9ba07bc-4808-43a3-a3a1-c27d7c1257be.jpg)

- Tela de adição de item

Ao clicar no botão + na tela Homepage abrirá a tela de adição de itens, que solicitará os seguintes dados: nome, marca(opcional), categoria e descrição extra(opcional).

- Espaço para imagem: no canto esquerdo há um espaço para inclusão de imagem do item;
- Botão +:  permite o usuário adicionar uma nova categoria.

![adicionar](https://user-images.githubusercontent.com/126190493/232920913-00d1d3d6-52c3-4a17-a324-f59e949b3570.jpg)

- Tela de detalhes de item

Ao clicar sobre um item na tela Homepage abrirá a tela de detalhes de itens, que permitirá visualizar os seguintes dados: nome, marca, categoria, imagem e descrição extra.

- Botão lixeira: permite que o usuário exclua o item que está sendo visualizado.
- Botão X: fecha a página e retorna a homepage.

![detalhes](https://user-images.githubusercontent.com/126190493/232921953-9ef0e15d-a347-4c58-be57-0e19c15ca58e.jpg)

- Tela de looks

Nessa tela o usuário poderá visualizar os looks que foram montados e salvos através do espaço "Crie seu look" disponível na homepage.

![looks](https://user-images.githubusercontent.com/126190493/232922188-b2ff9dfc-900c-4da3-8bfc-b38baad60516.jpg)

- Tela de Personal Organizer (Consultores)

Nessa tela o usuário poderá visualizar todos os consultores disponíveis na plataforma.

![consultores](https://user-images.githubusercontent.com/126190493/232922419-cc3f5ef6-b5c9-4f5f-b601-1571951f4000.jpg)














