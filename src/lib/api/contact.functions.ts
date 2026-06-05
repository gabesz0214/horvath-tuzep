import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string().min(1, "A név megadása kötelező"),
      email: z.string().email("Érvénytelen e-mail cím"),
      phone: z.string().min(1, "A telefonszám megadása kötelező"),
      message: z.string().min(1, "Az üzenet megadása kötelező"),
    })
  )
  .handler(async ({ data }) => {
    // Szimulált e-mail küldés (console.log segítségével)
    console.log("=== ÚJ AJÁNLATKÉRÉS / KAPCSOLATFELVÉTEL ===");
    console.log(`Feladó név: ${data.name}`);
    console.log(`E-mail: ${data.email}`);
    console.log(`Telefon: ${data.phone}`);
    console.log(`Üzenet:\n${data.message}`);
    console.log("-------------------------------------------");
    console.log("Fő e-mail küldése az info@horvathtuzep.hu címre...");
    
    // Auto-responder e-mail küldésének szimulációja
    console.log(`[Auto-responder] Küldés az alábbi címre: ${data.email}`);
    console.log("Feladó: Horváth Tüzép Kft.");
    console.log("Tárgy: Sikeres ajánlatkérés – Horváth Tüzép Kft.");
    console.log(
      `Tisztelt Érdeklődő!\n\n` +
      `Köszönjük, hogy megtisztelt minket a bizalmával és tőlünk kért árajánlatot. Az üzenetét sikeresen megkaptuk.\n\n` +
      `Munkatársaink már dolgoznak az anyagszükséglet és a legkedvezőbb árak kiszámításán. Általában 24-48 órán belül (munkanapokon) megküldjük a részletes ajánlatot a megadott e-mail címre, vagy ha kérdésünk van, telefonon keresni fogjuk.\n\n` +
      `Ha időközben sürgőssé vált a dolog, vagy módosítana a listán, keressen minket bizalommal a telephelyi számainkon!\n\n` +
      `Üdvözlettel,\n` +
      `Horváth Tüzép Kft.`
    );
    console.log("=== AUTO-RESPONDER KIKÜLDVE ===");

    return {
      success: true,
      message: "Ajánlatkérés elküldve!",
    };
  });
