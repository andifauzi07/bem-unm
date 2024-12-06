'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from './dropdown';
import { dropdownKementrian, dropdownTentangKami } from '@/utils/constant';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const navbarRef = useRef(null);
	const path = usePathname();

	const closeMenu = () => {
		setMenuOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (navbarRef.current && !navbarRef.current.contains(event.target)) {
				closeMenu();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('touchstart', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('touchstart', handleClickOutside);
		};
	}, []);

	useEffect(() => {
		closeMenu();
	}, [path]);

	return (
		<nav
			ref={navbarRef}
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
				<button aria-label="Toggle Menu">
					<div className="space-y-1">
						<span className="block w-6 h-0.5 bg-black"></span>
						<span className="block w-6 h-0.5 bg-black"></span>
						<span className="block w-6 h-0.5 bg-black"></span>
					</div>
				</button>
			</div>
			<div className={`lg:flex items-center ${menuOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
				<ul className="flex flex-col lg:flex-row justify-center items-center bg-[#fefefe] lg:bg-transparent">
					<li>
						<Dropdown
							title="Kementerian"
							dropdownData={dropdownKementrian}
						/>
					</li>
					<li className="mx-4 my-2 lg:my-0 relative">
						<Link href="/artikel">
							<span className="hover_button">Artikel</span>
						</Link>
					</li>
					<li>
						<Dropdown
							title="Tentang Kami"
							dropdownData={dropdownTentangKami}
						/>
					</li>
					<li className="mx-4 my-2 lg:my-0 relative">
						<Link href="/kontak">
							<span className="hover_button">Kontak</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
