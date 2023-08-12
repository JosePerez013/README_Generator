// returns icons for the license section of the README, if specified.
renderLicenseBadge = (license) => {
  return license !== "None"
    ? `![license badge](https://img.shields.io/badge/license-${license}.svg)`
    : "";
};

// returns the link to the license section of the README, if specified.
renderLicenseLink = (license) => {
  return license !== "None" ? `(#license)` : "";
};

// creates the license section of the README, if specified.
renderLicenseSection = (license) => {
  return license !== "None"
    ? `This project is protected by the ${license} license`
    : "None";
};

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Badges

${renderLicenseBadge(data.license)}

## Tests

${data.testing}

## Author's Info

${data.github}
${data.email}

`;
}

module.exports = generateMarkdown;
