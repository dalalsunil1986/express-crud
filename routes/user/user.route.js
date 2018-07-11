const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const router = express.Router();
const userCtrl = require('./user.controller');

router
  .route('/')
  /** GET /api/users - Get list of users */
  .get(userCtrl.list)
  /** POST /api/users - Post user */
  .post(validate(paramValidation.createUser), userCtrl.create);

router
  .route('/:id')
  /** GET /api/users/:userId - Get user */
  .get(userCtrl.get)

  /** PUT /api/users/:userId - Update user */
  .put(validate(paramValidation.updateUser), userCtrl.update)

  /** DELETE /api/users/:userId - Delete user */
  .delete(userCtrl.remove);

module.exports = router;
