var fs = require('fs')
var srt = fs.readFileSync('Marley.srt', 'utf8')
const parser = require('subtitles-parser')

const srtArray = parser.fromSrt(srt)

const pegarFrases = srtArray.map(frase => frase.text)

function sanitizer(text) {
  return text
    .replace(/<.*>/g, '')
    .replace(/\(.*\)/g, '')
    .replace(/\[.*\]/g, '')
    .replace(/-/g, '')
    .replace(/\.../g, '')
    .replace(/\./g, '')
    .replace(/\s\s+/g, ' ')
    .replace(/^.*?:/g, '')
    .replace(/\,(?=\S)/gim, ', ')
    .trim()
}
const frases = sanitizer(pegarFrases.join('\n')).split('\n')

const maiorQue4 = frases.filter(
  frase => frase.split(' ').length >= 4 && frase.split(' ').length <= 6
)

console.log(maiorQue4)
