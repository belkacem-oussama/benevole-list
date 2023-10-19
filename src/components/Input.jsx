export default function Input({ onClick, placeholder, value, name }) {
  return (
    <>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onClick={onClick}
      />
    </>
  )
}
