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
		<div className="text-black p-4 my-[28px]">
			<div className="flex flex-col justify-center items-center my-12">
				<h1 className="text-5xl font-bold text-center">
					Landskap{' '}
					<span className="text-[#E15701]">
						Kementerian <br /> BEM
					</span>{' '}
					UNM
				</h1>
				<p className="text-[#8A8888]">Terdapat 5 kementerian yang hadir dalam Kabinet Kolaboratif BEM UNM saat ini </p>
			</div>
			<div className="flex gap-4 justify-center items-center">
				{dataKementerian.map((data) => (
					<div
						key={data.id}
						data-aos="fade-right"
						className="flex flex-col justify-center w-full items-center text-center">
						<Image
							src={data.icon}
							width={90}
							height={93}
							alt={data.title}
						/>
						<h4 className="my-8 font-bold">{data.title}</h4>
					</div>
				))}
			</div>
		</div>
	);
};

export default Kementerian;
