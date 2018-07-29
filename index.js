var enter = document.getElementById('enter').addEventListener("click", translateWord);
var translations = {
  'hi': 'an-young',
  'let\'s eat': 'mok-ja',
  'sleep well': 'chal-ja',
  'let\'s go': 'ka-ja', 
  'oh no': 'ai-go',
}

function translateWord(){
  var englishInput = document.getElementById('english-input').value.toLowerCase();
  var koreanOutput = document.getElementById('korean-output');
  koreanOutput.textContent = translations[englishInput];
  if (translations[englishInput] === undefined) {
   alert('Word not found in dictionary.') 
  } 
  console.log(translations[englishInput]);
}

