class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string) {
    let newStr = []
    let oldStr = string.split(" ")
    const exceptions = ["a","an","but","of","and","for","at","by","from","the"]

    for (let i=0; i< oldStr.length; i++) {
      if (oldStr[i] === oldStr[0]){
        let newWord = this.capitalize(oldStr[i])
        newStr.push(newWord)
      }
      else if (exceptions.includes(oldStr[i])){
        newStr.push(oldStr[i]);
      } else {
        let capWord = this.capitalize(oldStr[i])
        newStr.push(capWord)
      }
    }
    return newStr.join(" ")
  }
}