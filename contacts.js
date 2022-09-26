const { constants } = require('buffer');
const fs = require('fs'); 

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//membuat direktori
const dirPath = './data'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}

//membuat file
const dataPath = './data/contact.json'
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}

//membuat pembaca data
const loadContact = ()=>{
    const loadFile = fs.readFileSync('data/contact.json', 'utf-8')
    const contacts = JSON.parse(loadFile)
    return contacts
}

//membuat pembaca data yang lebih detail
const findContact = (nama)=>{
    const kontak = loadContact()
    const contact = kontak.find((con)=> con.nama === con.nama);
    console.log(contact)
    return contact;
}


module.exports = {loadContact, findContact}