module.exports = Directory


function Directory(name) {
    this.name = name;
    this.fileNames = {};
    this.size = [];
  }
  const response = "I've changed"
  const dash = " - "
  

  Directory.prototype.cat = function(file) {
    return this.fileNames[file];
  };

  Directory.prototype.cp = function(x, y) {
    return (this.fileNames[y] = this.fileNames[x]);
  };
  
  Directory.prototype.ls = function() {
    return Object.keys(this.fileNames).sort();
  };

  Directory.prototype.ls_la = function() {
    return this.size.sort();
  };

  Directory.prototype.ln_s = function(x, y) {
    return (this.fileNames[y] = response);
  };

  Directory.prototype.mv = function(x, y) {
    this.fileNames[y] = this.fileNames[x];
    delete this.fileNames[x];
  };
    
  Directory.prototype.write = function(x, load) {
    this.fileNames[x] = load;
    this.size.push(x + dash +load.length);
  };