
  "use client";
  import React, { useState, useMemo } from "react";
  import { MotionConfig, motion } from "framer-motion";
  import { ShoppingCart, ShieldCheck, Target, Shirt, ChevronRight, Star, Menu, MapPin, Phone, Mail, Clock, BadgeCheck, CalendarDays, CreditCard, CheckCircle2, Truck, X } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge";
  import { Input } from "@/components/ui/input";
  import { Textarea } from "@/components/ui/textarea";
  import { Separator } from "@/components/ui/separator";
  import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
  import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
  import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
  import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

  const COURSES = [
    { id: "pistol-1", level: "Beginner", title: "Handgun Essentials", badge: "Popular", duration: "4 hrs", price: 150, outline: ["Safety rules & range etiquette","Grip, stance, sight picture","Trigger control & follow‑through","Live‑fire fundamentals"]},
    { id: "pistol-2", level: "Intermediate", title: "Defensive Pistol", badge: "New", duration: "6 hrs", price: 200, outline: ["Drawstroke & presentation","Reloads & malfunction clears","Movement & use of cover","Timed drills & standards"]},
    { id: "home defense", level: "Intermediate", title: "In Home Defense Training", badge: "Essential", duration: "4 hrs", price: 300, outline: ["Safety rules & home planning","in homedefense training","Gun storage & accesability","Time drills with inteuders"]},
    { id: "carbine-1", level: "Intermediate", title: "Carbine Fundamentals", badge: "Crew Favorite", duration: "1 day", price: 325, outline: ["Zeroing & holds","Recoil management","Positional shooting","Partner drills"]},
    { id: "ccw", level: "All levels", title: "CCW Certification (CA)", badge: "Limited Seats", duration:"8–16 hrs", price: 199, outline:["State requirements","Legal use of force","Live‑fire qual","Scenario discussion"]},
  ];

  const PRODUCTS = [
    { id: "hat1", name: "Steel & Talon Trucker Hat", price: 34, tag: "New" },
    { id: "tee1", name: "S&T Shop Tee", price: 29, tag: "Best Seller" },
    { id: "hood1", name: "Forged Hoodie", price: 59, tag: "Warm" },
    { id: "tee2", name: "Tell the Devil Tee", price: 32, tag: "Limited" },
    { id: "cap2", name: "Low‑Pro Cap", price: 32, tag: "Restocked" },
    { id: "jkt1", name: "Range Jacket", price: 119, tag: "Water‑Resist" },
  ];

  const NAV = [
    { id: "home", label: "Home" },
    { id: "training", label: "Training" },
    { id: "apparel", label: "Apparel" },
    { id: "about", label: "About" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  function useCart(){
    const [items, setItems] = useState<any[]>([]);
    const total = useMemo(() => items.reduce((s,it)=> s + it.price * it.qty, 0), [items]);
    function add(product:any){
      setItems(prev => {
        const idx = prev.findIndex(p => p.id === product.id);
        if (idx >= 0){ const next = [...prev]; next[idx] = {...next[idx], qty: next[idx].qty + 1}; return next; }
        return [...prev, {...product, qty: 1}];
      });
    }
    function remove(id:string){ setItems(prev => prev.filter(p=>p.id!==id)); }
    function clear(){ setItems([]); }
    return { items, add, remove, clear, total };
  }

  function Section({ id, className = "", children }: any){
    return <section id={id} className={`scroll-mt-24 py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">{children}</div>
    </section>;
  }

  export default function Page(){
    const cart = useCart();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<any>(null);

    return (
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-black text-zinc-100">
          <header className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-zinc-800">
            <div className="container mx-auto px-4 max-w-7xl h-16 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/logo.jpg" alt="Steel & Talon logo" className="h-8 w-auto object-contain" />
                <a href="#home" className="font-black tracking-tight text-lg md:text-xl"> </a>
                <span className="hidden md:inline-flex rounded-full bg-zinc-800 text-zinc-200 px-2 py-1 text-xs">Firearms Training • Apparel</span>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                {NAV.map(n => <a key={n.id} href={`#${n.id}`} className="text-sm hover:text-white/90">{n.label}</a>)}
              </nav>
              <div className="flex items-center gap-2">
                <Button variant="secondary" className="md:hidden" onClick={()=>setMobileOpen(true)}><Menu className="h-5 w-5"/></Button>
                <Button variant="secondary" className="relative" onClick={()=>alert('Mock checkout — integrate Stripe or Shopify')}>
                  <ShoppingCart className="h-4 w-4 mr-2" /> Cart
                  {cart.items.length>0 && <span className="ml-2 rounded-full bg-white text-black px-2 text-xs">{cart.items.length}</span>}
                </Button>
              </div>
            </div>
          </header>

          {mobileOpen && (
            <div className="fixed inset-0 z-50 bg-black/60" onClick={()=>setMobileOpen(false)}>
              <div className="absolute left-0 top-0 h-full w-80 bg-zinc-950 border-r border-zinc-800 p-4" onClick={e=>e.stopPropagation()}>
                <div className="flex items-center justify-between mb-4">
                  <img src="/logo.jpg" alt="Steel & Talon logo" className="h-8 w-auto object-contain" />
                  <div className="text-lg font-semibold flex items-center gap-2"><Target className="h-5 w-5"/> Steel & Talon</div>
                  <button onClick={()=>setMobileOpen(false)}><X className="h-5 w-5"/></button>
                </div>
                <div className="flex flex-col gap-4">
                  {NAV.map(n => <a key={n.id} href={`#${n.id}`} className="text-zinc-200 text-base" onClick={()=>setMobileOpen(false)}>{n.label}</a>)}
                </div>
              </div>
            </div>
          )}

          <Section id="home" className="pt-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-6xl font-black leading-tight tracking-tight">Train Hard. Stay Sharp.</motion.h1>
                <p className="mt-4 text-zinc-300 max-w-prose">Steel & Talon brings professional firearms instruction together with gritty, automotive‑inspired apparel. From CCW to carbine, from hats to hoodies — built for the range and the street.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild size="lg"><a href="#training"><ShieldCheck className="h-4 w-4 mr-2"/> Browse Courses</a></Button>
                  <Button asChild variant="secondary" size="lg"><a href="#apparel"><Shirt className="h-4 w-4 mr-2"/> Shop Apparel</a></Button>
                </div>
                <div className="mt-6 flex items-center gap-6 text-sm text-zinc-400">
                  <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4"/> Insured & Certified</span>
                  <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4"/> Weeknight & Weekend Classes</span>
                  <span className="inline-flex items-center gap-2"><Truck className="h-4 w-4"/> Fast Shipping</span>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-[url('https://images.unsplash.com/photo-1613743989681-77c3979c981d?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center shadow-2xl ring-1 ring-white/10" />
                <div className="absolute -bottom-4 -right-4 bg-zinc-900/70 backdrop-blur rounded-xl p-4 ring-1 ring-white/10">
                  <div className="text-xs uppercase tracking-wider text-zinc-400">Next Course</div>
                  <div className="font-semibold">Defensive Pistol — Sat 9:00 AM</div>
                </div>
              </div>
            </div>
          </Section>

          <Section id="training" className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/60 via-zinc-950 to-black">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Training</h2>
                <p className="text-zinc-300">Professional, no‑ego instruction focused on safety, standards, and real‑world application.</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {COURSES.map(c => (
                <Card key={c.id} className="bg-zinc-900/60 border-zinc-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-zinc-800 text-zinc-200 px-2 py-1 text-xs">{c.badge}</span>
                      <div className="text-xs text-zinc-400">{c.duration}</div>
                    </div>
                    <CardTitle className="text-xl">{c.title}</CardTitle>
                    <CardDescription className="text-zinc-400">{c.level}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="text-sm text-zinc-300 list-disc pl-5 space-y-1">{c.outline.map((o,i)=><li key={i}>{o}</li>)}</ul>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold">${"{"+""+"}"}{c.price}</div>
                      <div className="flex gap-2">
                        <Button variant="secondary" onClick={()=>setSelectedCourse(c)}><CalendarDays className="h-4 w-4 mr-2"/> View Dates</Button>
                        <Button onClick={()=>alert('Lead form placeholder — connect to your booking/checkout')}>Enroll <ChevronRight className="h-4 w-4 ml-1"/></Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedCourse && (
              <Dialog>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{selectedCourse.title} — Upcoming Dates</DialogTitle>
                    <DialogDescription>Choose a session and complete checkout to secure your seat.</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3">
                    {["Sat, Dec 14 — 09:00 AM","Sun, Jan 18 — 10:00 AM","Fri, Feb 07 — 05:30 PM"].map(d => (
                      <Card key={d} className="bg-zinc-900/60 border-zinc-800">
                        <CardContent className="p-4 flex items-center justify-between">
                          <div className="text-sm">{d}</div>
                          <Button onClick={()=>alert('Checkout flow placeholder')}>
                            Select <CreditCard className="h-4 w-4 ml-2"/>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-3"><Button variant="secondary" onClick={()=>setSelectedCourse(null)}>Close</Button></div>
                </DialogContent>
              </Dialog>
            )}
          </Section>

          <Section id="apparel">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Apparel</h2>
                <p className="text-zinc-300">Range‑ready basics and lifestyle gear inspired by motorsport and steel.</p>
              </div>
              <div className="text-sm text-zinc-400">Secure checkout • Easy returns</div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map(p => (
                <Card key={p.id} className="group bg-zinc-900/60 border-zinc-800 overflow-hidden">
                  <div className="aspect-[4/3] bg-[url('/Shooting .PNG'<img src="/)] bg-cover bg-center" />
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{p.name}</CardTitle>
                      <span className="rounded-full bg-zinc-800 text-zinc-200 px-2 py-1 text-xs">{p.tag}</span>
                    </div>
                    <CardDescription>${"{"+""+"}"}{p.price}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex gap-2">
                      <Button className="flex-1" onClick={()=>cart.add(p)}>
                        Add to Cart <ShoppingCart className="h-4 w-4 ml-2"/>
                      </Button>
                      <Button variant="secondary" className="w-28" onClick={()=>alert('Product detail placeholder')}>Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10">
              <Card className="bg-zinc-900/60 border-zinc-800">
                <CardHeader>
                  <CardTitle>Cart</CardTitle>
                  <CardDescription className="text-zinc-400">This is a mock cart for demo. Hook to Shopify or Stripe for live checkout.</CardDescription>
                </CardHeader>
                <CardContent>
                  {cart.items.length === 0 ? (
                    <p className="text-zinc-400">Your cart is empty.</p>
                  ) : (
                    <div className="space-y-3">
                      {cart.items.map(it => (
                        <div key={it.id} className="flex items-center justify-between">
                          <div className="text-sm">{it.name} × {it.qty}</div>
                          <div className="flex items-center gap-4">
                            <div>${"{"+""+"}"}{(it.price * it.qty).toFixed(2)}</div>
                            <Button size="sm" variant="secondary" onClick={()=>cart.remove(it.id)}>Remove</Button>
                          </div>
                        </div>
                      ))}
                      <div className="my-2 h-px bg-zinc-800" />
                      <div className="flex items-center justify-between font-semibold">
                        <div>Total</div>
                        <div>${"{"+""+"}"}{cart.total.toFixed(2)}</div>
                      </div>
                      <Button className="w-full mt-3" onClick={()=>alert('Checkout placeholder')}>Checkout</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </Section>

          <Section id="about" className="bg-zinc-950">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              <Card className="md:col-span-2 bg-zinc-900/60 border-zinc-800">
                <CardHeader>
                  <CardTitle>About Steel & Talon</CardTitle>
                  <CardDescription>Built by instructors. Forged in the Inland Empire.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-zinc-300">
                  <p>We’re a professional NRA certified training group focused on turning fundamentals into performance. Our curriculum scales from first shots to defensive standards and patrol quals. No shortcuts, no chest‑beating — just safe, efficient reps with measurable progress.</p>
                  <p>Our apparel line reflects the same mindset: durable, honest gear you’ll actually wear. Inspired by motorsport, fabrication, and the tools that build real life.</p>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                    <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Insured & permitted</li>
                    <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> CPR/Stop‑the‑Bleed trained</li>
                    <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> RSO on every line</li>
                    <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> LE/Mil discounts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/60 border-zinc-800">
                <CardHeader>
                  <CardTitle>Credentials</CardTitle>
                  <CardDescription>Verified training background</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-zinc-300">
                  <div className="flex items-center justify-between"><span>USCCA/NRFI Instructor</span><span className="rounded-full bg-zinc-800 px-2 py-1 text-xs">Active</span></div>
                  <div className="flex items-center justify-between"><span>California CCW Provider</span><span className="rounded-full bg-zinc-800 px-2 py-1 text-xs">Approved</span></div>
                  <div className="flex items-center justify-between"><span>Medical: Stop‑the‑Bleed</span><span className="rounded-full bg-zinc-800 px-2 py-1 text-xs">Current</span></div>
                  <div className="flex items-center justify-between"><span>Range Safety Officer</span><span className="rounded-full bg-zinc-800 px-2 py-1 text-xs">Lead</span></div>
                </CardContent>
              </Card>
            </div>
          </Section>

          <Section>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">What Students Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {name: "A. Arellano", role: "Contractor", quote: "The fundamentals block alone shaved seconds off my runs. Professional staff and a safe, dialed range experience."},
                {name: "C. Arellano", role: "Teacher", quote: "Clear, confident instruction without the ego. Left with a plan and standards to train on my own."},
                {name: "K. Goldstein", role: "Groomer", quote: "Solid curriculum. Movement and use‑of‑cover module is worth the ticket by itself."}
              ].map((t,i)=>(
                <Card key={i} className="bg-zinc-900/60 border-zinc-800">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-amber-400 mb-2">
                      <Star className="h-4 w-4"/><Star className="h-4 w-4"/><Star className="h-4 w-4"/><Star className="h-4 w-4"/><Star className="h-4 w-4"/>
                    </div>
                    <p className="text-zinc-200 italic">“{t.quote}”</p>
                    <div className="mt-4 text-sm text-zinc-400">— {t.name}, {t.role}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="faq" className="bg-zinc-950">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">FAQ</h2>
            <div className="max-w-3xl divide-y divide-zinc-800">
              <div className="py-4">
                <div className="cursor-pointer py-3 font-medium">What should I bring to class?</div>
                <div className="text-zinc-300">Eye/ear protection, firearm (if applicable), 2 magazines, 150–300 rounds, closed‑toe shoes, water, and a brimmed hat. Rental options available for select courses.</div>
              </div>
              <div className="py-4">
                <div className="cursor-pointer py-3 font-medium">Do you offer private or agency training?</div>
                <div className="text-zinc-300">Yes — we run private sessions and LE/agency blocks. Use the contact form and include desired dates, headcount, and training goals.</div>
              </div>
              <div className="py-4">
                <div className="cursor-pointer py-3 font-medium">Shipping & returns on apparel?</div>
                <div className="text-zinc-300">Orders ship in 1–3 business days. Free returns/exchanges within 30 days on unworn items. Defects covered 100%.</div>
              </div>
            </div>
          </Section>

          <Section id="contact">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <Card className="bg-zinc-900/60 border-zinc-800">
                <CardHeader>
                  <CardTitle>Contact</CardTitle>
                  <CardDescription>Book training, ask a question, or request a wholesale line sheet.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e)=>{e.preventDefault(); alert('Form submitted — wire this to email/CRM')}} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input required placeholder="Full name" />
                      <Input required type="email" placeholder="Email" />
                    </div>
                    <Input placeholder="Phone (optional)" />
                    <Textarea required placeholder="How can we help?" rows={5} />
                    <Button type="submit">Send</Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-zinc-900/60 border-zinc-800">
                  <CardContent className="p-6 space-y-3 text-sm text-zinc-300">
                    <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Inland Empire, CA (Training locations vary)</div>
                    <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> 951‑534‑1987</div>
                    <div className="flex items-center gap-2"><Mail className="h-4 w-4"/> info@steelandtalon.com</div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900/60 border-zinc-800 overflow-hidden">
                  <div className="aspect-[16/9] bg-[url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"/>
                </Card>
              </div>
            </div>
          </Section>

          <footer className="border-t border-zinc-800 py-10">
            <div className="container mx-auto px-4 max-w-7xl text-sm text-zinc-400 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
              <div>
                <div className="font-black text-zinc-100">Steel & Talon</div>
                <div>Firearms Training & Apparel</div>
                <div className="mt-2">© {new Date().getFullYear()} Steel & Talon. All rights reserved.</div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-zinc-200 font-semibold">Company</div>
                  <a href="#about" className="block hover:text-zinc-200">About</a>
                  <a href="#training" className="block hover:text-zinc-200">Training</a>
                  <a href="#apparel" className="block hover:text-zinc-200">Shop</a>
                </div>
                <div className="space-y-2">
                  <div className="text-zinc-200 font-semibold">Support</div>
                  <a href="#faq" className="block hover:text-zinc-200">FAQ</a>
                  <a href="#contact" className="block hover:text-zinc-200">Contact</a>
                  <a href="#" className="block hover:text-zinc-200">Terms</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </MotionConfig>
    );
  }
