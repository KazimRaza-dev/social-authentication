const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (req.session && req.session.passport) {
    res.send({
      message: 'You are allowed.',
      'display Name': req.session.passport.user.displayName,
    });
  } else {
    res.json({
      message: 'You are not allowed to access this API endpoint',
      error: 'You are not signed in.',
    });
  }
});

module.exports = router;
