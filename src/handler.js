const skygearCloud = require('skygear/cloud');

skygearCloud.handler('echo', function(req) {
  console.log(req.query);
  console.log(req.json);
  return req.json;
}, {
  method: ['POST'],
  userRequired: false
});

skygearCloud.handler('handler1', function(req) {
  console.log(req.query);
  console.log(req.json);
  req.form(function (err, fields, files) {
    console.log(err);
    console.log(fields);
    console.log(files);
  });
  return '';
}, {
  method: ['POST'],
  userRequired: false
});

skygearCloud.handler('handler2', function(req) {
  console.log(req);
  console.log('hander2');
  return {
    key: 'value'
  };
}, {
  method: ['GET'],
  userRequired: false
});

skygearCloud.handler('privateHandler', function(req) {
  console.log(req);
  console.log('privateHandler');
  return 'String';
}, {
  method: 'POST',
  userRequired: true
});
