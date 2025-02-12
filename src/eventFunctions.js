import fs from 'fs'

const readable = fs.createReadStream('big.file')
const writable = fs.createWriteStream('saida.file')

readable.on('data', (chunk) => {
    console.log(`Lendo arquivo chunk: ${chunk.length} bytes`)
    
    readable.pause();
    console.log('Stream pausado...')

    setTimeout(() => {
        console.log('Retomando o stream...')
        readable.resume()
        writable.write(chunk)
        console.log('Escrevendo no arquivo...')
        console.log(chunk.toString())
        console.log('_____________________________')
    }, 3000)
})

readable.on('error', (err) => {
    console.log(`Erro no stream de leitura: ${err}`)
})

readable.on('end', () => {
    console.log('Fim da leitura, finalizando escrita...')
    writable.end()
})

writable.on('error', (err) => {
    console.log(`Erro no stream de escrita: ${err}`)
})

writable.on('drain', () => {
    console.log(`Buffer esvaziado, continuando a escrita...`)
})
// writable.on('finish')
