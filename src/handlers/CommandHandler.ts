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

    async load() {
        const cmdFolders = await fs.promises.readdir(join(__dirname, "..", "commands"));

        cmdFolders.forEach(async (folder: string) => {
            const cmdFiles = await fs.promises.readdir(join(__dirname, "..", "commands", folder));

            for (const file of cmdFiles.filter(x => x.startsWith(".js"))) {
                const cmd: Command = await import(`../commands/${folder}/${file}`).then(x => x.default);

                this.set(cmd.name, cmd);
            }
        })
    }
}