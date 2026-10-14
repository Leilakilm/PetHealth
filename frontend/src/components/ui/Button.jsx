const Button = ({ children, className = "", ...props }) => (
    <button
        {...props}
        className={`
      w-full text-xs border border-slate-800 text-slate-800 hover:border-orange-600
      hover:text-orange-600  py-3 hover:text-white
      active:bg-orange-600 disabled:cursor-not-allowed transition transition duration-200 tracking-[0.2em] uppercase
      ${className}
    `}
    >
        {children}
    </button>
);
export default Button;