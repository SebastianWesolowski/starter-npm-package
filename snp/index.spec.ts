import { upgrade } from './index';
import path from "path"; // Replace with the actual file name

describe('createFile', () => {


    const dir = path.dirname('/')
    const rootCatalog = `${dir}snp/test`

    console.log({rootCatalog})
    const configTemplate = ['README.md', '.github/PULL_REQUEST_TEMPLATE.md']

    it('should create a one from props', async () => {
        const filePath = 'test/to/file.txt';
        const content = 'Hello, this is the content.';
        const result = await upgrade({files:configTemplate[0],rootCatalog});
        expect(result).toBe(configTemplate[0]);
        // Add additional assertions to check if the file actually exists, and its content matches the expected content
    });
