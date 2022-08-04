export default function Alert({ alertType, text }) {
  return <div className={`alert alert-${alertType}`}>{text}</div>;
}
