/**
 * @return number: count
 */

function Resoult($data) {
    let i;
    let count = 0;
    for (i = 0; i < Object.keys($data).length; ++i) {
        count += $data[i];
    }
    return count;
}
