import React, { useState } from 'react';

function EmployeeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // kirim data ke server atau lakukan validasi form
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nama:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Nomor Telepon:
          <input type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
        </label>
      </div>
      <button type="submit">Daftar</button>
    </form>
  );
}

export default EmployeeForm;
