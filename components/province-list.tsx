import Link from "next/link";

export type ProvinceListItem = {
  initials: string;
  name: string;
  slug: string;
  count: number;
};

type ProvinceListProps = {
  data: ProvinceListItem[];
};

export function ProvinceList(props: ProvinceListProps) {
  return (
    <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {props.data.map((province) => (
        <li
          key={province.name}
          className="col-span-1 flex shadow-sm rounded-md"
        >
          <div className="bg-blue-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md">
            {province.initials}
          </div>
          <Link href={`/provinces/${province.slug}`}>
            <a className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium hover:text-gray-600">
                  {province.name}
                </span>
                <p className="text-gray-500">{province.count} Entri</p>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}