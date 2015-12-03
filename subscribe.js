var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', function () {
  console.log('Oh Glorious Day! I have connected to HiveMQ broker. ')
  client.subscribe('garage-opener');
});

client.on('message', function (topic, message) {
  console.log(topic);
  console.log(message.toString());
  client.end();
});
