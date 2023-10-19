export default function Input({ onClick, onChange, placeholder, value, name }) {
  return (
    <>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
        onChange={onChange}
      />
    </>
  )
}
