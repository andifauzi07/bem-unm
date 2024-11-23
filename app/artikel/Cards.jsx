import Image from 'next/image';
import Link from 'next/link';
const Cards = ({ title, tanggal, image, id }) => {
	return (
		<div
			className="flex mx-auto justify-center flex-col"
			data-aos="fade-up">
			<Link href={`/artikel/${id}`}>
				<Image
					src={image}
					width={280}
					height={280}
					alt="Card Image"
				/>
				<div className="w-[98px] my-2 bg-[#0022FF] h-[4px]" />
				<div>
					<h3 className="mb-2 font-semibold">{title}</h3>
					<span className="flex">
						<Image
							src="/icon/Date.svg"
							width={20}
							height={20}
							alt="Tanggal"
						/>
						<p>{tanggal}</p>
					</span>
				</div>
			</Link>
		</div>
	);
};

export default Cards;
