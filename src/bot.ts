import SevenClient from "./client/SevenClient";
import { prefix, token } from "./Config";

export const client: SevenClient = new SevenClient(token);
client.start().then(() => console.log("Started successfully."))

client.on('ready', () => {
    console.log("I'm ready for work master!")
    console.log(client.commands.size);

    client.user.setPresence({
        activity: {
            name: "a test, 1, 2, 1, 2",
            type: "PLAYING"
        },
        status: "dnd"
    });
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix)) return;

    const cmd = message.content.slice(prefix.length).toLowerCase();
    
    const command = client.commands.fetch(cmd);
    if (!command) return console.log("Command couldn't be executed.")
     
    return command.exec(message);
});