import fs from 'fs';
import { basename, dirname, join } from 'path';

interface CreateFileParams {
  filePath?: string;
  folderPath?: string;
  fileName?: string;
  content: string | Buffer;
}

export async function createFile({ filePath, fileName, folderPath, content }: CreateFileParams): Promise<string> {
  if (!filePath && (!folderPath || !fileName)) {
    throw new Error("Either 'filePath' or both 'folderPath' and 'fileName' are required.");
  }

  fileName = filePath ? basename(filePath) : (fileName as string);
  folderPath = filePath ? dirname(filePath) : (folderPath as string);

  if (!filePath) {
    filePath = join(folderPath as string, fileName as string);
  }

  try {
    await ensureFolderExists(folderPath);

    if (await isFileExists(filePath)) {
      console.warn('File already exists: ' + filePath);
    }

    return await writeNewFile(filePath, content);
  } catch (error) {
    console.error(error);
    return '';
  }
}

async function handleCallback(err: NodeJS.ErrnoException | null): Promise<void> {
  if (err) {
    console.log(`error: ${err.message}`);
  }
}

async function writeNewFile(filePath: string, content: string | Buffer): Promise<string> {
  try {
    fs.writeFile(filePath, content, (err) => handleCallback(err));
    return filePath;
  } catch (error) {
    return '';
    console.error(error);
  }
}

async function ensureFolderExists(folderPath: string): Promise<void> {
  try {
    fs.mkdir(folderPath, { recursive: true }, (err) => handleCallback(err));
  } catch (error) {
    console.error(error);
  }
}

async function isFileExists(filePath: string): Promise<boolean> {
  try {
    await fs.promises.access(filePath); // Użyj fs.promises.access lub obsłuż callback
    return true;
  } catch (error) {
    return false;
  }
}

try {
  const result = createFile({ filePath: './snp/test/readme.md', content: 'lorem ipsum dolor' });
  // Handle the result here
} catch (error) {
  console.log(error);
  // Handle errors here
}
