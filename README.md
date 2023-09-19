# TADS 2022 - Senac

## Descrição do Projeto
O projeto "TADS 2022 - Senac" é um site(disponível em: https://alieponzani.github.io/tads2022/) desenvolvido em React que oferece a oportunidade para alunos das turmas de Análise e Desenvolvimento de Sistemas construírem suas próprias páginas sobre os temas de sua escolha. A ideia principal é criar um ambiente colaborativo onde os alunos possam trabalhar em um único repositório, simulando um ambiente de produção semelhante ao de uma empresa real. Isso visa preparar os alunos para o mercado de trabalho, proporcionando experiência prática em desenvolvimento web e colaboração em equipe.

## Funcionalidades Principais
- **Criação de Páginas:** Cada aluno pode criar sua própria página com conteúdo relacionado ao assunto de sua escolha.
- **Edição Colaborativa:** Os alunos podem convidar outros para editar suas páginas, permitindo colaboração em equipe.
- **Controle de Versões:** O sistema utiliza um sistema de controle de versões para rastrear todas as alterações feitas nas páginas.

## Tecnologias Utilizadas
- **Front-end:** React
- **Controle de Versão:** Git e GitHub

## Instruções de Uso
1. Faça um fork deste repositório.
   1. No canto superior direito desta página , você verá o botão "Fork". Clique nele e depois em +Create New Fork.
   2. Role a página até o botão Create fork e clique nele.
   3. Aguarde o Fork: O GitHub agora criará uma cópia do repositório na sua conta. Isso pode levar alguns segundos.
   4. Após a conclusão, você será redirecionado para a página do repositório forkado em sua conta.
      
3. Cada colaborador deverá clonar seu próprio repositório para suas máquinas locais e trabalhar em suas alterações:
   *** 
   Caso não tenha o GIT instalado em sua máquina, pesquise sobre o assunto e faça a instalação e configurações necessárias antes de seguir.
   ***
   1. Faça o clone DO SEU REPOSITÓRIO para sua máquina local usando o comando:
      1. Entre nos seus repositórios e abra o repositório tads2022(caso ainda não esteja com ele aberto).
      2. Clique em CODE e copie o link que parece como este abaixo, porém com seu nome ao invés de AliePonzani. E dentro do seu cmd digite git clone e cole o link copiado, ficará assim:
         ```bash
         git clone https://github.com/AliePonzani/tads2022.git
         ```
      3. Navegue até o diretório do projeto:
         ```bash
         cd tads2022
         ```
      4. Ainda dentro do terminal, abra o projeto na IDE que deseja trabalhar, neste exemplo usarei o VsCode.
         ```bash
         code .
         ```
   7. Instale as dependências do projeto:
      ***
      Para esta etapa você precisa ter o Node instalado na sua máquina, caso ainda não tenha entre em https://nodejs.org/pt-br e faça a instalação da versão mais recente.
      ***
      ```bash
      npm install
      ```
   8. Inicie o servidor de desenvolvimento:
      ```bash
      npm start
      ```
   9. Abra seu navegador e acesse o site em `http://localhost:3000`.

3. Faça suas alterações:
   
   1. Dentro de src/Paginas crie um New File do tipo .jsx com o nome da sua pagina, dentro deste arquivo você irá montar toda a estrutura de sua página, use a PaginaExemplo.jsx como exemplo para iniciar.
   2. Depois de criar sua página vá em src/Paginas/pagesDatas.jsx e crie uma nova rota para sua página seguindo o exemplo que consta lá.
      
4. Faça um commit adicione mensagens de commit significativas:

```bash
git add .
git commit -m "SUA MENSSAGEM"
```

5. Envie suas alterações para seu repositório:

```bash
git push
```

6. Abra o Pull Request:
   1. Vá para a página do seu repositório no GitHub e clique na guia "Pull requests".
   2. Clique no botão verde "New pull request".
   3. Selecione a branch *"atualizacoes"* no repositório original como destino. E selecione a branch no seu repositório (normalmente é a "main" ou "master") como no exemplo abaixo qua a conta AlineTestes esta enviando para a conta original do repositório AliePonzani:
   <img src="src\Imagens\Captura de tela 2023-09-19 185403.png">
   4. Revise as alterações que você está propondo. Se estiver tudo certo, clique em "Create pull request".
  
7. Descreva o Pull Request:
   1. Dê um título e uma descrição informativa para o seu pull request. Explique o que você fez e por que.
  
8. Envie o Pull Request:
   1. Finalmente, clique em "Create pull request" para enviar o pull request ao repositório original.
  
9. A partir desse ponto, os colaboradores do repositório original terão a oportunidade de analisar suas alterações, oferecer comentários e, se estiverem em conformidade, integrá-las ao repositório principal. Lembre-se de monitorar o pull request para prontamente responder a qualquer feedback que possa ser fornecido.

**CASO VOCÊ JÁ TENHA ESTE REPOSITÓRIO LEMBRE-SE QUE ANTES DE INICIAR CADA TRABALHO FAÇA UM *git pull origin nome_da_sua_branch* PARA OBTER AS ATUALIZAÇÕES QUE OUTROS COLABORADORES POSSAM TER REALIZADO.**

## Regras importantes
Para este projeto se manter limpo e sem confusão é importante que você:
   1. Não altere nada dentro da página do coleguinha.
   2. Não crie pastas dentro das pastas já existentes.
   3. Todos os arquivos .css devem ficar dentro da pasta src/css
   4. Dê um nome único para seu arquivo, não use index, App, home e nem nada do tipo, o ideal é que seus arquivos .jsx e .css tenham seu nome, ex: Aline.jsx ou Aline.css e se houver já um arquivo coloque seu sobrenome para diferencia-lo.
   5. Não realize alterações dentro da branch main, utilize a branch que você criou para isso.
   5. Por último e não menos importante não se esqueça de colocar seu nome ai em baixo em **Equipe**.

É isso, bem vindo ao time!!!


## Equipe
Este projeto é mantido por uma equipe de alunos dedicados. Sinta-se à vontade para entrar em contato conosco se tiver alguma dúvida ou sugestão.

- [Aline Fernanda Ponzani](https://github.com/AliePonzani) - Desenvolvedor Back-end - Idealizadora deste projeto.

## Licença
Este projeto é licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para obter detalhes.

---
