const skygearCloud = require('skygear/cloud');

class Provider extends skygearCloud.BaseAuthProvider {
  login(authData) {
    console.log('login');
    console.log(authData);
    return {
      principal_id: '2- user-id-from-provider',
      auth_data: authData
    };
  }

  logout(principleID) {
    console.log('logout');
    console.log(principleID);
    return {
      principal_id: 'logged-out-user-id-from-provider',
    }
  }

  info(principleID) {
    console.log('info');
  }
}

module.exports = Provider;
