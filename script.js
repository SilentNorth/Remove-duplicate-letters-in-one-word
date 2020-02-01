"use strict";
window.onload = function(){

    function charRemover(str) {
        if(!str) {
            return;
        } else {
        let separator = ["?", "!", ":", ";", ",", ".", " ", "\t"];
        let arrOfLetters = str.split(""), start = 0, words = [], lettersToDelete = [], result;

        arrOfLetters.forEach(function(letter, i) {

            if(separator.indexOf(letter) != -1) {

                words.push(str.substr(start, i - start));
                start = i + 1;
            }
        });
        words.push(str.substr(start));                          

        let tempSet = new Set();

        words.forEach(function(word) {
            
            let tempLength = 1;
            word.split("").forEach(function(letter) {
                tempSet.add(letter);
                if(tempLength != tempSet.size) {
                    lettersToDelete.push(letter);
                    tempLength--;
                }
                tempLength++;
            });
            tempSet.clear();
        });    
        
        for(let i = 0; i < arrOfLetters.length; i++) {
            lettersToDelete.forEach(function(letterToRemove) {
                
                if(arrOfLetters[i] == letterToRemove) {
                    arrOfLetters[i] = "";
                }            
            })
        };   

        result = arrOfLetters.join("");
        return result;}
    }

    function output() {
        document.getElementById("outputField").value = charRemover(document.getElementById("inputField").value);
        document.getElementById("inputField").value = "";
        document.getElementById("output_block").style.visibility = "visible";
    }

    document.getElementById("inputButton").onclick = output;

}
