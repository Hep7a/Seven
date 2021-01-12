import Command from "./structures/Command";
import SevenClient from "./client/SevenClient";
import { prefix, token } from "./Config";

export const client: SevenClient = new SevenClient(token);
client.start();

client.on('ready', () => {
    console.log("I'm ready for work master!")
});

client.on('message', async message => {
    const cmd = message.content.slice(prefix.length);
    let command: Command;

    if (command.options.aliases.includes(cmd)) {
        command = client.commands.get(command.name);
        await command.exec(message);
    }
})