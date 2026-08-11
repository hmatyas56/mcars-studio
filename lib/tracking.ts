// Typovaný wrapper nad Meta Pixel (fbq). Base kód se inicializuje v index.html.
// Pokud pixel z jakéhokoli důvodu nenačte (adblock, ještě nedoplněné ID),
// se voláními tiše nic nestane – konverzní logika tím nikdy nespadne.

type FbqStandardEvent =
  | 'Lead'
  | 'Contact'
  | 'ViewContent'
  | 'CompleteRegistration'
  | 'PageView'

type FbqParams = Record<string, unknown>

declare global {
  interface Window {
    fbq?: (
      method: 'track' | 'trackCustom' | 'init',
      event: string,
      params?: FbqParams,
    ) => void
  }
}

function track(event: FbqStandardEvent, params?: FbqParams): void {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') {
    if (import.meta.env.DEV) {
      // V dev konzoli vidíme, že by se event odpálil, i bez načteného pixelu.
      console.info('[pixel:dev] track', event, params ?? {})
    }
    return
  }
  window.fbq('track', event, params)
}

// Hlavní konverze – odeslání kontaktního formuláře.
export function trackLead(params?: FbqParams): void {
  track('Lead', { content_name: 'Kontaktni formular', ...params })
}

// Klik na telefonní číslo (přímý kontakt).
export function trackContact(params?: FbqParams): void {
  track('Contact', { content_name: 'Klik na telefon', ...params })
}
