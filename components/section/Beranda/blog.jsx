import Image from 'next/image';
// import bgSambutan from '@/public/BgSambutan.jpg';

const Blog = () => {
	return (
		<div>
			<div className="w-full text-center">
				<h1 className="text-[30px] py-4 font-bold text-shadow drop-shadow-md text-shadow">
					Tetap terhubung dengan <br /> kami
				</h1>
				<p className="text-[#8A8888]"> Kunjungi Blog Kami Untuk informasi terkini seputar kegiatan mahasiswa</p>
			</div>
			<div className="mx-auto w-[699px] my-10 bg-[#E4E3E3] rounded-3xl">
				<div className="flex justify-center items-center gap-4 py-8">
					<div className="w-[461px] h-[254px] drop-shadow-md bg-[#D9D9D9] rounded-3xl">
						<Image
							src="/BgSambutan.jpg"
							alt="Blog kami"
							width={250}
							height={40}
							className="w-full rounded-t-3xl"
						/>
						<div className="w-[48px] my-2 mx-4 bg-[#FF0000] h-[3px]" />
						<p className="mb-2 mx-4 text-shadow">National Advance Training XVI</p>
					</div>
					<div>
						<p className="text-[#8A8888]">Press Release</p>
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
				<div className="flex justify-center items-center gap-4 py-8">
					<div className="w-[461px] h-[254px] drop-shadow-md bg-[#D9D9D9] rounded-3xl">
						<Image
							src="/BgSambutan.jpg"
							alt="Blog kami"
							width={250}
							height={40}
							className="w-full rounded-t-3xl"
						/>
						<div className="w-[48px] my-2 mx-4 bg-[#FF0000] h-[3px]" />
						<p className="mb-2 mx-4 text-shadow">Seminar Riset Nasional</p>
					</div>
					<div>
						<p className="text-[#8A8888]">Press Release</p>
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
				<div className="flex justify-center items-center gap-4 py-8">
					<div className="w-[461px] h-[254px] drop-shadow-md bg-[#D9D9D9] rounded-3xl">
						<Image
							src="/BgSambutan.jpg"
							alt="Blog kami"
							width={250}
							height={40}
							className="w-full rounded-t-3xl"
						/>
						<div className="w-[48px] my-2 mx-4 bg-[#0022FF] h-[3px]" />
						<p className="mb-2 mx-4 text-shadow">Bench Marking (Road To Samarinda)</p>
					</div>
					<div>
						<p className="text-[#8A8888]">Press Release</p>
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
			</div>
		</div>
	);
};

export default Blog;
