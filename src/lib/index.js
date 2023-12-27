// place files you want to import through the `$lib` alias in this folder.

export const data = [
    { name: "A", size: "10mm" },
    { name: "B", size: "12mm" },
    { name: "C", size: "20mm" }
]

const csv = `
name,size,cost
A,10mm,£0.10
B,12mm,£0.50
C,20mm,£0.25
`;

export const data2 = csvToArr(csv);

/**
 * @param {string} csvContents
 * @param {string} splitter
 * @returns {{keys: string[]; rows: Record<string, string>[]}}
 */
export function csvToArr(csvContents, splitter = ",") {
    const [keys, ...rows] = csvContents
        .trim()
        .split("\n")
        .map((item) => item.split(splitter));
    const objects = rows.map((row) => {
        /**
         * @type {Record<string, string>} obj
         */
        const obj = {};
        keys.forEach((key, index) => {
            const value = row.at(index);
            if (value != undefined) {
                obj[key] = value;
            } else {
                console.log(`Error assigning ${key} for ${row}.`);
            }
        });
        return obj;
    });
    return {
        keys: keys,
        rows: objects
    }
}
