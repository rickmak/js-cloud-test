const skygearCloud = require('skygear/cloud');
const handler = require('./src/handler');

skygearCloud.op('op1', function(opts) {
  console.log('op1');
  console.log(opts);
  return {
    'status': 'ok'
  };
});

skygearCloud.op('op:user', function() {
  console.log('hander1');
}, {
  "userRequired": true,
  "keyRequired": true
});

skygearCloud.every('@every 60s', function minute() {
  console.log('every 60');
  return {
    'time': '1 minute'
  }
});

skygearCloud.every('@every 30s', function() {
  console.log('every 30');
});

skygearCloud.beforeSave('note', function user1(record, orig) {
  console.log(record);
  console.log(orig);
  console.log('beforeSave note');
}, {
  "async": false
});
skygearCloud.afterSave('note', function user1(record, orig) {
  console.log('afterSave note');
});
skygearCloud.beforeDelete('note', function(record, orig) {
  console.log('beforeDelete note');
});
skygearCloud.afterDelete('note', function(record, orig) {
  console.log('afterDelete note');
});
