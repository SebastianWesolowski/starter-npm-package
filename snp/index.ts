import fs from 'fs';
import { createFile } from './util/createFile';
import * as path from 'path';
import { isFileExists } from './util/isFileExists';

const inputFile = 'snp/a.md';
const outputInstructionFile = 'snp/b.md';
const outputContentFile = 'snp/c.md';

const dir = path.dirname('./');
const rootCatalog = path.join(dir, '/snp/test');

const configTemplate = ['README.md', '.github/PULL_REQUEST_TEMPLATE.md'];

type PackageConfig = {
  instructions: string;
  default: string;
  extends: string;
  custom: string;
};

type Config = Record<
  string,
  {
    name: string;
    filePackage: PackageConfig;
  }
>;

const config: Config = {
  'README.md': {
    name: 'README.md',
    filePackage: {
      instructions: 'README.md-instructions.md',
      default: 'README.md-default.md',
      extends: 'README.md-extends.md',
      custom: 'README.md-custom.md',
    },
  },
};

export const upgrade = async ({ files, rootCatalog }: { files: string[] | string; rootCatalog?: string }) => {
  const fileList = Array.isArray(files) ? files : [files];
  let rootDir = rootCatalog ? rootCatalog : path.dirname('./');

  for (const file of fileList) {
    const filePackage = config[file].filePackage;

    for (const key of Object.keys(filePackage)) {
      const currentPath = path.join(rootDir, filePackage[key]);
      const fileExists = await isFileExists(currentPath);
      if (!fileExists) {
        const createdFile = await createFile({ filePath: currentPath, content: 'test' });
        console.log({ createdFile });
      }
      // console.log(key + ': ' + filePackage[key]);
    }
    ////get config
    //// join cintent
    //// write content
  }
};

upgrade({ files: configTemplate[0], rootCatalog: rootCatalog + '/snp/test' });

// try {
//    createFile({filePath: './snp/test/readme.md', content: 'lorem ipsum dolor'}).then(r =>);
//   // Handle the result here
// } catch (error) {
//   console.log(error);
//   // Handle errors here
// }
//
// try {
//   const fileContent = fs.readFileSync(inputFile, 'utf-8');
//
//   // Znajdź indeksy początku i końca sekcji do zbudowania głównego pliku
//   const startIndex = fileContent.indexOf('<!-- Zaczynamy Sekcję do Zbudowania Głównego Pliku -->');
//   const endIndex = fileContent.indexOf('<!-- Koniec Sekcji do Zbudowania Głównego Pliku -->');
//
//   if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
//     // Wyodrębnij instrukcję
//     const instructionPart = fileContent.substring(0, startIndex);
//
//     // Wyodrębnij główną zawartość
//     const contentPart = fileContent.substring(startIndex, endIndex);
//
//     // Zapisz do osobnych plików
//     fs.writeFileSync(outputInstructionFile, instructionPart.trim());
//     fs.writeFileSync(outputContentFile, contentPart.trim());
//
//     console.log('Pliki zostały utworzone.');
//   } else {
//     console.log('Brak odpowiednich oznaczeń w pliku z częścią.');
//   }
// } catch (error) {
//   console.error(`Błąd odczytu pliku: ${error.message}`);
// }
