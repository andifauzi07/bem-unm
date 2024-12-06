import Image from 'next/image';
import bagan from '@/public/kementrian/bagan-pendidikan.png';
const PendidikanDanKebudayaan = () => {
	return (
		<div>
			<div className="pendidikan lg:h-screen w-full bg-no-repeat bg-contain bg-center lg:py-16 lg:pl-[89px] pt-28">
				<h1
					data-aos="fade-down"
					className="lg:text-[58px] text-xl text-center lg:text-left lg:leading-none font-bold text-white text-shadow mt-5 lg:mt-[160px] mb-10">
					Kementerian <br /> Pendidikan & Kebudayaan
				</h1>
				<p
					data-aos="fade-up"
					className="md:text-white lg:text-shadow text-justify px-8 lg:px-0 lg:pb-8 lg:pr-[110px]">
					Kementerian Kebudayaan adalah bagian dari BEM yang bertugas melestarikan, mengembangkan, dan mempromosikan budaya kampus serta memperkaya wawasan kebudayaan di kalangan mahasiswa. Kementerian ini menjadi jembatan antara mahasiswa
					dan nilai-nilai budaya dengan menyelenggarakan berbagai kegiatan yang mengangkat keberagaman budaya, memperkuat identitas, serta memupuk rasa cinta terhadap warisan budaya yang kita miliki. Melalui program-program kreatif dan
					inklusif, Kementerian Kebudayaan hadir untuk menjaga, memperkuat, dan merayakan kekayaan budaya dalam lingkungan kampus.
				</p>
			</div>
			<div className="lg:py-16 py-8 lg:px-24">
				<h1 className="lg:text-5xl text-2xl text-center font-bold pb-10">
					<span className="text-[#E15600]">Struktur </span> <br className="hidden lg:block" /> Kepengurusan
				</h1>
				<Image
					src={bagan}
					alt="bagan mentri pendidikan"
					sizes="100vw"
					quality={100}
					className="mx-auto"
				/>
			</div>
		</div>
	);
};

export default PendidikanDanKebudayaan;
