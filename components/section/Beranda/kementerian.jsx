import Image from 'next/image';

const dataKementerian = [
	{
		id: '1',
		title: 'Pendidikan & Kebudayaan',
		icon: '/icon/Pendidikan.png',
	},
	{
		id: '2',
		title: 'Riset & Pengembangan Organisasi',
		icon: '/icon/Riset.png',
	},
	{
		id: '3',
		title: 'Sosial & Politik',
		icon: '/icon/Sospol.png',
	},
	{
		id: '4',
		title: 'Media & Propaganda',
		icon: '/icon/Media.png',
	},
	{
		id: '5',
		title: 'Perekonomian',
		icon: '/icon/Perekonomian.png',
	},
];

const Kementerian = () => {
	return (
		<div className="text-black py-4 lg:my-[28px]">
			<div className="flex flex-col justify-center items-center lg:my-12">
				<h1 className="lg:text-5xl text-3xl font-bold text-center">
					Landskap{' '}
					<span className="text-[#E15701]">
						Kementerian <br /> BEM
					</span>{' '}
					UNM
				</h1>
				<p className="text-[#8A8888] text-center">Terdapat 5 kementerian yang hadir dalam Kabinet Kolaboratif BEM UNM saat ini </p>
			</div>
			<div className="flex lg:gap-4 gap-y-1 justify-center items-center w-full">
				{dataKementerian.map((data) => (
					<div
						key={data.id}
						data-aos="fade-right"
						className="flex flex-col py-8 lg:py-0 gap-y-2 lg:justify-center justify-start w-full items-center lg:items-center text-center">
						<Image
							src={data.icon}
							width={90}
							height={93}
							className="lg:w-24 lg:h-24 w-11 h-11"
							alt={data.title}
						/>
						<h4 className="lg:my-8 text-[8px] lg:text-lg font-bold">{data.title}</h4>
					</div>
				))}
			</div>
		</div>
	);
};

export default Kementerian;
