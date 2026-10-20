const Label = ({htmlFor, children, className = "", ...props}) => (
    <label
        {...props}
        htmlFor={htmlFor}
        className={`block text-[10px] tracking-[0.2em] uppercase text-ink/80 mb-2 ${className}`}>
        {children}
    </label>
);
export default Label;