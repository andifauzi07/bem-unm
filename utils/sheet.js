import jwt from '@/services/google';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, jwt);

export async function appendToSheet(data) {
	await doc.loadInfo();
	const sheet = doc.sheetsByIndex[0];
	await sheet.addRow(data);
}
