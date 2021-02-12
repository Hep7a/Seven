import { Collection } from "discord.js";
import SevenClient from "../client/SevenClient";
import Command from "../structures/Command";
import fs from "fs"
import { join } from "path";

export default class CommandHandler extends Collection<string, Command> {
    client: SevenClient;

    constructor(client: SevenClient) {
        super();

        this.client = client;
    }

    async load(): Promise<Collection<string, Command>> {
        const path = join(__dirname, "..", "commands")
        const cmdFolders = await fs.promises.readdir(`${path}`);
        cmdFolders.forEach(async folder => {
            const cmdFiles = await fs.promises.readdir(`${path}/${folder}`);

            for (const file of cmdFiles.filter(x => x.endsWith(".js"))) {
                const cmd: typeof Command = await import(`${path}/${folder}/${file}`).then(x => x.default)
                const command = new cmd(file);

                this.set(command.name, command);
            }
        });

        return this;
    }

    fetch(name: string) {
        if (this.has(name)) return this.get(name) as Command;
    }
}