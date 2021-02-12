import { Message } from "discord.js";
import { client } from "../bot";
import SevenClient from "../client/SevenClient";

export default class Command {
    public client: SevenClient = client

    name: string;
    aliases: string[]
    options: CommandOptions;

    constructor(name: string, options?: CommandOptions) {
        this.name = name;
        this.aliases = options?.aliases ?? []
    }

    exec(_message: Message) {
        throw new Error("Command implementation missing.")
    }
}

class CommandOptions {
    aliases: string[];
    description?: {
        content: string;
        usage: string;
        examples: string[];
    }
}