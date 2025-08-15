import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

export default function MenuItem({ item, activePanel, setActivePanel }: any) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.subItems && item.subItems.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setOpen(!open);
    } else {
      setActivePanel(item.key);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`flex gap-2 items-center justify-between px-3 py-2 rounded-md font-medium w-full
          ${activePanel === item.key ? "text-[#3A643B]" : "text-[#666776] hover:text-[#3A643B]"}`}
      >
        <div className="flex items-center gap-2">
          {item.icon && (
            <div className="bg-[#F5F5F6] h-10 w-10 flex justify-center items-center rounded-lg">
              <img src={item.icon} alt={item.label} className="h-6 w-auto" />
            </div>
          )}
          {item.label}
        </div>
        {hasChildren && (
          <span
            className={`transition-transform duration-200 ${open ? "rotate-90" : ""}`}
          >
            <ChevronRightIcon className="size-6" />
            
          </span>
        )}
      </button>

      {hasChildren && (
        <div
          className={`ml- pl-2 transition-all duration-300 overflow-hidden
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          {item.subItems.map((sub: any) => (
            <MenuItem
              key={sub.key}
              item={sub}
              activePanel={activePanel}
              setActivePanel={setActivePanel}
            />
          ))}
        </div>
      )}
    </div>
  );
}
