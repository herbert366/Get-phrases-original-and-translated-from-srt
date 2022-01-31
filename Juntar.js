const fs = require('fs')
const fraseEscolhidas = fs.readFileSync('fraseEsco.txt', 'utf8')
const traduzidas = fs.readFileSync('tradu.txt', 'utf8')

function sanitizer(text) {
  return text.replace(/\r/g, '')
}

const frasesEscolhidaseSanitizadas = sanitizer(fraseEscolhidas).split('\n')
const frasesTraduzidas = sanitizer(traduzidas).split('\n')

function juntarArrays(fraseesEsco, frasesTraduzidas) {
  const frases = []
  for (let i = 0; i < fraseesEsco.length; i++) {
    frases.push(fraseesEsco[i], frasesTraduzidas[i], '\n')
  }
  return frases
}

const Juntos = juntarArrays(frasesEscolhidaseSanitizadas, frasesTraduzidas)

const frasesJuntas = Juntos.map(frase => {
  if (frase.includes(' ')) {
    const primeiraPalavra = frase.split(' ')[0]
    const primeiraLetra = primeiraPalavra.charAt(0).toUpperCase()
    const resto = frase.replace(
      primeiraPalavra,
      primeiraLetra + primeiraPalavra.slice(1)
    )
    return resto
  } else {
    return frase
  }
})

fs.writeFileSync('frasesETradução.txt', frasesJuntas.join('\n'))
