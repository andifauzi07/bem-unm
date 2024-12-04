import { MarqueeDemo } from '@/components/Slider';

const Kementerian = () => {
	return (
		<div className="text-black py-4 lg:my-[28px]">
			<div className="flex flex-col justify-center items-center lg:my-12">
				<h1 className="lg:text-5xl text-3xl font-bold text-center">
					Landskap{' '}
					<span className="text-[#E15701]">
						Kementerian <br /> BEM
					</span>{' '}
					UNM
				</h1>
				<p className="text-[#8A8888] text-center">Terdapat 5 kementerian yang hadir dalam Kabinet Kolaboratif BEM UNM saat ini </p>
			</div>
			<MarqueeDemo />
		</div>
	);
};

export default Kementerian;
