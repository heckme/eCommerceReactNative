export const arrayChunking = (num, arr) => {
    const newArr = [];
    let count = 0;
    arr.forEach((el) => {
        if(newArr.length > 0 && count % num !== 0) {
            newArr[newArr.length - 1].push(el);
        } else {
            newArr.push([el]);
        }
        count++;
    })
    return newArr;
}
