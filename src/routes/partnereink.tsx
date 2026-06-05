import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Menu,
  X,
  Search,
  ArrowLeft,
} from "lucide-react";
import logoImg from "@/assets/logo.png";

export const Route = createFileRoute("/partnereink")({
  head: () => ({
    meta: [
      { title: "Gyártó partnereink — Horváth Tüzép Kft." },
      {
        name: "description",
        content:
          "Kiemelt gyártó partnereink és beszállítóink. Kizárólag megbízható, piacvezető gyártók minőségi termékeit forgalmazzuk.",
      },
    ],
  }),
  component: Partnereink,
});

const nav = [
  { to: "/", hash: "kezdolap", label: "Kezdőlap" },
  { to: "/", hash: "termekek", label: "Termékek" },
  { to: "/", hash: "rolunk", label: "Rólunk" },
  { to: "/partnereink", label: "Partnereink" },
  { to: "/palyazatok", label: "Pályázatok" },
  { to: "/", hash: "kapcsolat", label: "Kapcsolat" },
];

const locations = [
  {
    city: "Vásárosnamény",
    address: "4800 Vásárosnamény, Ilki út 1.",
    phone: "+36 45 570 260",
    fax: "+36 45 570 261",
    mapUrl: "https://www.google.com/maps/place/V%C3%A1s%C3%A1rosnam%C3%A9ny,+Ilki+%C3%BAt+1,+4800/@48.1281288,22.3008288,17z/data=!3m1!4b1!4m6!3m5!1s0x47388abee465c619:0x4b658e48eb68beb8!8m2!3d48.1281252!4d22.3034037!16s%2Fg%2F11h23l5kkc?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    city: "Kisvárda",
    address: "4600 Kisvárda, Hármas út 2.",
    phone: "+36 45 500 275",
    fax: "+36 45 500 274",
    mapUrl: "https://www.google.com/maps/place/Kisv%C3%A1rda,+H%C3%A1rmas+%C3%BAt+2,+4600/@48.2292769,22.0902497,17z/data=!3m1!4b1!4m6!3m5!1s0x4738ecffeddf663d:0xa2598261b775be60!8m2!3d48.2292734!4d22.0928246!16s%2Fg%2F11hdnky4lh?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D",
  },
];

const partnerCategories = [
  { id: "all", name: "Összes kategória" },
  { id: "falazas", name: "Falazás & Kémény" },
  { id: "tetofedes", name: "Tetőfedés & Ablak" },
  { id: "szigeteles", name: "Szigetelés & Karton" },
  { id: "kotoanyagok", name: "Kötőanyag & Festék" },
  { id: "burkolatok", name: "Térkő & Burkolat" },
];

