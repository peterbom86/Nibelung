export interface Unit {
  id: string;
  name: string;
  imageUrl: string;
  baseStats: BaseStats;
  abilities: UnitAbility[];
  levelingAbilities: LevelingAbility[];
  attacks: Attack[];
  objectives: BattlefieldObjective[];
}

export interface BaseStats {
  movement: string;
  defense: string;
  resilience: string;
  hp: string;
  cost: string;
  base: string;
}

export interface UnitAbility {
  name: string;
  cost: string;
  costCanBePaidWithSymbol: boolean;
  range: string;
  oncePerTurn: boolean;
  description: string;
}

export interface LevelingAbility extends UnitAbility {
}

export interface DamageTrack {
  hits1?: string;
  hits2?: string;
  hits3?: string;
  hits4?: string;
  hits5?: string;
  hits6?: string;
  hits7?: string;
  hits8?: string;
}

export interface Attack {
  name: string;
  range: string;
  dice: string;
  attacks: string;
  rend: string;
  flankBonus: string[];
  damageTracks: DamageTrack[];
}

export interface BattlefieldObjective {
  name: string;
  reward: string;
  description: string;
}
