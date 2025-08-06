import Button from './Button';
import { iconComplete } from '../assets/images';

const SuccessMessage = ({ resetDisplay }) => {
	return (
		<div className='text-center w-[360px] p-3 sm:p-0 grid gap-3'>
			<img src={iconComplete} alt='success icon' className='mx-auto mb-4' />
			<h2 className='text-purple-950 uppercase tracking-widest text-2xl leading-9'>
				Thank you!
			</h2>
			<p className='text-gray-400 mb-6'>We've added your card details</p>
			<Button
				label={'Continue'}
				type={'button'}
				onClick={() => resetDisplay()}
			/>
		</div>
	);
};
export default SuccessMessage;
