import { appendToSheet } from '@/utils/sheet';

export async function POST(request) {
	// Validasi server-side dengan environment variable
	const serverSecret = process.env.API_SECRET;
	if (!serverSecret) {
		console.error('API_SECRET is not defined in environment variables');
		return new Response(JSON.stringify({ error: 'Server misconfiguration' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	try {
		// Validasi data payload
		const { nama, email, pesan } = await request.json();
		if (!nama || !email || !pesan) {
			return new Response(JSON.stringify({ error: 'Incomplete data' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		// Proses data ke Google Sheets
		await appendToSheet({ nama, email, pesan });

		return new Response(JSON.stringify({ message: 'Pesan berhasil dikirim!', success: true }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Error saat memproses data:', error);
		return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
}
