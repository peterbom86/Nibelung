export interface Unit {
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

}

export interface LevelingAbility {

}

export interface Attack {

}

export interface BattlefieldObjective {

}
