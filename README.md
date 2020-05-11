# QR Utils

Simple Promise-based library to generate and read QR codes.

## Example

```javascript
// generate QR code image file
await QRUtil.generateImage('HELLO WORLD', 'temp.png');

// read generated image file
const imageBuffer = fs.readFileSync('temp.png');

// parse the QR code image to get the contained data
const parsedData = await QRUtil.parseQR(imageBuffer);

console.log(parsedData); // HELLO WORLD
```

## Methods

```typescript
generateDataURL(data: string): Promise<string>;
generateBase64(data: string): Promise<string>;
generateImage(data: string, imagePath: string): Promise<void>;
parseQR(qrImageDataBuffer: Buffer): Promise<string>;
```