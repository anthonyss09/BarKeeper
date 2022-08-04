export default function FormRow({
  type,
  labelText,
  name,
  value,
  onChange,
  rows,
}) {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {labelText || name}
      </label>
      {type === "textarea" ? (
        <textarea
          className="form-input"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
        />
      ) : (
        <input
          className="form-input"
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
