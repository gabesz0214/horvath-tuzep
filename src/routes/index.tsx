import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Truck,
  Layers,
  HeartHandshake,
  Warehouse,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Hammer,
  TreePine,
  Thermometer,
  Paintbrush,
  PackageOpen,
  Wrench,
  Home as HomeIcon,
  Menu,
  X,
  Calculator,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-warehouse.jpg";
import logoImg from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Horváth Tüzép Kft. — Építőanyag kereskedés Vásárosnamény és Kisvárda" },
      {
        name: "description",
        content:
          "Közel 20 éve az építkezők szolgálatában. Több mint 10.000 építőanyag, szakértő tanácsadás, gyors kiszállítás Vásárosnaményból és Kisvárdáról.",
      },
      { property: "og:title", content: "Horváth Tüzép Kft. — Minőségi építőanyagok" },
      {
        property: "og:description",
        content:
          "Tégla, faáru, szigetelőanyagok és több mint 10.000 termék egy helyen. Kérjen árajánlatot még ma!",
      },
    ],
  }),
  component: Home,
});

const nav = [
  { to: "/", hash: "kezdolap", label: "Kezdőlap" },
  { to: "/", hash: "termekek", label: "Termékek" },
  { to: "/", hash: "rolunk", label: "Rólunk" },
  { to: "/partnereink", label: "Partnereink" },
  { to: "/palyazatok", label: "Pályázatok" },
  { to: "/", hash: "kapcsolat", label: "Kapcsolat" },
];

const values = [
  {
    icon: Truck,
    title: "Gyors kiszállítás",
    text: "Saját géppark, megbízható logisztika. A megrendelt anyag időben az építkezésen.",
  },
  {
    icon: Layers,
    title: "10.000+ termék",
    text: "Az alapozástól a tetőfedésig — minden, ami egy építkezéshez szükséges, egy helyen.",
  },
  {
    icon: HeartHandshake,
    title: "Szakértő tanácsadás",
    text: "Munkatársaink tervszámítással és közel 20 év tapasztalattal segítik a választást.",
  },
  {
    icon: Warehouse,
    title: "Azonnal elvihető",
    text: "A termékek jelentős része készletről, telephelyünkről azonnal elvihető.",
  },
];

const services = [
  {
    icon: Truck,
    title: "Darus kiszállítás",
    text: "Saját gépparkunkkal és darus teherautóinkkal a legnehezebb alapanyagokat is pontosan a munkaterületre szállítjuk.",
  },
  {
    icon: Calculator,
    title: "Anyagszükséglet számítás",
    text: "Hozd el vagy küldd el nekünk a tervrajzot, és szakértő csapatunk pontosan kiszámolja a szükséges anyagmennyiséget.",
  },
  {
    icon: Layers,
    title: "Hatalmas raktárkészlet",
    text: "Széles áruválasztékunk biztosítja, hogy az alapozástól a tetőfedésig mindent egy helyen megtalálj, így az építkezés zökkenőmentesen haladhat.",
  },
  {
    icon: Users,
    title: "Szakértő tanácsadás",
    text: "Mérnökök és kivitelezők által is elismert szakmai háttérrel segítünk kiválasztani a legmegfelelőbb és leggazdaságosabb építőanyagokat a tervrajzodhoz.",
  },
];

