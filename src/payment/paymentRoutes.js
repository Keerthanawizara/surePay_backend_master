const Controller = require('./paymentController')

module.exports = [
    {method: 'GET',path: '/paymentDataList',handler: Controller.paymentDataList},
    {method: 'POST', path: '/paymentDetail', handler: Controller.paymentDetail},
    {method: 'GET', path: '/paymentRecord/{id}', handler: Controller.paymentRecord},
    {method: 'PUT', path: '/paymentRecordUpdate/{id}', handler: Controller. paymentRecordUpdate},
    {method: 'DELETE', path: '/paymentRecordDelete/{id}', handler: Controller. paymentRecordDelete}

];
