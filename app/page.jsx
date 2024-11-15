import Jumbotron from '@/components/section/Beranda/jumbotron';
import Kementerian from '@/components/section/Beranda/kementerian';
import Sambutan from '@/components/section/Beranda/sambutan';
import Blog from '@/components/section/Beranda/blog';

export default function Home() {
	return (
		<main className="w-full bg-primary text-black">
			<Jumbotron />
			<Kementerian />
			<Sambutan />
			<Blog />
		</main>
	);
}
