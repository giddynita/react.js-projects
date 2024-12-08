import { useRef, useState } from 'react'

const FormInput = ({
  type,
  name,
  id,
  placeholder,
  required,
  label,
  labelSize,
  margin,
}) => {
  return (
    <div className="form-control">
      {label && (
        <label
          htmlFor={name}
          className={`font-semibold mb-1 text-gray-700 ${labelSize} `}
        >
          {label} <span className="text-red-600">{required}</span>
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`w-full input-sm pl-3 pr-1 border border-base-300 focus:border-primary 
        placeholder-italic focus:outline-none rounded placeholder-accent/30 form-input ${margin}`}
        min={1}
      />
    </div>
  )
}
export default FormInput
