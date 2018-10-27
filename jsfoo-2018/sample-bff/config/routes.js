/**
 * Route Mappings
 */

module.exports.routes = {


  // =================== Open views ========================

  'GET /':                   { action: 'entrance/view-homepage-or-redirect' },
  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /login':              { action: 'entrance/view-login' },


  // =================== Authenticated views ========================

  'GET /welcome':            { action: 'dashboard/view-welcome' },
  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },
  'GET /team':               { action: 'team/info' },
  'GET /team/edit':          { action: 'team/edit' },



  // =================== API endpoints ========================

  '/api/v1/account/logout':                           { action: 'account/logout' },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'GET  /api/v1/users/:userId':                         { action: 'account/user' },


  // =================== Redirects ========================

  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',

};
