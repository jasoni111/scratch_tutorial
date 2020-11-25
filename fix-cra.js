const rplce = require("line-replace");
const path = require("path");

const filePath = path.join(
  __dirname,
  "../node_modules/react-scripts/scripts/utils",
  "verifyTypeScriptSetup.js"
);

rplce({
  file: filePath,
  line: 238,
  text:
    "    } else if (parsedCompilerOptions[option] !== valueToCheck && option !== 'jsx') {",
  callback: ({ file, error }) => {
    if (error) return console.error(error);
    console.log(`Replaced ${file} successfuly!`);
  },
});
