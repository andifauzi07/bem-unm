import Image from 'next/image';
import bagan from '@/public/kementrian/bagan-riset.png';
const RisetDanPengembanganOrganisasi = () => {
	return (
		<div>
			<div className="riset h-screen w-full bg-no-repeat bg-cover bg-center pl-[89px] py-28">
				<h1
					data-aos="fade-down"
					className="text-[58px] leading-none font-bold text-white text-shadow mt-[160px] mb-10">
					Kementerian <br /> Riset & Pengembangan Organisasi
				</h1>
				<p
					data-aos="fade-up"
					className="text-white text-shadow text-justify pr-[160px]">
					Bertanggung jawab untuk mengumpulkan dan menganalisis data terkait organisasi, meningkatkan kapasitas anggota melalui pelatihan, serta melakukan evaluasi program kerja secara menyeluruh. Kementerian ini juga berperan dalam
					menciptakan inovasi dan strategi baru yang didasarkan pada hasil riset,
				</p>
			</div>
			<div className="py-16 px-24">
				<h1 className="text-5xl text-center font-bold pb-10">
					<span className="text-[#E15600]">Struktur </span> <br /> Kepengurusan
				</h1>
				<Image
					src={bagan}
					alt="bagan mentri riset"
					className="mx-auto"
				/>
			</div>
		</div>
	);
};

export default RisetDanPengembanganOrganisasi;
