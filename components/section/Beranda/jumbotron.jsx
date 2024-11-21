import Link from 'next/link';
import Image from 'next/image';

const Jumbotron = () => {
	return (
		<div className="image imageResponsif w-full h-screen bg-no-repeat bg-cover mx-auto">
			<div className="flex flex-col justify-center items-center h-screen">
				<div
					className="text-center lg:mt-20 text-white"
					data-aos="fade-down">
					<h1 className="lg:text-[70px] lg:pb-8 text-3xl font-bold text-shadow">Spirit Kolaborasi Multisektor</h1>
					<h2 className="lg:text-5xl text-xl text-shadow">
						Kabinet Kolaboratif Periode <br /> 2024-2025
					</h2>
				</div>
				<Link
					data-aos="fade-up"
					href="/kontak"
					className="mt-6 border-[2px] lg:border-[3px] lg:text-base text-[12px] text-white lg:py-2 py-1 px-4 rounded-xl flex items-center">
					Saatnya Bersuara
					<Image
						src="/icon/buttonIcon.svg"
						width={28}
						height={28}
						alt="Button"
						className="w-6 h-6"
					/>
				</Link>
			</div>
		</div>
	);
};

export default Jumbotron;
