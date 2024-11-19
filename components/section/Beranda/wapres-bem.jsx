// import Wapres from '@/public/WapresBem.png';
import Image from 'next/image';
import Link from 'next/link';

const WapresBem = () => {
	return (
		<div className="text-black flex ml-16 px-8 mt-8 bg-white">
			<div
				className="w-3/5"
				data-aos="fade-right">
				<h1 className="text-[70px] font-bold">
					Kabinet <span className="text-[#E15701]">Kolaboratif</span>
				</h1>
				<p className="text-[#8A8888] text-2xl mb-8">Spirit Kolaborasi Multisektor</p>
				<p className="text-justify">
					Nama Kabinet Kolaboratif diambil dengan Spirit Kolaborasi Multisektor, tidak terlepas dari Visi Presiden BEM UNM. Dimana dalam membangun lembaga yang berkelanjutan, Kolaborasi Multisektor didasarkan pada prinsip kerja sama, Dari
					sistem Kompetitif menjadi sistem Kooperatif. Baik antar sesama lembaga kemahasiswaan maupun dengan Pimpinan Universitas, dan lebih luas lagi kolaborasi dengan seluruh elemen yang ada.
				</p>
				<div>
					<div className="flex justify-start gap-6 my-8">
						<div className="p-[3px] rounded-[15px] bg-gradient-to-r from-[#FFCC00] to-[#F45D00]">
							<div className="bg-white p-2 rounded-xl">
								<Link
									href="/kontak"
									className="text-[#E15701] flex gap-1">
									Selengkapnya
									<Image
										src="/icon/ButtonWapres.svg"
										width={28}
										height={28}
										alt="Button"
									/>
								</Link>
							</div>
						</div>
						<Link
							href="/kontak"
							className="bg-gradient-to-r from-[#FFCC00] to-[#F45D00] text-white py-2 px-4 rounded-xl flex gap-1 items-center">
							Saatnya Bersuara
							<Image
								src="/icon/buttonIcon.svg"
								width={28}
								height={28}
								alt="Button"
							/>
						</Link>
					</div>
				</div>
			</div>
			<div
				className="w-2/5"
				data-aos="fade-left">
				<div className="flex justify-center relative items-end">
					<div className="absolute -left-20 bottom-6">
						<h2 className="text-2xl text-shadow font-semibold">Muhammad Syarif</h2>
						<p className="text-[#E15600] font-bold">Wakil Presiden Mahasiswa</p>
					</div>
					<Image
						src="/WapresBem.png"
						alt="Wakil Presiden Bem Unm"
						width={300}
						height={0}
					/>
				</div>
			</div>
		</div>
	);
};

export default WapresBem;
