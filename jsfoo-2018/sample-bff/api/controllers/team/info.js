module.exports = {


  friendlyName: 'View team info',


  description: 'Display "Team" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/team',
    },

    redirect: {
      description: 'The requesting user is already logged in.',
      responseType: 'redirect'
    }

  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};
