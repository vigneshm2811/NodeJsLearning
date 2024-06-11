const fs = require('node:fs');
const path = require('path')
const fsPromise = require('node:fs/promises')
// const fsPromise = require('fs').promises

//reading the file 
// fs.readFile(path.join(__dirname, 'sample.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });


const fileOps = async () => {
    try {
        //reading the file
        const data = await fsPromise.readFile(path.join(__dirname, 'files', 'sample.txt'), 'utf8');
        console.log(data);
        //write file which create new file
        await fsPromise.writeFile(path.join(__dirname, 'files', 'monster.txt'), "file created successfuly");
        console.log("write completed");

        //append write on existing file
        await fsPromise.appendFile(path.join(__dirname, 'files', 'monster.txt'), "\n \nthis the text that append");
        console.log("Append completed");

        //rename file
        await fsPromise.rename(path.join(__dirname, 'files', 'monster.txt'), path.join(__dirname, 'files', 'renamed.txt'));
        console.log("rename completed");

        //delete file
        // await fsPromise.unlink(path.join(__dirname, 'files', 'monster.txt'))

    } catch (error) {
        console.error(error);

    }
}
fileOps()

// its look lik ea callback hell
//write file which create new file
// fs.writeFile(path.join(__dirname, 'monster.txt'), "file created successfuly", (err) => {
//     if (err) throw err;
//     console.log('Wtrite complted');

//     //append write on existing file
//     fs.appendFile(path.join(__dirname, 'monster.txt'), "\n \nthis the text that append", (err) => {
//         if (err) throw err;
//         console.log('append success');

//         //rename file
//         fs.rename(path.join(__dirname, 'monster.txt'), path.join(__dirname, 'renamed.txt'), (err) => {
//             if (err) throw err;
//             console.log('file successfully renamed');
//         })

//     })
// })


