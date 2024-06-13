const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

const fs = require('node:fs');
const path = require('path')
const fsPromise = require('node:fs/promises')

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'dd/MM/yyyy\tHH:mm \t')}`
    const logItem = `${dateTime}\t${uuid()} \t ${message}\n`
    console.log(logItem)
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromise.mkdir(path.join(__dirname, 'logs'))
        }
        await fsPromise.appendFile(path.join(__dirname, 'logs', 'eventFile.txt'), logItem)
    } catch (error) {
        console.error(error);
    }
}

module.exports = logEvents