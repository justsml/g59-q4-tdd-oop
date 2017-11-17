module.exports = Directory

function Directory(name) {
  this.name = name
  this.files = {}
}

Directory.prototype.write = function(file, data) {
  if (this.files[file]) {
    this.files[file].data = data
  } else {
    this.files[file] = {
      data
    }
  }
}

Directory.prototype.ls = function() {
  return Object.keys(this.files).sort()
}

Directory.prototype.ls_la = function() {
  return Object.keys(this.files).map(fdata => `${fdata} - ${this.files[fdata].data.length}`).sort()
}

Directory.prototype.cat = function(fileName) {
  return this.files[fileName].data
}

Directory.prototype.mv = function(fileName, changeToName) {
  this.files[changeToName] = this.files[fileName]
  delete this.files[fileName]
}

Directory.prototype.cp = function(originalName, copyName) {
  this.files[copyName] = Object.assign({}, this.files[originalName])
}

Directory.prototype.ln_s = function(original, second) {

  this.files[second] = this.files[original]
  console.log("line 42: ", this.files[original])
}

//name, write, ls, ls_la, mv, cp, cat
