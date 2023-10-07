#!/bin/bash

# Assign values from environment variables to local variables
FULL_NAME="PLACEHOLDER_FULL_NAME"
GITHUB_USER="PLACEHOLDER_GITHUB_USER"
REPO_NAME="PLACEHOLDER_REPO_NAME"
NODE_VERSION="PLACEHOLDER_NODE"

# Use the sed command to edit files
# Create backup copies of the original files with the .mybak extension
# Then perform replacements in the files based on local variables

# Edit the package.json file
sed -i.mybak "s/PLACEHOLDER_GITHUB_USER/$GITHUB_USER/g" package.json
sed -i.mybak "s/PLACEHOLDER_NODE/$NODE_VERSION/g" package.json
sed -i.mybak "s/PLACEHOLDER_REPO_NAME/$REPO_NAME/g" package.json
sed -i.mybak "s/PLACEHOLDER_FULL_NAME/$FULL_NAME/g" package.json

# Edit the ./.nvmrc file
sed -i.mybak "s/PLACEHOLDER_NODE/$NODE_VERSION/g" .nvmrc

# Edit the README.md file
sed -i.mybak "s/PLACEHOLDER_GITHUB_USER/$GITHUB_USER/g" README.md
sed -i.mybak "s/PLACEHOLDER_REPO_NAME/$REPO_NAME/g" README.md
sed -i.mybak "s/PLACEHOLDER_FULL_NAME/$FULL_NAME/g" README.md

rm *.mybak
rm .*.mybak

# Display a message upon completion
echo "Finished editing files."

yarn install

echo "Package installed"
