const CountyCtrl = require('./countyController')


module.exports = [

   { method: 'POST', path: '/countyDetail', handler: CountyCtrl.countyDetail},
   {method: 'POST',path: '/countyDataList',handler: CountyCtrl.countyDataList},
   {method: 'POST', path: '/countyRecordUpdate/{id}', handler: CountyCtrl. countyRecordUpdate},
]