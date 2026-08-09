/**
 * middleware/errorHandler.js (REFACTORED)
 *
 * - AppError is now imported from utils/AppError.js (no local duplicate).
 * - nodeEnv is now imported from config/index.js (no direct process.env read).
 */

const AppError = require('../utils/AppError');
const config = require('../config');

module.exports = function errorHandler(err, req, res, next) {
    const status = err.statusCode || 500;
    const body = { error: err.message || 'Internal Server Error' };

    if (config.nodeEnv !== 'production' && err.stack) {
          body.stack = err.stack;
    }

    res.status(status).json(body);
};

module.exports.AppError = AppError;
