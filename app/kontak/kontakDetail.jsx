import Image from 'next/image';

const detailLinks = [
	{
		id: '1',
		title: 'Lt.2 Gedung PKM UNM Gunung Sari',
		icon: '/icon/HomeIconBlack.svg',
	},
	{
		id: '2',
		title: '+6281244445575',
		icon: '/icon/PhoneIconBlack.svg',
	},
	{
		id: '3',
		title: 'bemunm1@gmail.com',
		icon: '/icon/MailIconBlack.svg',
	},
];

const socialLinks = [
	{
		id: '1',
		url: 'https://twitter.com',
		icon: '/icon/TwitterBlack.svg',
	},
	{
		id: '2',
		url: 'https://instagram.com',
		icon: '/icon/InstagramBlack.svg',
	},
	{
		id: '3',
		url: 'https://youtube.com',
		icon: '/icon/YoutubeBlack.svg',
	},
];

const KontakDetail = () => {
	return (
		<div
			className="lg:w-1/2"
			data-aos="fade-left">
			<div>
				{detailLinks.map((data) => (
					<span
						key={data.id}
						className="flex items-center my-8 lg:mx-6 gap-8 text-black">
						<Image
							src={data.icon}
							width={36}
							height={36}
							alt={data.title}
						/>
						<h3>{data.title}</h3>
					</span>
				))}
				<span className="flex justify-center lg:justify-start flex-row items-center my-8 mx-6 gap-8">
					{socialLinks.map((social) => (
						<a
							href={social.url}
							target="_blank"
							key={social.id}>
							<Image
								src={social.icon}
								width={36}
								height={36}
								alt={social.url}
							/>
						</a>
					))}
				</span>
			</div>
		</div>
	);
};

export default KontakDetail;
