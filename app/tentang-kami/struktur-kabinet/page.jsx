import Image from 'next/image';
import SectionTitle from './SectionTitle';
import strukturOrganisasi from '@/public/struktur-kabinet.png';
import Proker from './Proker';

export default function StrukturKabinet() {
	return (
		<div className="lg:py-28 py-24 text-center">
			<SectionTitle />
			<div className="w-full flex justify-center py-8">
				<Image
					src={strukturOrganisasi}
					alt="struktur-organisasi"
				/>
			</div>
			<div className="w-full">
				<Proker />
			</div>
		</div>
	);
}
