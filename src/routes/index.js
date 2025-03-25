const express = require('express');
const usuarios = require('./usuariosRoute.js');

module.exports = app => {
  app.use(
    express.json(),
    usuarios,
  );
};