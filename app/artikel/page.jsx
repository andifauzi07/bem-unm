import Cards from './Cards';
import Header from './Header';
import { artikel } from '@/utils/constant';

const Artikel = () => {
	return (
		<div className="py-24">
			<Header />
			<div className="w-2/3 mx-auto rounded-xl bg-[#EAEAEA] grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-8 my-16">
				{artikel.map((data) => (
					<Cards
						key={data.id}
						title={data.title}
						tanggal={data.tanggal}
						image={data.gambar_headline.url}
						id={data.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Artikel;
