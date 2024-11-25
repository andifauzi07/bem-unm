import Image from 'next/image';

export default function Card({ imageUrl, tipe, title, shortDesc, date }) {
	return (
		<div className="max-w-md mx-auto hover:bg-[#eaeaea] transition ease-in-out bg-white rounded-xl shadow-md overflow-hidden">
			<div className="h-48 w-full relative">
				<Image
					src={imageUrl}
					alt={title}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="p-6">
				<p className="text-sm font-bold text-gray-500">{tipe}</p>
				<h3 className="text-xl font-bold text-gray-900 mt-2">{title}</h3>
				<p className="mt-2 text-gray-600 text-sm leading-relaxed">{shortDesc}</p>
				<div className="flex items-center justify-between mt-4">
					<div className="flex items-center">
						<div className="h-8 w-8">
							<Image
								src="/icon/Date.svg"
								alt="Logo Kementerian"
								width={32}
								height={32}
								className="rounded-full"
							/>
						</div>
					</div>
					<p className="text-sm text-gray-500">{date}</p>
				</div>
			</div>
		</div>
	);
}
