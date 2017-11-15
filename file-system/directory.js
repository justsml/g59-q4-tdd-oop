module.exports = Directory;

function Directory(name) {
  this.name = name;
  this.fileNames = {};
  this.size = [];
}

// SETS 'filenames[fileName]' TO
Directory.prototype.write = function(fileName, fileContent) {
  this.fileNames[fileName] = fileContent;
  this.size.push(fileName + " - " + fileContent.length);
};

// RETURNS THE KEYS (EACH 'fileName'), AND THEN DISPLAYS THOSE FILE NAMES
Directory.prototype.ls = function() {
  return Object.keys(this.fileNames).sort();
};

// RETURNS THE THE ARRAY 'this.size', WHICH IS AN ARRAY THAT GATHERS THE SIZE OF EACH FILE
Directory.prototype.ls_la = function() {
  return this.size.sort();
};

// RETURNS A 'fileNames' THAT MATCH A PASSED IN 'fileName'
Directory.prototype.cat = function(fileName) {
  return this.fileNames[fileName];
};

// TAKES THE FIRST PASSED IN ARG, 'firstFile', AND APPLIES ITS NAME TO EQUAL
// THE SECONED PASSED IN ARG, 'secondFile', THEN DELETES THE ORIGIONAL FILE 'firstFile'
Directory.prototype.mv = function(firstFile, secondFile) {
  this.fileNames[secondFile] = this.fileNames[firstFile];
  delete this.fileNames[firstFile];
};

// TAKES THE FIRST PASSED IN ARG, 'firstFile', AND APPLIES ITS NAME TO EQUAL
// THE SECONED PASSED IN ARG, 'secondFile'
Directory.prototype.cp = function(firstFile, secondFile) {
  return (this.fileNames[secondFile] = this.fileNames[firstFile]);
};

// TAKES THE SECOND PASSED IN ARG, 'secondFile', AND LINKS IT TO THE
// FIRST PASSED IN ARG, 'firstFile', AND SETS THE 'secondFile' CONTENT TO "I've changed"
Directory.prototype.ln_s = function(firstFile, secondFile) {
  return (this.fileNames[secondFile] = "I've changed");
};
