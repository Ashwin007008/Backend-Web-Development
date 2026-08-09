/**
 * routes/articles.js (REFACTORED)
 *
 * Validation chains are imported from validators/article.validator.js.
 * The validation result check is imported from utils/validateRequest.js.
 * Async handlers are wrapped with utils/asyncHandler.js - no more try/catch here.
 */

const express = require('express');
const router = express.Router();

const { createArticle, updateArticle } = require('../validators/article.validator');
const validateRequest = require('../utils/validateRequest');
const asyncHandler = require('../utils/asyncHandler');
const ctrl = require('../controllers/articlesController');

router.get('/', asyncHandler(ctrl.list));

router.post(
    '/',
    ...createArticle,
    validateRequest,
    asyncHandler(ctrl.create)
  );

router.patch(
    '/:id',
    ...updateArticle,
    validateRequest,
    asyncHandler(ctrl.update)
  );

module.exports = router;
