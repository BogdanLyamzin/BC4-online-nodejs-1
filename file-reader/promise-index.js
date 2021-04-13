// const fs = require("fs/promises");
const fs = require("fs").promises;

// fs.readFile("read.txt", "utf8")
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

const readMainFile = async (file)=> {
    try {
        const data = await fs.readFile("read.txt", "utf8");
        console.log(data)
    }
    catch(error){
        console.error(error)
    }
};

readMainFile();