module.exports = Directory

function Directory(name) {
  this.name = name;
  this.fileNames = {};
  this.namesSizes = [];
}

Directory.prototype = {
  constructor: Directory,
  write: function(name, fileContent) {
    this.fileNames[name] = fileContent
    this.namesSizes.unshift(name + ' - ' + fileContent.length)
  },
  ls: function() {
    return Object.keys(this.fileNames).sort();
  },
  ls_la: function() {
    return this.namesSizes;
  },
  cat: function(fileName) {
    return this.fileNames[fileName]
  },
  mv: function(file1, file2) {
    this.fileNames[file2] = this.fileNames[file1];
    delete this.fileNames[file1]
  },
  cp: function(oldFileName, newFileName) {
    this.fileNames
  },
  ln_s: function() {

  }

}
