declare global {
    interface Window {
      Telegram: {
        WebApp: {
          initData: string;
          sendData: (data: any) => void;
          showAlert: (message: string) => void;
          showConfirm: (message: string, callback: (confirmed: boolean) => void) => void;
          ready: () => void;
          expand: () => void;
          close: () => void;
          MainButton: {
            text: string;
            onClick: (callback: () => void) => void;
            show: () => void;
            hide: () => void;
          };
          BackButton: {
            show: () => void;
            hide: () => void;
          };
          onEvent: (eventType: string, callback: () => void) => void;
          getUserName: () => string;
          getUserProfilePhoto: () => string;
          hapticFeedback: {
            impactOccurred: (style: string) => void;
          };
          openTelegramLink: (url: string) => void;
          openLink: (url: string) => void;
        };
      };
    }
  }
  
  export {};