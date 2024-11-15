'use client';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function WrapperAnmimation({ children }) {
	useEffect(() => {
		Aos.init({ duration: 1300 });
	}, []);

	return <>{children}</>;
}
