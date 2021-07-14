// get date

export const getNewTime = () => {
    const newTime = new Date();
    return newTime.getTime();
}

export const changeTime = (seconds) => {
    const newTime = new Date(seconds);
    return `${newTime.getDate()}-${Number(newTime.getMonth()) + 1}-${newTime.getFullYear()}`;
}