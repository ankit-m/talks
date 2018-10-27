/**
 * Simple functions which run **before**
 * your actions.
 */

module.exports.policies = {
  '*': false,

  entrance: {
    '*': true
  },

  dashboard: {
    '*': ['is-logged-in']
  },

  account: {
    '*': ['is-logged-in', 'has-valid-user-id']
  },

  team: {
    '*': ['is-logged-in', 'is-super-admin'],
    info: ['is-logged-in']
  }
};
