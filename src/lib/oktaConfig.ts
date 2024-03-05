 export const oktaConfig = {
    clientID: '0oafiv3gmsjcUPoYJ5d7',
    issuer: "https://dev-28261897.okta.com/oauth2/default",
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true
 }