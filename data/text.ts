import { error } from "console"

const t1 = [
    "Quem semeia vento colhe tempestade.",
    "Mais vale tarde do que nunca.",
    "Quem muito abraça pouco aperta.",
    "Águas passadas não movem moinhos.",
    "A pressa é inimiga da perfeição.",
    "Cada macaco no seu galho.",
    "Quem não tem cão caça com gato.",
    "Antes tarde do que nunca.",
    "A esperança é a última que morre.",
    "Quem não arrisca, não petisca."
]

const t2 = `Harry acordou cedo na manhã seguinte. Embora soubesse que já era dia, continuou com os
olhos bem fechados.
“Foi um sonho”, disse a si mesmo com firmeza. “Sonhei que um gigante chamado Rúbeo
Hagrid veio me dizer que eu ia para uma escola de magia. Quando abrir os olhos estarei em
casa no meu armário.”
`
const t3 = `
O Sr. e a Sra. Dursley, da rua dos Alfeneiros, n°
 4, se orgulhavam de dizer que eram
perfeitamente normais, muito bem, obrigado. Eram as últimas pessoas no mundo que se
esperaria que se metessem em alguma coisa estranha ou misteriosa, porque simplesmente não
compactuavam com esse tipo de bobagem.
O Sr. Dursley era diretor de uma firma chamada Grunnings, que fazia perfurações. Era um
homem alto e corpulento quase sem pescoço, embora tivesse enormes bigodes. A Sra. Dursley
era magra e loura e tinha um pescoço quase duas vezes mais comprido que o normal, o que era
muito útil porque ela passava grande parte do tempo espichando-o por cima da cerca do
jardim para espiar os vizinhos. Os Dursley tinham um filhinho chamado Dudley, o Duda, e em
sua opinião não havia garoto melhor em nenhum lugar do mundo`


const t4 = `O último mês de Harry na casa dos Dursley não foi nada divertido. É verdade que Duda
agora estava tão apavorado com Harry que não queria nem ficar no mesmo aposento com ele,
e tia Petúnia e tio Válter não trancaram Harry no armário nem o obrigaram a fazer nada,
tampouco gritaram com ele – na verdade, sequer falaram com ele. Meio aterrorizados, meio
furiosos, agiam como se a cadeira em que Harry se sentasse estivesse vazia. Embora isso
fosse sob muitos aspectos um progresso, tornou-se um tanto deprimente depois de algum
tempo.
Harry ficava em seu quarto, com a nova coruja por companhia. Decidira chamá-la Edwiges,
um nome que encontrara na História da magia. Seus livros de escola eram muito
interessantes. Deitava-se na cama e lia até tarde da noite. Edwiges voava para dentro e para
fora da janela, quando queria. Era uma sorte que tia Petúnia não aparecesse mais para passar
o aspirador de pó, porque Edwiges não parava de trazer ratos mortos para o quarto. Toda
noite, antes de se deitar para dormir, Harry riscava mais um dia no pedaço de papel que
pregara na parede, para contar os dias que faltavam até primeiro de setembro.
No último dia de agosto ele achou melhor falar com os tios sobre a ida à estação no dia
seguinte, por isso desceu à sala de estar onde eles estavam assistindo a um programa de
auditório na televisão. Pigarreou para avisar que estava ali e Duda deu um berro e saiu
correndo da sala.`

const t5 = `O Sr. e a Sra. Dursley, da rua dos Alfeneiros, no
4, se orgulhavam de dizer que eram
perfeitamente normais, muito bem, obrigado. Eram as últimas pessoas no mundo que se
esperaria que se metessem em alguma coisa estranha ou misteriosa, porque simplesmente não
compactuavam com esse tipo de bobagem.
O Sr. Dursley era diretor de uma firma chamada Grunnings, que fazia perfurações. Era um
homem alto e corpulento quase sem pescoço, embora tivesse enormes bigodes. A Sra. Dursley
era magra e loura e tinha um pescoço quase duas vezes mais comprido que o normal, o que era
muito útil porque ela passava grande parte do tempo espichando-o por cima da cerca do
jardim para espiar os vizinhos. Os Dursley tinham um filhinho chamado Dudley, o Duda, e em
sua opinião não havia garoto melhor em nenhum lugar do mundo.
Os Dursley tinham tudo que queriam, mas tinham também um segredo, e seu maior receio
era que alguém o descobrisse. Achavam que não iriam aguentar se alguém descobrisse a
existência dos Potter. A Sra. Potter era irmã da Sra. Dursley, mas não se viam havia muitos
anos; na realidade a Sra. Dursley fingia que não tinha irmã, porque esta e o marido
imprestável eram o que havia de menos parecido possível com os Dursley. Eles estremeciam
só de pensar o que os vizinhos iriam dizer se os Potter aparecessem na rua. Os Dursley sabiam
que os Potter tinham um filhinho, também, mas nunca o tinham visto. O garoto era mais uma
razão para manter os Potter a distância; eles não queriam que Duda se misturasse com uma
criança daquelas.
Quando o Sr. e a Sra. Dursley acordaram na terça-feira monótona e cinzenta em que a nossa
história começa, não havia nada no céu nublado lá fora sugerindo as coisas estranhas e
misteriosas que não tardariam a acontecer por todo o país. O Sr. Dursley cantarolava ao
escolher a gravata mais sem graça do mundo para ir trabalhar e a Sra. Dursley fofocava
alegremente enquanto lutava para encaixar um Duda aos berros na cadeirinha alta.
Nenhum deles reparou em uma coruja parda que passou, batendo as asas, pela janela.
Às oito e meia, o Sr. Dursley apanhou a pasta, deu um beijinho no rosto da Sra. Dursley e
tentou dar um beijo de despedida em Duda mas não conseguiu, porque na hora Duda estava
tendo um acesso de raiva e atirava o cereal nas paredes.
– Pestinha – disse rindo contrafeito o Sr. Dursley ao sair de casa. Entrou no carro e deu
marcha à ré para sair do estacionamento do número quatro.
Foi na esquina da rua que ele notou o primeiro indício de que algo estranho ocorria – um
gato lia um mapa. Por um instante o Sr. Dursley não percebeu o que vira – em seguida virou
rapidamente a cabeça para dar uma segunda olhada. Havia um gato de listras amarelas sentado
na esquina da rua dos Alfeneiros, mas não havia nenhum mapa à vista. Em que estaria
pensando naquela hora? Devia ter sido um efeito da luz. Ele piscou e arregalou os olhos para
o gato. O gato o encarou. Enquanto virava a esquina e subia a rua, espiou o gato pelo espelho
retrovisor. Ele agora estava lendo a placa que dizia rua dos Alfeneiros – não, estava olhando
a placa: gatos não podiam ler mapas nem placas. O Sr. Dursley sacudiu a cabeça e tirou o gato
do pensamento. Durante o caminho para a cidade ele não pensou em mais nada exceto no
grande pedido de brocas que tinha esperanças de receber naquele dia.`

function randomT1() {
   return t1[Math.floor(Math.random() * t1.length)]
}

const allTextTypes: string[] = ['', randomT1(), t2, t3, t4, t5]


type Sizes = 1 | 2 | 3 | 4 | 5
function getText(textSize: Sizes):string {
    if(allTextTypes[textSize]) {
        return allTextTypes[textSize]
    }
    throw 'Invalid size'
}

export default getText
export { Sizes }