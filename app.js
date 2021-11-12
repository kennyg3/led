const express = require('express');
const app = express();
const port = 3000;
const Govee = require('node-govee-led');
var GoveeClient = new Govee({
  apiKey: '0c869d32-927d-4187-82bc-7fe8ba91f878',
  mac: 'DE:7A:A4:C1:38:70:DF:E6',
  model: 'H6160'
});
const brightnessLevel = 25;
turnOn = () => {
  GoveeClient.turnOn();
};

turnOff = () => {
  GoveeClient.turnOff();
};
setBrightness = () => {
  GoveeClient.setBrightness(brightnessLevel);
};
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/turnoff', (req, res, next) => {
  turnOff();
  res.statusCode = 200;
  next();
});
app.get('/turnon', (req, res, next) => {
  turnOn();
  res.statusCode = 200;
  next();
});
// GoveeClient.setColor('#f4cccc');
// GoveeClient.getDevices().then((data) => console.log(data));
