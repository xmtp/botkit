#!/usr/bin/env node
import { program } from "commander";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { execa } from "execa"; // Import execa dynamically

const __dirname = path.dirname(fileURLToPath(import.meta.url));

program
  .name("byob")
  .description("CLI to initialize projects")
  .argument("<project-name>", "Name of the project to initialize")
  .action(async (name) => {
    const projectPath = path.join(process.cwd(), name);
    const templatePath = path.join(__dirname, "template");

    // Ensure the template directory exists
    if (!fs.existsSync(templatePath)) {
      console.error("Template directory does not exist.");
      process.exit(1);
    }

    // Copy template files
    await fs.copy(templatePath, projectPath);

    // Change directory to the new project path
    process.chdir(projectPath);

    // Install dependencies
    await execa("yarn", ["install"]);
    // Copy the .env.example file to .env in the new project directory
    const envExamplePath = path.join(templatePath, ".env.example");
    const envPath = path.join(projectPath, ".env");
    if (fs.existsSync(envExamplePath)) {
      await fs.copy(envExamplePath, envPath);
      console.log("Environment file copied.");
    } else {
      console.error("Environment example file does not exist.");
    }

    //Git ignore
    // Copy the .gitignore file from the template directory to the new project directory
    const gitignoreSourcePath = path.join(templatePath, ".gitignore");
    const gitignoreDestinationPath = path.join(projectPath, ".gitignore");
    if (fs.existsSync(gitignoreSourcePath)) {
      await fs.copy(gitignoreSourcePath, gitignoreDestinationPath);
      console.log(".gitignore file copied.");
    } else {
      console.error(
        ".gitignore file does not exist in the template directory."
      );
    }

    console.log("Your new project is ready!");
    console.log(
      `Run 'cd ${name} && yarn build:watch' \n\nRun yarn:watch in another terminal to start your project.`
    );
  });

program.parse(process.argv);
