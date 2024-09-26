const fileSystem = require("fs");

//The path you want to sort
const PATH = "D:\\Downloads";

//This function moves the file to the destination path
const moveFile = (data, directoryName, fs) => {
  const imageDirectoryName = directoryName;
  const sourcePath = `${PATH}\\${data}`;
  const destinationPath = `${PATH}\\${imageDirectoryName}\\${data}`;
  if (fs.existsSync(`${PATH}\\${imageDirectoryName}`)) {
    fs.rename(sourcePath, destinationPath, (error) => {
      if (error) throw error.message;
      console.log(`${data} move successfully`);
    });
  } else {
    //Create the directory for the file that you want to move
    throw new Error(`${imageDirectoryName} not exists`);
  }
};

//Read all the files from the directory
fileSystem.readdir(PATH, (error, data) => {
  if (error) throw error;
  let isFileMoved = false;

  data.forEach((data) => {
    if (
      data.includes(".jfif") ||
      data.includes(".png") ||
      data.includes(".jpg")
    ) {
      moveFile(data, "Images", fileSystem);
      isFileMoved = true;
    } else if (data.includes(".docx")) {
      moveFile(data, "Docx", fileSystem);
      isFileMoved = true;
    } else if (data.includes(".pdf")) {
      moveFile(data, "PDF", fileSystem);
      isFileMoved = true;
    } else if (data.includes(".zip")) {
      moveFile(data, "Rars", fileSystem);
      isFileMoved = true;
    } else if (data.includes(".exe")) {
      moveFile(data, "APKs", fileSystem);
      isFileMoved = true;
    } else if (data.includes(".xlsx")) {
      moveFile(data, "Excel", fileSystem);
      isFileMoved = true;
    } else if (data.includes(".mp4")) {
      moveFile(data, "Videos", fileSystem);
      isFileMoved = true;
    }
  });

  if (!isFileMoved) {
    console.log("Nothing to sort");
  }
});
