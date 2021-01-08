import SevenClient from "./client/SevenClient";
import { token } from "./Config";

const client: SevenClient = new SevenClient(token);
client.start();