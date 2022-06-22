import { Subfaction } from "../subfaction/subfaction";

export interface Faction {
  id: string;
  name: string;
  imageUrl: string;
  specialRules: FactionSpecialRule[];
  upkeepRules: string;
  commandPoints: number;
  manaPoints: number;
}

export interface FactionSpecialRule {
  name: string;
  description: string;
}
