import { Message } from "discord.js";
import { statements } from "../../constants/Statements";
import Command from "../../structures/Command";
import { randomizeInt } from "../../util/Util";

export default class HelloCommand extends Command {
    constructor() {
        super("hello", {
            aliases: [
                "hello",
                "hi"
            ],
            description: {
                content: "",
                usage: "",
                examples: [
                    ""
                ]
            }
        });
    }

    exec(message: Message) {
        const randomMessageInt = randomizeInt(statements.length - 1);

        message.channel.send(statements[randomMessageInt]);
    }
}