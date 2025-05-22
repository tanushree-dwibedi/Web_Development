// listfiles.mjs
import fs from 'fs';
import path from 'path';

const listfiles = (dir) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error('❌ Error reading directory:', err.message);
      return;
    }

    console.log(`Files in "${dir}":`);
    files.forEach((file) => {
      console.log(`- ${file}`);
    });
  });
};

// ✅ Replace this with the correct path to your folder
listfiles('D:/Node/Assignment1');
