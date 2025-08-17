import { menuItems } from "../../constants/MenuItems";

const Breadcrumb = ({ activePanel }: { activePanel: string }) => {
  const findPath = (items: any[], key: string, parents: string[] = []): string[] | null => {
    for (const item of items) {
      if (item.key === key) {
        return [...parents, item.label];
      }
      if (item.subItems) {
        const result = findPath(item.subItems, key, [...parents, item.label]);
        if (result) return result;
      }
    }
    return null;
  };

  const path = findPath(menuItems, activePanel) || [];

  return (
    <div className=" text-gray-500 mb-4 flex gap-2 items-center font-medium">
      {path.map((label, idx) => (
        <span key={idx} className="flex items-center">
          {label}
          {idx < path.length - 1 && <span className="mx-2">›</span>}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumb