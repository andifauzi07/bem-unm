import HeroSection from '@/components/section/Tentang-kami/kabinet-kolaboratif';
import VisiMisi from '@/components/section/Tentang-kami/visi-misi';
import FilosofiLogo from '@/components/section/Tentang-kami/filosofi-logo';

const TentangKami = () => {
	return (
		<main className="w-full bg-primary">
			<div className="w-full px-36">
				<HeroSection />
				<VisiMisi />
				<div className="w-full border-b-[3px] border-[#2B2930]" />
			</div>
			<div className="w-full px-36">
				<FilosofiLogo />
			</div>
		</main>
	);
};

export default TentangKami;
