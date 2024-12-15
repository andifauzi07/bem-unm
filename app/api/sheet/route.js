import { appendToSheet } from '@/utils/sheet';

export async function POST(request) {
	const authHeader = request.headers.get('Authorization');
	if (authHeader !== `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`) {
		return new Response(JSON.stringify({ error: 'Unauthorized' }), {
			status: 401,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	const { nama, email, pesan } = await request.json();

	await appendToSheet({
		nama,
		email,
		pesan,
	});

	return new Response(JSON.stringify({ message: 'Pesan berhasil dikirim !', success: true }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
}
