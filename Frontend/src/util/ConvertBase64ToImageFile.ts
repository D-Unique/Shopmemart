
async function ConvertBase64ToImageFile(base64String: string, fileName: string, mimeType: string): Promise<File> {
  const response = await fetch('data:' + mimeType + ';base64,' + base64String);
  const blob = await response.blob();
  return new File([blob], fileName, { type: mimeType });
}


export default ConvertBase64ToImageFile

