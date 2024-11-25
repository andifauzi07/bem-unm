import Jumbotron from '@/components/section/Beranda/jumbotron';
import Kementerian from '@/components/section/Beranda/kementerian';
import Presidenbem from '@/components/section/Beranda/presiden-bem';
import WapresBem from '@/components/section/Beranda/wapres-bem';
import Blog from '@/components/section/Beranda/blog';

export default function Home() {
	return (
		<main className="bg-primary w-full text-black">
			<Jumbotron />
			<Kementerian />
			<Presidenbem />
			<WapresBem />
			<Blog />
		</main>
	);
}
