'use client';
import { ReactNode, useState, useEffect } from 'react';

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);
  const [onConfirm, setOnConfirm] = useState<(() => void) | undefined>();

  useEffect(() => {
    globalThis.$alert = (msg, onConfirm) => {
      setMessage(msg);
      setOnConfirm(() => onConfirm);
    };
  }, []);

  return (
    <>
      {children}
      {message && (
        <div>
          <div>
            <p>{message}</p>
            <button
              onClick={() => {
                setMessage(null);
                onConfirm?.();
              }}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </>
  );
};
