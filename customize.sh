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
sed -i.mybak "s/\([\/\"]\)(PLACEHOLDER_GITHUB_USER)/$GITHUB_USER/g" package.json
sed -i.mybak "s/PLACEHOLDER_GITHUB_USER/$GITHUB_USER/g" package.json
sed -i.mybak "s/PLACEHOLDER_NODE/$NODE_VERSION/g" package.json

# Edit the ./.nvmrc file
sed -i.mybak "s/PLACEHOLDER_NODE/$NODE_VERSION/g" .nvmrc

# Edit the .github/workflows/codeql-analysis.yml file
sed -i.mybak "s/PLACEHOLDER_GITHUB_USER/$GITHUB_USER/g" .github/workflows/codeql-analysis.yml

# Edit the .github/workflows/relese.yml file
sed -i.mybak "s/PLACEHOLDER_GITHUB_USER/$GITHUB_USER/g" .github/workflows/release.yml

# Edit the .github/workflows/pr.yml file
sed -i.mybak "s/PLACEHOLDER_GITHUB_USER/$GITHUB_USER/g" .github/workflows/pr.yml

# Edit the README.md file
sed -i.mybak "s/PLACEHOLDER_GITHUB_USER/$GITHUB_USER/g" README.md

# Additionally, edit files to replace types and repository name
sed -i.mybak "s/PLACEHOLDER_REPO_NAME/$REPO_NAME/g" package.json README.md

# Replace the name "Ryan Sonshine" with the full name
sed -i.mybak "s/PLACEHOLDER_FULL_NAME/$FULL_NAME/g" package.json README.md

rm *.mybak
rm .*.mybak
rm ./.github/workflows/*.mybak

# Display a message upon completion
echo "Finished editing files."

yarn install

echo "Package installed"
