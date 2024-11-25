import Link from 'next/link';
import Header from './Header';
import { artikel } from '@/utils/constant';
import Card from '@/components/Card';

const Artikel = () => {
	return (
		<div className="py-24">
			<Header />
			<div className="w-full mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-8 my-16">
				{artikel.map((data) => (
					<Link href={`/artikel/${data.id}`}>
						<Card
							date={data.tanggal}
							imageUrl={data.gambar_headline.url}
							tipe="Press Release"
							key={data.id}
							shortDesc={''}
							title={data.title}
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Artikel;
