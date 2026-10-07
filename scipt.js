let music = "";

let result = document.getElementById("result");

document.getElementById("folkBtn").addEventListener("click", function() {
    music = "folk";
    checkMood();
});

document.getElementById("rnbBtn").addEventListener("click", function() {
    music = "rnb";
    checkMood();
});

document.getElementById("hiphopBtn").addEventListener("click", function() {
    music = "hiphop";
    checkMood();
});

function checkMood() {

    if (music === "folk") {
        result.textContent = "Tigo feels bored and is not interested.";
    }

    else if (music === "rnb") {
        result.textContent = "Tigo feels relaxed and comfortable.";
    }

    else if (music === "hiphop") {
        result.textContent = "Tigo starts moving to the beat and feels happy!";
    }

}