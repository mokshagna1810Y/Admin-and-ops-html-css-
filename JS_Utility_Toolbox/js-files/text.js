export function wordCount(text) {
    return text.trim().split(" ").length;
}

export function charcount(text){
    let count=0;
    for(let char of text){
        if(char!= " "){
            count++;
        }
    }
    return count;
}

export function longestWord(text) {
    let words = text.trim().split(" ");
    let longest = "";
  
    for (let word of words) {
      if (word !== "" && word.length > longest.length) {
        longest = word;
      }
    }
  
    return longest;
  }

  export function mostFrequentWord(text) {
    let words = text.trim().toLowerCase().split(" ");
    let freq = {};
    let maxWord = "";
    let maxCount = 0;
  
    for (let word of words) {
      if (word === "") continue;
  
      if (freq[word]) {
        freq[word]++;
      } else {
        freq[word] = 1;
      }
  
      if (freq[word] > maxCount) {
        maxCount = freq[word];
        maxWord = word;
      }
    }
  
    return maxWord;
  }
  
  