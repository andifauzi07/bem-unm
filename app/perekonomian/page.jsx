import Image from 'next/image';
import bagan from '@/public/kementrian/bagan-ekonomi.png';

const Perekonomian = () => {
	return (
		<div>
			<div className="ekonomi lg:h-screen w-full bg-no-repeat bg-contain bg-center lg:pl-[89px] pt-28">
				<h1
					data-aos="fade-down"
					className="lg:text-[58px] text-2xl text-center lg:text-left lg:leading-none font-bold text-white text-shadow mt-10 lg:mt-[160px] mb-10">
					Kementerian <br /> Perekonomian
				</h1>
				<p
					data-aos="fade-up"
					className="lg:text-white lg:text-shadow text-justify px-8 lg:px-0 lg:pr-[160px]">
					Kementerian ini berfokus pada pengelolaan dana organisasi, penyelenggaraan kegiatan yang berhubungan dengan pemberdayaan ekonomi mahasiswa, serta menyusun program-program yang mendukung kewirausahaan dan peningkatan daya saing
					ekonomi kampus.
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

export default Perekonomian;
