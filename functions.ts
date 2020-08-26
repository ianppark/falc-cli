import { items, Item, Prod, Requirement } from "./types.ts";
import { bold, red } from "./deps.ts";

export const uppercase = (str: string) => {
  return str.toUpperCase();
};

export const spaces = (count: number) => {
  let spaceStr: string = "";
  for (let i = 0; i < count; i++) {
    spaceStr += " ";
  }
  return spaceStr;
};

export const requirements = (
  itemName: string,
  goal: number,
) => {
  const item = items.find((item: Item) => item.name === itemName);
  if (!item) {
    console.log(red("Item not found"));
  } else {
    item.requires.forEach((req: Requirement) => {
      console.log(`-${req.name}: ${req.quantity * goal}/min`);

      requirements(req.name, req.quantity * goal);
    });
  }
};
