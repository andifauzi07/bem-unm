import Image from 'next/image';

const HeroSection = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center h-screen">
			<Image
				src="/logo-kabinet.jpg"
				width={309}
				height={309}
				alt="logo-kabinet"
			/>
			<p className="text-center px-28">
				Nama Kabinet Kolaboratif diambil dengan Spirit Kolaborasi Multisektor, tidak terlepas dari Visi Presiden BEM UNM. Dimana dalam membangun lembaga yang berkelanjutan, Kolaborasi Multisektor didasarkan pada prinsip kerja sama, Dari
				sistem Kompetitif menjadi sistem Kooperatif. Baik antar sesama lembaga kemahasiswaan maupun dengan Pimpinan Universitas, dan lebih luas lagi kolaborasi dengan seluruh elemen yang ada.
			</p>
		</div>
	);
};

export default HeroSection;
