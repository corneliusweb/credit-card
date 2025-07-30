import { useState } from 'react';
import { z } from 'zod';
import Button from './Button';

const cardSchema = z.object({
	cardNumber: z
		.string()
		.regex(/^\d+$/, 'Wrong format, numbers only.')
		.length(16, 'Card number must be exactly 16 digits'),
	cardHolder: z
		.string()
		.regex(/^[A-Za-z\s]+$/, 'Name must contain only letters and spaces')
		.max(17, 'Name too long, please use only your firstName'),
	expiryMonth: z.string().regex(/^(0[1-9]|1[0-2])$/, "Month can't be blank"),
	expiryYear: z.string().regex(/^\d{2}$/, "Year can't be blank"),
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
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;

		// construct new key:value pair or update if it exists
		const updated = { ...formData, [name]: value };
		setFormData(updated);

		// validate just the changed input field
		const singleFieldSchema = cardSchema.shape[name];
		const result = singleFieldSchema.safeParse(value);

		if (result.success) {
			setErrors((prevErrors) => {
				const newErrors = { ...prevErrors };
				delete newErrors[name]; // delete resolved errors if they exists
				return newErrors;
			});
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				[name]: result.error.issues[0].message,
			}));
		}

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

		// validate formData on submit
		const result = cardSchema.safeParse(formData);
		if (!result.success) return; // prevent submission

		setIsSuccessful(true); // submit because it passed
	};

	return (
		<form onSubmit={handleSubmit} className='max-w-[480px] p-3 sm:p-0'>
			<label className='label-style'>
				Card Holder Name
				<div
					className={
						errors.cardHolder ? 'invalid-style' : 'gradient-border'
					}
				>
					<input
						type='text'
						name='cardHolder'
						placeholder='e.g Jane Appleseed'
						required
						maxLength={18}
						autoFocus={true}
						onChange={handleChange}
						className='input-style'
					/>
				</div>
				{errors.cardHolder && (
					<p className='error-style'>{errors.cardHolder}</p>
				)}
			</label>
			<label className='label-style'>
				Card Number
				<div
					className={
						errors.cardNumber ? 'invalid-style' : 'gradient-border'
					}
				>
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
				{errors.cardNumber && (
					<p className='error-style'>{errors.cardNumber}</p>
				)}
			</label>

			<div className='flex justify-between mb-8 gap-4'>
				<fieldset
					className={`flex gap-2 w-1/2 ${
						errors.expiryMonth || errors.expiryYear ? 'relative mb-2' : ''
					}`}
				>
					<legend className='uppercase text-sm font-semibold tracking-wider'>
						Exp. Date (MM / YY)
					</legend>
					<div
						className={
							errors.expiryMonth || errors.expiryYear
								? 'invalid-style'
								: 'gradient-border'
						}
					>
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
					{/* display error when either of month & year is true */}
					{(errors.expiryMonth || errors.expiryYear) && (
						<p className='error-style absolute -bottom-4.5'>
							{/* first display month if true, then year after */}
							{errors.expiryMonth || errors.expiryYear}
						</p>
					)}
				</fieldset>

				<label
					className={`label-style mb-0 grow ${
						errors.cvv ? 'relative mb-2' : ''
					}`}
				>
					Cvv
					<div
						className={errors.cvv ? 'invalid-style' : 'gradient-border'}
					>
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
					{errors.cvv && (
						<p className='error-style absolute -bottom-4.5'>
							{' '}
							{errors.cvv}{' '}
						</p>
					)}
				</label>
			</div>
			<Button type={'submit'} label={'Confirm'} />
		</form>
	);
};
export default NewCardForm;
