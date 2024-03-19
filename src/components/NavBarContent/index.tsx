import { navItems } from "../../data/data";

const Component = () => (
  <ul className="flex flex-col lg:flex-row gap-10 self-center font-[bellefair] text-2xl">
    {navItems.map((item) => (
      <li key={item.id} className="hover:italic">
        <a href={item.href}>{item.content}</a>
      </li>
    ))}
  </ul>
);

export default Component;
