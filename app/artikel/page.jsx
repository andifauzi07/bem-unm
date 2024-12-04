import Link from 'next/link';
import Header from './Header';
import { artikel } from '@/utils/constant';
import Card from '@/components/Card';

const Artikel = () => {
	return (
		<div className="py-24">
			<Header />
			<div className="flex justify-center py-16 lg:px-8 gap-4">
				<div className="grid px-8 lg:grid-cols-3 sm:grid-cols-2 lg:flex-row justify-center items-center gap-8 lg:py-8 py-4">
					{artikel.map((data) => (
						<Link
							href={`/artikel/${data.id}`}
							className="lg:px-2"
							key={data.id}>
							<Card
								date={data.tanggal}
								imageUrl={data.gambar_headline.url}
								tipe="Artikel"
								shortDesc={''}
								title={data.title}
							/>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Artikel;
