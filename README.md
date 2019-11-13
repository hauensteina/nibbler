# Nibbler for a REST Server

This a version of Nibbler which is able to communicate with a
remote REST version of Leela Chess Zero.

It's all a work in progress right now, you might want to wait a week before trying.

The idea is that anybody can just use lc0 without
needing a GPU or even any install of Leela at all.

To see if the the remote server is up:

`$ curl -d '{"cmds":[ "ucinewgame", "position startpos moves b2b4", "go nodes 1" ]}' -H "Content-Type: application/json" -X POST https://ahaux.com/lc0_server/send_cmd`

If you want to host yourself, the code for the remote server can be found here:

https://github.com/hauensteina/lc0-server.git

The original Nibbler with detailed build instructions etc is here:

https://github.com/fohristiwhirl/nibbler.git

=== The End ===
