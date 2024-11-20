import KontakTitle from './header';
import KontakFormulir from './kontakForm';
import KontakDetail from './kontakDetail';

const Kontak = () => {
	return (
		<div className="h-[1000px] text-black py-[224px] text-center -z-10">
			<KontakTitle />
			<div className="w-full flex justify-center gap-8 px-8 lg:my-[128px]">
				<KontakFormulir />
				<KontakDetail />
			</div>
		</div>
	);
};

export default Kontak;
