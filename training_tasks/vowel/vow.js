var fs = require('fs');

var readfile=fs.readFileSync('vowel.txt','utf-8');
var filelc=readfile.toLowerCase();
var textlength=filelc.length;
	for(var i=0;i<textlength;i++){
             readfile=readfile.replace('a',"");
             readfile=readfile.replace('e',"");
             readfile=readfile.replace('i',"");
             readfile=readfile.replace('o',"");
             readfile=readfile.replace('u',"");
            } 
        const nfile=fs.writeFileSync('newfile.txt',readfile);
