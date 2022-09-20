import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

/// Designers notes
/// The elite cavalry of the Sanguine Court.
/// Has the Lifelink special rule, this allows you to spend HP on the encampment for powerful effects without going into dangerous HP levels

export class BloodKnights implements Unit {
  constructor() {
    this.id = "SC5";
    this.name = "Blood Knights";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";

    this.baseStats = {
      movement: '7" / 10"',
      defense: '3/3/4',
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
      },
      {
        name: 'Lifelink',
        description: `For every three points of damage dealt by this unit in a single attack, your encampment gains 1 HP`
      }
    ];

    this.activeLevelingAbilities = [
    ];

    this.passiveLevelingAbilities = [
    ];

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
            hits4: '9 dmg'
          }]
      }];

    this.objectives = [
      {
        name: 'Bloodied Axe',
        description: `Whenever this unit destroys an enemy unit with the 'Lone figure' rule, it's controller gains the reward`,
        reward: '1 VP'
      },
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
