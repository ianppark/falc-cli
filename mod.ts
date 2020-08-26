import { Calculator } from "./calculator.ts";
import Denomander from "https://deno.land/x/denomander/mod.ts";
import { asmLevel, items, Item, Requirement } from "./types.ts";
import { uppercase, requirements } from "./functions.ts";
import { red, green, bold, gray, yellow, magenta, cyan } from "./deps.ts";

const program = new Denomander(
  {
    app_name: "Falc",
    app_description:
      "Simple Command Line utility for calculating Factorio Ratios",
    app_version: "0.1.0",
  },
);

program.command(
  "asm [goal] [itemName]",
  "Calculate number of assemblers based on goal rate and crafting rate of item",
).option("-l --level", "Assembler Level", uppercase).action(
  ({ goal, time, itemName }: any) => {
    const speed = parseFloat(asmLevel[program.level]) || 0.5;
    const item = items.find((item: Item) => item.name === itemName);

    if (item) {
      console.log(Calculator.itemAssemblers(speed, goal, item));
    } else {
      console.log(bold(red("Item not found")));
    }
  },
);

program.command(
  "ipm [goal] [itemName]",
  "Calculate the materials needed per minute to achieve goal rate",
).action(({ goal, itemName }: any) => {
  const item = items.find((item: Item) => item.name === itemName);

  if (!item) {
    console.log(bold(red("Item not found")));
  } else {
    console.log("");
    console.log(`Calculating requirements for: ${bold(green(item.name))}`);

    item.requires.forEach((requirement: Requirement) => {
      const requiredRate = requirement.quantity * goal;
      const requiredRatePerSec = requiredRate / 60;
      console.log(
        `\t- ${
          bold(requirement.name)
        }: ${requiredRate}/min | ${requiredRatePerSec}/sec`,
      );
    });
  }

  // console.log("");
  // requirements("logistic-science-pack", 45);
});

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

    const automationAssemblers = Calculator.assemblers(
      speed,
      program.quantity,
      1,
      5,
    ).toString();
    const logisticAssemblers = Calculator.assemblers(
      speed,
      program.quantity,
      1,
      6,
    ).toString();
    const militaryAssemblers = Calculator.assemblers(
      speed,
      program.quantity,
      2,
      10,
    ).toString();
    const chemicalAssemblers = Calculator.assemblers(
      speed,
      program.quantity,
      2,
      24,
    ).toString();
    const productionAssemblers = Calculator.assemblers(
      speed,
      program.quantity,
      3,
      21,
    ).toString();
    const utilityAssemblers = Calculator.assemblers(
      speed,
      program.quantity,
      3,
      21,
    ).toString();

    console.log(
      `Science Pack Assemblers: ${red(automationAssemblers)} ${
        green(logisticAssemblers)
      } ${gray(militaryAssemblers)} ${cyan(chemicalAssemblers)} ${
        magenta(productionAssemblers)
      } ${yellow(utilityAssemblers)}`,
    );
  });

program.parse(Deno.args);
