import { Unit, BaseStats, ActiveAbility, PassiveAbility, ActiveLevelingAbility, PassiveLevelingAbility, Attack, BattlefieldObjective, Spell } from "src/app/components/unit/unit";

export class IthilChariot implements Unit {
  constructor() {
    this.id = "8";
    this.name = "Ithil Chariot";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";

    this.baseStats = {
      movement: '7" / 10"',
      defense: '1/3/2',
      resilience: '1',
      hp: '10',
      cost: '2 req.',
      base: '40mm'
    };

    this.fieldAllowance = 3;

    this.activeAbilities = [
    ];

    this.passiveAbilities = [
      {
        name: 'Secure the objectives',
        description: `This unit can sieze objectives despite not being on a 50mm base.`
      }
    ];

    this.activeLevelingAbilities = [
    ];

    this.passiveLevelingAbilities = [
      {
        name: 'Tactical Coordination',
        experienceCost: '2 xp',
        description: 'When issuing a reactionary order to a unit within 6" of this model, spend a CP from the general supply instead of your own.'
      }
    ];

    this.attacks = [
      {
        name: 'Elven Short Bow',
        range: '9"',
        dice: '3/2',
        attacks: '1',
        rend: '0',
        chargeBonus: [''],
        flankBonus: [''],
        damageTracks: [
          {
            hits1: '2 dmg',
            hits2: '3 dmg',
            hits3: '4 dmg',
          }]
      },
      {
        name: 'Elven Spears',
        range: 'Melee',
        dice: '3/2',
        attacks: '1',
        rend: '0',
        chargeBonus: ['+1/+1'],
        flankBonus: ['+1/+0'],
        damageTracks: [
          {
            hits1: '2 dmg',
            hits2: '3 dmg',
            hits3: '4 dmg',
            hits4: '5 dmg',
          }]
      }
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
