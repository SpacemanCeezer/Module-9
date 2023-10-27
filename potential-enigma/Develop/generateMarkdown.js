// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache 2.0') {
      return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GPL 3.0') {
      return '[![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)';
    } else {
      return '';
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license) {
      return `## License
  
  This project is licensed under the ${license} license. See the [License](#license) section for more details.`;
    } else {
      return '';
    }
  }
  
  
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseSection = renderLicenseSection(data.license);
  
    return `# ${data.title}
  
  ${licenseBadge}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
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
  
  ${licenseSection}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  GitHub: [${data.username}](https://github.com/${data.username})
  Email: ${data.email}
  `;
  }
  
  
  module.exports = generateMarkdown;
  