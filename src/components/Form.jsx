import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function Form() {
  const [name, setName] = useLocalStorage('name', '')
  const [serviceNumber, setServiceNumber] = useLocalStorage('serviceNumber', '')

  const handleSubmit = (e) => { e.preventDefault() }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Service Number:
        <input value={serviceNumber} onChange={e => setServiceNumber(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
