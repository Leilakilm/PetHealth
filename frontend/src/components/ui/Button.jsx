const Button = ({ children, className = "", ...props }) => (
    <button
        {...props}
        className={`
      w-full py-2.5 border border-orange-600
      text-orange-600 hover:bg-orange-600 hover:text-white
      active:bg-orange-600 transition duration-200
      ${className}
    `}
    >
        {children}
    </button>
);
export default Button;