//

'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from './dropdown';

const navLink = [
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
	const [menuOpen, setMenuOpen] = useState(false);
	const navbarRef = useRef(null); // Referensi untuk navbar

	const closeMenu = () => {
		setMenuOpen(false);
	};

	// Menggunakan useEffect untuk menambahkan event listener untuk klik di luar navbar
	useEffect(() => {
		// Fungsi untuk menutup navbar jika klik di luar navbar atau dropdown
		const handleClickOutside = (event) => {
			if (navbarRef.current && !navbarRef.current.contains(event.target)) {
				closeMenu();
			}
		};

		// Menambahkan event listener untuk mousedown dan touchstart
		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('touchstart', handleClickOutside);

		// Membersihkan event listener ketika komponen dilepas
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('touchstart', handleClickOutside);
		};
	}, []);

	return (
		<nav
			ref={navbarRef}
			data-aos="fade-down"
			className="fixed bg-[#fefefe] z-10 text-black w-full flex justify-between items-center py-2 lg:px-6 px-4 drop-shadow-md">
			<Link href="/">
				<div className={`${menuOpen ? 'hidden' : ''} flex items-center`}>
					<Image
						width={77}
						height={53}
						src="/logo.png"
						alt="Logo"
					/>
					<span className="">
						<p className="font-bold">Badan Eksekutif Mahasiswa</p>
						<p className="italic">Universitas Negeri Makassar</p>
					</span>
				</div>
			</Link>
			<div
				className="lg:hidden"
				onClick={() => setMenuOpen(!menuOpen)}>
				{/* Hamburger Menu */}
				<button aria-label="Toggle Menu">
					<div className="space-y-1">
						<span className="block w-6 h-0.5 bg-black"></span>
						<span className="block w-6 h-0.5 bg-black"></span>
						<span className="block w-6 h-0.5 bg-black"></span>
					</div>
				</button>
			</div>
			<div
				data-aos={`${menuOpen ? '' : 'fade-left'}`}
				className={`lg:flex items-center ${menuOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
				<ul className="flex flex-col lg:flex-row justify-center items-center bg-[#fefefe] lg:bg-transparent">
					<li>
						<Dropdown />
					</li>
					{navLink.map((nav) => (
						<li
							key={nav.id}
							className="mx-4 my-2 lg:my-0">
							<Link href={nav.url}>{nav.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
