import { Subfaction, SubFactionFeat, SubfactionSpecialRule } from "src/app/components/faction/subfaction/subfaction";

export class NobleElvesSubfactions implements Subfaction {
  constructor(
    public id: string,
    public name: string,
    public imageUrl: string,
    public startingReqPoints: number,
    public unitLimitationRules: string[],
    public specialRules: SubfactionSpecialRule[],
    public feats: SubFactionFeat[]
  ) { }
}

export const HORSELORDS = new NobleElvesSubfactions(
  "1",
  "The Horse Lords of Riverdale",
  "",
  3,
  ["Can field 4 of each mounted unit.", "Can field only 1 of each infantry unit"],
  [
    {
      name: "Expert Horsemen",
      description: "Once per round, may grant +2 movement to a mounted unit."
    },
    {
      name: "Flank Tactics",
      description: "At the end of every round, score 2 VP if you have a model in every quarter of the table and one unit in contact with the enemy's deployment edge."

    }],
  [
    {
      name: "Charge of the Light Brigade",
      description: "Once per game, may activate this feat when charging with a mounted unit. The enemy unit gains the effects of being fleeing for the ensuing combat round.",
      cost: "1 CP"
    }
  ]
);

export const SHINING_COMPANY = new NobleElvesSubfactions(
  "2", // Id
  "The Shining Company", // Name
  "", // Image URL
  3,
  [ // Unit Limitation Rules
    "Cannot recruit any Swordmaster, White Lion, Ellyrian Reaver or Dragonlord units.",
    "Can field 6 Spearmen units"],
  [ // Special Rules
    {
      name: "Defending the Homeland",
      description: "Spearmen units in this army has +1 resilience and +1 rend"
    },
    {
      name: "Taking Ground",
      description: "When scoring for holding an objective, this army gains +1 VP for each objective scored."
    },
    {
      name: "City Watch",
      description: "Recruiting Spearmen units costs -1 Req. point"
    }
  ],
  [ // Feats
    {
      name: "Battleline",
      description: "At any time, once per game, may activate this feat to grant all spearmen units in base contact with another spearmen unit +1/+1/+0 defence and +1 resilience. This lasts until the end of the current turn.",
      cost: "1 CP"
    },
    {
      name: "Practiced manouvres",
      description: "At any time, once per game, may activate this feat to allow all spearmen units to pass through each other while advancing. This lasts until the end of the current round.",
      cost: "-"
    }
  ]
);


