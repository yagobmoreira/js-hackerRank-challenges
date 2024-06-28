function lonelyinteger(a) {
    const mapNumbers = {};
    for (const number of a) {
        if (!mapNumbers[number]) {
            mapNumbers[number] = 1;
        } else {
            mapNumbers[number] += 1;
        }
    }
    for (const [number, ocurrencies] of Object.entries(mapNumbers)) {
        if (ocurrencies === 1) {
            return Number(number);
        }
    }
}
