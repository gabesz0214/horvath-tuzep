import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

export const Route = createFileRoute("/adatkezelesi-tajekoztato")({
  head: () => ({
    meta: [
      { title: "Adatkezelési Tájékoztató — Horváth Tüzép Kft." },
      {
        name: "description",
        content: "A HORVÁTH TÜZÉP Kft. hivatalos, GDPR-nak megfelelő adatkezelési tájékoztatója.",
      },
    ],
  }),
  component: AdatkezelesiTajekoztato,
});

const nav = [
  { to: "/", hash: "kezdolap", label: "Kezdőlap" },
  { to: "/", hash: "termekek", label: "Termékek" },
  { to: "/", hash: "rolunk", label: "Rólunk" },
  { to: "/partnereink", label: "Partnereink" },
  { to: "/palyazatok", label: "Pályázatok" },
  { to: "/", hash: "kapcsolat", label: "Kapcsolat" },
];

function AdatkezelesiTajekoztato() {
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

      {/* CONTENT */}
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-black border-b border-gray-200 pb-4 mb-8">
            Adatkezelési Tájékoztató
          </h1>
          
          <div className="prose max-w-none text-black leading-relaxed space-y-6">
            <p>
              A <strong>HORVÁTH TÜZÉP Kft.</strong> (a továbbiakban: Adatkezelő) kiemelt figyelmet fordít a személyes adatok védelmére, és az adatkezelés során az Európai Unió Általános Adatvédelmi Rendeletének (GDPR), valamint a hatályos magyar jogszabályoknak megfelelően jár el.
            </p>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary mt-6">1. Az Adatkezelő adatai</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Cégnév:</strong> HORVÁTH TÜZÉP Kft.</li>
                <li><strong>Székhely:</strong> 4800 Vásárosnamény, Ilki út 2.</li>
                <li><strong>Cégjegyzékszám:</strong> 15-09-067207</li>
                <li><strong>Adószám:</strong> 11985799-2-15</li>
                <li><strong>E-mail cím:</strong> <a href="mailto:info@horvathtuzep.hu" className="text-cta hover:underline">info@horvathtuzep.hu</a></li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary mt-6">2. A kezelt adatok köre, az adatkezelés célja és jogalapja</h2>
              <p>
                A honlapon található ajánlatkérő és kapcsolati űrlapok kitöltése során Ön megadja személyes adatait.
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-100 my-4 text-sm text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 font-bold text-black border-b">Kezelt adat</th>
                      <th className="px-4 py-2 font-bold text-black border-b">Az adatkezelés célja</th>
                      <th className="px-4 py-2 font-bold text-black border-b">Az adatkezelés jogalapja</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 font-medium border-b">Név</td>
                      <td className="px-4 py-3 border-b">Azonosítás, személyre szabott kapcsolatfelvétel.</td>
                      <td className="px-4 py-3 border-b">Önkéntes hozzájárulás (GDPR 6. cikk (1) bekezdés a) pont).</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium border-b">E-mail cím</td>
                      <td className="px-4 py-3 border-b">Kapcsolattartás, írásos árajánlat megküldése.</td>
                      <td className="px-4 py-3 border-b">Önkéntes hozzájárulás, és az ajánlatadáshoz szükséges lépések (GDPR 6. cikk (1) bekezdés b) pont).</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium border-b">Telefonszám</td>
                      <td className="px-4 py-3 border-b">Pontosítás, gyors egyeztetés az árajánlattal kapcsolatban.</td>
                      <td className="px-4 py-3 border-b">Önkéntes hozzájárulás (GDPR 6. cikk (1) bekezdés a) pont).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="italic text-gray-600 bg-gray-50 p-4 rounded-lg border-l-4 border-cta mt-4">
                Az űrlapokon megadott személyes adatokat kizárólag a kapcsolatfelvétel és az árajánlatadás céljából kezeljük, azokat harmadik félnek nem adjuk át.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary mt-6">3. Az adatkezelés időtartama</h2>
              <p>
                A megadott személyes adatokat az ajánlatadási vagy kapcsolatfelvételi folyamat lezárásáig, vagy a felhasználó hozzájárulásának visszavonásáig kezeljük. Ezt követően az adatok törlésre kerülnek, kivéve, ha jogszabály (pl. számviteli kötelezettségek) további megőrzést ír elő.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary mt-6">4. Adatbiztonság és adattovábbítás</h2>
              <p>
                Az Adatkezelő megtesz minden szükséges technikai és szervezési intézkedést annak érdekében, hogy megvédje a személyes adatokat a jogosulatlan hozzáféréstől, megváltoztatástól, továbbítástól vagy törléstől. A személyes adatokat harmadik személyek részére nem továbbítjuk.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary mt-6">5. Az Ön jogai</h2>
              <p>Ön mint érintett, a megadott elérhetőségeinken keresztül bármikor jogosult:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>tájékoztatást kérni személyes adatai kezeléséről (hozzáférési jog),</li>
                <li>kérni pontatlan adatai helyesbítését vagy kiegészítését (helyesbítési jog),</li>
                <li>kérni adatai törlését (törléshez/elfeledtetéshez való jog),</li>
                <li>kérni az adatkezelés korlátozását (korlátozáshoz való jog),</li>
                <li>tiltakozni a személyes adatok kezelése ellen (tiltakozáshoz való jog).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-primary mt-6">6. Jogorvoslati lehetőségek</h2>
              <p>
                Amennyiben úgy véli, hogy az Adatkezelő megsértette a személyes adatok védelmére vonatkozó jogszabályokat, kérjük, először vegye fel velünk a kapcsolatot az <a href="mailto:info@horvathtuzep.hu" className="text-cta hover:underline">info@horvathtuzep.hu</a> e-mail címen a kérdés rendezése érdekében.
              </p>
              <p>
                Jogosult továbbá panasszal élni a felügyeleti hatóságnál:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Név:</strong> Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</li>
                <li><strong>Székhely:</strong> 1055 Budapest, Falk Miksa utca 9-11.</li>
                <li><strong>Honlap:</strong> <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer" className="text-cta hover:underline">www.naih.hu</a></li>
              </ul>
              <p>Valamint bírósági eljárást is kezdeményezhet a lakóhelye vagy tartózkodási helye szerint illetékes törvényszék előtt.</p>
            </section>
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
