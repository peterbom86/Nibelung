import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

/// Designers notes
/// Control and damage over time (borrowed from red and blue)
/// offensive spells in contrast to the defensive and supportive necromancers
/// Direct removal since this is blacks key ability
/// Ability to sacrifice self for powerful effect
/// Drain life-like ability

export class DeathMage implements Unit {
  constructor() {
    this.id = "SC8";
    this.name = "Death Mage";
    this.imageUrl = "../../../assets/sanguine_court/characters.jpg";
    this.color = "black";

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
      {
        name: 'Lone figure',
        description: 'This unit cannot be targeted by ranged attacks from more than 5” away'
      },
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
      {
        name: 'Hells caretaker',
        experienceCost: '5 xp',
        description: 'Gains the spell Back to the Abyss for one cast per turn'
      }
    ];

    this.attacks = [
      {
        name: 'Spells',
        range: '*',
        dice: '4/2',
        attacks: '*',
        rend: '*',
        chargeBonus: [''],
        flankBonus: [''],
        damageTracks: [
          {
            hits1: 'Spell effect',
            hits2: 'Spell effect + 2 dmg',
            hits3: '',
            hits4: 'Spell effect + regain 1 MP',
          }]
      },
      {
        name: 'Siphon Life',
        range: '8"/Magic',
        dice: '3/2',
        attacks: '2',
        rend: '0',
        chargeBonus: [''],
        flankBonus: [''],
        damageTracks: [
          {
            hits1: '2 dmg',
            hits2: '3 dmg + heal friendly unit within 6" for damage dealt',
            hits3: '5 dmg',
            hits4: '7 dmg  + heal friendly unit within 6" for damage dealt',
            hits5: '9 dmg'
          }]
      }];

    this.objectives = [
      {
        name: 'The Withering',
        description: `Whenever an enemy unit is destroyed while affected by Curse of Ages, gain 1 VP.`,
        reward: '1 VP'
      }
    ];

    this.spells = [
      {
        name: 'Essence Drain',
        cost: '3 MP',
        costCanBePaidWithSymbol: false,
        range: '8"',
        timesPerTurn: '2',
        description: `Target enemy unit suffers 5 dmg. A friendly unit within 6" can be healed for the amount dealt after subtracting resilience.`
      },
      {
        name: 'Curse of Ages',
        cost: '3 MP',
        costCanBePaidWithSymbol: false,
        range: '6"',
        timesPerTurn: '1',
        description: `Target enemy unit gains a Curse of Ages token. A unit having a Curse of Ages token at the end of a turn suffers 3 dmg.
        \n If the unit is healed by any source, the heal is ignored, but the curse will be removed.`
      },
      {
        name: 'Back to the Abyss',
        cost: '6 MP',
        costCanBePaidWithSymbol: false,
        range: '6", cannot be channeled',
        timesPerTurn: '*',
        description: `On a successful hit, target enemy unit and this unit is removed from the game.`
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
