import Rooster from "./rooster.js";

const roosters = [
  "bitelao",
  "black-cock",
  "canarinho-pistola",
  "cuccoo",
  "frango-atirador",
  "frango-da-sadia",
  "frango-xadrez",
  "frango",
  "galinha-chernobyl",
  "galinha-de-borracha",
  "galinha-do-cs",
  "galinha-perdeu",
  "galinha-peso-de-porta",
  "galinha-pintadinha",
  "galinha-thanos",
  "galinho-tico-liro",
  "galo-ataliba",
  "galo-atletico-mineiro",
  "galo-boxeador",
  "galo-carijo",
  "galo-carioca",
  "galo-ciborgue-do-senai",
  "galo-de-kalsa",
  "galo-de-tenis",
  "galo-do-acre",
  "galo-fortnite",
  "galo-redentor",
  "galopera",
  "galos-de-fralda",
  "heihei",
  "jurandir-a-pomba",
  "panchito",
  "peixe-galo",
  "peso-pena",
  "pinto-armado",
  "pinto-de-moicano",
  "rocky",
  "rooster",
  "shinobi-killer",
  "sir-gallinaceo",
];

/**
 * @type Array<Rooster>
 */
const ROOSTERS_ARRAY = [];
roosters.forEach((rooster) => {
  ROOSTERS_ARRAY.push(new Rooster(rooster));
});

export { ROOSTERS_ARRAY };
