import Input from "./Input.jsx";

const FormField = ({ id, label, error, ...inputProps }) => (
    <div>
        <label htmlFor={id} className="block text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
            {label}
        </label>
        <Input id={id} error={error} {...inputProps} />
        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
);
export default FormField;