import { useState } from 'react';
import NewCardForm from '../components/NewCardForm';
import {
	bgCardBack,
	bgCardFront,
	// bgMainMobile,
	// bgMainDesktop,
	cardLogo,
	// iconComplete,
} from '../assets/images';

const NewCard = () => {
	const [cardHolderName, setCardHolderName] = useState('');
	const [cardNumber, setCardNumber] = useState(0);
	const [expiryMonth, setExpiryMonth] = useState(0);
	const [expiryYear, setExpiryYear] = useState(0);
	const [cvv, setCvv] = useState(null);

	const formattedCardNumber = (number) => {
		if (!number) return;

		const str = String(number);
		const formatted = str
			.replace(/\s/g, '')
			.match(/.{1,4}/g)
			.join(' ');
		return formatted;
	};

	const formattedMonth = (month) => {
		if (!month) {
			return '00';
		}
		return month > 10 ? month : '0' + month; // 🍻 here's to taking advantage of js loose type
	};

	const formattedYear = (year) => {
		return !year ? '00' : year;
	};

	return (
		<main className='h-screen'>
			<div>
				<div
					className='h-70 bg-no-repeat'
					style={{ backgroundImage: `url(${bgCardFront})` }}
				>
					<img src={cardLogo} alt='card logo' />
					<div>
						<p>{formattedCardNumber(cardNumber)}</p>
						<div className='flex gap-2'>
							<span>{cardHolderName}</span>
							<span>{`${formattedMonth(expiryMonth)}/${formattedYear(
								expiryYear
							)}`}</span>
						</div>
					</div>
				</div>
				<div
					className='h-70 bg-no-repeat'
					style={{ backgroundImage: `url(${bgCardBack})` }}
				>
					<span>{cvv === null ? '000' : cvv}</span>
				</div>
			</div>
			<div>
				<NewCardForm
					cardStates={{
						setCardHolderName,
						setCardNumber,
						setExpiryMonth,
						setExpiryYear,
						setCvv,
					}}
				/>
			</div>
		</main>
	);
};
export default NewCard;
