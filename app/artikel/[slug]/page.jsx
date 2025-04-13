import { artikel } from '@/utils/constant';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function Page({ params }) {
	const id = (await params).slug;

	const details = artikel.find((item) => {
		return item.id === id;
	});

	if (details === undefined) {
		return notFound();
	}

	return (
		<div className="w-full py-28">
			<h1 className="lg:text-5xl text-2xl pb-4 font-bold text-center lg:py-6 lg:px-8">{details?.title}</h1>
			<div className="flex justify-center items-center pb-4">
				<Image
					src="/icon/Date.svg"
					width={0}
					height={0}
					alt="tanggal"
					className="lg:w-[20px] lg:h-[20px] w-4 h-4"
				/>
				<p className="text-xs">{details?.tanggal}</p>
			</div>
			<div className="lg:w-2/3 mx-auto px-6 lg:my-8">
				<div className="py-4 lg:pb-0">
					<Image
						src={details?.gambar_headline.url}
						width={2000}
						height={100}
						quality={100}
						alt={details?.gambar_headline.deskripsi}
					/>
					<p className="italic lg:text-sm lg:py-2">{details?.gambar_headline.deskripsi}</p>
				</div>
				<p className="text-justify lg:text-base leading-10 whitespace-pre-line py-2">{details?.deskripsi_satu}</p>
				<div className="py-2">
					{details?.gambar_dua && (
						<Image
							src={details?.gambar_dua.url}
							width={250}
							height={250}
							alt={details?.deskripsi_dua}
							quality={100}
							className="lg:float-left lg:w-1/3 w-full py-2 lg:pr-6"
						/>
					)}
					<p className="text-justify lg:text-base leading-10 whitespace-pre-line py-2">{details?.deskripsi_dua}</p>
					{details?.deskripsi_tiga && <p className="text-justify leading-10 lg:text-base whitespace-pre-line py-2">{details?.deskripsi_tiga}</p>}
				</div>
			</div>
		</div>
	);
}
