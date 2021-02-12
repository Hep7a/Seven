export function randomizeInt(range: number, base?: number) {
    const randomInt = Math.floor(Math.random() * range);

    if (base) {
        return randomInt + base;
    } else return randomInt;
}