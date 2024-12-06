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
	{
		id: '4',
		url: 'https://www.tiktok.com/@bemunm_',
		icon: '/icon/TiktokWhite.svg',
	},
];

const Footer = () => {
	return (
		<div className="w-full gap-4 lg:px-8 py-4 flex lg:flex-row flex-col justify-center bg-[#181818] text-white">
			<div className="lg:w-1/6 gap-2 flex lg:items-start items-center justify-center lg:justify-end">
				<Image
					src="/FooterLogo.svg"
					width={66}
					height={72}
					alt="Logo Footer"
					className="lg:h-16 lg:w-16 w-12 h-12"
				/>
				<div className="lg:hidden block">
					<p className="text-sm font-bold">Badan Eksekutif Mahasiswa</p>
					<p className="text-sm italic"> Universitas Negeri Makassar</p>
				</div>
			</div>
			<div className="flex flex-col lg:justify-start justify-center gap-[34px] px-4 lg:px-0 lg:w-2/6">
				<div className="lg:block hidden px-4">
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
							className="w-auto h-auto"
						/>
						<p className="text-sm">Lt.2 Gedung PKM UNM Gunung Sari</p>
					</span>
					<span className="flex gap-4 py-2">
						<Image
							src="/icon/PhoneIcon.svg"
							width={20}
							height={20}
							alt="Home Icon"
							className="w-auto h-auto"
						/>
						<p className="text-sm">+6281244445575</p>
					</span>
					<span className="flex gap-4 py-2">
						<Image
							src="/icon/MailIcon.svg"
							width={20}
							height={20}
							alt="Home Icon"
							className="w-auto h-auto"
						/>
						<p className="text-sm">bemunm1@gmail.com</p>
					</span>
					<span className="flex gap-4 py-2">
						<p className="text-sm">Dikelola Oleh Kementerian Media dan Propaganda Badan Eksekutif Mahasiswa Universitas Negeri Makassar</p>
					</span>
					<span className="flex justify-center items-center w-full lg:justify-start gap-4 py-4">
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
									className="w-auto h-auto"
								/>
							</a>
						))}
					</span>
				</div>
			</div>
			<div className="flex lg:justify-end justify-center items-end lg:w-4/6">
				<p className="lg:text-sm text-xs">BEM UNM© 2024 All Rights Reserved</p>
			</div>
		</div>
	);
};

export default Footer;
