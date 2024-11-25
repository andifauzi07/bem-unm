import Image from 'next/image';

const socialLinks = [
	{
		id: '1',
		url: 'https://twitter.com/bemunmkita',
		icon: '/icon/Twitter.svg',
	},
	{
		id: '2',
		url: 'https://instagram.com/bemunm_',
		icon: '/icon/Instagram.svg',
	},
	{
		id: '3',
		url: 'https://www.youtube.com/@bemunm9584',
		icon: '/icon/YouTube.svg',
	},
];

const Footer = () => {
	return (
		<div className="w-full gap-4 lg:px-8 py-4 flex lg:flex-row flex-col justify-center bg-[#181818] text-white">
			<div className="lg:w-1/6 flex lg:items-start items-center justify-center lg:justify-end">
				<Image
					src="/FooterLogo.svg"
					width={86}
					height={92}
					alt="Logo Footer"
				/>
				<div className="lg:hidden block">
					<p className="font-bold">Badan Eksekutif Mahasiswa</p>
					<p className="italic"> Universitas Negeri Makassar</p>
				</div>
			</div>
			<div className="flex flex-col lg:justify-start justify-center gap-[34px] px-4 lg:px-0 lg:w-2/6">
				<div className="lg:block hidden">
					<p className="font-bold">Badan Eksekutif Mahasiswa</p>
					<p className="italic"> Universitas Negeri Makassar</p>
				</div>
				<div className="text-center lg:text-left lg:block flex justify-center items-start px-4 lg:items-center flex-col">
					<span className="flex gap-4 py-2">
						<Image
							src="/icon/HomeIcon.svg"
							width={20}
							height={20}
							alt="Home Icon"
						/>
						<p>Lt.2 Gedung PKM UNM Gunung Sari</p>
					</span>
					<span className="flex gap-4 py-2">
						<Image
							src="/icon/PhoneIcon.svg"
							width={20}
							height={20}
							alt="Home Icon"
						/>
						<p>+6281244445575</p>
					</span>
					<span className="flex gap-4 py-2">
						<Image
							src="/icon/MailIcon.svg"
							width={20}
							height={20}
							alt="Home Icon"
						/>
						<p>bemunm1@gmail.com</p>
					</span>
					<span className="flex gap-4 py-2">
						<p>Dikelola Oleh Kementrian Media dan Propaganda Badan Eksekutif Mahasiswa Universitas Negeri Makassar</p>
					</span>
					<span className="flex justify-center w-full lg:justify-start gap-4 py-4">
						{socialLinks.map((social) => (
							<a
								href={social.url}
								target="_blank"
								key={social.id}>
								<Image
									src={social.icon}
									width={24}
									height={24}
									alt={social.url}
								/>
							</a>
						))}
					</span>
				</div>
			</div>
			<div className="flex lg:justify-end justify-center items-end lg:w-4/6">
				<p>BEM UNM© 2024 All Rights Reserved</p>
			</div>
		</div>
	);
};

export default Footer;
