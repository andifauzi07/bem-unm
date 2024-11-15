import Jumbotron from '@/components/section/Beranda/jumbotron';
import Kementerian from '@/components/section/Beranda/kementerian';
import Sambutan from '@/components/section/Beranda/sambutan';
import Blog from '@/components/section/Beranda/blog';

export default function Home() {
	return (
		<main className="bg-primary w-full text-black">
			<Jumbotron />
			<Kementerian />
			<Sambutan />
			<Blog />
		</main>
	);
}
