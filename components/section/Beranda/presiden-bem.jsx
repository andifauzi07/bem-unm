import Image from 'next/image';
// import Presbem from '@/public/PresidenBem.png';

const PresidenBem = () => {
	return (
		<div className="bg-[#F2EFEF] text-black px-16 flex drop-shadow-md">
			<div
				className="w-1/2 px-8"
				data-aos="fade-right">
				<Image
					src="/PresidenBem.png"
					width={800}
					height={0}
					alt="Presiden Bem"
				/>
				<div className="relative right-[400px] bottom-[80px] text-right">
					<h1 className="font-bold text-4xl">Hasrul</h1>
					<p className="text-[#E15701] font-bold">Presiden BEM UNM</p>
				</div>
			</div>
			<div
				className="w-1/2 px-8"
				data-aos="fade-left">
				<h1 className="text-4xl py-4 font-bold drop-shadow-md">
					Sambutan Presiden <br /> <span className="text-[#E15701]"> BEM UNM</span>
				</h1>
				<p className="text-xs pb-8">
					Assalamu alaikum Warahmatullahi Wabarakatuh. <br /> <br /> Hidup Mahasiswa <br /> Hidup Mahasiswa <br /> Dan Hidup Seluruh Rakyat Yang Tertindas <br /> <br /> Segala puja dan puji kepada Tuhan yang Maha Esa, yang maha kasih dan
					penuh cinta. Tak lupa pula kita hanturkan salam kepada masing-masing pembawa risalah kebenaran yang kita yakini. <br /> <br /> Mahasiswa adalah bagian yang tidak terpisakan dari sejarah panjang bangsa Indonesia, bukan hanya
					sebagai sekelompok intelektual yang berfokus pada teori-teori dalam ruang-ruang kelas melainkan hadir dengan segala bentuk peran dan fungsi ditengah-tengah masyarakat secara umum, Sebagai Agent Of Change, Sosial Of Control dan
					Moral Of Force. <br /> <br /> Sehingga dengan kesadaran kolektif dan spirit kolaborasi multisektor harus bergerak secara bersama mewujudkan cita mulia masyarakat yang adil makmur, tanpa penindasan, tanpa disparitas dan tanpa
					kesewenang-wenangan. Mari bergerak dan berdampak sebaik-baiknya, sehormat-hormatnya.
				</p>
			</div>
		</div>
	);
};

export default PresidenBem;
