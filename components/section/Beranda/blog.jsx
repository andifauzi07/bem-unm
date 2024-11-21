import Image from 'next/image';
// import bgSambutan from '@/public/BgSambutan.jpg';

const Blog = () => {
	return (
		<div className="bg-[#e4e4e4]">
			<div className="w-full text-center lg:text-start px-4 lg:px-0 lg:pl-[202px]">
				<h1
					data-aos="fade-up"
					className="lg:text-[70px] text-4xl lg:py-4 py-8 leading-none font-bold drop-shadow-md">
					Tetap terhubung <br />
					dengan <span className="text-[#E15600]"> kami</span>
				</h1>
				<p
					data-aos="fade-down"
					className="text-[#8A8888] lg:text-2xl text-lg">
					{' '}
					Kunjungi Blog Kami Untuk informasi terkini seputar kegiatan mahasiswa
				</p>
			</div>
			<div className="flex justify-center py-16 lg:px-8 gap-4">
				<div className="lg:block hidden">
					<div className="flex items-end">
						<Image
							src="/Sekab.png"
							width={300}
							height={0}
							alt="Sekretaris kabinet"
						/>
						<div>
							<h1 className=" text-2xl font-semibold">Afifah Aprilia</h1>
							<p className="text-[#E15701] font-bold">Sekretaris Kabinet</p>
						</div>
					</div>
				</div>
				<div className="w-[699px] bg-[#E4E3E3] rounded-3xl flex flex-col justify-center lg:block">
					<div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:py-8 py-4">
						<div className="lg:w-[461px] lg:h-[254px] drop-shadow-md bg-[#D9D9D9] rounded-3xl">
							<Image
								src="/BgSambutan.jpg"
								alt="Blog kami"
								width={250}
								height={40}
								className="w-full rounded-t-3xl"
							/>
							<div className="w-[178px] my-2 mx-4 bg-[#FF0000] h-[3px]" />
							<p className="mb-2 mx-4 text-shadow">National Advance Training XVI</p>
						</div>
						<div className="flex lg:block gap-3">
							<p className="text-[#E15701] font-bold">Press Release</p>
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
					<div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:py-8 py-4">
						<div className="lg:w-[461px] lg:h-[254px] drop-shadow-md bg-[#D9D9D9] rounded-3xl">
							<Image
								src="/BgSambutan.jpg"
								alt="Blog kami"
								width={250}
								height={40}
								className="w-full rounded-t-3xl"
							/>
							<div className="w-[178px] my-2 mx-4 bg-[#FF0000] h-[3px]" />
							<p className="mb-2 mx-4 text-shadow">Seminar Riset Nasional</p>
						</div>
						<div className="flex lg:block gap-3">
							<p className="text-[#E15701] font-bold">Press Release</p>
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
					<div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:py-8 py-4">
						<div className="lg:w-[461px] lg:h-[254px] drop-shadow-md bg-[#D9D9D9] rounded-3xl">
							<Image
								src="/BgSambutan.jpg"
								alt="Blog kami"
								width={250}
								height={40}
								className="w-full rounded-t-3xl"
							/>
							<div className="w-[178px] my-2 mx-4 bg-[#0022FF] h-[3px]" />
							<p className="mb-2 mx-4 text-shadow">Benchmarking (Road to Samarinda)</p>
						</div>
						<div className="flex lg:block gap-3">
							<p className="text-[#E15701] font-bold">Press Release</p>
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
					{/* <div className="flex justify-center items-center gap-4 py-8">
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
							<p className="text-[#E15701] font-bold">Press Release</p>
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
							<p className="text-[#E15701] font-bold">Press Release</p>
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
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Blog;
