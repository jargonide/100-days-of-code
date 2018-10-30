// Picks a random value from array
var randArr = function(arr) {
    if(arr.length > 0) {
        return arr[Math.floor(Math.random() * arr.length)]
    } else {
        return 0;
    }
}

var generate = function(arrVerbs, arrAdj, arrNoun) {
    var randVerb = randArr(arrVerbs);
    var randAdj = randArr(arrAdj);
    var randNoun = randArr(arrNoun);

    var list = ["I've eaten a lot of "+randNoun+" today. I guess I'm feeling a bit "+randAdj+".",
                "The meaning of life is "+randVerb+" a lot of "+randNoun+" in a "+randAdj+" day.",
                randNoun+" is love, "+randNoun+" is life.",
                randVerb+" "+randAdj+"s is not a phrase, dad!",
                "I've retired from my career of "+randVerb+" "+randNoun+".",
                "I drank a cup of "+randAdj+" coffee today!",
                "Stop "+randVerb+" my"+randNoun+"!!! You "+randAdj+" bastard!",
                "Got kicked out of my house for "+randVerb+" my "+randAdj+" cat.",
                "I just won a game of "+randNoun+". I feel "+randAdj+".",
                "My mom told me I can't "+randVerb+" but I did it anyways. #MadLads",
                "Are you a programmer? Can you fix my "+randNoun+"???",
                "Oh man, it's raining cats and "+randNoun+" today.",
                randVerb+" "+randNoun+", a novel"]

    return randArr(list);
}

result = document.getElementById("results");

var updateResults = function() {
    if(verbs.length > 0 && noun.length > 0 && adjectives.length > 0) {
        result.innerHTML = "";
        for(var i = 0; i < 5; i++) {
            result.innerHTML += "<p>"+generate(verbs,noun,adjectives)+"</p>";
        }
    } else {
        result.innerHTML = "";
    }
}

var verbs = []
var adjectives = []
var noun = []


inpVerb = document.getElementById("idVerb");
inpNoun = document.getElementById("idNouns");
inpAdj = document.getElementById("idAdj");

inpVerb.addEventListener('input', (e)=>{
    if(inpVerb.value.indexOf(',') > -1) {
        verbs = inpVerb.value.split(",");
    } else if(inpVerb.value!=""){
        verbs[0] = inpVerb.value;
    } else {
        verb = [];
    }
    updateResults();
});
inpNoun.addEventListener('input', (e)=>{
    if(inpNoun.value.indexOf(',') > -1) {
        noun = inpNoun.value.split(",");
    } else if(inpNoun.value!=""){
        noun[0] = inpNoun.value;
    } else {
        noun = [];
    }
    updateResults();
});

inpAdj.addEventListener('input', (e)=>{
    if(inpAdj.value.indexOf(',') > -1) {
        adjectives = inpAdj.value.split(",");
    } else if(inpAdj.value!=""){
        adjectives[0] = inpAdj.value;
    } else {
        adjectives = [];
    }
    updateResults();
});

