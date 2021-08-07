// export function

module.exports.getMyDateTime = function () {
    return Date();
}

exports.getDirName = function () {
    return __dirname;
}

// export variable

const myAge = 21;
exports.myAge = myAge;

// console.log(module)