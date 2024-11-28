'use client';

import { useEffect, useState } from 'react';

export default function MailtoObfuscate() {
  const [email, setEmail] = useState('');

  useEffect(() => { 
    const user = 'info';
    const domain = 'fraenkis.at';
    setEmail(`${user}@${domain}`);
  }, []);

  return (
      <a href={`mailto:${email}`}>{email || 'loading...'}</a>
  );
}
