const Input = ({error, className = "", ...props}) => (
    <input
        {...props}
        className={`
      w-full py-2.5 border transition
      focus:outline-none focus:border-orange-600 
      focus:text-orange-600 bg-transparent px-3 border-slate-300  text-sm
      ${error ? "border-red-600" : ""}
      ${className}
    `}
    />
);
export default Input;