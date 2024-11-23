import Image from 'next/image';
import icon from '@/public/icon/bintang.svg';
import { proker } from '@/utils/constant';

export default function Proker() {
	return (
		<>
			<h1 className="lg:text-5xl text-2xl lg:py-16 pb-8 pt-4 font-bold">Program Kerja Unggulan</h1>
			<div className="bg-[#D9D9D9] lg:w-2/3 lg:mx-auto lg:text-left lg:py-8 px-4 py-2 lg:px-6">
				{proker.map((data) => (
					<ul
						className=""
						key={data.id}>
						<li className="text-left flex items-start gap-4 my-4">
							<Image
								src={icon}
								alt="icon"
							/>
							<div>
								<h1 className="font-bold">{data.kementrian}</h1>
								<p className="text-[#757575]">{data.program[0]}</p>
								<p className="text-[#757575]">{data.program[1] ? data.program[1] : ''}</p>
							</div>
						</li>
					</ul>
				))}
			</div>
		</>
	);
}
