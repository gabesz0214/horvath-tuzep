import { createFileRoute } from "@tanstack/react-router";
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
} from "lucide-react";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-warehouse.jpg";

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
  { href: "#kezdolap", label: "Kezdőlap" },
  { href: "#termekek", label: "Termékek" },
  { href: "#rolunk", label: "Rólunk" },
  { href: "#kapcsolat", label: "Kapcsolat" },
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
  },
  {
    city: "Kisvárda",
    address: "4600 Kisvárda, Hármas út 2.",
    phone: "+36 45 500 275",
    fax: "+36 45 500 274",
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
          <a href="#kezdolap" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-primary text-primary-foreground grid place-items-center font-bold">
              H
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-foreground">Horváth Tüzép</div>
              <div className="text-[11px] text-muted-foreground -mt-0.5">Építőanyag kereskedés</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              asChild
              className="bg-cta text-cta-foreground hover:bg-cta/90 shadow-sm"
            >
              <a href="#kapcsolat">Árajánlatkérés</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
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
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium py-2 text-foreground"
                >
                  {n.label}
                </a>
              ))}
              <Button asChild className="bg-cta text-cta-foreground hover:bg-cta/90 w-full">
                <a href="#kapcsolat" onClick={() => setOpen(false)}>
                  Árajánlatkérés
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="kezdolap" className="relative min-h-[100vh] flex items-center pt-16">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Horváth Tüzép építőanyag telephely"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a121c]/95 via-[#0a121c]/80 to-[#0a121c]/45" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-medium text-white mb-6">
              <span className="h-2 w-2 rounded-full bg-cta" />
              Közel 20 éve az építkezők szolgálatában
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-white">
              Minőségi építőanyagok
              <br />
              <span className="text-cta">egyenesen a raktárról</span>
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl">
              Több mint 10.000 termék, szakértő tanácsadás és gyors kiszállítás Vásárosnaményból
              és Kisvárdáról. Levesszük a válláról az anyagbeszerzés terheit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-cta text-cta-foreground hover:bg-cta/90 h-12 px-6"
              >
                <a href="#termekek">
                  Termékeink <ArrowRight />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-6 bg-transparent border-white/40 text-white hover:bg-white hover:text-primary"
              >
                <a href="#kapcsolat">Kapcsolatfelvétel</a>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { v: "20", l: "év tapasztalat" },
                { v: "10.000+", l: "termék" },
                { v: "2", l: "telephely" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl sm:text-3xl font-bold text-cta">{s.v}</div>
                  <div className="text-xs sm:text-sm text-white/80">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-cta uppercase tracking-wider">Miért minket?</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
              Megbízható partner az építkezéséhez
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cégünk munkatársai immár csaknem 20 éve dolgoznak azon, hogy Ön álmai otthonát
              könnyebben, gazdaságosabban és korszerűbben valósíthassa meg.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <Card
                key={v.title}
                className="p-6 border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary grid place-items-center">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-semibold text-lg text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
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
              <div className="text-sm font-semibold text-cta uppercase tracking-wider">
                Termékkategóriák
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
                Minden, ami az építkezéshez kell
              </h2>
              <p className="mt-4 text-muted-foreground">
                Közel 10.000 termék közül választhatja ki az Önnek leginkább megfelelőt.
                A termékek jelentős része készletről azonnal elvihető.
              </p>
            </div>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="#kapcsolat">Teljes kínálat <ArrowRight /></a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((c) => (
              <Card
                key={c.title}
                className="group p-6 bg-card border-border hover:-translate-y-1 hover:shadow-lg hover:border-cta/40 transition-all duration-300 cursor-pointer"
              >
                <div className="h-12 w-12 rounded-lg bg-secondary text-primary grid place-items-center group-hover:bg-cta group-hover:text-cta-foreground transition-colors">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="rolunk" className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="text-sm font-semibold text-cta uppercase tracking-wider">Rólunk</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
              Csaknem 20 éve építünk együtt Önnel
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Üdvözli Önt a <span className="text-foreground font-semibold">Horváth Tüzép Kft.</span>{" "}
                valamennyi dolgozója. Cégünk munkatársai immár csaknem 20 éve azon dolgoznak,
                hogy Ön élete egyik legnagyobb beruházását — álmai otthonát — minél könnyebben,
                gazdaságosabban és korszerűbben valósíthassa meg.
              </p>
              <p>
                Levesszük a válláról az anyagbeszerzés terheit, ellátjuk megfelelő szaktanácsokkal,
                és átadjuk a már megszerzett tapasztalatainkat. Munkatársaink tervszámítással
                állnak vevőink rendelkezésére.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { v: "20", l: "év tapasztalat" },
                { v: "10.000+", l: "termék raktáron" },
                { v: "2", l: "telephely" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-cta pl-4">
                  <div className="text-2xl font-bold text-primary">{s.v}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-primary">
              <img
                src={heroImg}
                alt="Telephelyünk"
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-cta text-cta-foreground p-6 rounded-xl shadow-xl max-w-[240px] hidden sm:block">
              <div className="text-3xl font-bold">10.000+</div>
              <div className="text-sm mt-1 text-cta-foreground/90">
                termék közül választhat egy helyen
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kapcsolat" className="py-20 lg:py-28 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-cta uppercase tracking-wider">Kapcsolat</div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
              Keressen minket bizalommal
            </h2>
            <p className="mt-4 text-white/80">
              Két telephellyel állunk rendelkezésére. Kérjen árajánlatot vagy látogasson el
              hozzánk személyesen.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <Card
                key={loc.city}
                className="p-6 bg-white text-gray-900 border-border shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-cta text-cta-foreground grid place-items-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{loc.city}</h3>
                </div>
                <div className="mt-5 space-y-3 text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 text-cta shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                  <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="flex items-start gap-3 hover:text-cta transition-colors text-gray-900">
                    <Phone className="h-4 w-4 mt-0.5 text-cta shrink-0" />
                    <span className="font-semibold text-lg">{loc.phone}</span>
                  </a>
                  <div className="flex items-start gap-3 text-gray-500">
                    <span className="text-xs mt-1 shrink-0">FAX</span>
                    <span>{loc.fax}</span>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 bg-white text-gray-900 border-border shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-cta/10 text-cta grid place-items-center">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Nyitvatartás</h3>
              <div className="mt-5 space-y-2 text-sm text-gray-600">
                {[
                  ["Hétfő – Péntek", "7:00 – 16:00"],
                  ["Szombat", "7:00 – 12:00"],
                  ["Vasárnap", "Zárva"],
                ].map(([d, h]) => (
                  <div key={d} className="flex justify-between border-b border-gray-100 pb-2 last:border-0">
                    <span className="text-gray-500">{d}</span>
                    <span className="font-semibold text-gray-900">{h}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a
                  href="mailto:info@horvathtuzep.hu"
                  className="flex items-center gap-2 font-semibold text-cta hover:underline"
                >
                  <Mail className="h-4 w-4" /> info@horvathtuzep.hu
                </a>
              </div>
            </Card>
          </div>

          {/* Map placeholder */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 aspect-[21/9] bg-white/5 grid place-items-center relative">
            <iframe
              title="Térkép"
              src="https://www.openstreetmap.org/export/embed.html?bbox=22.30%2C48.10%2C22.35%2C48.15&layer=mapnik&marker=48.125%2C22.325"
              className="w-full h-full grayscale-[0.3] opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-md bg-cta text-cta-foreground grid place-items-center font-bold">
                  H
                </div>
                <div className="font-semibold text-background">Horváth Tüzép Kft.</div>
              </div>
              <p className="mt-4 text-sm text-background/60 max-w-md">
                Közel 20 éve szolgáljuk ki az építkezőket és kivitelezőket minőségi
                építőanyagokkal és szakértő tanácsadással.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-background uppercase tracking-wider">
                Gyorslinkek
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="text-background/60 hover:text-cta transition-colors">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-background uppercase tracking-wider">
                Elérhetőség
              </div>
              <ul className="mt-4 space-y-2 text-sm text-background/60">
                <li>4800 Vásárosnamény, Ilki út 1.</li>
                <li>4600 Kisvárda, Hármas út 2.</li>
                <li>info@horvathtuzep.hu</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-background/10 flex flex-wrap items-center justify-between gap-3 text-xs text-background/50">
            <div>© {new Date().getFullYear()} Horváth Tüzép Kft. Minden jog fenntartva.</div>
            <div className="flex gap-4">
              <span>Adatvédelmi nyilatkozat</span>
              <span>ÁSZF</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
