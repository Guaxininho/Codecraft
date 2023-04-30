const titulo = document.querySelectorAll(".titulo");
const descricao = document.querySelectorAll(".descricao");
const codigo = document.querySelectorAll(".codigo");
const linguagem = document.querySelectorAll(".linguagem");
const tipo = document.querySelectorAll(".tipo");
const main = document.querySelector("#main");
const novoPost = document.querySelector("#post");

async function enviandoDados() {
  const dado = {
    titulo: "Teste 2",
    descricao: "Só um teste para ver se tudo está funcionando",
    codigo: "<h1> Hello world! </h1>",
    link1: "http://www.instagram.com",
    link2: "http://www.google.com",
    categoria1: "PHP",
    categoria2: "Syntaxe",
    nomelink1: "Instagram",
    nomelink2: "Google",
  };
  const res = await fetch(
    "https://njdgryzqvrufijxtomch.supabase.co/rest/v1/MainCards",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Prefer: "return=minimal",
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qZGdyeXpxdnJ1ZmlqeHRvbWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3OTc2NjcsImV4cCI6MTk5ODM3MzY2N30.ZS7CLdwasZtFttSXiWb415QO02Cog0X5FA625tVqwl8",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qZGdyeXpxdnJ1ZmlqeHRvbWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3OTc2NjcsImV4cCI6MTk5ODM3MzY2N30.ZS7CLdwasZtFttSXiWb415QO02Cog0X5FA625tVqwl8",
      },
      body: JSON.stringify(dado),
    }
  );
}

// Busca os dados na API para renderizar no front e cria elementos com aqueles dados
async function buscandoDados() {
  const res = await fetch(
    "https://njdgryzqvrufijxtomch.supabase.co/rest/v1/MainCards",
    {
      method: "GET",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qZGdyeXpxdnJ1ZmlqeHRvbWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3OTc2NjcsImV4cCI6MTk5ODM3MzY2N30.ZS7CLdwasZtFttSXiWb415QO02Cog0X5FA625tVqwl8",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qZGdyeXpxdnJ1ZmlqeHRvbWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3OTc2NjcsImV4cCI6MTk5ODM3MzY2N30.ZS7CLdwasZtFttSXiWb415QO02Cog0X5FA625tVqwl8",
      },
    }
  );
  const data = await res.json();
  console.log(data);

  // codigo[0].textContent = data[0].codigo;

  /* <div class="card">
        <h1 class="titulo">Regex</h1>
        <div class="flexTags">
          <figure class="tag linguagem">PHP</figure>
          <figure class="tag tipo">Syntaxe</figure>
        </div>

        <p class="descricao">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum in velit
          saepe ducimus dolores eius animi sit beatae neque, impedit facilis non
          fugiat earum deleniti. Dicta quod sequi asperiores cum.
        </p>
        <code class="codigo"></code>
        <div class="flexlinks">
          <a class="link" href="#">Documentação</a>
          <a class="link" href="#">Documentação</a>
        </div>
      </div> */

  for (let i = 0; i < data.length; i++) {
    // Criando card
    let criandoCard = document.createElement("div");
    criandoCard.className = "card";
    main.appendChild(criandoCard);

    // Criando titulo
    let criandoTitulo = document.createElement("h1");
    criandoTitulo.className = "titulo";
    criandoTitulo.textContent = data[i].titulo;
    criandoCard.appendChild(criandoTitulo);

    // Criando as tags
    let criandoTag = document.createElement("div");
    criandoTag.className = "flexTags";
    criandoCard.appendChild(criandoTag);
    let tag1 = document.createElement("figure");
    tag1.className = "tag linguagem";
    tag1.textContent = data[i].categoria1;
    criandoTag.appendChild(tag1);
    let tag2 = document.createElement("figure");
    tag2.className = "tag tipo";
    tag2.textContent = data[i].categoria2;
    criandoTag.appendChild(tag2);

    // Criando a descrição
    let criandoDescricao = document.createElement("p");
    criandoDescricao.className = "descricao";
    criandoDescricao.textContent = data[i].descricao;
    criandoCard.appendChild(criandoDescricao);

    // Criando o código
    let criandoCode = document.createElement("code");
    criandoCode.className = "codigo";
    criandoCode.textContent = data[i].codigo;
    criandoCard.appendChild(criandoCode);

    // Criando os links
    let criandoLinks = document.createElement("div");
    criandoLinks.className = "flexlinks";
    criandoCard.appendChild(criandoLinks);
    if (data[i].nomelink1 !== "" && data[i].link1 !== "") {
      let criandoLinkInterno1 = document.createElement("a");
      criandoLinkInterno1.className = "link";
      criandoLinkInterno1.textContent = data[i].nomelink1;
      criandoLinkInterno1.href = data[i].link1;
      criandoLinks.appendChild(criandoLinkInterno1);
    }
    if (data[i].nomelink2 !== "" && data[i].link2 !== "") {
      let criandoLinkInterno2 = document.createElement("a");
      criandoLinkInterno2.className = "link";
      criandoLinkInterno2.textContent = data[i].nomelink2;
      criandoLinkInterno2.href = data[i].link2;
      criandoLinks.appendChild(criandoLinkInterno2);
    }
  }

  let tags = document.querySelectorAll(".tag");
  // Tags
  for (let i = 0; i < tags.length; i++) {
    // Linguagens
    if (tags[i].textContent === "PHP") {
      tags[i].style.backgroundColor = "#9c36b5";
    }

    // Tipo do dado
    if (tags[i].textContent === "Syntaxe") {
      tags[i].style.backgroundColor = "#6741d9";
    }
    if (tags[i].textContent === "Regra") {
      tags[i].style.backgroundColor = "#3b5bdb";
    }
    if (tags[i].textContent === "Ferramenta") {
      tags[i].style.backgroundColor = "#0c8599";
    }
    if (tags[i].textContent === "Estrutura") {
      tags[i].style.backgroundColor = "#099268";
    }
  }
}

buscandoDados();

// enviandoDados();

novoPost.addEventListener("click", () => {
  console.log("entrou");
  // Criar aqui agora o display do formulário mostrar ou não
});

// Criar formulário para ser preenchido e dentro dele quando conferido todos os campos e der ok, chamar a função pra postar tudo isso na API (enviandodados()) e chamar no final a função para ler a API (buscandodados())
