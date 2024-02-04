remove_file() {
  if [ -e "$1" ]; then
    rm "$1"
    echo "Usunięto $1"
  fi
}

remove_files_in_directory() {
  local directory="$1"

  if [ -d "$directory" ]; then
    find "$directory" -type f -delete
    echo "Usunięto pliki w katalogu $directory i jego podkatalogach."
  else
    echo "Katalog $directory nie istnieje."
  fi
}

remove_file "customize.sh"
remove_file "customize.sh.example"
remove_file "cleanCustomize.sh"
remove_files_in_directory "docs"

echo "Usunięto pliki."
