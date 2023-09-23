import './inputfield.css'

const InputField = ({ type, placeholder, className, label, onChange, value, name }) => {
  return (
    <div className='input-container'>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input ${className}`}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default InputField