const partnersList = [
  // Falazás & Kémény
  { name: "Wienerberger", category: "falazas", desc: "Porotherm falazórendszerek, áthidalók és födémszerkezetek.", color: "group-hover:text-[#E2001A]", style: "font-black tracking-tighter" },
  { name: "Leier", category: "falazas", desc: "Beton zsalukövek, falazóelemek, kéményrendszerek és födémek.", color: "group-hover:text-[#007A33]", style: "font-bold tracking-widest uppercase" },
  { name: "Ytong", category: "falazas", desc: "Környezetbarát, kiváló hőszigetelő pórusbeton falazóelemek.", color: "group-hover:text-[#D99B00]", style: "font-extrabold lowercase italic" },
  { name: "Schiedel", category: "falazas", desc: "Piacvezető kerámia és fém kéményrendszerek és szellőzők.", color: "group-hover:text-[#004B87]", style: "font-bold tracking-wider uppercase" },
  
  // Tetőfedés & Ablak
  { name: "Bramac", category: "tetofedes", desc: "Kiváló minőségű beton tetőcserepek és teljes tetőtartozékok.", color: "group-hover:text-[#E30613]", style: "font-extrabold tracking-tight uppercase" },
  { name: "Terrán", category: "tetofedes", desc: "Prémium beton tetőcserepek, napelemes tetőcserép rendszerek.", color: "group-hover:text-[#8B2332]", style: "font-medium tracking-widest uppercase" },
  { name: "Tondach", category: "tetofedes", desc: "Klasszikus kerámia tetőcserepek a tartós és szép tetőkért.", color: "group-hover:text-[#E2001A]", style: "font-bold tracking-tight uppercase" },
  { name: "Velux", category: "tetofedes", desc: "Világelső tetőtéri ablakok, árnyékolók és intelligens vezérlés.", color: "group-hover:text-[#E30613]", style: "font-black tracking-normal uppercase" },
  
  // Szigetelés & Karton
  { name: "Austrotherm", category: "szigeteles", desc: "Homlokzati, lépésálló és formahabosított EPS szigetelések.", color: "group-hover:text-[#005CA9]", style: "font-bold tracking-tight uppercase italic" },
  { name: "Rockwool", category: "szigeteles", desc: "Kőzetgyapot hőszigetelő rendszerek hang- és tűzvédelmi előnyökkel.", color: "group-hover:text-[#C8102E]", style: "font-extrabold tracking-widest uppercase" },
  { name: "Rigips", category: "szigeteles", desc: "Gipszkarton rendszerek, profilok, glettek és szárazvakolatok.", color: "group-hover:text-[#003B7E]", style: "font-bold tracking-normal uppercase" },
  { name: "Masterplast", category: "szigeteles", desc: "Tetőfóliák, üvegszövet hálók, hőszigetelő rendszerek.", color: "group-hover:text-[#004B87]", style: "font-extrabold tracking-widest uppercase" },
  { name: "Isover", category: "szigeteles", desc: "Üveggyapot és kőzetgyapot hőszigetelő anyagok széles választéka.", color: "group-hover:text-[#007A33]", style: "font-bold tracking-wide uppercase" },
  { name: "Ursa", category: "szigeteles", desc: "Ásványgyapot hőszigetelések tetőhöz, falhoz és födémekhez.", color: "group-hover:text-[#FFCC00]", style: "font-black tracking-widest uppercase italic" },
  
  // Kötőanyag & Festék
  { name: "Baumit", category: "kotoanyagok", desc: "Homlokzati hőszigetelő vakolatok, esztrichek, habarcsok.", color: "group-hover:text-[#003B7E]", style: "font-semibold tracking-wide uppercase" },
  { name: "Mapei", category: "kotoanyagok", desc: "Építőipari ragasztók, fugázók, vízszigetelések és javítóhabarcsok.", color: "group-hover:text-[#005CA9]", style: "font-black tracking-widest uppercase italic" },
  { name: "Sakret", category: "kotoanyagok", desc: "Szárazhabarcsok, betonok, ragasztók és vakolatok.", color: "group-hover:text-[#FFCC00]", style: "font-extrabold tracking-widest uppercase" },
  { name: "Ceresit", category: "kotoanyagok", desc: "Burkolatragasztók, aljzatkiegyenlítők és szilikonok.", color: "group-hover:text-[#005CA9]", style: "font-bold tracking-normal uppercase italic" },
  
  // Térkő & Burkolat
  { name: "Semmelrock", category: "burkolatok", desc: "Prémium térkövek, lapok, kerítések és kerti kiegészítők.", color: "group-hover:text-[#D9231D]", style: "font-bold tracking-wide uppercase" },
  { name: "Kavics Beton", category: "burkolatok", desc: "Térkövek, járdalapok és szegélykövek széles választéka.", color: "group-hover:text-[#004B87]", style: "font-extrabold tracking-tight uppercase" },
];

