import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
export default function Form() {
  const [name, setName] = useLocalStorage('name', '')
  const [serviceNumber, setServiceNumber] = useLocalStorage('serviceNumber', '')
  return (
    <div style={{padding:'2rem', fontFamily:'sans-serif'}}>
      <h2>Repair Form</h2>
      <form>
        <label>Name:</label>
        <input value={name} onChange={e => setName(e.target.value)} />
        <br /><br />
        <label>Service Number:</label>
        <input value={serviceNumber} onChange={e => setServiceNumber(e.target.value)} />
      </form>
      <div style={{marginTop:'1rem'}}>
        <strong>Current Name:</strong> {name} <br />
        <strong>Current Service Number:</strong> {serviceNumber}
      </div>
    </div>
  )
}
