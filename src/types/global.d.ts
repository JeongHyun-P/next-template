declare global {
  function cdnUrl(path: string): string;

  var $alert: (msg: string, onConfirm?: () => void) => void;
  var $confirm: (msg: string, onConfirm?: () => void, onCancel?: () => void) => void;
  var $toast: (msg: string) => void;
}

export {};
