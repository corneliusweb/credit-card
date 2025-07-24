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
						onChange={(e) => setCardNumber(e.target.value)}
					/>
				</label>
				<div>
					<fieldset>
						<input
							type='number'
							name='expiry-month'
							placeholder='MM'
							required
							onChange={(e) => setExpiryMonth(e.target.value)}
						/>
						<input
							type='number'
							name='expiry-year'
							placeholder='YY'
							required
							onChange={(e) => setExpiryYear(e.target.value)}
						/>
					</fieldset>
					<input
						type='number'
						name='cvv'
						placeholder='e.g 123'
						required
						onChange={(e) => setCvv(e.target.value)}
					/>
				</div>
				<button type='submit'>Confirm</button>
			</form>
		</div>
	);
};
export default NewCardForm;
