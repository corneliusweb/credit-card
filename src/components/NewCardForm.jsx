import Button from "./Button";

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
		<div>
			<form>
				<label>
					Card Holder Name
					<input
						type='text'
						name='fullname'
						placeholder='e.g Cornelius Asogwa'
						required
						onChange={(e) => setCardHolderName(e.target.value)}
					/>
				</label>
				<label>
					Card Number
					<input
						type='number'
						name='card-number'
						placeholder='e.g 1234 5678 9123 0000'
						required
						onChange={(e) => setCardNumber(e.target.valueAsNumber)}
					/>
				</label>
				<div>
					<fieldset>
						<input
							type='number'
							name='expiry-month'
							placeholder='MM'
							required
							onChange={(e) => setExpiryMonth(e.target.valueAsNumber)}
						/>
						<input
							type='number'
							name='expiry-year'
							placeholder='YY'
							required
							onChange={(e) => setExpiryYear(e.target.valueAsNumber)}
						/>
					</fieldset>
					<input
						type='number'
						name='cvv'
						placeholder='e.g 123'
						required
						onChange={(e) => setCvv(e.target.valueAsNumber)}
					/>
				</div>
				<Button type={'submit'} label={'Confirm'} />
			</form>
		</div>
	);
};
export default NewCardForm;
