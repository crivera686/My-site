
export function Sheet({ children }: any){ return <div>{children}</div> }
export function SheetContent({ children, side, className }: any){ return <div className={"fixed top-0 left-0 h-full w-80 bg-zinc-950 border-r border-zinc-800 p-4 z-50 " + (className||"")}>{children}</div> }
export function SheetHeader({ children }: any){ return <div className="mb-2">{children}</div> }
export function SheetTitle({ children, className }: any){ return <div className={"text-lg font-semibold " + (className||"")}>{children}</div> }
export function SheetTrigger({ children }: any){ return <div>{children}</div> }
