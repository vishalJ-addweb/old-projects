const fs = require("fs");
var ans = fs.readFileSync("file.txt", "utf8");

for(let i=0;i<ans.length;i++)
{
    ans = ans.replace("a","");
    ans = ans.replace("e","");
    ans = ans.replace("i","");
    ans = ans.replace("o","");
    ans = ans.replace("u","");
}

const finalContent = fs.writeFileSync("finalFile.txt", ans);