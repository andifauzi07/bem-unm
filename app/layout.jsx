import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import WrapperAnmimation from '@/components/animation/WrapperAnimation';

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
	title: 'BEM UNM',
	description: 'Official website Badan Eksekutif Mahasiswa Universitas Negeri Makassar',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} text-black`}>
				<WrapperAnmimation>
					<Navbar />
					{children}
					<Footer />
				</WrapperAnmimation>
			</body>
		</html>
	);
}
