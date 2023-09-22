import './inputfield.css'

const InputField = ({ type = "text", placeholder, className, label }) => {
  return (
    <div className='input-container'>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input ${className}`}
      />
    </div>
  )
}

export default InputField