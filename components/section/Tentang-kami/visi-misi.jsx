const VisiMisi = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center mb-10">
			<div className="flex w-full justify-center text-center text-[38px] font-bold mb-6">
				<div
					className="lg:w-1/2 lg:block hidden"
					data-aos="fade-right">
					VISI
				</div>
				<div
					className="lg:w-1/2 lg:block hidden"
					data-aos="fade-left">
					MISI
				</div>
			</div>
			<div
				data-aos="fade-up"
				className="bg-tetriary rounded-3xl drop-shadow-md text-lg flex lg:flex-row flex-col w-full justify-center items-center lg:gap-4 text-justify">
				<div className="lg:w-1/2 lg:mx-2 lg:my-4 p-8">
					<h3 className="lg:hidden block font-bold text-3xl text-center pb-6">VISI</h3>
					<p>
						Kabinet BEM hadir sebagai motor penggerak perubahan dan wadah aspirasi bagi seluruh mahasiswa. Dengan visi dan misi yang kuat, kabinet ini terdiri dari mahasiswa-mahasiswa yang siap berkolaborasi, berinovasi, dan berdedikasi
						untuk menciptakan lingkungan kampus yang lebih inklusif, aktif, dan inspiratif. Dalam Kabinet BEM, setiap anggota membawa semangat untuk mendengar, beraksi, dan melayani demi kebaikan
					</p>
				</div>
				<div className="lg:w-1/2 mx-2 lg:my-4 p-8">
					<h3 className="lg:hidden block font-bold text-3xl text-center pb-6">MISI</h3>
					<ul className="edited-list flex flex-col gap-4">
						<li>Menciptakan lingkungan kelembagaan yang sehat dan berintegritas</li>
						<li>Proaktif dalam pengawalan internal dan eksternal</li>
						<li>Optimalisasi sumber daya mahasiswa dalam mewujudkan tridharma perguruan tinggi</li>
						<li>Kolaborasi multisektor</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default VisiMisi;
