
export function Accordion({ children }: any){ return <div className="divide-y divide-zinc-800">{children}</div> }
export function AccordionItem({ children }: any){ return <div className="py-2">{children}</div> }
export function AccordionTrigger({ children }: any){ return <div className="cursor-pointer py-3 font-medium">{children}</div> }
export function AccordionContent({ children }: any){ return <div className="text-zinc-300">{children}</div> }
