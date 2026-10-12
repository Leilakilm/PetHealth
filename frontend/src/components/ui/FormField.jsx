import Input from "./Input.jsx";

const FormField = ({ id, label, error, ...inputProps }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-slate-800 mb-1">
            {label}
        </label>
        <Input id={id} error={error} {...inputProps} />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
);
export default FormField;