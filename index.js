const titulo = document.querySelectorAll(".titulo");
const descricao = document.querySelectorAll(".descricao");
const codigo = document.querySelectorAll(".codigo");

async function enviandoDado() {
  const dado = {
    titulo: "veio do codigo",
    descricao: "teste",
    codigo: "teste",
    link: "teste",
    categoria: "teste",
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
  codigo[0].textContent = data[0].codigo;
}

buscandoDados();
enviandoDado();

// codigo[0].textContent = "oi";
