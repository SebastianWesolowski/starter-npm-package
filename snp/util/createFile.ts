import fs, { access, mkdir, writeFile } from 'fs';
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
    if (!(await folderExists(folderPath))) {
      await createFolder(folderPath);
    }

    if (await fileExists(filePath)) {
      throw new Error('File already exists: ' + filePath);
    }

    if (await writeNewFile(filePath, content)) {
      return filePath;
    }
  } catch (error) {
    console.log(error);
    return '';
  }
  return '';
}

async function writeNewFile(filePath: string, content: string | Buffer): Promise<string | null> {
  try {
    writeFile(filePath, content, () => {
      return filePath;
    });
  } catch (error) {
    return null;
  }
  return null;
}

async function folderExists(folderPath: string): Promise<boolean> {
  try {
    access(folderPath, (isExist) => {
      return isExist;
    });
    return true;
  } catch (error) {
    return false;
  }
}

async function createFolder(folderPath: string): Promise<void> {
  mkdir(folderPath, { recursive: true }, (er) => {
    console.log(er);
  });
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }
  } catch (error) {
    return true;
  }
  return false;
}
