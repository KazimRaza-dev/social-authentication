const User = require('./models/user.model');

const googleAuthDal = {
  registerWithGoogle: async (oauthUser) => {
    const isUserExists = await User.findOne({
      email: oauthUser.emails[0].value,
    });
    if (isUserExists) {
      const failure = {
        message: 'Email already Registered.',
      };
      return { failure };
    }

    const user = new User({
      email: oauthUser.emails[0].value,
      name: oauthUser.displayName,
      accountId: oauthUser.id,
      photoURL: oauthUser.photos[0].value,
      provider: oauthUser.provider,
    });
    await user.save();
    const success = {
      message: 'User Registered.',
    };
    return { success };
  },

  // loginUser: async (oauthUser) => {
  //   const userExists = await User.findOne({ email: oauthUser.emails[0].value });
  //   if (userExists) {
  //     const success = {
  //       message: 'User successfully logged In.',
  //     };
  //     return { success };
  //   }
  //   const failure = {
  //     message: 'Email not Registered. You need to sign up first',
  //   };
  //   return { failure };
  // },
};

module.exports = googleAuthDal;
