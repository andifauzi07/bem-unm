import Link from 'next/link';
import { FileSliders } from 'lucide-react';

const DataList = ({ nav, title }) => {
	return (
		<div className="flex items-center relative gap-2">
			<FileSliders size={17} />
			<Link
				href={nav}
				target="_blank"
				className="py-1 hover_button">
				{title}
			</Link>
		</div>
	);
};

export default DataList;
