import Image from 'next/image';
import Link from 'next/link';

export default function notFound() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-[#D9D9D9] p-4">
			<div className="text-center text-black">
				<h2 className="text-3xl font-semibold mb-4 animate__animated animate__fadeIn animate__delay-1s">Oops! Halaman Tidak Ada</h2>
				<p className="text-xl mb-6 animate__animated animate__fadeIn animate__delay-2s">Halaman yang anda cari telah di pindahkan atau telah di hapus.</p>

				<div className="animate__animated animate__fadeIn animate__delay-3s mb-6">
					<Image
						src="/not-found.svg"
						width={0}
						height={0}
						alt="404 Illustration"
						className="w-36 mx-auto"
					/>
				</div>
				<Link href="/">
					<button className="bg-[#E15701] hover:bg-yellow-400 text-black px-6 py-2 rounded-lg text-lg transition duration-300 transform hover:scale-105">Beranda</button>
				</Link>
			</div>
		</div>
	);
}
