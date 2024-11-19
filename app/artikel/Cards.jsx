import Image from 'next/image';
// import CardImage from '@/public/BgSambutan.jpg';
const Cards = () => {
	return (
		<div
			className="flex mx-auto justify-center flex-col"
			data-aos="fade-up">
			{/* <Image
				src="/BgSambutan.jpg"
				width={280}
				height={300}
				alt="Card Image"
			/> */}
			<div className="w-full rounded-xl h-[190px] bg-[#D9D9D9]" />
			<div className="w-[98px] my-2 bg-[#0022FF] h-[4px]" />
			<div>
				<h3 className="mb-2 text-shadow">National Advance Training XVI</h3>
				<span className="flex">
					<Image
						src="/icon/Date.svg"
						width={20}
						height={20}
						alt="Tanggal"
					/>
					<p>11 Nov 25</p>
				</span>
			</div>
		</div>
	);
};

export default Cards;
