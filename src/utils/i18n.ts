import es from "../locales/es.json";
import en from "../locales/en.json";

const translations: any = { en, es };
let idioma = 'es';


export function getIdioma() {
  return idioma;
}

export function setIdioma(nuevo_idioma: string) {
  idioma = nuevo_idioma;
}

export function traducir(clave: string): string {
  return translations[idioma][clave] || clave;
}
