'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Dropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);
	const path = usePathname();

	const toggleDropdown = (e) => {
		e.preventDefault();
		setIsOpen((prev) => !prev);
	};

	const closeDropdown = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		setIsOpen(false);
	}, [path]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div
			className="relative inline-block text-left"
			ref={dropdownRef}>
			<button
				onClick={toggleDropdown}
				className="inline-flex items-center w-full justify-center border-gray-300 bg-white px-4 py-2 text-black">
				<span className="relative">
					<span className="hover_button">Kementerian</span>
				</span>
				<svg
					className="-mr-1 ml-2 h-5 w-5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true">
					<path
						fillRule="evenodd"
						d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
						clipRule="evenodd"
					/>
				</svg>
			</button>

			{isOpen && (
				<div
					className="absolute right-0 z-20 bg-white mt-2 w-56 origin-top-right rounded-md shadow-lg"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button">
					<div
						className="py-1"
						role="none">
						<Link
							href="/pendidikan-dan-kebudayaan"
							className="block px-4 py-2 text-sm text-black hover:bg-[#eaeaea]"
							role="menuitem"
							onClick={closeDropdown}>
							Pendidikan & Kebudayaan
						</Link>
						<Link
							href="/riset-dan-pengembangan-organisasi"
							className="block px-4 py-2 text-sm text-black hover:bg-[#eaeaea]"
							role="menuitem"
							onClick={closeDropdown}>
							Riset & Pengembangan Organisasi
						</Link>
						<Link
							href="/sosial-dan-politik"
							className="block px-4 py-2 text-sm text-black hover:bg-[#eaeaea]"
							role="menuitem"
							onClick={closeDropdown}>
							Sosial & Politik
						</Link>
						<Link
							href="/media-dan-propaganda"
							className="block px-4 py-2 text-sm text-black hover:bg-[#eaeaea]"
							role="menuitem"
							onClick={closeDropdown}>
							Media & Propaganda
						</Link>
						<Link
							href="/perekonomian"
							className="block px-4 py-2 text-sm text-black hover:bg-[#eaeaea]"
							role="menuitem"
							onClick={closeDropdown}>
							Perekonomian
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}
