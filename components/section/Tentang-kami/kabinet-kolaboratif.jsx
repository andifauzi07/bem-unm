import Image from 'next/image';
import Logo from '@/public/logo-kabinet.jpg';
import Link from 'next/link';

const HeroSection = () => {
	return (
		<div className="w-full flex gap-16 py-[340px] px-5 justify-center items-center h-screen">
			<Image
				src={Logo}
				alt="logo-kabinet"
				data-aos="fade-down"
				className="w-2/5"
			/>
			<div className="w-3/5">
				<h1 className="text-[60px] font-bold py-3">
					Kabinet <span className="text-[#E15600]">Kolaboratif</span>
				</h1>
				<p
					className="text-justify py-6"
					data-aos="fade-up">
					Nama Kabinet Kolaboratif diambil dengan Spirit Kolaborasi Multisektor, tidak terlepas dari Visi Presiden BEM UNM. Dimana dalam membangun lembaga yang berkelanjutan, Kolaborasi Multisektor didasarkan pada prinsip kerja sama, Dari
					sistem Kompetitif menjadi sistem Kooperatif. Baik antar sesama lembaga kemahasiswaan maupun dengan Pimpinan Universitas, dan lebih luas lagi kolaborasi dengan seluruh elemen yang ada.
				</p>
				<div className="flex py-6">
					<Link
						href="/kontak"
						className="bg-gradient-to-r from-[#FFCC00] to-[#F45D00] text-white py-2 px-4 rounded-xl flex gap-1 items-center">
						Struktur Kabinet
						<Image
							src="/icon/buttonIcon.svg"
							width={28}
							height={28}
							alt="Button"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
