export default function StaticLaout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-3xl flex flex-col items-center">
      {children}
    </section>
  );
}
