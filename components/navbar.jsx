import Image from 'next/image';
import Link from 'next/link';

const navLink = [
	{
		id: '1',
		title: 'Kementerian',
		url: '/kementerian',
	},
	{
		id: '2',
		title: 'Artikel',
		url: '/artikel',
	},
	{
		id: '3',
		title: 'Tentang Kami',
		url: '/tentang-kami',
	},
	{
		id: '4',
		title: 'Kontak',
		url: '/kontak',
	},
];

const Navbar = () => {
	return (
		<nav className="fixed z-10 bg-[#fefefe] text-black w-full flex justify-between items-center py-2 px-6 drop-shadow-md">
			<div className="flex items-center">
				<Link href="/">
					<Image
						width={77}
						height={53}
						src="/logo.png"
						alt="Logo"
					/>
				</Link>
				<span>
					<p className="font-bold">Badan Eksekutif Mahasiswa</p>
					<p className="italic"> Universitas Negeri Makassar</p>
				</span>
			</div>
			<div>
				<ul className="flex justify-center items-center gap-10">
					{navLink.map((nav) => (
						<li key={nav.id}>
							<Link href={nav.url}>{nav.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
