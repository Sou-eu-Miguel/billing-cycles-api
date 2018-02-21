const express = require('express')

module.exports = function(server){
	const billingCycleService = require('../api/billingCycle/billingCycleService')	
	const summary = require('../api/summary/summaryService')

	//API routes
	const router = express.Router()

	router.route('/summary').get(summary.getSumary)

	server.use('/api',router)	
	billingCycleService.register(router, '/billingCycles')
}