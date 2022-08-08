import { Faction, FactionSpecialRule } from "src/app/components/faction/faction-rules/faction";

export class NobleElvesFaction implements Faction {
  id: string;
  name: string;
  imageUrl: string;
  specialRules: FactionSpecialRule[];
  upkeepRules: string;
  commandPoints: number;
  manaPoints: number;

  constructor() {
    this.id = "1";
    this.name = "Noble Elves";
    this.imageUrl = "";
    this.specialRules = [
      {
        name: "Elven Pride",
        description: "Whenever a high elf unit loses a banner (by retreating or losing a unit), the owning player loses 1 VP."
      },
      {
        name: "Magical traits",
        description: "Every unit counts as having a wizard for dispelling of spells."
      },
      {
        name: "Force Organization",
        description: "Every unit counts as an officer for command purposes."
      },
      {
        name: "Coordinated Attack",
        description: "When issuing a command, you may issue another command before the opponent gets to issue a command."
      }
    ];

    this.upkeepRules = "1 CP for every second unit in excess of 6.";
    this.commandPoints = 14;
    this.manaPoints = 12;
  }
}
