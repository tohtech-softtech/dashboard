import { ReactNode } from "react";

interface DividerProps {
    children: ReactNode;
}

export const Divider: React.FC<DividerProps> = ({ children }) => {
  return <div className="divider font-bold">{children}</div>;
}