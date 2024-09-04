import fs from 'fs';

export async function writeJsonFile(filePath: string, obj: Record<string, any>) {
    fs.writeFile(filePath, JSON.stringify(obj, null, 2), (err) => {
        if (err) {
            console.error(err);
        }
    });
}

export async function readJsonFile(filePath: string): Promise<Record<string, any>> {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(JSON.parse(data));
        });
    });
}