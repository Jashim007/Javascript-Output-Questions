/* The code mentioned in example1.js file can be wriiten much easily using aync await as described below */
function download(url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Starting to download data from ", url);
    setTimeout(() => {
      console.log("Download Complete");
      const content = "abcdef";
      resolve(content);
    }, 6000);
  });
}
function writeFile(data) {
  return new Promise(function exec(resolve, reject) {
    console.log("Starting to write file with ", data);
    setTimeout(() => {
      console.log("Writing Complete");
      const fileName = "abcd.txt";
      resolve(fileName);
    }, 5000);
  });
}
function uploadData(file, url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Starting to upload file ", file, "on", url);
    setTimeout(() => {
      console.log("Upload Complete");
      const response = "Success";
      resolve(response);
    }, 4000);
  });
}

async function steps() {
  const downloadData = await download("www.xyz.com");
  console.log("Data downloaded is ", downloadData);
  const fileWritten = await writeFile(downloadData);
  console.log("File Written is ", fileWritten);
  const uploadResponse = await uploadData(fileWritten, "www.abc.com");
  console.log("Upload Response is ", uploadResponse);
  return uploadResponse;
}
steps();
