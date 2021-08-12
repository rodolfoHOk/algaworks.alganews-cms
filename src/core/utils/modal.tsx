import { ReactNode } from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

interface ModalProps {
  children: ReactNode;
}

export default function modal({ children }: ModalProps) {
  setTimeout(() => {
    confirmAlert({
      overlayClassName: 'info-overlay',
      customUI: () => {
        return <div>
          {children}
        </div>;
      }
    });
  }, 0);
}
