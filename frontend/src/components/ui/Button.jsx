const Button = ({children, className = "", ...props}) => (
    <button
        {...props}
        className={`w-full text-xs border hover:border-accent hover:text-accent py-3 active:bg-accent disabled:cursor-not-allowed transition duration-200 tracking-[0.2em] uppercase
        ${className}`}>
        {children}
    </button>
);
export default Button;