# Landing de agradecimiento, Membresía JP Tactical Trading

Dos páginas estáticas que Hotmart muestra apenas alguien paga la membresía.
Sin build, sin dependencias, sin backend.

| Tier    | Ruta       | Archivo                |
|---------|------------|------------------------|
| Básica  | `/basica`  | `gracias-basica.html`  |
| Premium | `/premium` | `gracias-premium.html` |

No hay `index.html`: el sitio no tiene raíz propia porque solo existe para las dos
URLs de agradecimiento. `/` redirige (302) a `ttrading.co` vía `vercel.json`.

En Hotmart hay que configurar **una URL de agradecimiento distinta por plan**.
No hay detección de tier en el código: la página no sabe qué compró el usuario,
lo define la URL a la que Hotmart redirige.

---

## Lo único que hay que tocar: `config.js`

Todos los links, textos y datos viven ahí. No hay nada hardcodeado en el HTML.

### Datos pendientes (5)

Buscá `TODO` en `config.js`. Hasta que los completes, **el botón correspondiente
sale deshabilitado con la etiqueta "Próximamente"** en vez de apuntar a un link roto.
Es a propósito: un cliente que acaba de pagar no puede caer en un 404.

| Dato | Dónde |
|---|---|
| WhatsApp de Customer Success | `shared.whatsappCS` |
| Grupos de WhatsApp por tier | `tiers.basica.whatsappGrupo`, `tiers.premium.whatsappGrupo` |
| Canales de Telegram por tier | `tiers.basica.telegram`, `tiers.premium.telegram` |
| Link de Zoom del onboarding | `onboarding.zoomLink` |
| Link de la Zona de Miembros | `hotmart.url` |

Abrí la consola del navegador: lista exactamente cuáles faltan.

### Activar el botón de Hotmart

Cuando cierre la negociación, en `config.js`:

```js
hotmart: {
  enabled: true,                       // ← 1. poner en true
  url: 'https://...',                  // ← 2. pegar el link real
}
```

Nada más. No hay que tocar ningún otro archivo.

### Formatos

- WhatsApp directo: solo dígitos, con indicativo, sin `+` ni espacios → `573123884238`
  (el código arma el `https://wa.me/...` solo)
- Grupo de WhatsApp: el link de invitación completo → `https://chat.whatsapp.com/...`
- Telegram: `https://t.me/...`

### Si un tier no tiene Telegram

Poné `telegram: null` y el botón desaparece de esa página. El inventario de
ttrading.co dice que algunos tiers usan Telegram y otros WhatsApp, vale confirmarlo
antes de publicar.

---

## La sesión de onboarding (.ics)

El botón no lleva a Calendly: **genera y descarga un archivo `.ics`** en el momento,
desde los datos de `config.js`. Funciona igual en Gmail, Outlook, Hotmail y Apple
Calendar sin depender de ningún servicio externo.

Está configurado como **evento recurrente todos los viernes**, 19:00 hora Colombia,
con recordatorio 30 min antes y el link de Zoom adentro.

Para cambiar día, hora o duración: `onboarding` en `config.js`. La fecha de
`primeraSesion` **tiene que caer viernes** (si cambiás el día de la semana, hay que
cambiar también el `BYDAY=FR` del `RRULE` en `app.js`).

---

## Footer

Los reconocimientos salen de `config.reconocimientos`. Para sumar uno: dejá el
`.webp` en `/assets` y agregá una línea.

**Falta el logo de Wealth Expo Colombia**: ya hay una línea comentada lista para
descomentar cuando aparezca.

Se muestran en escala de grises al 55% de opacidad para que la fila lea pareja: los
wordmarks (BVC, Bloomberg, Bolsa Millonaria) son blancos planos, pero Rankia y Banco
de la República son medallones. Aplanarlos a blanco los convertiría en manchas.

---

## Correr local

```sh
npx serve .
# luego abrir http://localhost:3000/gracias-basica
```

Ojo: `serve` **no** aplica los rewrites de `vercel.json`, así que en local las rutas
`/basica` y `/premium` no funcionan, usá los nombres de archivo. En Vercel sí andan.

## Deploy

```sh
vercel deploy --prod
```

`vercel.json` ya define los rewrites de rutas limpias, el cache de assets a un año
y los headers de seguridad.

---

## Notas técnicas

- **La página se dibuja con JS** desde `config.js`. Es el precio de tener una única
  fuente de verdad para los links (requisito del proyecto) sin meter un build step.
- **Fuentes self-hosted** (Archivo + Inter, subset latin, 92 KB): evita una conexión
  a Google Fonts justo después del checkout, que es el peor momento para pagar un
  round-trip extra en mobile.
- Página completa: ~180 KB.
- Todo el texto pasa contraste **WCAG AA** (verificado sobre los colores computados,
  incluidos los dos extremos del degradé dorado).

### Sin verificar

El `.ics` está validado con un parser de calendario y abre correcto en Apple Calendar
y Gmail, pero **la descarga desde Safari en iOS no se probó en un dispositivo real**.
Safari maneja distinto las descargas vía `Blob`. Como la mayoría del tráfico va a venir
de celular, conviene probarlo en un iPhone antes de mandar tráfico pago.
