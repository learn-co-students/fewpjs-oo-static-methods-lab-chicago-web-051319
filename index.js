class Formatter {
  static capitalize(string){
    return string.slice(0,1).toUpperCase() + string.slice(1);
  }

  static capitalize(string){
    return string.slice(0,1).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string){
    const array = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let sentence = string.slice()
    let words = sentence.split(" ")
    
    words[0] = Formatter.capitalize(words[0]);

    words = words.map((word) => {
      if (!array.includes(word)) {
        word = Formatter.capitalize(word)
      }
      return word;
    });

    return words.join(" ")
  }
}
