// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  Licensed under: ${data.license}

## Description
${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions

My Github url is https://github.com/${data.github} and you can reach me at ${data.email} for additional questions.

`;
};

module.exports = generateMarkdown;
