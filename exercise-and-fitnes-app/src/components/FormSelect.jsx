import { useState } from 'react'

const FormSelect = ({ name, title, options, label, required, labelSize }) => {
  const [select, setSelect] = useState(title)
  const color = select == title ? 'text-accent/30 italic' : 'text-accent/70'
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
      <select
        name={name}
        id={name}
        className={`border-base-300 bg-base-100  pl-2 select-sm pr-6 w-full border rounded focus:outline-none focus:border-primary capitalize text-[12px] ${color}`}
        onChange={(e) => setSelect(e.target.value)}
      >
        <option>{title}</option>
        {options.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}
export default FormSelect
