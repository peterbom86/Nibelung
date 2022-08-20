import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

/// Designers notes
// The elite cavalry of the Sanguine Court.

export class BloodKnights implements Unit {
  constructor() {
    this.id = "SC5";
    this.name = "Blood Knights";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";

    this.baseStats = {
      movement: '7" / 10"',
      defense: '4/4/4',
      resilience: '3',
      hp: '15',
      cost: '5 req.',
      base: '60mm'
    };

    this.activeAbilities = [
    ];

    this.passiveAbilities = [
      {
        name: 'Vampire',
        description: `This unit has the 'Vampire' keyword.`
      }
    ];

    this.activeLevelingAbilities = [
    ];

    this.passiveLevelingAbilities = [];

    this.attacks = [
      {
        name: 'Lance and sword',
        range: 'Melee',
        dice: '4/4',
        attacks: '2',
        rend: '2',
        chargeBonus: ['+2/+1', '+1 Rend'],
        flankBonus: ['+1/+1'],
        damageTracks: [
          {
            hits1: '4 dmg',
            hits2: '5 dmg',
            hits3: '6 dmg',
            hits4: '8 dmg'
          }]
      }];

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
}
