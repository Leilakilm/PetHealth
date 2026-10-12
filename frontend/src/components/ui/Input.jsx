const Input = ({ error, className = "", ...props }) => (
    <input
        {...props}
        className={`
      w-full py-2.5 border transition
      focus:outline-none focus:border-b-orange-600
      border-slate-200 border-b-slate-300
      focus:text-orange-600
      ${error ? "border-red-500" : ""}
      ${className}
    `}
    />
);
export default Input;