const categories = [
  { icon: Hammer, title: "Tégla és falazóanyagok", text: "Kerámia tégla, válaszfal, födémrendszerek." },
  { icon: TreePine, title: "Faáru", text: "Tetőléc, gerenda, OSB és deszkaáruk." },
  { icon: Thermometer, title: "Szigetelőanyagok", text: "Hő-, hang- és vízszigetelés minden igényre." },
  { icon: PackageOpen, title: "Cement és kötőanyagok", text: "Cement, mész, gipsz, vakolatok, ragasztók." },
  { icon: HomeIcon, title: "Tetőfedő anyagok", text: "Cserép, bitumenes lemez, kiegészítők." },
  { icon: Paintbrush, title: "Festés és vakolás", text: "Beltéri és kültéri festékek, glettek." },
  { icon: Wrench, title: "Vasanyag és segédanyagok", text: "Betonacél, háló, kötözőhuzal, szerszámok." },
  { icon: Layers, title: "Burkolatok", text: "Padló- és falburkolatok, járólapok." },
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

function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur border-b border-border shadow-sm" : "bg-transparent"
        }`}
      >
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
            <Button
              asChild
              className="bg-primary text-white hover:bg-primary/90 shadow-sm"
            >
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

      {/* HERO */}
      <section id="kezdolap" className="relative min-h-[100vh] flex items-center pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col text-black">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs font-medium text-primary mb-6 self-start">
              <span className="h-2 w-2 rounded-full bg-cta" />
              Közel 20 éve az építkezők szolgálatában
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-black">
              Minőségi építőanyagok
              <br />
              <span className="text-cta">egyenesen a raktárról</span>
            </h1>
            <p className="mt-6 text-lg text-black max-w-xl">
              Több mint 10.000 termék, szakértő tanácsadás és gyors kiszállítás Vásárosnaményból
              és Kisvárdáról. Levesszük a válláról az anyagbeszerzés terheit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-cta text-white hover:bg-cta/90 h-12 px-6"
              >
                <a href="#termekek">
                  Termékeink <ArrowRight />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-6 bg-transparent border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <a href="#kapcsolat">Kapcsolatfelvétel</a>
              </Button>
            </div>

            {/* Service Cards (Mobile view: stacked underneath the buttons) */}
            <div className="mt-12 lg:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.title}
                      className="bg-white border border-gray-100 shadow-sm rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="h-10 w-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base text-black">{s.title}</h3>
                        <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                          {s.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { v: "20", l: "év tapasztalat" },
                { v: "10.000+", l: "termék" },
                { v: "2", l: "telephely" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{s.v}</div>
                  <div className="text-xs sm:text-sm text-black">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Cards (Desktop view: 2x2 grid in the right column) */}
          <div className="hidden lg:block lg:col-span-5 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="bg-white border border-gray-100 shadow-sm rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base text-black">{s.title}</h3>
                      <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                        {s.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-bold text-cta uppercase tracking-wider">Miért minket?</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-black">
              Megbízható partner az építkezéséhez
            </h2>
            <p className="mt-4 text-black">
              Cégünk munkatársai immár csaknem 20 éve dolgoznak azon, hogy Ön álmai otthonát
              könnyebben, gazdaságosabban és korszerűbben valósíthassa meg.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <Card
                key={v.title}
                className="p-6 border-border hover:border-primary/30 hover:shadow-md transition-all text-black"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary grid place-items-center">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-semibold text-lg text-black">{v.title}</h3>
                <p className="mt-2 text-sm text-black leading-relaxed">{v.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="termekek" className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-sm font-bold text-cta uppercase tracking-wider">
                Termékkategóriák
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-black">
                Minden, ami az építkezéshez kell
              </h2>
              <p className="mt-4 text-black">
                Közel 10.000 termék közül választhatja ki az Önnek leginkább megfelelőt.
                A termékek jelentős része készletről azonnal elvihető.
              </p>
            </div>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
              <a href="#kapcsolat">Teljes kínálat <ArrowRight /></a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((c) => (
              <Card
                key={c.title}
                className="group p-6 bg-card border-border hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-pointer text-black"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary grid place-items-center group-hover:bg-cta group-hover:text-white transition-colors duration-300">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-semibold text-black">{c.title}</h3>
                <p className="mt-2 text-sm text-black">{c.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="rolunk" className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center text-black">
          <div>
            <div className="text-sm font-bold text-cta uppercase tracking-wider">Rólunk</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-black">
              Partner az otthonteremtésben
            </h2>
            <div className="mt-6 space-y-4 text-black leading-relaxed">
              <p>
                Üdvözli Önt a <span className="text-cta font-bold">Horváth Tüzép Kft.</span>{" "}
                valamennyi dolgozója. Családi vállalkozásunk célja, hogy a régió építkezőit és kivitelezőit a legmagasabb szinten szolgálja ki. Nem csupán anyagot értékesítünk, hanem partnerként kísérjük végig ügyfeleinket az otthonteremtés útján.
              </p>
              <p>
                Levesszük a válláról az anyagbeszerzés terheit, ellátjuk megfelelő szaktanácsokkal,
                és átadjuk a már megszerzett tapasztalatainkat. Munkatársaink tervszámítással
                állnak vevőink rendelkezésére.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { v: "100%", l: "vevőorientált kiszolgálás" },
                { v: "Díjmentes", l: "anyagszükséglet számítás" },
                { v: "Saját", l: "darus teherautó flotta" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-cta pl-4">
                  <div className="text-2xl font-bold text-primary">{s.v}</div>
                  <div className="text-xs text-black">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-black/5">
              <img
                src={heroImg}
                alt="Telephelyünk"
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-border text-black p-6 rounded-xl shadow-xl max-w-[240px] hidden sm:block">
              <div className="text-3xl font-bold text-primary">Teljes körű</div>
              <div className="text-sm mt-1 text-black">
                alapanyagtámogatás az alapozástól a tetőig
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kapcsolat" className="py-20 lg:py-28 bg-background text-black border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-black">
            <div className="text-sm font-bold text-cta uppercase tracking-wider">Kapcsolat</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-black">
              Keressen minket bizalommal
            </h2>
            <p className="mt-4 text-black">
              Két telephellyel állunk rendelkezésére. Kérjen árajánlatot vagy látogasson el
              hozzánk személyesen.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <Card
                key={loc.city}
                className="p-6 bg-white text-black border-border shadow-sm hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary text-white grid place-items-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-black">{loc.city}</h3>
                </div>
                <div className="mt-5 space-y-3 text-sm text-black">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:text-cta transition-colors text-black group/addr"
                  >
                    <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0 group-hover/addr:text-cta transition-colors" />
                    <span className="hover:underline">{loc.address}</span>
                  </a>
                  <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="flex items-start gap-3 hover:text-cta transition-colors text-black">
                    <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                    <span className="font-semibold text-lg text-black">{loc.phone}</span>
                  </a>
                  <div className="flex items-start gap-3 text-black">
                    <span className="text-xs mt-1 shrink-0 text-primary">FAX</span>
                    <span>{loc.fax}</span>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 bg-white text-black border-border shadow-sm hover:border-primary/20 transition-all duration-300">
              <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary grid place-items-center">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-black">Nyitvatartás</h3>
              <div className="mt-5 space-y-2 text-sm text-black">
                {[
                  ["Hétfő – Péntek", "7:00 – 16:00"],
                  ["Szombat", "7:00 – 12:00"],
                  ["Vasárnap", "Zárva"],
                ].map(([d, h]) => (
                  <div key={d} className="flex justify-between border-b border-gray-200 pb-2 last:border-0 text-black">
                    <span>{d}</span>
                    <span className="font-semibold">{h}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@horvathtuzep.hu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-black hover:text-cta transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" /> info@horvathtuzep.hu
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

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
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=gabor.h077@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cta transition-colors"
                  >
                    gabor.h077@gmail.com
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
