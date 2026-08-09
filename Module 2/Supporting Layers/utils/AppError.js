/**
 * utils/AppError.js
 *
 * Custom error class used across the application.
 * Having a single home for this class eliminates the duplication that existed
 * in services/articlesService.js and middleware/errorHandler.js.
 */

class AppError extends Error {
    constructor(message, statusCode) {
          super(message);
          this.name = 'AppError';
          this.statusCode = statusCode;
          this.isOperational = true;

      if (Error.captureStackTrace) {
              Error.captureStackTrace(this, AppError);
      }
    }
}

module.exports = AppError;
