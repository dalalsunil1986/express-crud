let users = require('./user.mock').usersArray;

const list = (req, res, next) => {
  res.json(users);
};

const get = (req, res, next) => {
  const user = users.find(user => user.id == parseInt(req.params.id));

  if (!user) res.status(404).send('the user does not exist');
  res.json(user);
};

const update = (req, res, next) => {
  users[req.params.id] = {
    id: req.params.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender
  };
  res.json(users);
};

const create = (req, res, next) => {
  users.push({
    id: users.length,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender
  });
  res.json(users);
};

const remove = (req, res, next) => {
  users = users.filter(user => user.id != parseInt(req.params.id));
  res.json(users);
};

module.exports = { list, get, create, update, remove };
