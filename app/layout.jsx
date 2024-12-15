import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import WrapperAnmimation from '@/components/animation/WrapperAnimation';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/next';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata = {
	title: 'BEM UNM | Kabinet Kolaboratif',
	description: 'Offiical Website Kabinet Kolaboratif Badan Eksekutif Mahasiswa Universitas Negeri Makassar. Dikelola oleh Kementrian Media dan Propaganda BEM UNM Periode 2024-2025',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<body className={`${geistSans.variable} ${geistMono.variable} text-black`}>
				<WrapperAnmimation>
					<div className="w-full overflow-hidden">
						<Navbar />
						{children}
						<Toaster />
						<Footer />
					</div>
				</WrapperAnmimation>
				<Analytics />
			</body>
		</html>
	);
}
