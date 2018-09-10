
// New syntax arrow functions (these are not hoisted though):
const addWord = () => {
  var english = document.getElementById('english').value;
  var korean = document.getElementById('korean').value;
  translations[english] = korean; 
  fillTranslationTable();
}

var enter = document.getElementById('enter').addEventListener("click", translateWord);
var addToDictionary = document.getElementById('add-to-dictionary').addEventListener("click", addWord);

function translateWord(){
  var englishInput = document.getElementById('english-input').value.toLowerCase();
  var koreanOutput = document.getElementById('korean-output');
  koreanOutput.textContent = translations[englishInput];
  if (translations[englishInput] === undefined) {
   alert('Word not found in dictionary.') 
  } 
  console.log(translations[englishInput]);
}

function fillTranslationTable(){
  var x = document.getElementById('translation-table')
  x.innerHTML = "";
  for (var key in translations){
    x.innerHTML += `<h4 class='translation-pair'>
                      ${key}: ${translations[key]}
                      <button class="remove-word" data-english="${key}">x</button>
                   </h4>`;
  }
  addDeleteButtonsListener();
}

// Review this stuff *****************

function addDeleteButtonsListener() {
 var deleteButtons = document.getElementsByClassName('remove-word')
  for (let i=0; i<deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', deleteWord)
  } 
}

function deleteWord(){
  console.log(event.target)


  var englishKey = event.target.dataset.english;
  delete translations[englishKey];
  fillTranslationTable();
}

// Review **************


// This function syntax is hoisted (so you can call the function before its declaration)

// function addWord(){
//   var english = document.getElementById('english').value;
//   var korean = document.getElementById('korean').value;
//   translations[english] = korean; 
//   fillTranslationTable();
// }

fillTranslationTable();


