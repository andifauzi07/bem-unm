import HeroSection from '@/components/section/Tentang-kami/kabinet-kolaboratif';
import VisiMisi from '@/components/section/Tentang-kami/visi-misi';
import FilosofiLogo from '@/components/section/Tentang-kami/filosofi-logo';
import FungsiKabinet from '@/components/section/Tentang-kami/fungsi-kabinet';
import DeskripsiLogo from '@/components/section/Tentang-kami/deskripsi-logo';

const TentangKami = () => {
	return (
		<main className="w-full bg-primary">
			<div className="lg:py-28 lg:px-16">
				<DeskripsiLogo />
			</div>
			<div className="w-ful bg-[#eaeaea]">
				<FungsiKabinet />
			</div>
			<div className="w-full px-6 lg:px-16">
				<HeroSection />
				<VisiMisi />
			</div>
			<div className="w-full lg:px-36">
				<FilosofiLogo />
			</div>
		</main>
	);
};

export default TentangKami;
