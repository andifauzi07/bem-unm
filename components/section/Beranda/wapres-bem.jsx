import Image from 'next/image';
import Link from 'next/link';

const WapresBem = () => {
	return (
		<div className="text-black flex lg:flex-row flex-col lg:ml-16 lg:px-8 mt-8 bg-white">
			<div
				className="lg:w-3/5 px-4"
				data-aos="fade-right">
				<h1 className="lg:text-5xl text-center lg:text-left text-3xl font-bold">
					Kabinet <span className="text-[#E15701]">Kolaboratif</span>
				</h1>
				<p className="text-[#8A8888] lg:text-2xl text-center lg:text-left mb-8">Spirit Kolaborasi Multisektor</p>
				<p className="text-justify text-smlg:text-base">
					Nama Kabinet Kolaboratif diambil dengan Spirit Kolaborasi Multisektor, tidak terlepas dari Visi Presiden BEM UNM. Dimana dalam membangun lembaga yang berkelanjutan, Kolaborasi Multisektor didasarkan pada prinsip kerja sama, Dari
					sistem Kompetitif menjadi sistem Kooperatif. Baik antar sesama lembaga kemahasiswaan maupun dengan Pimpinan Universitas, dan lebih luas lagi kolaborasi dengan seluruh elemen yang ada.
				</p>
				<div>
					<div className="flex justify-center lg:justify-start gap-6 my-8">
						<div className="p-[3px] rounded-[15px] bg-gradient-to-r from-[#FFCC00] to-[#F45D00]">
							<div className="bg-white p-2 rounded-xl">
								<Link
									href="/tentang-kami"
									className="text-[#E15701] lg:text-base text-[12px] flex items-center gap-1">
									Selengkapnya
									<Image
										src="/icon/ButtonWapres.svg"
										width={28}
										height={28}
										alt="Button"
										className="w-6 h-6 lg:w-[28px] lg:h-[28px]"
									/>
								</Link>
							</div>
						</div>
						<Link
							href="/kontak"
							className="bg-gradient-to-r from-[#FFCC00] to-[#F45D00] text-white py-2 px-2 lg:text-base text-[12px] rounded-xl flex gap-1 items-center">
							Saatnya Bersuara
							<Image
								src="/icon/buttonIcon.svg"
								width={28}
								height={28}
								alt="Button"
								className="w-6 h-6 lg:w-[28px] lg:h-[28px]"
							/>
						</Link>
					</div>
				</div>
			</div>
			<div
				className="lg:w-2/5"
				data-aos="fade-left">
				<div className="flex justify-center lg:relative items-end">
					<div className="lg:absolute lg:-left-20 lg:bottom-6 w-1/2 px-2 pb-4 lg:pb-0 lg:px-0">
						<h2 className="lg:text-2xl font-bold text-xl lg:font-semibold lg:text-left">Muhammad Syarif</h2>
						<p className="text-[#E15600] font-bold">Wakil Presiden BEM</p>
					</div>
					<Image
						src="/WapresBem.png"
						alt="Wakil Presiden Bem Unm"
						width={300}
						height={0}
						quality={100}
					/>
				</div>
			</div>
		</div>
	);
};

export default WapresBem;
