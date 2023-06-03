'use strict';

const bcrypt = require('bcryptjs');

const {  Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    toSafeObject() {
      const { id, email, firstName, lastName, username } = this;
      return { id, email, firstName, lastName, username };
    }

    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    }

    static getCurrentUserById(id) {
      return User.scope("currentUser").findByPk(id);
    }

    static async login({ credential, password }) {
      const { Op } = require('sequelize');
      let user;


      if (password) {
        // username login
        user = await User.scope('loginUser').findOne({
          where: {
            email: credential
          }
        });

        if (user && user.validatePassword(password)) {
          console.log("User model - login:", user)
          return await User.scope('currentUser').findByPk(user.id);
        }
      } else {
        // google login
        user = await User.scope('loginUser').findOne({
          where: {
            googleId: credential
          }
        });

        if (user) {
          console.log("User model - login:", user)
          return await User.scope('currentUser').findByPk(user.id);
        }
      }
    }

    static async signup({ email, password, firstName, lastName, username, googleId }) {
      let hashedPassword = null;

      if (password) {
        hashedPassword = bcrypt.hashSync(password);
      }

      const user = await User.create({
        email,
        hashedPassword,
        firstName,
        lastName,
        username,
        googleId
      });

      return await User.scope('currentUser').findByPk(user.id);
    }

    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256],
        isEmail: true
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 20],
        isAlphanumeric: true
      },
    },
    googleId: {
        type: DataTypes.STRING,
        unique: true
      },
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'updatedAt', 'email', 'createdAt']
      }
    },
    scopes: {
      currentUser: {
        attributes: {
          exclude: ['hashedPassword', 'createdAt', 'updatedAt']
        }
      },
      loginUser: {
        attributes: {}
      },
    }
  });
  return User;
};
