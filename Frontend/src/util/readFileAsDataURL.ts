function readFileAsDataURL(file, callback) {
    const reader = new FileReader();
    reader.onloadend = () => {
        callback(reader.result); // This is the data URL
    };
    reader.readAsDataURL(file);
}
  
  export default readFileAsDataURL;
