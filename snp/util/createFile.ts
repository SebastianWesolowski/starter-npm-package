import fs from 'fs';
import { basename, dirname, join } from 'path';
import { isFileExists } from './isFileExists';
import path from 'path';
import { toCreateFile } from './toCreateFile';

interface CreateFileParams {
  filePath?: string;
  folderPath?: string;
  fileName?: string;
  content: string | Buffer;
  options?: {
    createFolder?: boolean;
  };
}

export async function createFile({
  filePath,
  fileName,
  folderPath,
  content,
  options = { createFolder: true },
}: CreateFileParams): Promise<string> {
  if (!filePath && (!folderPath || !fileName)) {
    throw new Error("Either 'filePath' or both 'folderPath' and 'fileName' are required.");
  }

  fileName = filePath ? basename(filePath) : (fileName as string);
  folderPath = filePath ? dirname(filePath) : (folderPath as string);

  if (!filePath) {
    filePath = join(folderPath as string, fileName as string);
  }

  console.log({ fileName, folderPath, filePath });
  try {
    await isFolderExist(folderPath, options?.createFolder || true);

    if (await isFileExists(filePath)) {
      console.warn('File already exists: ' + filePath);
    } else {
      await toCreateFile(filePath, content);
    }

    return filePath;
  } catch (error) {
    console.error(error);
    return '';
  }
}

async function handleCallback(err: NodeJS.ErrnoException | null): Promise<boolean> {
  if (err) {
    console.log(`error: ${err.message}`);
    return false;
  }

  return true;
}

async function writeNewFile(filePath: string, content: string | Buffer): Promise<string> {
  try {
    await fs.promises.writeFile(filePath, content);
    return filePath;
  } catch (error) {
    throw error;
  }
}

async function isFolderExist(folderPath: string, createFolder: boolean): Promise<boolean> {
  try {
    const folders = folderPath.split(path.sep);

    for (let i = 1; i <= folders.length; i++) {
      const partialPath = path.join(...folders.slice(0, i));
      try {
        await fs.promises.stat(partialPath);
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT' && createFolder) {
          await fs.promises.mkdir(partialPath);
        } else {
          throw error;
        }
      }
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function toCreateFolder(folderPath: string): Promise<boolean> {
  try {
    await fs.promises.mkdir(folderPath, { recursive: true });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
