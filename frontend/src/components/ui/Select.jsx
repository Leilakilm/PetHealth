const Select = ({error, className = "", children, ...props}) => (
    <select
        {...props}
        className={`w-full bg-transparent py-2.5 px-3 transition border transition focus:outline-none focus:text-orange-600 focus:border-orange-600 text-sm text-slate-800 border-slate-300
        ${error ? "border-red-500" : ""}
        ${className}`}>
        {children}
    </select>
);

export default Select;