import { Item } from "./types.ts";

export const Calculator = (function () {
  const itemAssemblers = (
    craftingSpeed: number,
    goalPerMinute: number,
    item: Item,
  ) => {
    const goalPerSecond: number = goalPerMinute / 60;
    const quantityPerSecond: number =
      (item.quantityCrafted / item.craftingTime) * craftingSpeed;
    return Math.ceil(goalPerSecond / quantityPerSecond);
  };

  const assemblers = (
    craftingSpeed: number,
    goalPerMinute: number,
    quantityCrafted: number,
    craftingTime: number,
  ) => {
    const goalPerSecond: number = goalPerMinute / 60;
    const quantityPerSecond: number = (quantityCrafted / craftingTime) *
      craftingSpeed;
    return Math.ceil(goalPerSecond / quantityPerSecond);
  };

  return {
    itemAssemblers,
    assemblers,
  };
})();
