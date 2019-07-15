class Formatter {

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]+/g, '');
  }

  static titleize(string){

    let i = 0;
    let newArr = [];
    let arr = string.split(" ");

    arr.forEach(word => {
      // forgot how to use includes to except line 22 conditions
      if(arr[i] === arr[0]) {
        let firstWord = word.charAt(0).toUpperCase() + word.slice(1);
        newArr.push(firstWord);
      } else if (word != 'the' && word != 'a' && word != 'an' && word != 'but' && word != 'of' && word != 'and' && word != 'for' && word != 'at' && word != 'by' && word != 'from'){
      let cap = word.charAt(0).toUpperCase() + word.slice(1);
      newArr.push(cap);
    } else {
      newArr.push(word);
    }

     i += 1;

    })
    return newArr.join(" ");
  }

}
