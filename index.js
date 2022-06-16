const qrcode = require('qrcode');
const Jimp = require('jimp');
const QrCode = require('qrcode-reader');

function generateDataURL(data) {
  return new Promise((resolve, reject) => {
    qrcode.toDataURL(data, (err, url) => (err ? reject(err) : resolve(url)));
  });
}

async function generateBase64(data) {
  const dataUrl = await generateDataURL(data);
  return dataUrl.replace(/^data:image\/png;base64,/, '');
}

function generateImage(data, imagePath) {
  return new Promise((resolve, reject) => {
    qrcode.toFile(imagePath, data, (err) => (err ? reject(err) : resolve()));
  });
}

function parseQR(bufferData) {
  return new Promise((resovle, reject) => {
    Jimp.read(bufferData, (err, image) => {
      if (err) {
        reject(err);
      } else {
        const qr = new QrCode();

        qr.callback = (err, value) => {
          if (err) {
            reject(err);
          } else {
            resovle(value.result);
          }
        };

        qr.decode(image.bitmap);
      }
    });
  });
}

module.exports = {
  generateDataURL,
  generateBase64,
  generateImage,
  parseQR,
};
