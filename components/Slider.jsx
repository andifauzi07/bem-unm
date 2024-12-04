import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';
import Link from 'next/link';

const reviews = [
	{
		name: 'Kementerian',
		url: '/pendidikan-dan-kebudayaan',
		username: 'dikbud',
		body: 'Pendidikan Dan Kebudayaan',
		img: '/icon/Pendidikan.png',
	},
	{
		name: 'Kementerian',
		url: '/riset-dan-pengembangan-organisasi',
		username: 'risbang',
		body: 'Riset Dan Pengembangan Organisasi',
		img: '/icon/Riset.png',
	},
	{
		name: 'Kementerian',
		url: '/sosial-dan-politik',
		username: 'sospol',
		body: 'Sosial Dan Politik',
		img: '/icon/Sospol.png',
	},
	{
		name: 'Kementerian',
		url: 'media-dan-propaganda',
		username: 'medipro',
		body: 'Media Dan Propaganda',
		img: '/icon/Media.png',
	},
	{
		name: 'Kementerian',
		url: '/perekonomian',
		username: 'ekonomi',
		body: 'Perekonomian',
		img: '/icon/Perekonomian.png',
	},
];

const ReviewCard = ({ url, img, name, body }) => {
	return (
		<figure
			className={cn(
				'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
				// light styles
				'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
				// dark styles
				'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
			)}>
			<Link
				href={url}
				className="flex flex-col items-center gap-2">
				<img
					className="rounded-full"
					width="32"
					height="32"
					alt=""
					src={img}
				/>
				<div className="flex flex-col text-center">
					<p className="text-xs font-medium text-[#8A8888]">{name}</p>
					<figcaption className="text-sm font-medium dark:text-white">{body}</figcaption>
				</div>
			</Link>
		</figure>
	);
};

export function MarqueeDemo() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
			<Marquee
				pauseOnHover
				className="[--duration:30s]">
				{reviews.map((review) => (
					<ReviewCard
						key={review.username}
						{...review}
					/>
				))}
			</Marquee>
			<Marquee
				reverse
				pauseOnHover
				className="[--duration:30s]">
				{reviews.map((review) => (
					<ReviewCard
						key={review.username}
						{...review}
					/>
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
			<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
		</div>
	);
}
