import DataList from './DataList';
import { listFileData } from '@/utils/constant';

export default function BankData() {
	return (
		<main className="lg:py-28 py-24 text-center">
			<h1 className="lg:text-5xl text-2xl font-bold pt-4 lg:pt-0 lg:pb-4">
				Bank <span className="text-[#E15701]">Data</span>
			</h1>
			<p className="text-[#8A8888] lg:text-2xl lg:pb-4">Laporan Pertanggung Jawaban Kabinet</p>
			<div className="w-full flex justify-center">
				<ul>
					{listFileData.map((data) => (
						<li key={data.title}>
							<DataList
								nav={data.nav}
								title={data.title}
							/>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}
