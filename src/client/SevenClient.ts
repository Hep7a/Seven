import { Client } from "discord.js";

export default class SevenClient extends Client {
    public token: string;

    constructor(token: string) {
        super();

        this.token = token;
    }

    public async start() {
        await this.login(this.token);
    }
}