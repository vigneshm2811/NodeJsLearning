const path = require('path')
const fs = require('fs')
const rs = fs.createReadStream(path.join(__dirname, 'files', 'bigFile.txt'), { encoding: 'utf-8' })
const ws = fs.createWriteStream(path.join(__dirname, 'files', 'newBigFile.txt'))

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk)
// })

// alternated method
rs.pipe(ws)