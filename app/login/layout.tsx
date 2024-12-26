import { ReactNode } from "react";

const LoginLayout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
    <div className="w-full max-w-sm">{children}</div>
  </div>
);

export default LoginLayout;
