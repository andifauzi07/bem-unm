import Image from 'next/image';
import BemLogo from '@/public/BEMLOGO.png';

const DeskripsiLogo = () => {
	return (
		<>
			<div
				className="flex justify-center items-center"
				data-aos="fade-down">
				<Image
					src={BemLogo}
					alt="Bem logo"
					className="w-1/3"
				/>
				<div className="w-2/3">
					<h1 className="text-[48px] font-bold">Badan Eksekutif Mahasiswa</h1>
					<h3 className="text-3xl font-bold text-[#E15701]"> Universitas Negeri Makassar</h3>
				</div>
			</div>
			<h4
				className="px-8 text-justify"
				data-aos="fade-left">
				Adalah lembaga eksekutif mahasiswa di tingkat universitas yang memiliki peran strategis dalam menjalankan fungsi representasi, koordinasi, dan pelaksanaan program kerja kemahasiswaan. Sebagai organisasi yang bertujuan mendukung
				tercapainya Tri Dharma Perguruan Tinggi. BEM UNM berperan sebagai jembatan antara mahasiswa, pihak universitas, serta masyarakat luas.
			</h4>
		</>
	);
};

export default DeskripsiLogo;
