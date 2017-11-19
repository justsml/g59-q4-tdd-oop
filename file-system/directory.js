module.exports = Directory;

function Directory(name) {
  this.name = name;
  this.fileNames = {};
}

Directory.prototype.ls = {};
