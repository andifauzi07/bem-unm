import Jumbotron from '@/components/section/Beranda/jumbotron';
import Kementerian from '@/components/section/Beranda/kementerian';
import Presidenbem from '@/components/section/Beranda/presiden-bem';
import WapresBem from '@/components/section/Beranda/wapres-bem';
import Blog from '@/components/section/Beranda/blog';
import Card from '@/components/Card';
import { artikel } from '@/utils/constant';
export default function Home() {
	return (
		<main className="bg-primary w-full text-black">
			<Jumbotron />
			<Kementerian />
			<Presidenbem />
			{/* <div className="drop-shadow-[0px_4px_6px_rgba(0,0,0,0.3)]"> */}
			<WapresBem />
			{/* </div> */}
			<Blog />
		</main>
	);
}
