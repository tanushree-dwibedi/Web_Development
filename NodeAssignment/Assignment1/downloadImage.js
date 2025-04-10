/*
// downloadImage.js

const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

// Function to download an image
function downloadImage(url, fileName) {
  const protocol = url.startsWith('https') ? https : http;

  protocol.get(url, (res) => {
    // Check for a successful response
    if (res.statusCode === 200) {
      const filePath = path.join(__dirname, fileName);
      const fileStream = fs.createWriteStream(filePath);

      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`✅ Image downloaded successfully as "${fileName}"`);
      });
    } else {
      console.log(`❌ Failed to download image. Status Code: ${res.statusCode}`);
    }
  }).on('error', (err) => {
    console.log(`❌ Error: ${err.message}`);
  });
}

// 🔽 Example usage:
const imageUrl = 'https://img.freepik.com/premium-photo/cute-ginger-cat-sitting-looking-camera-isolated-white-background_270100-2630.jpg?w=2000';  // Replace with your URL
const saveAs = 'downloaded-image.jpg';

downloadImage(imageUrl, saveAs);
*/

const https = require('https'); // Use 'http' if the image URL starts with http
const fs = require('fs');

// URL of the image to download (you can replace this with any valid .jpg image)
const imageUrl = 'https://img.freepik.com/premium-photo/cute-ginger-cat-sitting-looking-camera-isolated-white-background_270100-2630.jpg?w=2000';

// File path where the image will be saved
const outputFile = 'downloaded_image2.jpg';

// Send GET request to the image URL
https.get(imageUrl, (res) => {
    if (res.statusCode === 200) {
        // Pipe the image data into a file
        const fileStream = fs.createWriteStream(outputFile);
        res.pipe(fileStream);

        fileStream.on('finish', () => {
            fileStream.close();
            console.log('Image downloaded and saved as', outputFile);
        });
    } else {
        console.log('Failed to download image. Status Code:', res.statusCode);
    }
}).on('error', (err) => {
    console.error('Error:', err.message);
});
