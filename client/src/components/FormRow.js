export default function FormRow({
  type,
  labelText,
  name,
  value,
  onChange,
  rows,
  className,
}) {
  return (
    <div className={`form-row ${className}` + "-row"}>
      <label className="form-label" htmlFor={name}>
        {labelText || name}
      </label>
      {type === "textarea" ? (
        <textarea
          className={`form-input ${className}` + "-input"}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
        />
      ) : (
        <input
          className={`form-input ${className}` + "-input"}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
