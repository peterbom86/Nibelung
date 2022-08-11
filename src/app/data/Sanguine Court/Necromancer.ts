import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

export class Necromancer implements Unit {
  constructor() {
    this.id = "SC2";
    this.name = "Sanguine Court Necromancer";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";

    this.baseStats = {
      movement: '3" / 6"',
      defense: '1/2/5',
      resilience: '0',
      hp: '5',
      cost: '3 req.',
      base: '25mm'
    };

    this.passiveAbilities = [
      {
        name: 'Lone figure',
        description: 'This unit cannot be targeted by ranged attacks from more than 5” away'
      }];

    this.activeAbilities = [];

    this.spells = [
      {
        name: '',
        cost: '2 MP',
        costCanBePaidWithSymbol: false,
        range: '10”',
        timesPerTurn: '1',
        description: ''
      },
      {
        name: '',
        cost: '2 MP',
        costCanBePaidWithSymbol: false,
        range: '6”',
        timesPerTurn: '1',
        description: ''
      },
      {
        name: '',
        cost: '2 MP',
        costCanBePaidWithSymbol: false,
        range: '6”',
        timesPerTurn: '2',
        description: ``
      },
      {
        name: '',
        cost: '2 MP',
        costCanBePaidWithSymbol: false,
        range: '10”',
        timesPerTurn: '*',
        description: ``
      }
    ]

    this.activeLevelingAbilities = [];

    this.passiveLevelingAbilities = [
      {
        name: '',
        experienceCost: '4 xp',
        description: 'Gains the spell xxxxx for one cast per turn'
      }
    ];

    this.attacks = [
      {
        name: 'Spells',
        range: '*',
        dice: '3/2',
        attacks: '*',
        rend: '*',
        flankBonus: ['-'],
        damageTracks: []
      },
      {
        name: 'Withered Staff',
        range: 'Melee',
        dice: '1/1',
        attacks: '1',
        rend: '0',
        flankBonus: ['+0/+0'],
        damageTracks: [
          {
            hits1: '1 dmg',
            hits3: '2 dmg',
            hits4: '3 dmg',
          }]
      }];

    this.objectives = [
      {
        name: 'Prized Servant of The Undying King',
        description: `If this model is destroyed, the opponent player gains 1 VP`,
        reward: '1 VP to opponent player.'
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
}
