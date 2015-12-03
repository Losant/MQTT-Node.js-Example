var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', function () {
  console.log('Oh Glorious Day! I have connected to HiveMQ broker. ')
  client.publish('garage-opener', 'open');
  client.end();
});
