// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
  {
    id: 1,
    name: "John1",
    sex: "male",
    age: 20,
    health: 1,
  },
  {
    id: 1,
    name: "John1",
    sex: "male",
    age: 20,
    health: 11,
  },
  {
    id: 1,
    name: "John1",
    sex: "male",
    age: 12,
    health: 2,
  },
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
  {
    id: 3,
    name: "Ragasztó",
    wings: 6,
    wheels: 2,
    clan: "hogymi?",
  },
  {
    id: 3,
    name: "Ragasztó",
    wings: 6,
    wheels: 2,
    clan: "hogymi?",
  },
  {
    id: 3,
    name: "Ragasztó",
    wings: 6,
    wheels: 2,
    clan: "hogymi?",
  },
];
