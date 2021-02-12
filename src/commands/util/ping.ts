import { Message } from "discord.js";
import { client } from "../../bot";
import SevenClient from "../../client/SevenClient";
import Command from "../../structures/Command";

export default class PingCommand extends Command {
    constructor() {
        super("ping", {
            aliases: [
                "ping"
            ],
            description: {
                content: "How fast is Discord running?",
                usage: "7ping",
                examples: [
                    "7ping"
                ]
            }
        })
    }

    exec(message: Message) {
        message.channel.send(`Pong! \`${this.client.ws.ping}ms\``);
    }
}