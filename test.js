var specConsumer = require('shift-spec-consumer');
var fs = require('fs');
specConsumer(fs.readFileSync('spec.idl', 'utf8'), fs.readFileSync('attribute-order.conf', 'utf8'));
