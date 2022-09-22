import { Subfaction, SubFactionFeat, SubfactionSpecialRule } from "src/app/components/faction/subfaction/subfaction";

export class SanguineCourtSubfaction implements Subfaction {
  constructor(
    public id: string,
    public name: string,
    public imageUrl: string,
    public startingUnits: String,
    public startingReqPoints: number,
    public unitLimitationRules: string[],
    public specialRules: SubfactionSpecialRule[],
    public feats: SubFactionFeat[]
  ) { }
}

export const BLOODBORN = new SanguineCourtSubfaction(
  "SC1", // Id
  "Bloodborn", // Name
  "", // Image URL
  "", // Starting Units
  3,
  // Unit Limitation Rules
  [
    "This army can only field one of each unit with the 'Raised' keyword.",
     ""],
  [ // Special Rules
    {
      name: "Crimson Vampires",
      description: `Every time a 'Vampire' unit in this army deals 5 or more damage to an enemy unit, it gains 1 'Bloodied Might' token - add 1 attack to the unit for each such token on it.
      You can spend a token from a unit to heal 5 HP to that unit.`
    },
    {
      name: "",
      description: ""
    }],
  [ // Feats
    {
      name: "",
      description: "",
      cost: "1 CP"
    }
  ]
);

// Summoning-focused subfaction
// Gains bonusses to summoning and summoning-related abilities
// Retricted from including some vampire units
// Scenario focused, especially on controlling Shallow Grave markers
// Magic focused
export const LIVING_DEAD = new SanguineCourtSubfaction(
  "SC2", // Id
  "The Living Dead", // Name
  "", // Image URL
  "3x Restless Dead, 2x Necromancer", // Starting Units
  3,
  [ // Unit Limitation Rules
    "This army can only field one of each unit with the 'Vampire' keyword.",
    "This army can field +1 Restless Dead units and +1 Necromancers"
  ],
  [ // Special Rules
    {
      name: "Unholy Power",
      description: `This army gains 2 extra mana points each round.`
    },
    {
      name: "Tend the Gardens",
      description: `When scoring objectives at the end of every round, this army gains 1 extra victory point for each Shallow Grave marker controlled by a friendly 'Raised' unit.`
    }
  ],
  [ // Feats
    {
      name: "Howl from Beyond",
      description: `Summon 3 'Raised' units as if casting the 'Raise Dead' spell, without spending Mana Points, these cannot be dispelled`,
      cost: "1 CP"
    }
  ]
);

export const Nightstalkers = new SanguineCourtSubfaction(
  "SC3", // Id
  "Nightstalkers", // Name
  "", // Image URL
  "3x Wailing Ghouls", // Starting Units
  3,
  [ // Unit Limitation Rules
    "This army can only field one of each unit with the 'Raised' keyword.",
  ],
  [ // Special Rules
    {
      name: "Call of the Night",
      description: `When recruiting a Werewolf unit, instead of placing it next to your encampment, place it anywhere on the battlefield within 3" of one of the map edges.`
    }
  ],
  [ // Feats
    {
      name: "",
      description: ``,
      cost: "1 CP"
    }
  ]
);


