const { body } = require('express-validator');

exports.validateCategory = [
  body('name').notEmpty().withMessage('Name is required'),
];

exports.validateProduct = [
  body('name').notEmpty().withMessage('Name is required'),
  body('category').notEmpty().withMessage('Category is required'),
  body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
  body('discount').optional().isFloat({ min: 0, max: 100 }).withMessage('Discount must be between 0 and 100'),
  body('variants').optional().isArray(),
  body('variants.*.stock').optional().isInt({ min: 0 }).withMessage('Stock must be a non-negative integer'),
]; 