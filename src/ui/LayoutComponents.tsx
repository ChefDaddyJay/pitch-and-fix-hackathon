export function HorizontalDivider({ text }: { text?: string }) {
  return (
    <div className="flex items-center justify-stretch w-4/5 my-4">
      {text ? (
        <>
          <div className="w-full h-[1px] bg-neutral-400">&nbsp;</div>
          <div className="text-center text-neutral-500 font-bold flex-shrink px-4 min-w-max">
            {text}
          </div>
          <div className="w-full h-[1px] bg-neutral-400">&nbsp;</div>
        </>
      ) : (
        <div className="w-full h-[1px] bg-neutral-400">&nbsp;</div>
      )}
    </div>
  );
}

export function PageSection({
  title,
  cols,
  sticky,
  activeFocus,
  children,
}: {
  title?: string;
  cols?: number;
  sticky?: boolean;
  activeFocus?: boolean;
  children?: React.ReactNode;
}) {
  const columns = cols
    ? cols === 2
      ? "w-2/5"
      : cols === 3
      ? "w-1/3"
      : cols === 4
      ? "w-1/6"
      : "w-full" // cols = 1 is full, other values are not supported
    : "w-full";
  return (
    <div
      className={`h-min bg-white flex flex-col items-center gap-4 ${
        cols ? columns : "w-full"
      } ${sticky && "sticky top-4"}
        ${activeFocus && "hover:shadow-xl hover:-translate-y-2 cursor-pointer"}
        transition-all duration-300 delay-100
        `}
    >
      {title ? (
        <h3 className="w-4/5 border-b border-neutral-300 text-xl font-bold text-center p-2">
          {title}
        </h3>
      ) : (
        ""
      )}
      {children}
    </div>
  );
}
