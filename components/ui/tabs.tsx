
export function Tabs({ children }: any){ return <div>{children}</div> }
export function TabsList({ children }: any){ return <div className="inline-flex rounded-xl border border-zinc-800">{children}</div> }
export function TabsTrigger({ children }: any){ return <button className="px-3 py-1 text-sm text-zinc-300 hover:text-white">{children}</button> }
export function TabsContent({ children }: any){ return <div>{children}</div> }
