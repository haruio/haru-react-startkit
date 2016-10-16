/**
 * Created by pheadra on 9/11/16.
 */

import debug from 'debug'
const log = debug('application:logger')

/* 임시로 만들어 놓음. 나중에 상황에 따라서 지우자 */
let Logger = (function () {
  var logQueue = []

  // Log User actions
  function log(event) {
    if (event.ga == true) {
      //ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue_int)
    }
    logQueue.push(event)
  }

  // Log Screen move event
  function move(prev, next, query) {
    logQueue.push(prev + " -> " + next)
  }

  function _sendLog() {
    // send log from queue to server
    _emptyQueue()
  }

  function _emptyQueue() {
    logQueue = []
  }

  // 5분마다 로그 전송
  setInterval(function () {
    _sendLog()
  }, 300 * 1000)

  // 화면 종료 시 로그 전송
  document.body.addEventListener("beforeunload", function () {
    _sendLog()
  });

  return {
    log: log,
    move: move
  }
})()

export default Logger
