import Link from "next/link";

export default function TestPage({
  params: { pagination },
}: {
  params: { pagination: string };
}) {
  return (
    <div>
      pagePagination: {pagination}
      <ul className="flex space-x-2">
        {[...Array(20)].map((_, i) => (
          <li key={i}>
            <Link href={`/test/${i + 1}`}>{i + 1}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
