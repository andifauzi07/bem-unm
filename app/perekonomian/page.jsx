import Image from 'next/image';
import bagan from '@/public/kementrian/bagan-ekonomi.png';

const Perekonomian = () => {
	return (
		<div>
			<div className="ekonomi h-screen w-full bg-no-repeat bg-cover bg-center pl-[89px] py-28">
				<h1
					data-aos="fade-down"
					className="text-[58px] leading-none font-bold text-white text-shadow mt-[160px] mb-10">
					Kementerian <br /> Perekonomian
				</h1>
				<p
					data-aos="fade-up"
					className="text-white text-shadow text-justify pr-[160px]">
					Kementerian ini berfokus pada pengelolaan dana organisasi, penyelenggaraan kegiatan yang berhubungan dengan pemberdayaan ekonomi mahasiswa, serta menyusun program-program yang mendukung kewirausahaan dan peningkatan daya saing
					ekonomi kampus.
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

export default Perekonomian;
