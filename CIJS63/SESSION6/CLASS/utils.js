// get date

export const getNewTime = () => {
    const newTime = new Date();
    return newTime.getTime();
}

export const changeTime = (seconds) => {
    const newTime = new Date(seconds);
    return `${newTime.getDate()}-${Number(newTime.getMonth()) + 1}-${newTime.getFullYear()}`;
}

// verify email

export const verifyEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// verify password

export const verifyPassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return re.test(String(password));
}

// SHA1 password

export const sha1 = (password) => {
    return CryptoJS.SHA1(password).toString();
}