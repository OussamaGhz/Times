import { ReactNode } from "react";
import Link from "next/link";

interface MenuItemProps {
  item: ItemProps;
  activePath: string;
}

interface ItemProps {
  title: string;
  path: string;
  icon: ReactNode;
}

const MenuItem = ({ item, activePath }: MenuItemProps) => {
  const active = item.path === activePath;
  return (
    <li className="group">
      <Link href={item.path}>
        <span className={`flex gap-3 w-full items-center rounded-md p-2 ${active && "bg-[#00A4D4]"} group-hover:bg-blue-500 group-hover:text-white transition duration-200 ease-in-out transform group-hover:scale-105`}>
          {item.icon}
          <span className="text-[15px]">{item.title}</span>
        </span>
      </Link>
    </li>
  );
};

interface MenuSectionProps {
  section: sectionProps;
  activePath: string;
}

interface sectionProps {
  title: string;
  list: MenuItemProps["item"][];
}

export const MenuSection = ({ section, activePath }: MenuSectionProps) => (
  <li className="px-[29px]">
    <h3 className="text-gray-400 text-[10px] uppercase tracking-wide font-semibold">
      {section.title}
    </h3>
    <ul className="flex flex-col gap-4 md:my-5 relative text-[15px] text-black">
      {section.list.map((item) => (
        <MenuItem key={item.title} item={item} activePath={activePath} />
      ))}
    </ul>
  </li>
);
