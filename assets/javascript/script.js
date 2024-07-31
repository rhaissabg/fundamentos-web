const btn = document.getElementById("btn");
const retorno = document.createElement("p");
   
retorno.innerHTML = null;

btn.addEventListener("click", handleClick);

function handleClick(event) {
    const nome = document.getElementById("nome");
    const form = document.getElementsByTagName("form");
    retorno.style.marginBottom = "24px";
    retorno.innerText = `Muito obrigado pela sua mensagem, ${nome.value} ❤️`;
    form[0].appendChild(retorno);
    window.alert(`${nome.value}, sua mensagem foi enviada com sucesso!`);
}
