import { MomoIsDogHashtags } from '../resources/MomoIsDog.js'
import { HitchingToGoHashtags } from '../resources/HitchingToGo.js'

const numberOfHashtags = 27;

var prevHashtags = [];

function generateHashtags() {
    var hashtagsToUse = MomoIsDogHashtags
    if (document.getElementById("HitchingToGo").checked)
    {
        hashtagsToUse = HitchingToGoHashtags;
    }

    var hashtags = [];
    hashtagsToUse.required.forEach(element => {
        hashtags.push(element);
    });

    while (hashtags.length < numberOfHashtags) {
        var hashtagIndex = Math.floor(Math.random() * hashtagsToUse.optional.length);
        var hashtag = hashtagsToUse.optional[hashtagIndex];
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