const { program } = require("commander");
const fs = require("fs-extra");
const path = require("path");
const execa = require("execa");

program
  .command("init <name>")
  .description("Initialize a new XMTP bot project")
  .action(async (name) => {
    const projectPath = path.join(process.cwd(), name);
    const templatePath = path.join(__dirname, "template");

    // Copy template files
    await fs.copy(templatePath, projectPath);

    // Change directory to the new project path
    process.chdir(projectPath);

    // Install dependencies
    await execa("npm", ["install"]);

    console.log("Your new XMTP bot is ready!");
    console.log("Run `cd", name, "&& npm start` to start your bot.");
  });

program.parse(process.argv);
