export interface Unit {
  id: string;
  name: string;
  imageUrl: string;
  baseStats: BaseStats;
  activeAbilities: ActiveAbility[];
  passiveAbilities: PassiveAbility[];
  spells: Spell[];
  activeLevelingAbilities: ActiveLevelingAbility[];
  passiveLevelingAbilities: PassiveLevelingAbility[];
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

export interface ActiveAbility {
  name: string;
  cost: string;
  costCanBePaidWithSymbol: boolean;
  range: string;
  oncePerTurn: boolean;
  description: string;
}

export interface PassiveAbility {
  name: string;
  description: string;
}

export interface Spell {
  name: string;
  cost: string;
  costCanBePaidWithSymbol: boolean;
  range: string;
  timesPerTurn: string;
  description: string;
}

export interface ActiveLevelingAbility extends ActiveAbility {
  experienceCost: string;
}

export interface PassiveLevelingAbility extends PassiveAbility {
  experienceCost: string;
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
