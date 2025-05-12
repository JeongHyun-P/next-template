'use client';
import { ReactNode, useState, useEffect } from 'react';

export const ConfirmProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);
  const [onConfirm, setOnConfirm] = useState<(() => void) | undefined>();
  const [onCancel, setOnCancel] = useState<(() => void) | undefined>();

  useEffect(() => {
    globalThis.$confirm = (msg, confirm, cancel) => {
      setMessage(msg);
      setOnConfirm(() => confirm);
      setOnCancel(() => cancel);
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
            <button
              onClick={() => {
                setMessage(null);
                onCancel?.();
              }}
            >
              취소
            </button>
          </div>
        </div>
      )}
    </>
  );
};
