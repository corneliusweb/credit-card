import { useState } from 'react';
import NewCardForm from '../components/NewCardForm';
import SuccessMessage from '../components/SuccessMessage';
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
	const [isSuccessful, setIsSuccessful] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

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

	const resetDisplay = () => {
		setCardHolderName('');
		setCardNumber('');
		setExpiryMonth('');
		setExpiryYear('');
		setCvv(null);
		setIsSuccessful(false);
		setIsSubmitting(false)
	};

	return (
		<main className='grid gap-22 pb-12 sm:gap-38 xl:gap-0 xl:grid-cols-2 max-w-[1440px]'>
			<div
				className={`bg-[image:var(--bg-mobile)] bg-no-repeat bg-cover relative flex flex-col-reverse items-end pr-2 justify-center h-60 sm:pr-0 sm:h-70 sm:items-center xl:w-[483px] xl:h-screen xl:bg-[image:var(--bg-desktop)]`}
			>
				<div
					className='bg-no-repeat bg-cover w-[280px] h-[154px] flex flex-col p-4 justify-between items-start absolute -right-30 top-[54%] z-10 transform -translate-x-[69%] sm:py-6 sm:w-[380px] sm:h-[209px] sm:left-[51%] xl:p-6 xl:w-[447px] xl:h-[245px] xl:-right-25 xl:top-26 xl:-translate-x-0 xl:left-1/4'
					style={{ backgroundImage: `url(${bgCardFront})` }}
				>
					<img
						src={cardLogo}
						alt='card logo'
						className='w-[58px] sm:w-[78px] xl:w-[88px]'
					/>

					<div className='flex flex-col flex-nowrap justify-between gap-3 sm:gap-5 xl:gap-7 overflow-hidden w-full'>
						<p className='text-white text-xl tracking-wide sm:tracking-widest sm:text-2xl xl:tracking-widest'>
							{!cardNumber
								? '0000 0000 0000 0000'
								: formattedCardNumber(cardNumber)}
						</p>

						<div className='flex justify-between text-gray-300 text-sm tracking-widest '>
							<span className='uppercase'>
								{!cardHolderName ? 'Jane Appleseed' : cardHolderName}
							</span>
							<span>
								{`${formattedMonth(expiryMonth)}/${formattedYear(
									expiryYear
								)}`}
							</span>
						</div>
					</div>
				</div>

				<div className='xl:absolute xl:top-93 xl:-right-40'>
					<div
						className='bg-no-repeat bg-cover relative w-[280px] h-[154px] sm:w-[380px] sm:h-[209px] xl:w-[447px] xl:h-[245px]'
						style={{ backgroundImage: `url(${bgCardBack})` }}
					>
						<div className='absolute right-9 text-white text-base top-5/12 sm:top-[43.5%] sm:right-10 xl:right-14'>
							{!cvv ? '000' : cvv}
						</div>
					</div>
				</div>
			</div>
			<div className='flex items-center justify-center'>
				{!isSubmitting && !isSuccessful && (
					<NewCardForm
						cardStates={{
							setCardHolderName,
							setCardNumber,
							setExpiryMonth,
							setExpiryYear,
							setCvv,
							setIsSuccessful,
							setIsSubmitting,
							isSubmitting,
						}}
					/>
				)}

				{isSubmitting && (
					<div className='mx-auto content-center h-50'>
						<div className='w-20 h-20 mx-auto border-2 border-[hsl(278,94%,30%)] border-t-[hsl(249,99%,64%)] rounded-full animate-spin'></div>
						<span className='block mx-auto'>Processing your card...</span>
					</div>
				)}

				{isSuccessful && (
					<SuccessMessage
						icon={iconComplete}
						resetDisplay={resetDisplay}
					/>
				)}
			</div>
		</main>
	);
};
export default NewCard;
