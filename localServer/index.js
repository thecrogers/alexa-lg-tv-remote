var express = require('express')
var app = express()
const port = 3000
const { spawn } = require('child_process')
const CWD = '/home/pi/LGWebOSRemote-master';
const cenv = Object.assign({}, process.env, { PATH: process.env.PATH + ':/usr/local/bin' });


app.get("/volumeUp", function(req, res) {
    const deploySh = spawn('bash', [ 'lgtv.sh', 'volumeUp' ], {
        cwd: CWD,
        env: cenv
    })

    res.status(200).send("OK")
})

app.get("/volumeDown", function(req, res) {
    const deploySh = spawn('sh', [ 'lgtv.sh', 'volumeDown' ], {
        cwd: CWD,
        env: cenv
    })
    res.status(200).send("OK")
})

app.get("/mute", function(req, res) {
    const deploySh = spawn('sh', [ 'lgtv.sh', 'mute' ], {
        cwd: CWD,
        env: cenv
    })
    res.status(200).send("OK")
})

app.get("/play", function(req, res) {
    const deploySh = spawn('sh', [ 'lgtv.sh', 'inputMediaPlay' ], {
        cwd: CWD,
        env: cenv
    })
    res.status(200).send("OK")
})

app.get("/pause", function(req, res) {
    const deploySh = spawn('sh', [ 'lgtv.sh', 'inputMediaPause' ], {
        cwd: CWD,
        env: cenv
    })
    res.status(200).send("OK")
})

app.get("/startApp/:id", function(req, res) {

    var app = getApp(req.params.id);
    console.log(app)
    const deploySh = spawn('sh', [ 'lgtv.sh', 'startApp', app], {
        cwd: CWD, 
        env: cenv
    })
    res.status(200).send("OK")
})

app.get("/turnOn", function(req, res) {
	const deploySh = spawn('sh', [ 'lgtv.sh', 'on' ], {
		cwd: CWD,
		env: cenv
	})
	res.status(200).send("OK")
})

app.get("/turnOff", function(req, res) {
	const deploySh = spawn('sh', [ 'lgtv.sh', 'off' ], {
		cwd: CWD,
		env: cenv
	})
	res.status(200).send("OK")
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

function getApp(app) {
	var result = "";
	switch(app) {
		case "netflix":
			result = "netflix";
			break;
		case "spotify":
			result = "spotify-beehive";
			break;
		case "google play":
			result = "googleplaymovieswebos";
			break;
		case "plex":
			result = "cdp-30";
			break;
		case "youtube":
			result = "youtube.leanback.v4";
			break;
		case "hdmi1":
			result = "com.webos.app.hdmi1";
			break;
		case "hdmi2":
			result = "com.webos.app.hdmi2";
			break;
		case "hdmi3":
			result = "com.webos.app.hdmi3";
			break;
	}
	return result;
}
