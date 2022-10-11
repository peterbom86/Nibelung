import { Unit, BaseStats, ActiveAbility, PassiveAbility, ActiveLevelingAbility, PassiveLevelingAbility, Attack, BattlefieldObjective, Spell } from "src/app/components/unit/unit";

export class CelethirReavers implements Unit {
  constructor() {
    this.id = "10";
    this.name = "Celethir Reavers";
    this.imageUrl = "../../../assets/high_elves/lightcav.jpg";
    this.color = "blue";

    this.baseStats = {
      movement: '8" / 11"',
      defense: '3/4/3',
      resilience: '0',
      hp: '8',
      cost: '3 req.',
      base: '50mm'
    };

    this.fieldAllowance = 2;

    this.activeAbilities = [
      // {
      //   name: '',
      //   cost: '1 CP',
      //   costCanBePaidWithSymbol: false,
      //   range: '',
      //   oncePerTurn: true,
      //   description: ``
      // }
    ];

    this.passiveAbilities = [
      // {
      //   name: '',
      //   description: ``
      // },
      // {
      //   name: 'Lone figure',
      //   description: 'This unit cannot be targeted by ranged attacks from more than 5” away'
      // },
    ];

    this.activeLevelingAbilities = [
      // {
      //   name: '',
      //   cost: ' CP',
      //   costCanBePaidWithSymbol: false,
      //   range: '',
      //   oncePerTurn: true,
      //   description: '',
      //   experienceCost: 'xp'
      // }
    ];

    this.passiveLevelingAbilities = [
      // {
      //   name: '',
      //   experienceCost: 'xp',
      //   description: ''
      // }
    ];

    this.attacks = [
      // {
      //   name: '',
      //   range: '',
      //   dice: '',
      //   attacks: '',
      //   rend: '',
      //   chargeBonus: [''],
      //   flankBonus: [''],
      //   damageTracks: [
      //     {
      //       hits1: ' dmg',
      //       hits2: ' dmg',
      //       hits3: ' dmg',
      //       hits4: ' dmg'
      //     }]
      // }
    ];

    this.objectives = [
      // {
      //   name: '',
      //   description: ``,
      //   reward: ''
      // }
    ];

    this.spells = [
      // {
      //   name: '',
      //   cost: 'MP',
      //   costCanBePaidWithSymbol: false,
      //   range: '',
      //   timesPerTurn: '',
      //   description: ``
      // },
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
