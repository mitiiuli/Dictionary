var dict = [];
function addWord() {
    var cuvant = document.getElementById('newWord').value;
    console.log(cuvant);
    if (!dict.includes(cuvant)) {
        dict.push(cuvant);
        document.getElementById('newWord').value = "";
    } else {
        document.getElementById("status").innerHTML = "This word already exists, try a new one";
        setTimeout(function(){
           document.getElementById("status").innerHTML = "";
        },5000);
        document.getElementById('newWord').value = "";
    }
}
function sWord(word) {
  return word == document.getElementById("searchWord").value;
}

function searchWord() {
    if (dict.length != 0) {
       document.getElementById("status").innerHTML = dict.find(sWord);
       if (dict.find(sWord)) {
          document.getElementById("status").innerHTML = "Cuvantul exista";
          document.getElementById("searchWord").value = "";
       } else {
          document.getElementById("status").innerHTML = "Cuvantul nu exista";
          document.getElementById("searchWord").value = "";
       }
    } else {
       document.getElementById("status").innerHTML = "This dictionary is empty";
       setTimeout(function() {
           document.getElementById("status").innerHTML = "";
        },5000);
       document.getElementById("searchWord").value = "";
    }
}
