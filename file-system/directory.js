module.exports = Directory

function Directory(name) {
  this.name = name
  this._ls = []
  this._ls_la = []
   this.mycat = []
   this._cp = []




}
Directory.prototype.write = function(file, data){
  // let matchedFile = this._ls.find(fdata => fdata.file = file)
  // console.log("matchedfile: ", file, matchedFile)
  // if(matchedFile){
  //   console.log("SKIPPING PUSH", file, matchedFile)
  //   matchedFile.data = data
  // }else{
  // this._ls.push({file, data})
  //
  // }
  return this._ls.push({file:file, data:data})
}

Directory.prototype.ls = function() {
  return this._ls.map(fdata => fdata.file).reverse()
}

Directory.prototype.ls_la = function() {
  return this._ls.map(fdata => `${fdata.file} - ${fdata.data.length}`)
}

Directory.prototype.cat = function(fileName) {
  // let matchedFile = this._ls.find(fdata => fdata.file = fileName)
  // console.log("cat: ", fileName, matchedFile)
  //   if(matchedFile){
  //     return matchedFile.data
  //   }
  // }


  this._ls.map(fdata => (fileName === fdata.file ? this.acat = fdata.data : this.acat = '' )).toString()

  return this.mycat.push(this.acat)
}

Directory.prototype.mv = function(fileName, changeToName) {
  // let original = this._ls.find(fdata => fdata.file = fileName)
  // if(original){
  //   let f = Object.assign({}, original, {file: changeToName})
  // }
//
   return this._ls.map(fdata => (fileName === fdata.file ? fdata.file = changeToName : fdata.file = fdata.file)).toString()
//
}
//
Directory.prototype.cp = function(originalName, copyName){
  let original = this._ls.find(fdata => fdata.file = originalName)
  if(original){
  let f = Object.assign({}, original, {file: copyName})
  console.log("cp function: ", f.data)
    this._cp.push(f.data)
    console.log(this._cp.toString())
  }
}





//name, write, ls, ls_la, mv, cp, cat
