export enum asmLevel {
  GRAY = 0.5,
  BLUE = 0.75,
  YELLOW = 1.25,
}

export enum Prod {
  PLAYER = 0,
  MINER,
  SMELTER,
  ASSEMBLER,
  CHEMICAL_PLANT,
  CENTRIFUGE,
}

export interface Item {
  name: string;
  producedBy: Prod;
  quantityCrafted: number;
  craftingTime: number;
  requires: Requirement[];
}

export interface Requirement {
  name: string;
  quantity: number;
}

export const items: Item[] = [
  {
    name: "automation-science-pack",
    producedBy: Prod.ASSEMBLER,
    quantityCrafted: 1,
    craftingTime: 5,
    requires: [
      { name: "iron-gear-wheel", quantity: 1 },
      { name: "copper-plate", quantity: 1 },
    ],
  },
  {
    name: "logistic-science-pack",
    producedBy: Prod.ASSEMBLER,
    quantityCrafted: 1,
    craftingTime: 6,
    requires: [
      { name: "inserter", quantity: 1 },
      { name: "transport-belt", quantity: 1 },
    ],
  },
  {
    name: "military-science-pack",
    producedBy: Prod.ASSEMBLER,
    quantityCrafted: 2,
    craftingTime: 10,
    requires: [
      { name: "grenade", quantity: 1 },
      { name: "piercing-rounds-magazine", quantity: 1 },
      { name: "stone-wall", quantity: 2 },
    ],
  },
  {
    name: "copper-plate",
    producedBy: Prod.SMELTER,
    quantityCrafted: 1,
    craftingTime: 3.2,
    requires: [
      { name: "copper-ore", quantity: 1 },
    ],
  },
  {
    name: "iron-gear-wheel",
    producedBy: Prod.ASSEMBLER,
    quantityCrafted: 1,
    craftingTime: 0.5,
    requires: [
      { name: "iron-plate", quantity: 2 },
    ],
  },
  {
    name: "copper-ore",
    producedBy: Prod.MINER,
    quantityCrafted: 1,
    craftingTime: 1,
    requires: [],
  },
  {
    name: "inserter",
    producedBy: Prod.ASSEMBLER,
    quantityCrafted: 2,
    craftingTime: 0.5,
    requires: [
      { name: "iron-plate", quantity: 1 },
      { name: "iron-gear-wheel", quantity: 1 },
      { name: "electronic-circuit", quantity: 1 },
    ],
  },
  {
    name: "electronic-circuit",
    producedBy: Prod.ASSEMBLER,
    quantityCrafted: 1,
    craftingTime: 0.5,
    requires: [
      { name: "copper-cable", quantity: 3 },
      { name: "iron-plate", quantity: 1 },
    ],
  },
  {
    name: "copper-cable",
    producedBy: Prod.ASSEMBLER,
    quantityCrafted: 2,
    craftingTime: 0.5,
    requires: [
      { name: "copper-plate", quantity: 1 },
    ],
  },
  {
    name: "iron-plate",
    producedBy: Prod.SMELTER,
    quantityCrafted: 1,
    craftingTime: 3.2,
    requires: [
      { name: "iron-ore", quantity: 1 },
    ],
  },
  {
    name: "iron-ore",
    producedBy: Prod.MINER,
    quantityCrafted: 1,
    craftingTime: 1,
    requires: [],
  },
  {
    name: "transport-belt",
    producedBy: Prod.ASSEMBLER,
    quantityCrafted: 2,
    craftingTime: 0.5,
    requires: [
      { name: "iron-gear-wheel", quantity: 1 },
      { name: "iron-plate", quantity: 1 },
    ],
  },
];
