import React, { PropsWithChildren } from "react";

export const LazyElement: React.FC<PropsWithChildren> = ({ children }) => {
  return <React.Suspense fallback={<>Loading...</>}>{children}</React.Suspense>;
};
