import { Faction, FactionSpecialRule } from "src/app/components/faction/faction-rules/faction";

export class SanguineCourtFaction implements Faction {
  id: string;
  name: string;
  imageUrl: string;
  specialRules: FactionSpecialRule[];
  upkeepRules: string;
  commandPoints: number;
  manaPoints: number;

  constructor() {
    this.id = "2";
    this.name = " Sanguine Court";
    this.imageUrl = "";
    this.specialRules = [
      {
        name: "Shallow Graves",
        description: `At the start of the battle, the Sanguine Court player may place up to 3 Shallow Grave markers (25mm) anywhere on the battlefield within 5" of an objective. \r\n
         When the owning player casts a Raise Dead spell while within 12" of a Shallow Grave marker, he may choose to use the Shallow Grave marker as the
         point of origin instead of the spellcaster.`
      },
      {
        name: "The Hunger",
        description: `All units with the 'Hunger' keyword receives a 'Hunger' token at the start of every round. A unit gets +1 attack for each 'Hunger' token it has.
         When a unit deals damage to an enemy unit, it loses a 'Hunger' token.
         An unengaged unit with at least one 'Hunger' token within charge range of an enemy unit must be activated and perform a charge.
         If multiple such units exists, the owner player chooses the order of activation.`
      },
      {
        name: "Longing for the Grave",
        description: `All units with the 'Raised' keyword in this army can only receive orders if within 6" of a friendly Necromancer.`
      }
    ];

    this.upkeepRules = "1 CP for every second unit in excess of 8. 1 CP for every unit in excess of 12";
    this.commandPoints = 12;
    this.manaPoints = 12;
  }
}
