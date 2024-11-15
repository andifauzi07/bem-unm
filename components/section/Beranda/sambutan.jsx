import Image from 'next/image';
import PresidenBem from '@/public/PresidenBem.png';

const Sambutan = () => {
	return (
		<div className="bg-[#F2EFEF] text-black px-16 py-8">
			<div className="flex bg-white drop-shadow-md backdrop-blur-[15px] rounded-xl my-16">
				<div className="w-1/2 relative">
					<Image
						src={PresidenBem}
						alt="Presiden Bem"
						className="absolute md:-top-[109px] md:left-16"
					/>
					<h1 className="text-shadow text-4xl pt-16 pl-16">Hasrul</h1>
				</div>
				<div className="w-1/2 px-16">
					<h1 className="text-[30px] py-4 font-bold text-shadow drop-shadow-md text-shadow">Sambutan Presiden BEM UNM</h1>
					<p className="text-xs pb-8">
						Assalamu alaikum Warahmatullahi Wabarakatuh. <br /> <br /> Hidup Mahasiswa <br /> Hidup Mahasiswa <br /> Dan Hidup Seluruh Rakyat Yang Tertindas <br /> <br /> Segala puja dan puji kepada Tuhan yang Maha Esa, yang maha kasih dan
						penuh cinta. Tak lupa pula kita hanturkan salam kepada masing-masing pembawa risalah kebenaran yang kita yakini. <br /> <br /> Mahasiswa adalah bagian yang tidak terpisakan dari sejarah panjang bangsa Indonesia, bukan hanya
						sebagai sekelompok intelektual yang berfokus pada teori-teori dalam ruang-ruang kelas melainkan hadir dengan segala bentuk peran dan fungsi ditengah-tengah masyarakat secara umum, Sebagai Agent Of Change, Sosial Of Control dan
						Moral Of Force. <br /> <br /> Sehingga dengan kesadaran kolektif dan spirit kolaborasi multisektor harus bergerak secara bersama mewujudkan cita mulia masyarakat yang adil makmur, tanpa penindasan, tanpa disparitas dan tanpa
						kesewenang-wenangan. Mari bergerak dan berdampak sebaik-baiknya, sehormat-hormatnya.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Sambutan;
