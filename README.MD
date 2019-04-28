# Alexa LG TV Remote

## Deps
This repo needs to be downloaded and installed. 
https://github.com/klattimer/LGWebOSRemote.git
node
npm

## Install

### Local
On a linux device on your local network. install the deps above.

using docker, or foreverJS run localServer/indes.js

### Remote
On a proxy server(any server not on local network that has a stable IP.
using docker, or foreverJS run proxyServer/indes.js

Now on the local machine use an ssh tunnel to connect the two hosts. ssh -R

### Serverless func
create new alexa skill and aws lambda function: 

copy the skillHandler/handler.js as your lambda handler.

## Purpose

The purpose of this project was just a very quick way to have simple controls over my tv. 
I will add better security (https, request signing), and more features as I keep working on this project. 



