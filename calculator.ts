import { Item } from "./types.ts";

export const Calculator = (function () {
  const assemblers = (
    craftingSpeed: number,
    goalPerMinute: number,
    item: Item,
  ) => {
    const goalPerSecond: number = goalPerMinute / 60;
    const quantityPerSecond: number =
      (item.quantityCrafted / item.craftingTime) * craftingSpeed;
    return Math.ceil(goalPerSecond / quantityPerSecond);
  };

  return {
    assemblers,
  };
})();
