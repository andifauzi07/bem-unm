import Image from 'next/image';
import bagan from '@/public/kementrian/bagan-sosial.png';
const SosialDanPolitik = () => {
	return (
		<div>
			<div className="sosial h-screen w-full bg-no-repeat bg-cover bg-center pl-[89px] py-28">
				<h1
					data-aos="fade-down"
					className="text-[58px] leading-none font-bold text-white text-shadow mt-[160px] mb-10">
					Kementerian <br /> Sosial & Politik
				</h1>
				<p
					data-aos="fade-up"
					className="text-white text-shadow text-justify pr-[160px]">
					Bertanggung jawab untuk mengelola isu-isu sosial dan politik yang relevan dengan mahasiswa serta masyarakat luas. Kementerian ini berperan dalam meningkatkan kesadaran politik dan sosial di kalangan mahasiswa melalui kajian,
					diskusi, dan kampanye, sekaligus memperjuangkan aspirasi mahasiswa dalam berbagai isu kebijakan kampus maupun pemerintah.
				</p>
			</div>
			<div className="py-16 px-24">
				<h1 className="text-5xl text-center font-bold pb-10">
					<span className="text-[#E15600]">Struktur </span> <br /> Kepengurusan
				</h1>
				<Image
					src={bagan}
					alt="bagan mentri Sosial"
					className="mx-auto"
				/>
			</div>
		</div>
	);
};

export default SosialDanPolitik;