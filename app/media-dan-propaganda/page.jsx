import Image from 'next/image';
import bagan from '@/public/kementrian/bagan-media.png';
const MediaDanPropaganda = () => {
	return (
		<div>
			<div className="media h-screen w-full bg-no-repeat bg-cover bg-center pl-[89px] py-28">
				<h1
					data-aos="fade-down"
					className="text-[58px] leading-none font-bold text-white text-shadow mt-[160px] mb-10">
					Kementerian <br /> Media & Propaganda
				</h1>
				<p
					data-aos="fade-up"
					className="text-white text-shadow text-justify pr-[160px]">
					Berperan sebagai penggerak informasi yang kritis dan strategis, dengan fokus pada pengelolaan dan penyebaran pesan yang tepat sasaran. Kementerian ini tidak hanya bertugas mempromosikan kegiatan BEM, tetapi juga mengkritisi
					isu-isu sosial dan politik yang relevan, mendorong partisipasi mahasiswa dalam diskursus publik, serta memperjuangkan transparansi dan akuntabilitas organisasi melalui berbagai saluran media.
				</p>
			</div>
			<div className="py-16 px-24">
				<h1 className="text-5xl text-center font-bold pb-10">
					<span className="text-[#E15600]">Struktur </span> <br /> Kepengurusan
				</h1>
				<Image
					src={bagan}
					alt="bagan mentri pendidikan"
					className="mx-auto"
				/>
			</div>
		</div>
	);
};

export default MediaDanPropaganda;
