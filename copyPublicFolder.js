const fs = require("fs-extra");
const path = require("path");

const copyPublicFolder = (source, destination) => {
  try {
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination, { recursive: true });
    }

    fs.copySync(source, destination, {
      dereference: true,
      filter: (file) => {
        return file !== path.resolve(__dirname, "public/index.html");
      },
    });

    console.log(`Folder ${source} copied to ${destination} successfully`);
  } catch (err) {
    console.error(`Copy error: ${err}`);
  }
};

const sourceFolder = path.resolve(__dirname, "public");
const destinationFolder = path.resolve(__dirname, "dist", "assets");

copyPublicFolder(sourceFolder, destinationFolder);
