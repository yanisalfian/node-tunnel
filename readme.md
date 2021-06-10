# SSH Tunnel
Make ssh tunneling easy with node js. This will keep the tunnel alive as long as the window is not closed. This package use [tunnel-ssh](https://www.npmjs.com/package/tunnel-ssh)

## How To
Update variable ```config``` inside ```index.js```. See config example [here](https://www.npmjs.com/package/tunnel-ssh#config-example)

## Packaging 
```
pkg index.js --targets node10 --output ./dist/ssh-tunnel
```