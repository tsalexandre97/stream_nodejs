import fs, { createWriteStream } from 'fs'
import { Transform } from 'stream'

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase())
    }
})

const prefixTransform = new Transform({
    transform(chunk, encoding, callback){
        callback(null, 'Prefix: ' + chunk)
    }
})

const a = fs.createReadStream('big.file')
const b = upperCaseTransform
const c = prefixTransform
const d = fs.createWriteStream('bigUpperCase.file')

a.pipe(b).pipe(c).pipe(d)