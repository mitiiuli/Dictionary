var dict = [];
function addword() {
    var newWord = document.getElementById('newWord').value;
    console.log(newWord);
    if (!dict.includes(newWord)) {
        dict.push(newWord);
        document.getElementById('newWord').value = "";
    }
    else {
        alert('This word already exists, try a new one');
    }
}
function sword(word) {
  return word == document.getElementById("searchword").value;
}

function searchword() {
    document.getElementById("status").innerHTML = dict.find(sword);
    if(dict.find(s_word)) {
       document.getElementById("status").innerHTML = "Cuvantul exista";
    }
    else{
       document.getElementById("status").innerHTML = "Cuvantul nu exista";
    }
}
