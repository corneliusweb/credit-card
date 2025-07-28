import Button from './Button';

const NewCardForm = ({
	cardStates: {
		setCardHolderName,
		setCardNumber,
		setExpiryMonth,
		setExpiryYear,
		setCvv,
		setIsSuccessful,
	},
}) => {
	const handleMonthChange = (e) => {
		let value = Number.parseInt(e.target.value);
		// prevent user from typing invalid month
		if (value < 1 && value) value = 1;
		if (value > 12) value = 12;

		setExpiryMonth(value);
	};

	const handleYearChange = (e) => {
		let value = Number.parseInt(e.target.value);
		if (value < 1 && value) value = 1;

		setExpiryYear(value);
	};

	const handleCardNumberChange = (e) => {
		const cardNumber = Number.parseInt(e.target.value);
		setCardNumber(cardNumber);
	};

	const handleCvvChange = (e) => {
		let value = Number.parseInt(e.target.value);
		if (value < 1 && value) value = 1;
		setCvv(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSuccessful(true);
	};

	return (
		<form onSubmit={handleSubmit} className='max-w-[480px] p-3 sm:p-0'>
			<label className='label-style'>
				Card Holder Name
				<div class='gradient-border'>
					<input
						type='text'
						name='fullname'
						placeholder='e.g Jane Appleseed'
						required
						autoFocus={true}
						onChange={(e) => setCardHolderName(e.target.value)}
						className='input-style'
					/>
				</div>
			</label>
			<label className='label-style'>
				Card Number
				<div class='gradient-border'>
					<input
						type='text'
						name='card-number'
						placeholder='e.g 1234 5678 9123 0000'
						required
						maxLength={16}
						minLength={16}
						onChange={handleCardNumberChange}
						className='input-style'
					/>
				</div>
			</label>
			<div className='flex justify-between mb-8 gap-4'>
				<fieldset className='flex gap-2 w-1/2'>
					<legend className='uppercase text-sm font-semibold tracking-wider'>
						Exp. Date (MM / YY)
					</legend>
					<div class='gradient-border'>
						<input
							type='text'
							name='expiry-month'
							placeholder='MM'
							required
							maxLength={2}
							minLength={1}
							onChange={handleMonthChange}
							className='flex-input-style'
						/>
					</div>
					<div class='gradient-border'>
						<input
							type='text'
							name='expiry-year'
							placeholder='YY'
							required
							maxLength={2}
							minLength={2}
							onChange={handleYearChange}
							className='flex-input-style'
						/>
					</div>
				</fieldset>

				<label className='label-style mb-0 grow'>
					Cvv
					<div class='gradient-border'>
						<input
							type='text'
							name='cvv'
							placeholder='e.g 123'
							required
							maxLength={3}
							minLength={3}
							onChange={handleCvvChange}
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
