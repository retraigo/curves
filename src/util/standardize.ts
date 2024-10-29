export function standardize(data: number[], targetRange: [number, number]): number[] {
    const [max, min] = data.reduce((acc, val) => {
        const res = acc.slice();
        res[0] = res[0] > val ? res[0] : val;
        res[1] = res[1] > val ? val : res[1];
        return res as [number, number];
    }, [data[0], data[0]])

    const res = data.slice();
    const range = max - min;
    const target = targetRange[1] - targetRange[0]
    for (let i = 0; i < res.length; i += 1) {
        res[i] = targetRange[0] + ((res[i] - min) / range) * target;
    }
    return res;
}