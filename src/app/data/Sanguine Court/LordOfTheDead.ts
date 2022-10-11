import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

/// Designers notes
/// Necromancer with powerful aura that powers up all nearby risen units, gets stronger for each turn, but also more costly.
/// Aura must be maintained for an cumulative mana cost, 2 MP first turn, then 4, 7, 9. In order to reset it back down,
/// one turn must be spend to remove a 'cumulative' counter, so if it's at 9, 3 turns must pass to get it back to 2 MP.
/// Effects gained is:
/// +1/+0,
/// +2 dmg
/// +1 attack
/// +0/+2


export class LordOfTheDead implements Unit {
  constructor() {
    this.id = "SC9";
    this.name = "Lord of The Dead";
    this.imageUrl = "../../../assets/sanguine_court/characters.jpg";
    this.color = "black";

    this.baseStats = {
      movement: '7" / 10"',
      defense: '4/3/3',
      resilience: '1',
      hp: '10',
      cost: '4 req.',
      base: '30mm'
    };

    this.fieldAllowance = 1;

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
      // {
      //   name: 'Hells caretaker',
      //   experienceCost: '5 xp',
      //   description: 'Gains the spell Back to the Abyss for one cast per turn'
      // }
    ];

    this.attacks = [
      // {
      //   name: 'Spells',
      //   range: '*',
      //   dice: '4/2',
      //   attacks: '*',
      //   rend: '*',
      //   chargeBonus: [''],
      //   flankBonus: [''],
      //   damageTracks: [
      //     {
      //       hits1: 'Spell effect',
      //       hits2: 'Spell effect + 2 dmg',
      //       hits3: '',
      //       hits4: 'Spell effect + regain 1 MP',
      //     }]
      // },
      // {
      //   name: 'Siphon Life',
      //   range: '8"/Magic',
      //   dice: '3/2',
      //   attacks: '2',
      //   rend: '0',
      //   chargeBonus: [''],
      //   flankBonus: [''],
      //   damageTracks: [
      //     {
      //       hits1: '2 dmg',
      //       hits2: '3 dmg + heal friendly unit within 6" for damage dealt',
      //       hits3: '5 dmg',
      //       hits4: '7 dmg  + heal friendly unit within 6" for damage dealt',
      //       hits5: '9 dmg'
      //     }]
      // }
    ];

    this.objectives = [
      // {
      //   name: 'The Withering',
      //   description: `Whenever an enemy unit is destroyed while affected by Curse of Ages, gain 1 VP.`,
      //   reward: '1 VP'
      // }
    ];

    this.spells = [
      {
        name: '',
        cost: 'MP',
        costCanBePaidWithSymbol: false,
        range: 'self',
        timesPerTurn: '1',
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
