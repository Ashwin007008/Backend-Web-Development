/**
 * utils/validateRequest.js
 *
 * Express middleware that inspects the accumulated express-validator errors
 * on the request and either passes control to the next middleware (if the
 * request is valid) or forwards a structured AppError to the error handler.
 *
 * Place this middleware AFTER your validation chains in the route definition:
 *
 *   router.post('/', ...createArticle, validateRequest, ctrl.create);
 */

const { validationResult } = require('express-validator');
const AppError = require('./AppError');

function validateRequest(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
          return next(new AppError('Validation failed', 422));
    }
    next();
}

module.exports = validateRequest;
