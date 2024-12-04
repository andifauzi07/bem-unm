import Link from 'next/link';
import { FileSliders } from 'lucide-react';

const DataList = ({ nav, title }) => {
	return (
		<div className="flex items-center gap-2">
			<FileSliders size={17} />
			<Link
				href={nav}
				target="_blank"
				className="flex flex-1 items-center justify-between py-2 font-medium transition-all hover:underline">
				{title}
			</Link>
		</div>
	);
};

export default DataList;
