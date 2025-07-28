const Button = ({ type, label, onClick }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className='bg-purple text-white block w-full py-3 cursor-pointer tracking-wide rounded-md'
		>
			{label}
		</button>
	);
};
export default Button;
