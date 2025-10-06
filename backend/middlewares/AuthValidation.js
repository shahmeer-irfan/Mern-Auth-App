import joi from 'joi';

export const signupValidation = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(2).max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).required()
    });
    const { error, value } = schema.validate(req.body, { abortEarly: true, stripUnknown: true });
    if (error) {
        return res.status(400).json({ success: false, message: error.details[0].message });
    }
    req.body = value;
    next();
};


export const loginValidation = (req, res, next) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).required()
    });
    const { error, value } = schema.validate(req.body, { abortEarly: true, stripUnknown: true });
    if (error) {
        return res.status(400).json({ success: false, message: error.details[0].message });
    }
    req.body = value;
    next();
};

