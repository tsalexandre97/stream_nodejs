import fs from 'fs'
import http from 'http'

const server = http.createServer()

server.on('request', (req, res) => {
    const src = fs.createReadStream('./big.file')
    src.pipe(res)

})

server.listen(8000, () => {
    console.log('Servidor rodando em http://localhost:8000')
})
