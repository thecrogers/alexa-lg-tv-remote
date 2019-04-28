const http = require('http');

exports.handler = async (event) => {
    // TODO implement
    let intent = event.request.intent.name;
    let text = "";
    console.log(intent);
    if (intent == "startApp") {
        var app = event.request.intent.slots.app.value.toLowerCase()
        http.get('http://104.248.12.211/' + intent + "/" + app)
        text = "Asking stevie the tv to start" + app + " on the tv.";
    } else {
        http.get('http://104.248.12.211/'+ intent)
        text =  "Asking stevie the tv to " + intent + " on the tv.";
    }
    
    event.response= {
        outputSpeech: {
            type: "PlainText",
            text: text
        }
    }
    return event;
};

