import React from 'react';

const KontakFormulir = () => {
	return (
		<div
			className="w-1/2 py-6"
			data-aos="fade-right">
			<div className="flex items-center justify-center">
				<div className="w-full max-w-md p-6 border-solid border-2 border-[#D9D9D9]  bg-white rounded-lg shadow-lg">
					<form className="space-y-4">
						<div>
							<label
								htmlFor="nama"
								className="text-start block text-sm font-medium text-gray-700">
								Nama
							</label>
							<input
								type="text"
								id="nama"
								placeholder="Nama"
								className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="text-start block text-sm font-medium text-gray-700">
								Email
							</label>
							<input
								type="email"
								id="email"
								placeholder="Email"
								className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
							/>
						</div>

						<div>
							<label
								htmlFor="pesan"
								className="text-start block text-sm font-medium text-gray-700">
								Pesan
							</label>
							<textarea
								id="message"
								placeholder="Pesan Anda"
								rows="4"
								className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
						</div>

						<div className="pt-4">
							<button
								type="submit"
								className="w-full px-4 py-2 text-white bg-[#2C2C2C] rounded-md hover:bg-[#868686]">
								Kirim
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default KontakFormulir;
