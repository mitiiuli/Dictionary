
function addword()
{
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
function s_word(word) {
  return word == document.getElementById("search_word").value;
}

function searchword()
{
    document.getElementById("demo").innerHTML = dict.find(s_word);
    if(dict.find(s_word))
    {
       document.getElementById("demo").innerHTML = "Cuvantul exista";
    }
    else
    {
       document.getElementById("demo").innerHTML = "Cuvantul nu exista";
    }
}
