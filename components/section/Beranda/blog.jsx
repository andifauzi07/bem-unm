import Card from '@/components/Card';
import { artikel } from '@/utils/constant';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
	const shortArtikel = artikel.slice(0, 3);
	return (
		<div className="bg-[#e4e4e4]">
			<div className="w-full text-center lg:text-center px-4">
				<h1
					data-aos="fade-down"
					className="lg:text-5xl text-3xl lg:py-4 py-8 leading-none font-bold drop-shadow-md">
					Tetap Terhubung <br />
					Dengan <span className="text-[#E15600]"> Kami</span>
				</h1>
				<p
					data-aos="fade-up"
					className="text-[#8A8888] lg:text-xl font-semibold text-lg">
					{' '}
					Kunjungi Blog Kami Untuk informasi terkini seputar kegiatan mahasiswa
				</p>
			</div>
			<div className="flex justify-center py-16 lg:px-8 gap-4">
				<div className="w-full bg-[#E4E3E3] rounded-3xl flex flex-col justify-center lg:block">
					<div className="grid px-8 lg:grid-cols-3 sm:grid-cols-2 lg:flex-row justify-center items-center gap-8 lg:py-8 py-4">
						{shortArtikel.map((data) => (
							<Link
								href={`/artikel/${data.id}`}
								className="lg:px-2"
								key={data.id}>
								<Card
									date={data.tanggal}
									imageUrl={data.gambar_headline.url}
									tipe="Artikel"
									shortDesc={''}
									title={data.title}
								/>
							</Link>
						))}
					</div>
					<div className="w-full flex justify-center items-center">
						<Link
							href="/artikel"
							className="mt-6 hover:bg-[#EAEAEA] transition ease-in-out hover:translate-x-[0.5px] bg-white shadow-md lg:text-base text-[12px] text-black lg:py-2 py-1 px-4 rounded-lg flex items-center">
							Selengkapnya
							<Image
								src="/icon/buttonIconBlack.svg"
								width={28}
								height={28}
								alt="Button"
								className="w-6 h-6"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
