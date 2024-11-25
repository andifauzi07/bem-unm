import Image from 'next/image';
import bagan from '@/public/kementrian/bagan-riset.png';
const RisetDanPengembanganOrganisasi = () => {
	return (
		<div>
			<div className="riset lg:h-screen w-full bg-no-repeat bg-contain bg-center lg:pl-[89px] pt-28">
				<h1
					data-aos="fade-down"
					className="lg:text-[58px] text-2xl text-center lg:text-left lg:leading-none font-bold text-white text-shadow mt-10 lg:mt-[160px] mb-10">
					Kementerian <br /> Riset & Pengembangan Organisasi
				</h1>
				<p
					data-aos="fade-up"
					className="lg:text-white lg:text-shadow text-justify px-8 lg:px-0 lg:pr-[160px]">
					Bertanggung jawab untuk mengumpulkan dan menganalisis data terkait organisasi, meningkatkan kapasitas anggota melalui pelatihan, serta melakukan evaluasi program kerja secara menyeluruh. Kementerian ini juga berperan dalam
					menciptakan inovasi dan strategi baru yang didasarkan pada hasil riset,
				</p>
			</div>
			<div className="lg:py-16 py-8 lg:px-24">
				<h1 className="lg:text-5xl text-2xl text-center font-bold pb-10">
					<span className="text-[#E15600]">Struktur </span> <br className="hidden lg:block" /> Kepengurusan
				</h1>
				<Image
					src={bagan}
					alt="bagan mentri pendidikan"
					quality={100}
					className="mx-auto"
				/>
			</div>
		</div>
	);
};

export default RisetDanPengembanganOrganisasi;
