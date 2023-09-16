export default async function StaticPageMDX({
  params,
}: {
  params: { filename: string };
}) {
  const Page = await import(`./${params.filename}.mdx`).then(
    (module: { default: React.ComponentType }) => module.default
  );
  return (
    <article className="prose prose-base">
      <Page />
    </article>
  );
}
