const Button = ({ type, label, onClick }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className='bg-purple-950 text-white block w-full py-3 cursor-pointer tracking-wide rounded-md hover:bg-black'
		>
			{label}
		</button>
	);
};
export default Button;
