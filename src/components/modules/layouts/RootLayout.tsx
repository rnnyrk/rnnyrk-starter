import Link from 'next/link';

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <body className="min-h-full min-w-full">
      <ul className="mb-10 flex w-full justify-center py-8">
        <li>
          <Link href="/">About</Link>
        </li>
        <li className="ml-4">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
      <main className="mx-auto max-w-4xl">{children}</main>
    </body>
  );
};

type RootLayoutProps = {
  children: React.ReactNode;
};
