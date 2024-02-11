#!/bin/bash


#"1.0.0" - 8137fe4b
#"1.0.1" - 2e8650db
#"1.0.2" - 66096206

# Pobierz tagi dla pierwszego i drugiego commita
tag_first_commit=$(git describe --tags --abbrev=0 66096206) # 1.0.2
tag_second_commit=$(git describe --tags --abbrev=0 74f700b1) # current

# Sprawdź, czy tag drugiego commita jest taki sam jak tag pierwszego
if [ "$tag_first_commit" = "$tag_second_commit" ]; then
    tag_second_commit='current'
fi

# Sprawdź istnienie katalogu "upload"
if [ ! -d "upload" ]; then
    echo "Tworzenie katalogu 'upload'"
    mkdir "upload"
fi

# Wykonaj diff i skopiuj pliki
git diff --name-only 66096206^..74f700b1 | while read file; do
    # Utwórz archiwum ZIP i dodaj pliki do niego
    zip -r "upload/SNP-$tag_first_commit-$tag_second_commit.zip" "$file"

done

echo "Zakończono kopiowanie plików do katalogu 'upload'"
echo "Tag pierwszego commita: $tag_first_commit"
echo "Tag drugiego commita: $tag_second_commit"
