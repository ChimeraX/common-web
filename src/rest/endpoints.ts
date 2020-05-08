const devConfig = {
	apiURL: 'http://localhost:3754',
	oauthURL: 'http://localhost:4973/oauth',
};

const config = devConfig;

export const apiURL = `${config.apiURL}`;

export const oauthURL = `${config.oauthURL}`;
export const userInfoURL = `${oauthURL}/userinfo`;
export const authorizationURL = `${oauthURL}/authorization`;
