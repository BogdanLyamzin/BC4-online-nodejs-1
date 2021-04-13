const fs = require("fs").promises;
const path = require("path");

// console.log(__filename);
// console.log(__dirname);

const readMainFile = async (file)=> {
    try {
        // const data = await fs.readFile(`${__dirname}/files/read.txt`, "utf8");
        const filePath = path.join(__dirname, "files", file);
        // console.log(filePath)
        const data = await fs.readFile(filePath, "utf8");
        console.log(data)
    }
    catch(error){
        console.error(error)
    }
};

readMainFile("read.txt");