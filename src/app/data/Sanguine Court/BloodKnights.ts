import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

/// Designers notes
/// The elite cavalry of the Sanguine Court.
/// Has the Lifelink special rule, this allows you to spend HP on the encampment for powerful effects without going into dangerous HP levels

export class BloodKnights implements Unit {
  constructor() {
    this.id = "SC5";
    this.name = "Blood Knights";
    this.imageUrl = "../../../assets/sanguine_court/bloodknights.jpg";
    this.color = "black";

    this.baseStats = {
      movement: 'Long',
      defense: '3/3/4',
      resilience: '2',
      hp: '15',
      cost: '5 req.',
      base: '60mm'
    };

    this.fieldAllowance = 2;

    this.activeAbilities = [
    ];

    this.passiveAbilities = [
      {
        name: 'Vampire',
        description: `This unit has the 'Vampire' keyword.`
      },
      {
        name: 'Lifelink',
        description: `For every two points of damage dealt by this unit in each combat round (after subtracting resilience),
         choose one: your encampment gains 1 HP or this unit heals 1 HP. \n This can increase the encampments HP beyond its starting point.`
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
            hits4: '8 dmg'
          }]
      }];

    this.objectives = [
      {
        name: 'Blood Harvest',
        description: `Whenever an enemy unit engaged by this unit is destroyed, gain 1 extra VP.`,
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
  fieldAllowance: number;
  color: string;
}
