const fs = require('fs');


//remove directory
if (fs.existsSync('./newdirectory')) {
    fs.rmdir('./newdirectory', (err) => {
        if (err) throw err
        console.log(" Dirctory deleted")
    })
}
//make directory
if (!fs.existsSync('./newdirectory')) {
    fs.mkdir('./newdirectory', (err) => {
        if (err) throw err
        console.log("new Dirctory created")
    })
}

// exit on uncaught errors
process.on('uncaughtExecption', err => {
    console.error(`There was an uncaught error:${err}`)
    process.exit(1)
})