import { createFile } from './createFile'; // Replace with the actual file name

describe('createFile', () => {
  it('should create a file when given filePath and content', async () => {
    const filePath = 'path/to/file.txt';
    const content = 'Hello, this is the content.';
    const result = await createFile({ filePath, content });
    expect(result).toBe(filePath);
  });

  it('should create a file when given folderPath, fileName, and content', async () => {
    const folderPath = 'path/to';
    const fileName = 'file.txt';
    const content = 'Hello, this is the content.';
    const result = await createFile({ folderPath, fileName, content });
    expect(result).toBe(`${folderPath}/${fileName}`);
  });

  it('should throw an error when neither filePath nor (folderPath and fileName) is provided', async () => {
    const content = 'Hello, this is the content.';
    await expect(createFile({ content })).rejects.toThrow(
      "Either 'filePath' or both 'folderPath' and 'fileName' are required."
    );
  });

  it('should throw an error if the file already exists and dryRun is false', async () => {
    const filePath = 'path/to/existingFile.txt';
    const content = 'Hello, this is the content.';
    await createFile({ filePath, content });
    await expect(createFile({ filePath, content })).rejects.toThrow('File already exists');
  });

  it('should log a message and return the file path if the file already exists and dryRun is true', async () => {
    const filePath = 'path/to/existingFile.txt';
    const content = 'Hello, this is the content.';
    const result = await createFile({ filePath, content, dryRun: true });
    expect(result).toBe(filePath);
  });

  // Add more test cases as needed
});
