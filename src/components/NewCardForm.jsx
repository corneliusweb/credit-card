import Button from './Button';

const NewCardForm = ({
	cardStates: {
		setCardHolderName,
		setCardNumber,
		setExpiryMonth,
		setExpiryYear,
		setCvv,
	},
}) => {
	return (
		<form className='max-w-[480px] p-3 sm:p-0'>
			<label className='label-style'>
				Card Holder Name
				<input
					type='text'
					name='fullname'
					placeholder='e.g Jane Appleseed'
					required
					onChange={(e) => setCardHolderName(e.target.value)}
					className='input-style'
				/>
			</label>
			<label className='label-style'>
				Card Number
				<input
					type='number'
					name='card-number'
					placeholder='e.g 1234 5678 9123 0000'
					required
					onChange={(e) => setCardNumber(e.target.valueAsNumber)}
					className='input-style'
				/>
			</label>
			<div className='flex justify-between mb-8 gap-4'>
				<fieldset className='flex gap-2 w-1/2'>
					<legend className='uppercase text-sm font-semibold tracking-wider'>
						Exp. Date (MM / YY)
					</legend>
					<input
						type='number'
						name='expiry-month'
						placeholder='MM'
						required
						onChange={(e) => setExpiryMonth(e.target.valueAsNumber)}
						className='flex-input-style'
					/>
					<input
						type='number'
						name='expiry-year'
						placeholder='YY'
						required
						onChange={(e) => setExpiryYear(e.target.valueAsNumber)}
						className='flex-input-style'
					/>
				</fieldset>

				<label className='label-style mb-0 grow'>
					Cvv
					<input
						type='number'
						name='cvv'
						placeholder='e.g 123'
						required
						onChange={(e) => setCvv(e.target.valueAsNumber)}
						className='flex-input-style block py-2 w-full'
					/>
				</label>
			</div>
			<Button type={'submit'} label={'Confirm'} />
		</form>
	);
};
export default NewCardForm;
