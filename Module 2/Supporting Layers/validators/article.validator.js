/**
 * validators/article.validator.js
 *
 * All express-validator chains for the Article resource live here.
 * Route files IMPORT these arrays - they must not define chains of their own.
 */

const { body } = require('express-validator');

const createArticle = [
    body('title')
      .notEmpty()
      .withMessage('Title is required')
      .trim(),

    body('body')
      .notEmpty()
      .withMessage('Body is required')
      .isLength({ max: 2000 })
      .withMessage('Body must be under 2000 characters'),
  ];

const updateArticle = [
    body('title')
      .optional()
      .notEmpty()
      .withMessage('Title must not be empty if provided')
      .trim(),

    body('body')
      .optional()
      .isLength({ max: 2000 })
      .withMessage('Body must be under 2000 characters'),
  ];

module.exports = { createArticle, updateArticle };
