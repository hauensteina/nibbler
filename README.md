# Nibbler for a REST Server

This a version of Nibbler modified to communicate with a
remote REST version of Leela Chess Zero.

The idea is that anybody can just use lc0 without
needing a GPU or even any install of Leela at all.

Nibbler is an Electron app, so make sure you have Node and Electron installed.
Tested on Mac and Windows, but should work on Linux, too.

To start, say

`$ npm run start`

To see if the remote server is up:

`$ curl -d '{"cmds":[ "ucinewgame", "position startpos moves b2b4", "go nodes 1" ]}' -H "Content-Type: application/json" -X POST https://ahaux.com/lc0_server/send_cmd`

If you want to host an lc0 server yourself, the code for the remote server can be found here:

https://github.com/hauensteina/lc0-server.git

The original Nibbler with detailed build instructions etc is here:

https://github.com/fohristiwhirl/nibbler.git

=== The End ===
