const uuid = require('uuid/v1')

class userAuthentication {
    constructor(userAuthToken) {
        console.log("1==",userAuthToken)
        if (userAuthentication.isTrue) {
            return userAuthentication.instance
        }
        this._userAuthToken = userAuthToken
        console.log(" == USSSSERAUTHTOOOOOOKEN ==",userAuthToken)
        userAuthentication.instance = this
        userAuthentication.isTrue = true
    }
    getToken() {
        return this._userAuthToken
    }
    setToken(userAuthToken) {
        //conso
        this._userAuthToken = userAuthToken
    }
}

module.exports = userAuthentication