'use client';
import { ReactNode, useState, useEffect } from 'react';

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    globalThis.$toast = (msg) => {
      setMessage(msg);
      setTimeout(() => setMessage(null), 3000);
    };
  }, []);

  if (!message) return <>{children}</>;

  return (
    <>
      {children}
      <div>{message}</div>
    </>
  );
};
