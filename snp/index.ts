const fs = require('fs');

const inputFile = 'snp/a.md';
const outputInstructionFile = 'snp/b.md';
const outputContentFile = 'snp/c.md';

try {
  const fileContent = fs.readFileSync(inputFile, 'utf-8');

  // Znajdź indeksy początku i końca sekcji do zbudowania głównego pliku
  const startIndex = fileContent.indexOf('<!-- Zaczynamy Sekcję do Zbudowania Głównego Pliku -->');
  const endIndex = fileContent.indexOf('<!-- Koniec Sekcji do Zbudowania Głównego Pliku -->');

  if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
    // Wyodrębnij instrukcję
    const instructionPart = fileContent.substring(0, startIndex);

    // Wyodrębnij główną zawartość
    const contentPart = fileContent.substring(startIndex, endIndex);

    // Zapisz do osobnych plików
    fs.writeFileSync(outputInstructionFile, instructionPart.trim());
    fs.writeFileSync(outputContentFile, contentPart.trim());

    console.log('Pliki zostały utworzone.');
  } else {
    console.log('Brak odpowiednich oznaczeń w pliku z częścią.');
  }
} catch (error) {
  console.error(`Błąd odczytu pliku: ${error.message}`);
}
