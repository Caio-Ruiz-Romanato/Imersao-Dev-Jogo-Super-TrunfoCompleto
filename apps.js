/* Variaveis das cartas com (nome, imagem, atributos: ataque, defesa e magia)*/
var cartaHarry = { nome: "Harry Potter", imagem: "https://imagem.band.com.br/f_480959.jpg", atributos: { ataque: 500, defesa: 850, magia: 1000 } }
var cartaRick = { nome: "Rick Sanchez", imagem: "https://mixdeseries.com.br/wp-content/uploads/2021/07/rick-and-morty-s5-5-1.jpg", atributos: { ataque: 1000, defesa: 1000, magia: 850 } }
var cartaThomas = { nome: "Thomas Shelby", imagem: "https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2021/06/01095934/3.jpg", atributos: { ataque: 250, defesa: 600, magia: 0 } }
var cartaNaruto = { nome: "Naruto", imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png", atributos: { ataque: 360, defesa: 450, magia: 100 } }
var cartaJackSparrow = { nome: "Jack Sparrow", imagem: "https://www.ofuxico.com.br/img/upload/noticias/2017/05/20/johnny-depp-so-atende-se-for-chamado-de-jack-sparrow_294577_36.jpg", atributos: { ataque: 320, defesa: 200, magia: 100 } }
var cartaLucifer = { nome: "Lúcifer Morningstar", imagem: "https://pbs.twimg.com/profile_images/1084964185732235265/hsA5QNpm_400x400.jpg", atributos: { ataque: 1205, defesa: 999, magia: 999 } }
var cartaFinn = { nome: "Finn", imagem: "https://http2.mlstatic.com/D_NQ_NP_4002-MLB4891065948_082013-O.jpg", atributos: { ataque: 110, defesa: 360, magia: 350 } }
var cartaJack = { nome: "Jack Cachorro", imagem: "https://static3.tcdn.com.br/img/img_prod/906555/180_camiseta_hora_de_aventura_jake_o_cachorro_141_3_7a8466862e0c230ff5ff83e65fbf365a.jpg", atributos: { ataque: 500, defesa: 850, magia: 600 } }
var cartaVoldemort = { nome: "Lord Voldemort", imagem: "https://www.recreio.com.br/images/large/2021/01/11/lord-voldemort-1226566.jpg", atributos: { ataque: 500, defesa: 600, magia: 999 } }
var cartaResplendor = { nome: "Sr. Resplendor", imagem: "https://cinemaratona.com/wp-content/uploads/2021/06/rick-morty-x-divulgacao.jpg", atributos: { ataque: 1000, defesa: 900, magia: 500 } }
var cartaMEGA = { nome: "MEGA MAGIA", imagem: "https://pm1.narvii.com/6353/655655cbd23a2e4cf8cca534aedf72377a51ed54_hq.jpg", atributos: { ataque: 2000, defesa: 2000, magia: 0 } }


var cartaMaquina
var cartaJogador
var cartas = [cartaHarry, cartaRick, cartaThomas, cartaNaruto, cartaJackSparrow, cartaLucifer, cartaFinn, cartaJack, cartaVoldemort, cartaResplendor, cartaMEGA]
// índice        0           1           2           3               4              5             6           7             8             9             10

/* Formato da array */

// carta[0] cartaHarry
// carta[1] cartaRick
// carta[2] cartaThomas
// carta[3] cartaNaruto
// carta[4] cartaJackSparrow
// carta[5] cartaLucifer
// carta[6] cartaFinn
// carta[7] cartaJack
// carta[8] cartaVoldemort
// carta[9] cartaResplendor
// carta[10] cartaMEGA

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://i.postimg.cc/ht54Kkqw/3.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if (cartas.length == 0) {
        alert("Fim de jogo")
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Venceu</p>'
        } else if (pontosMaquina > pontosJogador) {
            htmlResultado = '<p class="resultado-final">Perdeu</p>'
        } else {
            htmlResultado = '<p class="resultado-final">Empatou</p>'
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://i.postimg.cc/ht54Kkqw/3.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}
