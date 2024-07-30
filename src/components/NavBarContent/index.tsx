import { navItems } from "@data/navItems";

const Component = () => (
  <ul className="flex flex-col gap-10 self-center font-[bellefair] text-2xl lg:flex-row">
    {navItems.map((item) => (
      <li key={item.id} className="hover:italic">
        <a href={item.href}>{item.content}</a>
      </li>
    ))}
  </ul>
);

export default Component;
