const titulo = document.querySelectorAll('.titulo')
const descricao = document.querySelectorAll('.descricao')
const codigo = document.querySelectorAll('.codigo')

string = ["<h1>", "<h3>"]

function chaves() {
    for (let i = 0; i < descricao.length; i++) {

        if (string[i].includes("<")) {

            string[i] = string[i].replace("<", "&lt;")
        }
        if (string[i].includes(">")) {

            string[i] = string[i].replace(">", "&gt;")
        }
    }
}
function substituindo() {
    for (let i = 0; i < titulo.length; i++) {
        codigo[i].textContent = string[i]

    }
}
chaves()
substituindo()



//     Para "<", use &lt; ou &#60;
// Para ">", use &gt; ou &#62;