function Partnereink() {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPartners = partnersList.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" hash="kezdolap" className="flex items-center gap-3">
            <img src={logoImg} alt="Horváth Tüzép logo" className="h-10 w-auto object-contain" />
            <div className="leading-tight">
              <div className="font-semibold text-black">Horváth Tüzép</div>
              <div className="text-[11px] text-black -mt-0.5">Építőanyag kereskedés</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                hash={n.hash}
                className="text-sm font-medium text-primary hover:text-cta transition-colors [&.active]:text-cta"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="bg-primary text-white hover:bg-primary/90 shadow-sm">
              <Link to="/" hash="kapcsolat">Árajánlatkérés</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-black"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <Link
                  key={n.label}
                  to={n.to}
                  hash={n.hash}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium py-2 text-primary hover:text-cta [&.active]:text-cta"
                >
                  {n.label}
                </Link>
              ))}
              <Button asChild className="bg-primary text-white hover:bg-primary/90 w-full">
                <Link to="/" hash="kapcsolat" onClick={() => setOpen(false)}>
                  Árajánlatkérés
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <div className="mb-6">
            <Button asChild variant="ghost" className="text-primary hover:text-cta p-0 hover:bg-transparent">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" /> Vissza a főoldalra
              </Link>
            </Button>
          </div>

          {/* Heading */}
          <div className="max-w-3xl mb-12">
            <div className="text-sm font-bold text-cta uppercase tracking-wider mb-2">Gyártóink</div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Kiemelt gyártó partnereink
            </h1>
            <p className="mt-4 text-base sm:text-lg text-black leading-relaxed">
              Kizárólag megbízható, piacvezető gyártók minőségi termékeit forgalmazzuk.
              Az alábbiakban megtekintheti azon márkák jegyzékét, melyek termékeit telephelyeinken kiemelten értékesítjük.
            </p>
          </div>

          {/* Controls Bar: Search & Category Filter */}
          <div className="bg-secondary/60 p-4 sm:p-6 rounded-2xl border border-border/80 mb-10 flex flex-col gap-5">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-500" />
              <input
                type="text"
                placeholder="Gyártó keresése..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-border rounded-xl pl-11 pr-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-gray-500 shadow-sm"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {partnerCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-white text-black border-border hover:border-primary/40"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Partners Grid */}
          {filteredPartners.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPartners.map((partner) => (
                <Card
                  key={partner.name}
                  className="group p-6 bg-white border border-border shadow-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Brand Mock Logo (typographic) */}
                    <div className="h-16 flex items-center justify-start border-b border-border/60 pb-3 mb-4">
                      <div
                        className={`text-gray-400 transition-all duration-300 filter grayscale contrast-50 group-hover:grayscale-0 group-hover:contrast-100 ${partner.color} ${partner.style} text-2xl select-none`}
                      >
                        {partner.name}
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {partner.desc}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-start text-xs text-gray-400">
                    <span className="font-semibold uppercase tracking-wider text-[10px] text-cta bg-cta/5 px-2.5 py-1 rounded-md">
                      {partnerCategories.find(c => c.id === partner.category)?.name}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-secondary/20 rounded-2xl border border-dashed border-border">
              <p className="text-black/60 text-lg">Nem található a keresésnek megfelelő gyártó partner.</p>
              <Button onClick={() => { setSearchTerm(""); setActiveCategory("all"); }} variant="link" className="text-primary hover:text-cta mt-2">
                Szűrők alaphelyzetbe állítása
              </Button>
            </div>
          )}

        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-secondary text-black border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-4 gap-10 text-black">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <img src={logoImg} alt="Horváth Tüzép logo" className="h-10 w-auto object-contain" />
                <div className="font-semibold text-black">Horváth Tüzép Kft.</div>
              </div>
              <p className="mt-4 text-sm text-black max-w-md">
                Közel 20 éve szolgáljuk ki az építkezőket és kivitelezőket minőségi
                építőanyagokkal és szakértő tanácsadással.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-black uppercase tracking-wider">
                Gyorslinkek
              </div>
              <ul className="mt-4 space-y-2 text-sm text-black">
                {nav.map((n) => (
                  <li key={n.label}>
                    <Link
                      to={n.to}
                      hash={n.hash}
                      className="text-primary hover:text-cta transition-colors font-medium [&.active]:text-cta"
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-black uppercase tracking-wider">
                Elérhetőség
              </div>
              <ul className="mt-4 space-y-2 text-sm text-black">
                <li>
                  <a
                    href="https://www.google.com/maps/place/V%C3%A1s%C3%A1rosnam%C3%A9ny,+Ilki+%C3%BAt+1,+4800/@48.1281288,22.3008288,17z/data=!3m1!4b1!4m6!3m5!1s0x47388abee465c619:0x4b658e48eb68beb8!8m2!3d48.1281252!4d22.3034037!16s%2Fg%2F11h23l5kkc?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cta transition-colors"
                  >
                    4800 Vásárosnamény, Ilki út 1.
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Kisv%C3%A1rda,+H%C3%A1rmas+%C3%BAt+2,+4600/@48.2292769,22.0902497,17z/data=!3m1!4b1!4m6!3m5!1s0x4738ecffeddf663d:0xa2598261b775be60!8m2!3d48.2292734!4d22.0928246!16s%2Fg%2F11hdnky4lh?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cta transition-colors"
                  >
                    4600 Kisvárda, Hármas út 2.
                  </a>
                </li>
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@horvathtuzep.hu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cta transition-colors"
                  >
                    info@horvathtuzep.hu
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs text-black/70">
            <div>© {new Date().getFullYear()} Horváth Tüzép Kft. Minden jog fenntartva.</div>
            <div className="flex gap-4 text-black/70">
              <span>Adatvédelmi nyilatkozat</span>
              <span>ÁSZF</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
