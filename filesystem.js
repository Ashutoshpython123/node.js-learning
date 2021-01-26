// #### File System Module
const fs = require('fs');
//create a file

fs.writeFile('text.txt', 'hi I am Ashutosh !!', (err) => {
    if (err)
        console.log(err);
    else {
        console.log('file successfully created');
        fs.readFile('text.txt', 'utf8', (err, file) => {
            if (err)
                console.log(err);
            else {
                console.log(file)
            }
        })
    }
});


//rename file
fs.rename('text.txt', 'new_text.txt', (err) => {
    if (err)
        console.log(err);
    else {
        console.log('file successfully renamed');
    }
});

//append file
fs.appendFile('new_text.txt', ' actively looking for job', (err) => {
    if (err)
        console.log(err);
    else {
        console.log('file successfully append')
        fs.readFile('new_text.txt', 'utf8', (err, file) => {
            if (err)
                console.log(err);
            else {
                console.log(file);
            }
        })
    }
});

// delete file
fs.unlink('new_text.txt', (err) => {
    if (err)
        console.log(err);
    else {
        console.log('successfully deleted!!!')
    }
})

//makedir
fs.mkdir('js_learn', (err) => {
    if (err)
        console.log(err);
    else {
        console.log('folder created');
        fs.rmdir('js_learn', (err) => {
            if (err)
                console.log(err);
            else {
                console.log('folder removed!!!');
            }
        })
    }
})


