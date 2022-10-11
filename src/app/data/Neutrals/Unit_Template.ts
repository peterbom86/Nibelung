import { Unit, BaseStats, ActiveAbility, PassiveAbility, ActiveLevelingAbility, PassiveLevelingAbility, Attack, BattlefieldObjective, Spell } from "src/app/components/unit/unit";

export class DeathMage implements Unit {
  constructor() {
    this.id = "SC8";
    this.name = "Death Mage";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";
    this.color = "blue";

    this.baseStats = {
      movement: '4" / 7"',
      defense: '1/1/3',
      resilience: '0',
      hp: '5',
      cost: '4 req.',
      base: '25mm'
    };

    this.fieldAllowance = 2;

    this.activeAbilities = [
      {
        name: '',
        cost: '1 CP',
        costCanBePaidWithSymbol: false,
        range: '',
        oncePerTurn: true,
        description: ``
      }
    ];

    this.passiveAbilities = [
      {
        name: '',
        description: ``
      },
      {
        name: 'Lone figure',
        description: 'This unit cannot be targeted by ranged attacks from more than 5” away'
      },
    ];

    this.activeLevelingAbilities = [
      {
        name: '',
        cost: ' CP',
        costCanBePaidWithSymbol: false,
        range: '',
        oncePerTurn: true,
        description: '',
        experienceCost: 'xp'
      }
    ];

    this.passiveLevelingAbilities = [
      {
        name: '',
        experienceCost: 'xp',
        description: ''
      }
    ];

    this.attacks = [
      {
        name: '',
        range: '',
        dice: '',
        attacks: '',
        rend: '',
        chargeBonus: [''],
        flankBonus: [''],
        damageTracks: [
          {
            hits1: ' dmg',
            hits2: ' dmg',
            hits3: ' dmg',
            hits4: ' dmg'
          }]
      }];

    this.objectives = [
      {
        name: '',
        description: ``,
        reward: ''
      }
    ];

    this.spells = [
      {
        name: '',
        cost: 'MP',
        costCanBePaidWithSymbol: false,
        range: '',
        timesPerTurn: '',
        description: ``
      },
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
