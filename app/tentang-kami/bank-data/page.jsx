import DataList from './DataList';
import { listFileData } from '@/utils/constant';

export default function BankData() {
	return (
		<main className="h-screen lg:py-28 py-24 text-center">
			<h1 className="lg:text-5xl text-2xl font-bold pt-4 lg:pt-0 lg:pb-4">
				<span className="text-[#E15701]">Laporan</span> Pertanggung Jawaban
			</h1>
			<p className="text-[#8A8888] lg:text-2xl pb-6 lg:pb-8">Laporan Pertanggung Jawaban Kepengurusan</p>
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
