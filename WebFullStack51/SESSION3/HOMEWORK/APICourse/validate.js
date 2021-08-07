const joi = require('joi');

function validateCourse(course) {
    const schema = joi.object({
        name: joi.string().min(3).required(),
        cost: joi.number().min(25).max(300).required()
    })
    return schema.validate(course);
}

module.exports = {validateCourse};