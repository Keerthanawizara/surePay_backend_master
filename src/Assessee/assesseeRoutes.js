const assesseeCtrl= require('./assesseeController');

module.exports =
    [
     {method: 'GET',path: '/assesseeDataList',handler: assesseeCtrl.assesseeDataList},
     {method: 'POST', path: '/assesseeDetail', handler: assesseeCtrl.assesseeDetail},
     {method: 'GET', path: '/assesseeRecord/{id}', handler: assesseeCtrl.assesseeRecord},
     {method: 'PUT', path: '/assesseeRecordUpdate/{id}', handler: assesseeCtrl. assesseeRecordUpdate},
     {method: 'DELETE', path: '/assesseeRecordDelete/{id}', handler: assesseeCtrl. assesseeRecordDelete}

];

