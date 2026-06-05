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
  ArrowLeft,
  Coins,
  FileText,
  Calendar,
  CheckCircle,
} from "lucide-react";
import logoImg from "@/assets/logo.png";

export const Route = createFileRoute("/palyazatok")({
  head: () => ({
    meta: [
      { title: "Pályázatok és Projektek — Horváth Tüzép Kft." },
      {
        name: "description",
        content:
          "Pályázati tájékoztatók és európai uniós forgóeszköz-finanszírozási projektek részletes adatai.",
      },
    ],
  }),
  component: Palyazatok,
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

// Stylized vector government coat of arms SVG representation
const HU_CoatOfArms_SVG = () => (
  <svg viewBox="0 0 100 130" className="h-12 w-auto object-contain shrink-0" fill="currentColor">
    {/* Crown */}
    <path d="M50,15 L35,28 L65,28 Z" fill="#D4AF37" />
    <circle cx="50" cy="11" r="3" fill="#D4AF37" />
    <line x1="50" y1="11" x2="50" y2="15" stroke="#D4AF37" strokeWidth="2" />
    {/* Shield */}
    <path d="M30,30 L70,30 L70,90 C70,110 50,120 50,120 C50,120 30,110 30,90 Z" fill="#D4AF37" stroke="#ffffff" strokeWidth="1" />
    {/* Inner Shield Split */}
    <path d="M32,32 L50,32 L50,115 C50,115 32,105 32,88 Z" fill="#C1272D" />
    <path d="M50,32 L68,32 L68,88 C68,105 50,115 50,115 Z" fill="#C1272D" />
    {/* Left stripes (Arpad stripes) */}
    <path d="M32,45 L50,45 L50,53 L32,53 Z" fill="#ffffff" />
    <path d="M32,65 L50,65 L50,73 L32,73 Z" fill="#ffffff" />
    <path d="M32,85 L50,85 L50,93 L32,93 Z" fill="#ffffff" />
    {/* Right hills (Double cross on three green hills) */}
    <path d="M50,80 C55,75 63,75 68,80 L68,88 C68,88 50,92 50,92 Z" fill="#007A33" />
    {/* Double Cross */}
    <rect x="58" y="48" width="4" height="32" fill="#ffffff" />
    <rect x="53" y="55" width="14" height="4" fill="#ffffff" />
    <rect x="55" y="63" width="10" height="4" fill="#ffffff" />
  </svg>
);

// Stylized vector EU Flag SVG representation
const EU_Flag_SVG = () => (
  <svg viewBox="0 0 120 80" className="h-10 w-auto object-contain border border-gray-200/50 shrink-0">
    <rect width="120" height="80" fill="#003399" />
    {/* Stars in a circle */}
    <g fill="#FFCC00" transform="translate(60, 40)">
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x = Math.sin(angle) * 22;
        const y = Math.cos(angle) * 22;
        return (
          <polygon
            key={i}
            points="0,-4 1,-1 4,-1 2,1 3,4 0,2 -3,4 -2,1 -4,-1 -1,-1"
            transform={`translate(${x}, ${y})`}
          />
        );
      })}
    </g>
  </svg>
);

const grantsList = [
  {
    id: "palyazat1",
    title: "Árukészlet Finanszírozás",
    type: "Forgóeszköz finanszírozási hitel",
    amount: "50 000 000 Ft",
    identifier: "Készletfinanszírozási Hitelprogram",
    desc: "A Horváth Tüzép Építőipari- és Kereskedelmi Kft. a visszatérítendő forgóeszköz-hitelt árukészletének bővítésére és finanszírozására fordítja a folyamatos és zavartalan vevőkiszolgálás fenntartásához.",
    beneficiary: "HORVÁTH TÜZÉP Építőipari- és Kereskedelmi Kft.",
    completion: "A hitelszerződés feltételei szerint",
    fund: "Európai Regionális Fejlesztési Alap",
  },
  {
    id: "palyazat2",
    title: "Forgóeszköz Finanszírozás I.",
    type: "Forgóeszköz finanszírozási hitel",
    amount: "25 000 000 Ft",
    identifier: "H-EKTG2/104076/2022/302148/001",
    desc: "A Horváth Tüzép Kft. a 25 millió Ft visszatérítendő hitelt készletfinanszírozásra, építőanyag-árukészlet vásárlására és működési költségek fedezésére fordítja.",
    beneficiary: "Horváth Tüzép Kft.",
    completion: "A hitelprogram feltételei szerint",
    fund: "NextGenerationEU / Európai Újjáépítési Alap",
  },
  {
    id: "palyazat3",
    title: "Forgóeszköz Finanszírozás II.",
    type: "Forgóeszköz finanszírozási hitel",
    amount: "148 000 000 Ft",
    identifier: "H-EKTG2/105968/2022/302148/001",
    desc: "A Horváth Tüzép Kft. a 148 millió Ft visszatérítendő hitelt építőanyag-készletének nagymértékű bővítésére és folyamatos forgóeszköz-finanszírozásra használja fel.",
    beneficiary: "Horváth Tüzép Kft.",
    completion: "A hitelprogram feltételei szerint",
    fund: "NextGenerationEU / Európai Regionális Fejlesztési Alap",
  },
];

