const Button = ({ type, label }) => {
	return (
		<button
			type={type}
			className='bg-purple text-white block w-full py-3 cursor-pointer tracking-wide rounded-sm'
		>
			{label}
		</button>
	);
};
export default Button;
