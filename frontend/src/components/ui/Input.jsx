const Input = ({error, className = "", ...props}) => (
    <input
        {...props}
        className={`w-full py-2.5 border transition focus:outline-none focus:border-accent focus:text-accent bg-transparent px-3 text-sm
        ${error ? "border-danger" : ""}
        ${className}`}
    />
);
export default Input;