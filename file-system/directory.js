module.exports = Directory

function Directory(name) {
  this.name = name
  this._filenames = []
  this._filenamecontent = []
  this._fileObj = {}
  this._content;
}

Directory.prototype.ls = function() {
  return this._filenames
}

Directory.prototype.write = function(filename, content) {
  this._filenames.unshift(filename)
  this._fileObj[filename] = content
  this._filenamecontent.unshift(filename + ' - ' + content.length)
  this._content = content
}

Directory.prototype.ls_la = function() {
  return this._filenamecontent
}

Directory.prototype.cat = function() {
  return this._content
}

Directory.prototype.mv = function() {
  
}
