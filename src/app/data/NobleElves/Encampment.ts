import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

/// Designers notes
// The Noble elf headquarters.

export class Encampment implements Unit {
  constructor() {
    this.id = "7";
    this.name = "Encampment";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";

    this.baseStats = {
      movement: '0" / 0"',
      defense: '0/0/4',
      resilience: '3',
      hp: '20',
      cost: '-',
      base: '50mm'
    };

    this.fieldAllowance = 1;

    this.activeAbilities = [
    ];

    this.passiveAbilities = [
      {
        name: 'Houseguards',
        description: `If an enemy model ends its activation within 6" of this model, immediately put a Houseguard Spearmen units into play in base contact with this model.
          This can only be triggered once per turn and a max of 3 times per game.`
      }
    ];

    this.activeLevelingAbilities = [
    ];

    this.passiveLevelingAbilities = [
    ];

    this.attacks = [
    ];

    this.objectives = [
    ];

    this.spells = [
    ];
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
