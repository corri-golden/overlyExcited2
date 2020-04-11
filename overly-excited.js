console.log("Hello, world!")

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];


addExcitement = (theWordArray, punc) => {

        // Each time the for loop executes, you're going to add one more word to this string
        let buildMeUp = ""
    
        for (let i = 0; i < theWordArray.length; i++) {
            console.log(buildMeUp += theWordArray[i] + " ")
            // Concatenate the new word onto buildMeUp
            // Print buildMeUp to the console
            
         if(i % 3 == 2){
            buildMeUp += punc + " "
            // console.log(buildMeUp += punc + " ");
            console.log(buildMeUp)
        } 
        }
    }
 //addExcitement(sentence), "?";
    
// I want to use a question mark
 addExcitement(sentence, "!!!");



 //else {
    //console.log(buildMeUp += theWordArray[i] + "?");

