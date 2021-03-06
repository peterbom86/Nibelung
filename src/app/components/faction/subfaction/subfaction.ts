export interface Subfaction {
  id: string;
  name: string;
  imageUrl: string;
  startingUnits: String;
  unitLimitationRules: string[];
  specialRules: SubfactionSpecialRule[];
  feats: SubFactionFeat[];
}

export interface SubfactionSpecialRule {
  name: string;
  description: string;
}

export interface SubFactionFeat {
  name: string;
  description: string;
  cost: string;
}
