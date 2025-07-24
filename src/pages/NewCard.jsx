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
	const [cvv, setCvv] = useState(0);

	// console.log(
	// 	`name: ${cardHolderName}\nnumber: ${cardNumber}\nmonth: ${expiryMonth}\nyear: ${expiryYear}\ncvv: ${cvv}\n`
	// );

	const formattedMonth = (month) => {
		const number = Number.parseInt(month);
		if (!number) {
			return '00';
		}
		return number > 10 ? number : '0' + number; // 🍻 here's to taking advantage of js loose type
		
	};

	const formattedYear = (year) => {
		const number = Number.parseInt(year);

		return !number ? '00' : number;
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
						<p>0000 1111 2222 3333 4444</p>
						<div className='flex gap-2'>
							<span>{cardHolderName}</span>
							<div>
								<span>{formattedMonth(expiryMonth)}</span>/
								<span>{formattedYear(expiryYear)}</span>
							</div>
						</div>
					</div>
				</div>
				<div
					className='h-70 bg-no-repeat'
					style={{ backgroundImage: `url(${bgCardBack})` }}
				></div>
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
