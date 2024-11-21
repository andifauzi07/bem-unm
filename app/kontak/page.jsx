import KontakTitle from './header';
import KontakFormulir from './kontakForm';
import KontakDetail from './kontakDetail';

const Kontak = () => {
	return (
		<div className="lg:h-[1000px] text-black py-36 lg:py-[224px] text-center -z-10">
			<KontakTitle />
			<div className="w-full lg:flex-row flex flex-col justify-center lg:gap-8 px-8 lg:my-[128px]">
				<KontakFormulir />
				<KontakDetail />
			</div>
		</div>
	);
};

export default Kontak;
