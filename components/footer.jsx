import Image from 'next/image';

const socialLinks = [
	{
		id: '1',
		url: 'https://twitter.com',
		icon: '/icon/Twitter.svg',
	},
	{
		id: '2',
		url: 'https://instagram.com',
		icon: '/icon/Instagram.svg',
	},
	{
		id: '3',
		url: 'https://youtube.com',
		icon: '/icon/Youtube.svg',
	},
];

const Footer = () => {
	return (
		<div className="w-full gap-4 px-8 py-4 flex justify-center bg-footerColor text-white">
			<div className="w-1/6 flex items-start justify-end">
				<Image
					src="/FooterLogo.svg"
					width={86}
					height={92}
					alt="Logo Footer"
				/>
			</div>
			<div className="flex flex-col justify-start gap-[34px] w-2/6">
				<div>
					<p className="font-bold">Badan Eksekutif Mahasiswa</p>
					<p className="italic"> Universitas Negeri Makassar</p>
				</div>
				<div>
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
					<span className="flex gap-4 py-4">
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
			<div className="flex justify-end items-end w-4/6">
				<p>BEM UNM© 2024 All Rights Reserved</p>
			</div>
		</div>
	);
};

export default Footer;
