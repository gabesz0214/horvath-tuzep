import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

async function sendBrevoEmail(apiKey: string, payload: any) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      "accept": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Brevo API error (${response.status}): ${errorText}`);
  }
  return response.json();
}

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
    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      console.error("Hiba: BREVO_API_KEY környezeti változó hiányzik!");
      return {
        success: false,
        message: "A szerver konfigurációja hiányos. E-mail küldése sikertelen.",
      };
    }

    try {
      // 1. Éles e-mail a tulajdonosnak (ronaldo02149@gmail.com)
      const adminEmailPayload = {
        sender: {
          name: "Horváth Tüzép Kft.",
          email: "ronaldo02149@gmail.com",
        },
        to: [
          {
            email: "ronaldo02149@gmail.com",
            name: "Horváth Tüzép",
          },
        ],
        subject: `Új árajánlatkérés érkezett – ${data.name}`,
        htmlContent: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>Új árajánlatkérés</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #0c1b33; border-bottom: 2px solid #b22222; padding-bottom: 10px;">Új árajánlatkérés érkezett a weboldalról</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">Név:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Telefonszám:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">E-mail cím:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td>
              </tr>
            </table>
            <h3 style="color: #0c1b33; margin-top: 20px;">Szükséges anyagok és üzenet:</h3>
            <div style="background-color: #f9f9f9; border: 1px solid #eee; padding: 15px; border-radius: 5px; white-space: pre-wrap; font-family: inherit;">${data.message}</div>
          </body>
          </html>
        `,
      };

      // 2. Automatikus visszaigazoló levél a vevőnek (auto-responder)
      const autoResponderPayload = {
        sender: {
          name: "Horváth Tüzép Kft.",
          email: "ronaldo02149@gmail.com",
        },
        to: [
          {
            email: data.email,
            name: data.name,
          },
        ],
        subject: "Sikeres ajánlatkérés – Horváth Tüzép Kft.",
        htmlContent: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>Sikeres ajánlatkérés – Horváth Tüzép Kft.</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
              <h2 style="color: #0c1b33; border-bottom: 2px solid #b22222; padding-bottom: 10px;">Horváth Tüzép Kft.</h2>
              <p>Tisztelt Érdeklődő!</p>
              <p>Köszönjük, hogy megtisztelt minket a bizalmával és tőlünk kért árajánlatot. Az üzenetét sikeresen megkaptuk.</p>
              <p>Munkatársaink már dolgoznak az anyagszükséglet és a legkedvezőbb árak kiszámításán. Általában 24-48 órán belül (munkanapokon) megküldjük a részletes ajánlatot a megadott e-mail címre, vagy ha kérdésünk van, telefonon keresni fogjuk.</p>
              <p>Ha időközben sürgőssé vált a dolog, vagy módosítana a listán, keressen minket bizalommal a telephelyi számainkon!</p>
              <br>
              <p>Üdvözlettel,<br><strong>Horváth Tüzép Kft.</strong></p>
            </div>
          </body>
          </html>
        `,
      };

      // Küldés párhuzamosan
      await Promise.all([
        sendBrevoEmail(apiKey, adminEmailPayload),
        sendBrevoEmail(apiKey, autoResponderPayload),
      ]);

      console.log("Brevo e-mailek sikeresen kiküldve mindkét félnek!");

      return {
        success: true,
        message: "Ajánlatkérés sikeresen elküldve!",
      };
    } catch (error: any) {
      console.error("Hiba történt a Brevo API hívás során:", error);
      return {
        success: false,
        message: "Hiba történt az e-mail küldése során.",
      };
    }
  });
