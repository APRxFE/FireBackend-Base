var Rx = require('rxjs/Rx')
var Queue = require('firebase-queue')
var cron = require('node-cron')
//var webpush = require('web-push')

var merge = require('merge')
require('date-utils')

var environment = require('./environments/environment.ts')
var fireCorx = require('./modules/FireCorx-Backend')

global.isProd = false
environment.production && (isProd = true) // 실 서버
//var serviceAccount = require(environment.serviceAccount)
//webpush.setGCMAPIKey(environment.gcmServiceKey)

// fireCorx.init(environment.databaseURL, serviceAccount)

console.log('FireBackend Server Start : '+(new Date()).toFormat('YYYY.MM.DD HH24:MM:SS'))

///// QUEUE /////

///// CRON /////

/*
cron.schedule('0 4 * * *', () => { // 매일 오전 4시 처리
})
*/