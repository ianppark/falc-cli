import { Calculator } from "./calculator.ts";
import Denomander from "https://deno.land/x/denomander/mod.ts";
import { asmLevel, items, Item } from "./types.ts";
import { uppercase } from "./functions.ts";

const program = new Denomander(
  {
    app_name: "Falc",
    app_description:
      "Simple Command Line utility for calculating Factorio Ratios",
    app_version: "0.1.0",
  },
);

program.command(
  "asm [goal] [time] [quantity]",
  "Calculate number of assemblers based on goal rate and crafting rate of item",
).option("-l --level", "Assembler Level", uppercase).action(
  ({ goal, time, quantity }: any) => {
    const speed = asmLevel[program.level] || 0.5;
    console.log(speed);
  },
);

program.command(
  "spm",
  "Show assemblers needed for each science pack to generate specified science per minute",
).requiredOption(
  "-q --quantity",
  "Quantity of science packs to produce per minute",
)
  .option("-l --level", "Assembler Level", uppercase)
  .option(
    "-r --recursive",
    "Recursively show assemblers for every level of production needed from raw materials up to science",
  ).action(() => {
    const speed: number = parseFloat(asmLevel[program.level]) || 0.5;

    console.log(
      `Calculating ${program.quantity}spm at Assembler Speed: ${speed}`,
    );

    const automationSciencePack = items.find((item: Item) =>
      item.name === "automation-science-pack"
    );

    if (automationSciencePack) {
      const automationScience = Calculator.assemblers(
        speed,
        program.quantity,
        automationSciencePack,
      );
      console.log(`Automation Science Packs: ${automationScience}`);
    }
  });

program.parse(Deno.args);
