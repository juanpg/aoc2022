import * as fs from "fs";

export function readData(fileName: string): string {
    return fs.readFileSync(fileName, 'utf-8').replace(/\r/g, '');
};