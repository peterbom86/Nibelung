import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

export class HighBornLord implements Unit {
  constructor() {
    this.id = "6";
    this.name = "Noble Elf Highborn Lord on Steed";
    this.imageUrl = "../../../assets/high_elves/heroes.jpg";
    this.color = "blue";

    this.baseStats = {
      movement: 'M + 2',
      defense: '3/2/3',
      resilience: '2',
      hp: '5',
      cost: '4 req.',
      base: '25mm'
    };

    this.fieldAllowance = 1;

    this.passiveAbilities = [
      {
        name: 'Lone figure',
        description: 'This unit cannot be targeted by ranged attacks from more than 5” away'
      },
      {
        name: 'Inspiring Presence',
        description: 'Once per turn, a friendly unit with 6" of this model can perform a combat order without spending the CP cost'
      },
    ];

    this.activeAbilities = [
      {
        name: 'Tactical Mastery',
        cost: '1 CP',
        costCanBePaidWithSymbol: false,
        range: '10”',
        oncePerTurn: true,
        description: 'Target enemy unit must be the next unit to activate when the opponent next chooses to activate a unit'
      }
    ];

    this.spells = []

    this.activeLevelingAbilities = [
      {
        name: 'Lead the Charge',
        cost: '1 CP',
        costCanBePaidWithSymbol: false,
        range: '6”',
        oncePerTurn: true,
        description: 'Remove a CP token from target unit, this allows it to be activated again this turn',
        experienceCost: '3 xp'
      }
    ];

    this.passiveLevelingAbilities = [];

    this.attacks = [
      {
        name: 'Elven Sword',
        range: 'Melee',
        dice: '3/3',
        attacks: '2',
        rend: '0',
        chargeBonus: ['+1/+1'],
        flankBonus: ['+1/+1'],
        damageTracks: [
          {
            hits1: '2 dmg',
            hits2: '3 dmg',
            hits3: '4 dmg',
            hits4: '5 dmg',
            hits5: '6 dmg',
          }]
      }];

    this.objectives = [
      {
        name: 'Secure the Flanks',
        reward: '1 VP',
        description: 'If an enemy model, flanking a friendly model within 6", is destroyed, gain 1 VP'
      }
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
  color: string;
}
