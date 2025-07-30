import { useState } from 'react';
import { z } from 'zod';
import Button from './Button';

const cardSchema = z.object({
	cardNumber: z
		.string()
		.length(16, 'Card number must be exactly 16 digits')
		.regex(/^\d+$/, 'Wrong format, numbers only.'),
	cardHolder: z
		.string()
		.max(25, 'Name is too long')
		.regex(/^[A-Za-z\s]+$/, 'Name must contain only letters and spaces'),
	expiryMonth: z
		.string()
		.regex(/^(0[1-9]|1[0-2])$/, 'Month must be between 01 and 12'),
	expiryYear: z.string().regex(/^\d{2}$/, 'Year must be two digits'),
	cvv: z.string().regex(/^\d{3}$/, 'CVV must be 3 digits'),
});

const NewCardForm = ({ cardStates }) => {
	const {
		setCardHolderName,
		setCardNumber,
		setExpiryMonth,
		setExpiryYear,
		setCvv,
		setIsSuccessful,
	} = cardStates;

	const [formData, setFormData] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;

		// construct new key:value pair or update if it exists
		const updated = { ...formData, [name]: value };
		setFormData(updated);

		// update the ui based on the changed input 
		// converting to number here is essential for the formatting funcs in NewCard.jsx
		if (name === 'cardHolder') setCardHolderName(value);
		if (name === 'cardNumber') setCardNumber(Number.parseInt(value));
		if (name === 'expiryMonth') setExpiryMonth(Number.parseInt(value));
		if (name === 'expiryYear') setExpiryYear(Number.parseInt(value));
		if (name === 'cvv') setCvv(Number.parseInt(value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSuccessful(true);
	};

	return (
		<form onSubmit={handleSubmit} className='max-w-[480px] p-3 sm:p-0'>
			<label className='label-style'>
				Card Holder Name
				<div className='gradient-border'>
					<input
						type='text'
						name='cardHolder'
						placeholder='e.g Jane Appleseed'
						required
						autoFocus={true}
						onChange={handleChange}
						className='input-style'
					/>
				</div>
			</label>
			<label className='label-style'>
				Card Number
				<div className='gradient-border'>
					<input
						type='text'
						name='cardNumber'
						placeholder='e.g 1234 5678 9123 0000'
						required
						maxLength={16}
						minLength={16}
						onChange={handleChange}
						className='input-style'
					/>
				</div>
			</label>
			<div className='flex justify-between mb-8 gap-4'>
				<fieldset className='flex gap-2 w-1/2'>
					<legend className='uppercase text-sm font-semibold tracking-wider'>
						Exp. Date (MM / YY)
					</legend>
					<div className='gradient-border'>
						<input
							type='text'
							name='expiryMonth'
							placeholder='MM'
							required
							maxLength={2}
							minLength={1}
							onChange={handleChange}
							className='flex-input-style'
						/>
					</div>
					<div className='gradient-border'>
						<input
							type='text'
							name='expiryYear'
							placeholder='YY'
							required
							maxLength={2}
							minLength={2}
							onChange={handleChange}
							className='flex-input-style'
						/>
					</div>
				</fieldset>

				<label className='label-style mb-0 grow'>
					Cvv
					<div className='gradient-border'>
						<input
							type='text'
							name='cvv'
							placeholder='e.g 123'
							required
							maxLength={3}
							minLength={3}
							onChange={handleChange}
							className='flex-input-style block py-2 w-full'
						/>
					</div>
				</label>
			</div>
			<Button type={'submit'} label={'Confirm'} />
		</form>
	);
};
export default NewCardForm;
