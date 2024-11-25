import Image from 'next/image';

const PresidenBem = () => {
	return (
		<div className="bg-[#F2EFEF] text-black lg:px-16 flex lg:flex-row flex-col drop-shadow-md">
			<div
				className="lg:w-1/2 w-full items-center flex lg:block px-8 flex-col"
				data-aos="fade-right">
				<Image
					src="/PresidenBem.png"
					width={300}
					height={0}
					alt="Presiden Bem"
					className="lg:w-full"
				/>
				<div className="hidden lg:block bottom-[50px] right-[260px] relative lg:right-[400px] lg:bottom-[80px] text-right lg:text-right">
					<h1 className="font-bold text-2xl lg:text-4xl">Hasrul</h1>
					<p className="text-[#E15701] lg:text-base text-sm font-bold">Presiden BEM UNM</p>
				</div>
			</div>
			<div
				className="lg:w-1/2 lg:px-8 lg:flex lg:flex-col lg:justify-center px-6 pb-4 lg:pb-0"
				data-aos="fade-left">
				<h1 className="lg:text-4xl text-2xl text-center lg:text-left lg:py-4 pb-2 font-bold drop-shadow-md">
					Sambutan <br className="lg:hidden" /> Presiden <br className="lg:block hidden" /> <span className="text-[#E15701]"> BEM UNM</span>{' '}
					<span className="lg:hidden underline">
						{' '}
						<br />
						Hasrul
					</span>
				</h1>
				<p className="lg:text-xs text-base lg:pb-8">
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
