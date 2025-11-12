
export function Dialog({ children }: any){ return <div>{children}</div> }
export function DialogContent({ children, className }: any){ return <div className={"fixed inset-0 z-50 grid place-items-center"}><div className={"max-w-xl w-full rounded-2xl border border-zinc-800 bg-zinc-950 p-4 " + (className||"")}>{children}</div></div> }
export function DialogHeader({ children }: any){ return <div className="mb-2">{children}</div> }
export function DialogTitle({ children }: any){ return <h3 className="text-lg font-semibold">{children}</h3> }
export function DialogDescription({ children }: any){ return <p className="text-sm text-zinc-400">{children}</p> }
