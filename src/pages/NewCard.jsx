import { useState } from 'react';
import NewCardForm from '../components/NewCardForm';
import {
	bgCardBack,
	bgCardFront,
	cardLogo,
	iconComplete,
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
		return month >= 10 ? month : '0' + month; // 🍻 here's to taking advantage of JS loose type
	};

	const formattedYear = (year) => {
		return !year ? '00' : year;
	};

	return (
		<main className='grid xl:grid-cols-2'>
			<div
				className={`bg-[image:var(--bg-mobile)] xl:bg-[image:var(--bg-desktop)] bg-no-repeat bg-cover xl:h-screen relative xl:w-[483px]`}
			>
					<div
						className='bg-no-repeat w-[447px] h-[245px] p-6 flex flex-col justify-between items-start xl:absolute xl:-right-25 xl:top-40'
						style={{ backgroundImage: `url(${bgCardFront})` }}
					>
						<img src={cardLogo} alt='card logo' />

						<div className='flex flex-col justify-between gap-6 overflow-hidden w-full'>
							<p className='text-[var(--white-color)] text-3xl tracking-widest w-full'>
								{!cardNumber
									? '0000 0000 0000 0000'
									: formattedCardNumber(cardNumber)}
							</p>

							<div className='flex justify-between text-gray-200 w-full'>
								<span className='uppercase tracking-wide'>
									{!cardHolderName ? 'Jane Appleseed' : cardHolderName}
								</span>
								<span>{`${formattedMonth(expiryMonth)}/${formattedYear(
									expiryYear
								)}`}</span>
							</div>
						</div>
					</div>

					<div className='xl:absolute xl:top-108 xl:-right-48'>
						<div
							className='bg-no-repeat w-[447px] h-[245px] relative'
							style={{ backgroundImage: `url(${bgCardBack})` }}
						>
							<span className=' block absolute top-[43.5%] right-14 text-white'>
								{cvv === null ? '000' : cvv}
							</span>
						</div>
					</div>
			</div>
			<div className='h-screen grid place-items-center grow'>
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
