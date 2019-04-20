const Controller = require('./propertyController')

module.exports = [
    {method: 'GET',path: '/propertyDataList',handler: Controller.propertyDataList},
    {method: 'POST', path: '/propertyDetail', handler: Controller.propertyDetail},
    {method: 'GET', path: '/propertyRecord/{id}', handler: Controller.propertyRecord},
    {method: 'PUT', path: '/propertyRecordUpdate/{id}', handler: Controller. propertyRecordUpdate},
    {method: 'DELETE', path: '/propertyRecordDelete/{id}', handler: Controller. propertyRecordDelete}

];
