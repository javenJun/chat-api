/**
 * 从生成数字和字母的随机数
 */

export function getRandomString(n: number) {
    const chars = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    let res = '';
    for (let i = 0; i < n; i++) {
        const id = Math.ceil(Math.random() * 35);
        res += chars[id];
    }
    return res;
}
