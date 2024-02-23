import fs from 'fs';

/**
 * Creates a new file in the file system.
 *
 * @param {string} filePath - The path to the file to be created.
 * @param {string | Buffer} content - The content to be written to the file.
 * @returns {Promise<void>} - Returns a Promise that resolves when the file is successfully created.
 *                            Rejects with an error if the file creation fails.
 */
export async function toCreateFile(filePath: string, content: string | Buffer): Promise<void> {
  try {
    await fs.promises.writeFile(filePath, content);
  } catch (error) {
    throw error; // You might want to handle the error differently based on your application's needs
  }
}
