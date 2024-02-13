import fs from 'fs';
import * as path from 'path';

// Define a type for the input parameters
type CreateFileParams = {
  // Either filePath or folderPath and fileName are required
  filePath?: string;
  folderPath?: string;
  fileName?: string;
  // content can be a string or a buffer
  content: string | Buffer;
  // dryRun is optional and defaults to false
  dryRun?: boolean;
};

export async function createFile({ filePath, fileName, content, dryRun = false }: CreateFileParams): Promise<string> {
  // If filePath is not given, use folderPath and fileName
  if (!filePath) {
    // Check that both folderPath and fileName are given
    if (!folderPath || !fileName) {
      throw new Error('Missing folderPath or fileName');
    }
    // Construct the full file path
    filePath = path.join(folderPath, fileName);
  }

  // Extract the folder path from the file path
  const folderPath = path.dirname(filePath);

  return new Promise<string>((resolve, reject) => {
    // Check if the folder exists
    if (!fs.existsSync(folderPath)) {
      // Create the folder recursively
      fs.mkdirSync(folderPath, { recursive: true });
    }

    // Check if the file exists
    if (fs.existsSync(filePath)) {
      // Reject the promise with an error
      return reject(new Error('File already exists'));
    }

    // If dryRun is true, do not write the file
    if (dryRun) {
      // Log the file path and content
      console.log(`Dry run: would create file ${filePath} with content:`, content);
      // Resolve the promise with the file path
      return resolve(filePath);
    }

    // Write the file with the given content
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        // Log the error in English
        console.error('Error while writing file:', err);
        // Reject the promise with the error
        return reject(err);
      }
      // Resolve the promise with the file path
      resolve(filePath);
    });
  });
}
