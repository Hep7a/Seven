import { Message } from "discord.js";
import SevenClient from "../client/SevenClient";

export default class Command {
    public client: SevenClient;

    name: string;
    options?: CommandOptions;

    constructor(client: SevenClient, name: string, options?: CommandOptions) {
        this.name = name;
        this.options = options;
        this.client = client;
    }

    exec(_message: Message) {
        throw new Error("Command implementation missing.")
    }
}

class CommandOptions {
    aliases: string[];
    description: {
        content: string;
        usage: string;
        examples: string[];
    }
}