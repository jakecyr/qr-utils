const fs = require('fs');
const QRUtil = require('../index');

Main();

async function Main() {
    try {
        // generate QR code image file
        await QRUtil.generateImage('HELLO WORLD', 'temp.png');

        // read generated image file
        const imageBuffer = fs.readFileSync('temp.png');

        // parse the QR code image to get the contained data
        const parsedData = await QRUtil.parseQR(imageBuffer);

        console.log(parsedData);
    } catch (error) {
        console.error(error);
    }
}