const Select = ({error, className = "", children, ...props}) => (
    <select
        {...props}
        className={`w-full bg-transparent py-2.5 border-ink px-3 border transition focus:outline-none focus:text-accent focus:border-accent text-sm border-cream
        ${error ? "border-danger" : ""}
        ${className}`}>
        {children}
    </select>
);

export default Select;