"use strict"

var SHARED_ENGINE = null

// Handle responses from Leela via main.js proxy
//------------------------------------------------
//const { ipcRenderer } = require('electron')
ipcRenderer.on('leela-response', (event, arg) => {
  const lines = arg.response
  for (var line of lines) {
    console.log(line)
    SHARED_ENGINE.receive_fn( line)
  }
})

// Engine using a remote REST service instead of lc0
//====================================================
function NewEngine() {
	let eng = Object.create(null)

  // Hit leela endpoint and call completion with result
  //--------------------------------------------------------
  eng.hit_leela_endpoint = function( ep, parms) {
    if (!ep) {
      var action = parms
      if (action == 'init') {
        this.hit_leela_endpoint.waiting = false
        this.hit_leela_endpoint.request_id = ''
        return
      }
      else if (action == 'waiting') { return this.hit_leela_endpoint.waiting }
      else if (action == 'cancel') { this.hit_leela_endpoint.waiting = false; return }
    } // if (!ep)
    if (this.hit_leela_endpoint.waiting) { return false }

    console.log( `hit_leela_endpoint(): ${ep}`)
    var data = { 'ep': ep, 'parms':parms }
    ipcRenderer.send('call-leela', data)
  } // hit_leela_endpoint()

  //--------------------------------
	eng.send = function(cmds) {
    var parms = { 'cmds': cmds, 'config':{} }
    this.hit_leela_endpoint( 'send_cmd', parms)
	} // send()

  //--------------------------------------------------
	eng.setup = function(receive_fn, err_receive_fn) {
		this.receive_fn = receive_fn
		this.err_receive_fn = err_receive_fn
  } // setup()

  eng.hit_leela_endpoint('', 'init')

  SHARED_ENGINE = eng
	return eng
} // NewEngine()
