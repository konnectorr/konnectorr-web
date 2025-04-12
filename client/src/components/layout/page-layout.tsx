import { ReactNode } from "react";
import { PageHeader } from "./page-header";
import { PageFooter } from "./page-footer";

interface PageLayoutProps {
  children: ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

export function PageLayout({ children, hideHeader = false, hideFooter = false }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {!hideHeader && <PageHeader />}
      <main className="flex-1">{children}</main>
      {!hideFooter && <PageFooter />}
    </div>
  );
}