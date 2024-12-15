import * as google from 'google-auth-library';
// import creds from '@/creds.json';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file'];

const jwt = new google.JWT({
	email: process.env.GOOGLE_CLIENT_EMAIL,
	key: process.env.GOOGLE_PRIVATE_KEY,
	scopes: SCOPES,
});

export default jwt;
