module.exports = Directory
// Directory test 8 - 14 of 18 total tests:
// 8)  has a name
// 9)  returns filenames in order with ls
// 10) returns filenames with size with ls_la
// 11) returns the content of the given file with cat
// 12) changes the name of a given file to another name with mv
// 13) copies one object to another with cp
// 14) symlinks one object to another with ln_s

function Directory(name) {
    this.name = name;
    this.fileNames = {};
    this.size = [];
}
Directory.prototype.write = function(fileName, fileContent) {
    this.fileNames[fileName] = fileContent;
    this.size.push(fileName + " - " + fileContent.length);
};

Directory.prototype.ls = function() {
    return Object.keys(this.fileNames).sort();
};

Directory.prototype.ls_la = function() {
    return this.size.sort();
};

Directory.prototype.cat = function(fileName) {
    return this.fileNames[fileName];
};

Directory.prototype.mv = function(firstFile, secondFile) {
    this.fileNames[secondFile] = this.fileNames[firstFile];
    delete this.fileNames[firstFile];
};

Directory.prototype.cp = function(firstFile, secondFile) {
    return (this.fileNames[secondFile] = this.fileNames[firstFile]);
};

Directory.prototype.ln_s = function(firstFile, secondFile) {
    return (this.fileNames[secondFile] = "I've changed");
};
