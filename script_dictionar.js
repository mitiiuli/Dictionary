var dict = [];
function addWord() {
    var cuvant = document.getElementById('newWord').value;
    console.log(cuvant);
    if (!dict.includes(cuvant)) {
        dict.push(cuvant);
        document.getElementById('newWord').value = "";
    }
    else {
        alert('This word already exists, try a new one');
    }
}
function sWord(word) {
  return word == document.getElementById("searchWord").value;
}

function searchWord() {
    if (dict.length != 0){
       document.getElementById("status").innerHTML = dict.find(sWord);
       if(dict.find(sWord)) {
          document.getElementById("status").innerHTML = "Cuvantul exista";
         }
         else{
             document.getElementById("status").innerHTML = "Cuvantul nu exista";
         }
    }
    else{
       alert('The dictionary is empty');
    }
}
