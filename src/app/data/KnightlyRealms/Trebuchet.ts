import { Unit, BaseStats, ActiveAbility, PassiveAbility, ActiveLevelingAbility, PassiveLevelingAbility, Attack, BattlefieldObjective, Spell } from "src/app/components/unit/unit";

/// Unit designed to allow the Knightly realms to play as a defensive faction if so desired.
/// This long ranged artillery can put pressure on the enemy by lopping shots at his encampment until it eventually is destroyed
/// (it should take at least 3 turns of shooting to do so)
/// It cannot move, but can be deployed within x" of your encampment as long as there's no enemy units within x".

export class Trebuchet implements Unit {
  constructor() {
    this.id = "KR1";
    this.name = "Trebuchet";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";
    this.color = "white";

    this.baseStats = {
      movement: '0" / 0"',
      defense: '0/0/0',
      resilience: '4',
      hp: '15',
      cost: '3 req.',
      base: '50mm'
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
