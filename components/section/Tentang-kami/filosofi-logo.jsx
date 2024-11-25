import Image from 'next/image';

const imageUrl = [
	{ id: '1', url: '/logo kabinet 1.svg' },
	{ id: '2', url: '/logo kabinet 2.svg' },
	{ id: '3', url: '/logo kabinet 3.svg' },
];

function FilosofiLogo() {
	return (
		<div className="mb-6">
			<div className="w-full px-8 py-4 text-center my-8">
				<h1 className="lg:text-[36px] text-3xl font-bold">
					{' '}
					<span className="text-[#E15600]">Filosofi</span> Logo Kabinet
				</h1>
			</div>
			<div className="w-full justify-center flex flex-wrap px-6 lg:px-0">
				{imageUrl.map((image) => (
					<Image
						key={image.id}
						src={image.url}
						width={464}
						height={363}
						alt={`logo kabinet ${image.id}`}
					/>
				))}
			</div>
		</div>
	);
}

export default FilosofiLogo;
