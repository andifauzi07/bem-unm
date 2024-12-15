'use client';

import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const KontakFormulir = () => {
	const { toast } = useToast();
	const [formData, setFormData] = useState({
		nama: '',
		email: '',
		pesan: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch('/api/sheet', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET}`,
			},
			body: JSON.stringify(formData),
		});

		const result = await response.json();
		if (result.success) {
			toast({
				title: 'Berhasil',
				description: 'Pesan berhasil dikirim !',
			});
			setFormData({
				nama: '',
				email: '',
				pesan: '',
			});
		} else {
			toast({
				title: 'Gagal',
				variant: 'destructive',
				description: 'Pesan gagal terkirim !',
			});
			setFormData({
				nama: '',
				email: '',
				pesan: '',
			});
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div
			className="lg:w-1/2 py-6"
			data-aos="fade-right">
			<div className="flex items-center justify-center">
				<div className="w-full max-w-md p-6 border-solid border-2 border-[#D9D9D9]  bg-white rounded-lg shadow-lg">
					<form
						onSubmit={handleSubmit}
						className="space-y-4">
						<div>
							<label
								htmlFor="nama"
								className="text-start block text-sm font-medium text-gray-700">
								Nama
							</label>
							<input
								name="nama"
								value={formData.nama}
								onChange={handleChange}
								type="text"
								id="nama"
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
								name="email"
								value={formData.email}
								onChange={handleChange}
								type="email"
								id="email"
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
								name="pesan"
								value={formData.pesan}
								onChange={handleChange}
								id="pesan"
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
