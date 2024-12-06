import Image from 'next/image';
import bagan from '@/public/kementrian/bagan-media.png';
const MediaDanPropaganda = () => {
	return (
		<div>
			<div className="media lg:h-screen w-full bg-no-repeat bg-contain bg-center lg:pl-[89px] pt-28">
				<h1
					data-aos="fade-down"
					className="lg:text-[58px] text-xl text-center lg:text-left lg:leading-none font-bold text-white text-shadow mt-5 lg:mt-[160px] mb-10">
					Kementerian <br /> Media & Propaganda
				</h1>
				<p
					data-aos="fade-up"
					className="lg:text-white lg:text-shadow text-justify px-8 lg:px-0 lg:pr-[160px]">
					Berperan sebagai penggerak informasi yang kritis dan strategis, dengan fokus pada pengelolaan dan penyebaran pesan yang tepat sasaran. Kementerian ini tidak hanya bertugas mempromosikan kegiatan BEM, tetapi juga mengkritisi
					isu-isu sosial dan politik yang relevan, mendorong partisipasi mahasiswa dalam diskursus publik, serta memperjuangkan transparansi dan akuntabilitas organisasi melalui berbagai saluran media.
				</p>
			</div>
			<div className="lg:py-16 p-8 lg:px-24">
				<h1 className="lg:text-5xl text-2xl text-center font-bold pb-10">
					<span className="text-[#E15600]">Struktur </span> <br className="hidden lg:block" /> Kepengurusan
				</h1>
				<Image
					src={bagan}
					alt="bagan mentri pendidikan"
					className="mx-auto"
					quality={100}
				/>
			</div>
		</div>
	);
};

export default MediaDanPropaganda;
