module.exports = Directory

function Directory(name) {
  this.name = name
  this._ls = []
  this._ls_la = []
  this._cat = ''
}

Directory.prototype.ls = function() {
  return this._ls.map(f_data => f_data.file).reverse()
}

Directory.prototype.ls_la = function() {
  return this._ls_la.reverse()
}

Directory.prototype.cat = function(fileName) {
  this._ls.map(f_data => (f_data.file === fileName ? this._cat = f_data.data : this._cat = '')).toString()
  return this._cat
}

Directory.prototype.mv = function(fileName, newFileName) {
  return this._ls.map(f_data => (f_data.file === fileName ? f_data.file = newFileName : f_data.file = f_data.file)).toString()

}

Directory.prototype.cp = function (originalName, copyName) {
  var copy = {}
  this._ls.map(f_data => (f_data.file === originalName ? Object.assign(copy, f_data) : f_data = f_data))
  copy.file = copyName
  return copy.data

}

Directory.prototype.write = function(file, data) {
  this._ls.push({file, data})
  this._ls_la.push(file + " - " + data.length)
}
