const path = require('path');
const fs = require('fs');
const QRUtil = require('../index');

Main();

async function Main() {
  try {
    const IMAGE_PATH = path.join(__dirname, './temp.png');
    // generate QR code image file
    await QRUtil.generateImage('HELLO WORLD', IMAGE_PATH);

    // read generated image file
    const imageBuffer = fs.readFileSync(IMAGE_PATH);

    // parse the QR code image to get the contained data
    const parsedData = await QRUtil.parseQR(imageBuffer);

    console.log(parsedData);
  } catch (error) {
    console.error(error);
  }
}
