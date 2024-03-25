export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <body className="min-h-full min-w-full">
      <main>{children}</main>
    </body>
  );
};

type RootLayoutProps = {
  children: React.ReactNode;
};
