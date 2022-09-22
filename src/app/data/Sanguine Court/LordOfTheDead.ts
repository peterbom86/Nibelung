import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

/// Designers notes
/// Necromancer with powerful aura that powers up all nearby risen units, gets stronger for each turn, but also more costly.
/// Aura must be maintained for an cumulative mana cost, 2 MP first turn, then 4, 7, 9. In order to reset it back down,
/// one turn must be spend to remove a 'cumulative' counter, so if it's at 7, 3 turns must pass to get it back to 2 MP.
/// Effects gained is:
/// +1/+0,
/// +2 dmg
/// +1 attack
/// +0/+2


export class LordOfTheDead implements Unit {
  constructor() {
    this.id = "SC9";
    this.name = "Lord of The Dead";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";

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
      {
        name: 'Roam the Skies',
        cost: '1 CP',
        costCanBePaidWithSymbol: false,
        range: 'Self',
        oncePerTurn: true,
        description: `When issuing this order, the unit gains the “Roaming the skies” status effect. This unit can remove the status effect at any time during its activation.
           When this unit performs a charge against a unit not affected by “Roaming the skies”, the status effect ends.
           \n While affected by “Roam the Skies” a unit cannot be targeted by melee attacks or charged by non-flying models.
           Enemy models targeting a model affected by this suffer -1/-1 and -6" range to their ranged attacks. A model affected by this cannot contest objectives or seize resources.`
      }
    ];

    this.passiveAbilities = [
      {
        name: 'Vampire',
        description: `This unit has the 'Vampire' keyword.`
      },
      {
        name: 'Lone figure',
        description: 'This unit cannot be targeted by ranged attacks from more than 5” away'
      },
    ];

    this.activeLevelingAbilities = [
    ];

    this.passiveLevelingAbilities = [];

    this.attacks = [
      {
        name: 'Bloodied Axe',
        range: 'Melee',
        dice: '5/4',
        attacks: '2',
        rend: '1',
        chargeBonus: ['+1/+1'],
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
        name: 'Bloodied Axe',
        description: `Whenever this unit destroys an enemy unit with the 'Lone figure' rule, it's controller gains the reward`,
        reward: '1 VP'
      },
      {
        name: 'Ancient Blood',
        description: `If this model is destroyed, the opposing player gains the reward`,
        reward: '1 VP'
      }
    ];

    this.spells = [
      {
        name: 'Swarm of bats',
        cost: '2 MP',
        costCanBePaidWithSymbol: false,
        range: 'self',
        timesPerTurn: '1',
        description: `The vampire turns himself into a swarm of bats, place this model anywhere outside combat within 12", then its activation immediately ends.
         For the rest of this turn, this model cannot attack and cannot be targeted by attacks`
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
}
