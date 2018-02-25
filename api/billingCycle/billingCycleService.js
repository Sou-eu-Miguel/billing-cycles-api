const _ = require('lodash')
const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get','post','put','delete'])
BillingCycle.updateOptions({new:true, runValidators:true})


BillingCycle.after('post',sendErrorsOrNext).after('put',sendErrorsOrNext)


function sendErrorsOrNext(req, res, next){
	const bundle = res.locals.bundle

	if(bundle.errors){

		let erros = parseErros(bundle.errors)
		res.status(500).json({erros})

	}else{
		next()
	}
}

function parseErros(NodeRestErrors){
	let errors = []
	
	_.forIn(NodeRestErrors, error => errors.push(error.message))

	return errors
}


BillingCycle.route('count',function(req,res,next){
	BillingCycle.count(function(error, value){
		if(error){
			res.status(500).json({errors:[error]})
		}else{
			res.json({value})
		}
	})
})

module.exports = BillingCycle