function Palyazatok() {
  const [open, setOpen] = useState(false);

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
                className="text-sm font-medium text-primary hover:text-cta transition-colors"
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
                  className="text-sm font-medium py-2 text-primary hover:text-cta"
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
            <div className="text-sm font-bold text-cta uppercase tracking-wider mb-2">Tájékoztatók</div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Pályázatok és Projektek
            </h1>
            <p className="mt-4 text-base sm:text-lg text-black leading-relaxed">
              A jogszabályi és kötelező tájékoztatási előírásoknak megfelelően az alábbiakban olvashatóak a Horváth Tüzép Kft. európai uniós társfinanszírozású, forgóeszköz-finanszírozási és készlet-támogatási hitelprojektjeinek részletes adatai.
            </p>
          </div>

          {/* Grants Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {grantsList.map((g) => (
              <Card
                key={g.id}
                className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col justify-between gap-6"
              >
                <div>
                  {/* EU & GOV Logos Top Bar */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5 gap-3">
                    <div className="flex items-center gap-2">
                      <HU_CoatOfArms_SVG />
                      <div className="text-[9px] font-bold text-gray-700 leading-tight uppercase">
                        Magyarország<br />Kormánya
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-right">
                      <div className="text-[9px] font-bold text-gray-700 leading-tight">
                        Európai Unió<br />
                        <span className="text-[7px] font-normal text-gray-500 uppercase">
                          {g.fund.includes("NextGen") ? "NextGenerationEU" : "Regionális Fejlesztési Alap"}
                        </span>
                      </div>
                      <EU_Flag_SVG />
                    </div>
                  </div>

                  {/* Main Title & ID Badge */}
                  <div className="space-y-3">
                    <h2 className="text-xl font-bold text-black leading-tight group-hover:text-primary transition-colors">
                      {g.title}
                    </h2>
                    
                    <div className="inline-flex items-center rounded-md bg-primary/5 px-2.5 py-1 text-xs font-semibold text-primary">
                      Azonosító: {g.identifier}
                    </div>
                  </div>

                  {/* Detailed Data List */}
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <Coins className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs text-gray-500 font-medium">Támogatás összege</div>
                        <div className="text-base font-bold text-black">{g.amount}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs text-gray-500 font-medium">Projekt leírása</div>
                        <p className="text-sm text-gray-900 leading-relaxed mt-0.5">{g.desc}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs text-gray-500 font-medium">Kedvezményezett</div>
                        <div className="text-sm font-semibold text-gray-900">{g.beneficiary}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs text-gray-500 font-medium">Befejezési dátum</div>
                        <div className="text-sm font-semibold text-gray-900">{g.completion}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Széchenyi 2020 / Széchenyi Terv Bottom Bar */}
                <div className="border-t border-gray-100 pt-4 mt-2">
                  <div className="flex items-center justify-between text-[10px] text-gray-500">
                    <span className="font-extrabold text-gray-800 tracking-wider">SZÉCHENYI TERV</span>
                    <span className="italic">Befektetés a jövőbe</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

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
                Közel 20 éve szolgáljuk ki az építkezőket és kivitelezőket minégi
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
                      className="text-primary hover:text-cta transition-colors font-medium"
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

          <div className="mt-12 pt-6 border-t border-border flex flex-col gap-4 text-xs text-black/70">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>© {new Date().getFullYear()} Horváth Tüzép Kft. Minden jog fenntartva.</div>
              <div className="flex gap-4">
                <Link to="/adatkezelesi-tajekoztato" className="hover:text-cta transition-colors underline">
                  Adatkezelési Tájékoztató
                </Link>
                <span>ÁSZF</span>
              </div>
            </div>
            <div className="border-t border-gray-200/50 pt-4 text-[11px] text-gray-500 space-y-1">
              <p><strong>Cégnév:</strong> HORVÁTH TÜZÉP Kft. | <strong>Székhely:</strong> 4800 Vásárosnamény, Ilki út 2. | <strong>Adószám:</strong> 11985799-2-15 | <strong>Cégjegyzékszám:</strong> 15-09-067207</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
