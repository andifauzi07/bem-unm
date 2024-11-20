import { fungsiBem } from '@/utils/constant';
import Image from 'next/image';
import icon from '@/public/icon/fungsi-bem-icon.svg';

const FungsiKabinet = () => {
	return (
		<>
			<ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 py-8 px-6">
				{fungsiBem.map((data) => (
					<li
						key={data.id}
						className="flex items-start gap-4 py-2 px-4"
						data-aos="fade-up">
						<Image
							src={icon}
							alt="info"
							className="py-2"
						/>
						<div>
							<h1 className="font-bold text-lg py-2">{data.title}</h1>
							<p className="text-base text-justify">{data.desc}</p>
						</div>
					</li>
				))}
			</ul>
		</>
	);
};

export default FungsiKabinet;
