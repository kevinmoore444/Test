// Join Function


function joingroup(element){
    element.remove();
}



// Heart Function

var heartorangetart = 69
var heartmacarons = 212
var heartcremebrulee = 33

var countorangetart = document.querySelector("#totallikesorangetart")
var countmacarons = document.querySelector("#totallikesmacarons")
var countcremebrulee = document.querySelector("#totallikescremebrulee")


function addheartorangetart(){
    heartorangetart++
    countorangetart.innerText = heartorangetart
}

function addheartmacarons(){
    heartmacarons++
    countmacarons.innerText = heartmacarons
}

function addheartcremebrulee(){
    heartcremebrulee++
    countcremebrulee.innerText = heartcremebrulee
}