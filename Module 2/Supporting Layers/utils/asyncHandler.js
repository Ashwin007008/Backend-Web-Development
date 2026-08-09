/**
 * utils/asyncHandler.js
 *
 * Higher-order function that wraps an async route handler and forwards any
 * rejected promise to Express's next() error handler - eliminating repetitive
 * try/catch blocks in route and controller files.
 *
 * Usage:
 *   router.get('/', asyncHandler(async (req, res) => { ... }));
 */

const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
