export function getFileNameAndExtension(path) {
  // Extract the last part of the path after the last '/'
  const fileNameWithExtension = path.substring(path.lastIndexOf("/") + 1);

  // Split the file name and extension using the last occurrence of '.'
  const index = fileNameWithExtension.lastIndexOf(".");
  const fileName = fileNameWithExtension.substring(0, index);
  const extension = fileNameWithExtension.substring(index + 1);

  return {
    fileName,
    extension,
  };
}
