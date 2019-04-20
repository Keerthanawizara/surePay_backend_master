const Emailctrl = require('./emailController')

module.exports = [
    {method: 'POST',
     path: '/sendEmail', 
     handler: Emailctrl
    }]