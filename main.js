const form = document.getElementById("contacts");
const totalContatos = document.getElementById("all-contacts");

const nomes = [];
const tel = [];
const email = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionarLinha();
  atualizaTabela();
  atualizarTotalContatos();
});

function adicionarLinha() {
  const nomeContato = document.getElementById("name");
  const telContato = document.getElementById("number");
  const emailContato = document.getElementById("email");

  if (nomes.includes(nomeContato.value) || tel.includes(telContato.value)) {
    alert(
      `O nome ${nomeContato.value} ou o nº de telefone ${telContato.value} já forão inseridos na lista telefônica`
    );
  } else {
    nomes.push(nomeContato.value);
    tel.push(parseInt(telContato.value));
    email.push(emailContato.value);

    let linha = "<tr>";
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${telContato.value}</td>`;
    linha += `<td>${emailContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
  }
  nomeContato.value = "";
  telContato.value = "";
  emailContato.value = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function atualizarTotalContatos() {
  let somaTotalContatos = nomes.length;
  totalContatos.innerHTML = somaTotalContatos;
}
