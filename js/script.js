for (var count = 100; count > 0; count = count - 5) {
    console.log(count);
    //comment

}
// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW


// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {
    // Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
    $("button").click(function() {
        console.log("hi")
        var message = $("input").val();
        var wordToPigLatin = ay(message);
        console.log(wordToPigLatin)
        sentenceToPigLatin(message)
        
        $("#message").text(wordToPigLatin);
    });

    function ay(word) {
        return word + "ay";
    }

    function sentenceToPigLatin(sentence) {
        var words = sentence.split(" ");
console.log(words);
        //var words = ["chocolate", "vanilla", "strawberry"];
        //array[]
        for (var i = 0; i < words.length; i++) {
            console.log( ay  words[i]);
        }

    }



});

// Create the sentenceToPigLatin function that takes a sentence as a parameter
//Loops through all the words in the sentence and transforms each word
//It should return a transfromed sentance
