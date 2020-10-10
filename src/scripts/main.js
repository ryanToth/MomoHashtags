var numberOfHashtags = 27;

var requiredHashtags = [
    "momoisdog"
]

var optionalHashtags = [
    "shichon",
    "shichonsofinstagram",
    "shichonpuppy",
    "shichonlife",
    "shichonstagram",
    "shichonlove",
    "shichonlovers",
    "shichonofinstagram",
    "shichons",
    "shichonpuppies",
    "shichonoftheday",
    "puppytraining",
    "puppylovers",
    "puppyfun",
    "puppypic",
    "puppypower",
    "puppyplay",
    "puppytime",
    "puppymodel",
    "puppyproblems",
    "puppycuddles",
    "puppykisses",
    "puppydaily",
    "puppypics",
    "puppysnuggles",
    "puppyadventures",
    "puppyschool",
    "petgrooming",
    "petcare",
    "petgram",
    "petmodel",
    "sleepypuppy",
    "weeklyfluff",
    "dogsofinstagram",
    "pupoftheday",
    "tinypaws",
    "tinypuppy",
    "babydoggy",
    "tinypup",
    "cutepup",
    "dogsofseattle",
    "floof",
    "floofy",
    "floofydog",
    "fluffball",
    "floppyears",
    "doggydog",
    "dogsarebetterthanhumans",
    "whitedogsofinstagram",
    "cutedogsdaily",
    "momo",
    "spotteddog",
    "waggingtail",
    "littlepup",
    "littlepuppy",
    "fluffydogs",
    "fluffydogsofinstagram",
    "zuchon",
    "zuchonsofinstagram",
    "teddybear",
    "teddybearpuppy",
    "zuchonpuppy",
    "furbabiesofinstagram",
    "gamerdog",
    "dailypuppy",
    "furbabies",
    "furryfriend",
    "seattledog",
    "seattledogs",
    "PNWpup",
    "pnwpups",
    "dogsofpnw",
    "pnwdog",
    "pnwdogslife",
    "featurethatdoggo",
    "dogsthatgram",
    "dogbloggers",
    "dogmoments",
]

var prevHashtags = [];

function generateHashtags() {
    var hashtags = [];
    requiredHashtags.forEach(element => {
        hashtags.push(element);
    });

    while (hashtags.length < numberOfHashtags) {
        var hashtagIndex = Math.floor(Math.random() * optionalHashtags.length);
        var hashtag = optionalHashtags[hashtagIndex];
        if (!hashtags.includes(hashtag) && !prevHashtags.includes(hashtag)) {
            hashtags.push(hashtag);
        }
    }

    prevHashtags = hashtags;

    var textArea = document.getElementById("hashtagsDisplay");
    textArea.value = "";
    for (var i = 0; i < hashtags.length; i++) {
        textArea.value += "#" + hashtags[i];
        if (i != hashtags.length - 1) {
            textArea.value += " ";
        }
    }

    textArea.select(); 
    textArea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    textArea.setSelectionRange(0, 0);
}