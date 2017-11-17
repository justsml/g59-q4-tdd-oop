module.exports = Directory

function Directory(name) {
  this.name = name
  this.files = {}
}

Directory.prototype.write = function(name, data) {
  if (this.files[name]) {
    this.files[name].data = data
  } else {
    this.files[name] = {data}
  }
}

Directory.prototype.ls = function() {
  return Object.keys(this.files).sort()
}

Directory.prototype.ls_la = function() {
  return Object.keys(this.files)
    .map(name => `${name} - ${this.files[name].data.length}`)
    .sort()
}

Directory.prototype.cat = function(fileName) {
  return this.files[fileName].data
}

Directory.prototype.mv = function(firstFile, secondFile) {
  this.files[secondFile] = this.files[firstFile]
  delete this.files[firstFile]
}

Directory.prototype.cp = function(firstFile, secondFile) {
  this.files[secondFile] = Object.assign({}, this.files[firstFile])
}

Directory.prototype.ln_s = function(firstFile, secondFile) {
  this.files[secondFile] = this.files[firstFile]
}
