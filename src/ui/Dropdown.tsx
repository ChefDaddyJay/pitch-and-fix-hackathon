import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export const DropdownContext = createContext({
  active: false,
  setActive: (state: boolean) => {},
});

export function Dropdown({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const handleOutsideClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);
  return (
    <DropdownContext.Provider value={{ active: isOpen, setActive: setIsOpen }}>
      {" "}
      <div className="relative" ref={ref}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function DropdownButton({ children }: { children: ReactNode }) {
  const { active, setActive } = useContext(DropdownContext);
  return (
    <div
      className="text-base cursor-pointer relative flex items-center min-w-max"
      onClick={() => setActive(!active)}
    >
      {children}
    </div>
  );
}

export function DropdownContent({
  hDir,
  vDir,
  children,
}: {
  hDir?: "left" | "right";
  vDir?: "up" | "down";
  children: ReactNode;
}) {
  const { active, setActive } = useContext(DropdownContext);

  return (
    <div
      className={`absolute ${hDir === "left" ? "right-0" : "left-0"} ${
        vDir === "up" ? "bottom-full" : "top-full"
      } w-[300px] bg-white shadow-md rounded p-4 z-10 ${
        active ? "visible" : "invisible"
      }`}
    >
      {children}
    </div>
  );
}
