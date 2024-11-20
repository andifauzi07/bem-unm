import Dropdown from '@/components/dropdown';
import Cards from './Cards';
import Header from './Header';

const Artikel = () => {
	return (
		<div className="py-24">
			<Header />
			<div className="w-2/3 mx-auto rounded-xl bg-[#EAEAEA] grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-8 my-16">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
		</div>
	);
};

export default Artikel;
