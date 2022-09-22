import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

/// Designers notes
// The Sanguine court headquarters.
// Can spend it HP to gain certain bonusses

export class Sepulcher implements Unit {
  constructor() {
    this.id = "SC7";
    this.name = "Sepulcher";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";

    this.baseStats = {
      movement: '0" / 0"',
      defense: '0/0/3',
      resilience: '5',
      hp: '25',
      cost: '-',
      base: '50mm'
    };

    this.fieldAllowance = 1;

    this.activeAbilities = [
      {
        name: 'Unholy Vigor',
        cost: '5 HP',
        costCanBePaidWithSymbol: false,
        range: 'Self',
        oncePerTurn: true,
        description: `
           Target friendly unit within 12" may reroll one attack roll.`
      }
    ];

    this.passiveAbilities = [
    ];

    this.activeLevelingAbilities = [
    ];

    this.passiveLevelingAbilities = [];

    this.attacks = [
    ];

    this.objectives = [
    ];

    this.spells = [];
  }

  id: string;
  name: string;
  imageUrl: string;
  baseStats: BaseStats;
  activeAbilities: ActiveAbility[];
  passiveAbilities: PassiveAbility[];
  activeLevelingAbilities: ActiveLevelingAbility[];
  passiveLevelingAbilities: PassiveLevelingAbility[];
  attacks: Attack[];
  objectives: BattlefieldObjective[];
  spells: Spell[];
  fieldAllowance: number;
}
