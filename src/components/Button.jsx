const Button = ({ type, label }) => {
	return (
		<button
			type={type}
			className='bg-[var(--purple-color)] text-[var(--white-color)] block w-full py-3 cursor-pointer tracking-wide'
		>
			{label}
		</button>
	);
};
export default Button;
