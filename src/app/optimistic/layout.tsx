import { Heading } from '@common/typography/Heading';

const OptimisticLayout = ({ children }: OptimisticLayoutProps) => {
  return (
    <div className="grid grid-cols-6">
      <aside className="col-span-2 p-4 bg-slate-800">
        <Heading variant="h3">Genres</Heading>
      </aside>
      <section className="col-span-4 p-4">{children}</section>
    </div>
  );
};

type OptimisticLayoutProps = {
  children: React.ReactNode;
};

export default OptimisticLayout;
