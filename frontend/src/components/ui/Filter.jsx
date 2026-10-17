const Filter = ({label, value, onChange, options = [], allLabel = "Все"}) => (
    <div className="flex flex-col">
        <label
            htmlFor={`filter-${label}`}
            className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-2">
            {label}
        </label>
        <select
            id={`filter-${label}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full py-2.5 px-3 bg-transparent border border-slate-300 focus:outline-none focus:border-slate-800 text-sm text-slate-800 transition">
            <option value="">{allLabel}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

export default Filter;