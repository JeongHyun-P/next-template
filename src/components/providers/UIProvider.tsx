// React Context의 Provider를 사용해 전역 상태/핸들러(UI 컨트롤)를 하위 컴포넌트에 주입
// Alert, Confirm, Toast 각각의 상태와 렌더링을 독립적으로 관리 → 불필요한 리렌더링 방지해서 성능 최적화

import { AlertProvider } from '@/components/providers/AlertProvider';
import { ConfirmProvider } from '@/components/providers/ConfirmProvider';
import { ToastProvider } from '@/components/providers/ToastProvider';

export const UIProvider = ({ children }: { children: React.ReactNode }) => (
  <AlertProvider>
    <ConfirmProvider>
      <ToastProvider>{children}</ToastProvider>
    </ConfirmProvider>
  </AlertProvider>
);
