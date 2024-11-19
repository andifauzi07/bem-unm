import Image from 'next/image';
import bagan from '@/public/kementrian/bagan-pendidikan.png';
const PendidikanDanKebudayaan = () => {
	return (
		<div>
			<div className="pendidikan h-screen w-full bg-no-repeat bg-cover bg-center pl-[89px] py-28">
				<h1
					data-aos="fade-down"
					className="text-[58px] leading-none font-bold text-white text-shadow mt-[160px] mb-10">
					Kementerian <br /> Pendidikan & Kebudayaan
				</h1>
				<p
					data-aos="fade-up"
					className="text-white text-shadow text-justify pr-[160px]">
					Kementerian Kebudayaan adalah bagian dari BEM yang bertugas melestarikan, mengembangkan, dan mempromosikan budaya kampus serta memperkaya wawasan kebudayaan di kalangan mahasiswa. Kementerian ini menjadi jembatan antara mahasiswa
					dan nilai-nilai budaya dengan menyelenggarakan berbagai kegiatan yang mengangkat keberagaman budaya, memperkuat identitas, serta memupuk rasa cinta terhadap warisan budaya yang kita miliki. Melalui program-program kreatif dan
					inklusif, Kementerian Kebudayaan hadir untuk menjaga, memperkuat, dan merayakan kekayaan budaya dalam lingkungan kampus.
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

export default PendidikanDanKebudayaan;
