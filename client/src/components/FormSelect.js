export default function FormSelect({
  className,
  options,
  name,
  labelText,
  onChange,
}) {
  return (
    <div className={`form-row ${className}` + "-row"}>
      <label className="form-label" htmlFor={name}>
        {labelText || name}
      </label>
      <select className="form-select" onChange={onChange} name={name}>
        {options.map((option, ind) => {
          return (
            <option key={ind} defaultValue={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
