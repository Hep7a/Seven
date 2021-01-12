import { Client } from "discord.js";
import CommandHandler from "../handlers/CommandHandler";

export default class SevenClient extends Client {
    public token: string;
    public commands = new CommandHandler(this);

    constructor(token: string) {
        super();

        this.token = token;
    }

    public async start() {
        await this.commands.load();
        await this.login(this.token);
    }
}