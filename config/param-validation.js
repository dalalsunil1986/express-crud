const Joi = require('joi');

module.exports = {
  // POST /api/users
  createUser: {
    body: {
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string()
        .regex(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        .required(),
      gender: Joi.string().required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string()
        .regex(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        .required()
    },
    params: {
      id: Joi.string()
        .hex()
        .required()
    }
  }
};
