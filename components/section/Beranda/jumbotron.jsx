import Link from 'next/link';
import Image from 'next/image';

const Jumbotron = () => {
	return (
		<div className="image w-full h-screen bg-no-repeat bg-cover bg-center">
			<div className="flex flex-col w-full justify-center items-center h-full">
				{/* <h2 className="leading-9 text-4xl m-20">"Selamat Datang di Website Resmi"</h2> */}
				<div className="text-center mt-40">
					<h1 className="text-[70px] font-bold text-shadow">Badan Eksekutif Mahasiswa</h1>
					<h2 className="text-5xl text-shadow">Universitas Negeri Makassar</h2>
				</div>
				<Link
					href="/kontak"
					className="mt-8 border-[3px] text-white py-2 px-4 rounded-xl flex gap-1">
					Saatnya Bersuara
					<Image
						src="/icon/buttonIcon.svg"
						width={28}
						height={28}
						alt="Button"
					/>
				</Link>
			</div>
		</div>
	);
};

export default Jumbotron;
