import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

/// Designers notes
/// This unit is a fast and cheap unit, but it is not very strong.
/// It has some good scenario play since it has multiple ways of scoring VPs.
/// It can also be used to disrupt enemy units and resources with its passive abilties

export class WailingGhouls implements Unit {
  constructor() {
    this.id = "SC3";
    this.name = "Wailing Ghouls";
    this.imageUrl = "../../../assets/sanguine_court/ghouls.jpg";
    this.color = "black";

    this.baseStats = {
      movement: 'Medium',
      defense: '2/3/1',
      resilience: '0',
      hp: '10',
      cost: '2 req.',
      base: '50mm'
    };

    this.fieldAllowance = 3;

    this.activeAbilities = [
      {
        name: 'Flesh Eaters',
        cost: '1 CMD',
        costCanBePaidWithSymbol: false,
        range: 'Self',
        oncePerTurn: true,
        description: `After destroying an enemy unit,
         if this unit is no longer engaged it can use this ability instead of being activated normally the following turn.
         This unit gains -1/-1/-1 defence and scores 1 VP`
      }
    ];

    this.passiveAbilities = [
      {
        name: 'Stench of Death',
        description: `Enemy units in melee with this unit suffers -1/-1 when making attacks.`
      },
      {
        name: 'Horrible Wailing',
        description: `Enemy units receiving orders while within range 3 of this unit must pay an additional CP for the order to take effect.`
      }
    ];

    this.activeLevelingAbilities = [
    ];

    this.passiveLevelingAbilities = [
      {
        name: 'Pestilence',
        experienceCost: '3 xp',
        description: `When this unit is destroyed, all enemy units within range 2 suffer 4 dmg.
        \n If this unit end a turn engaging the enemy encampment, the encampment gains a pestilence token. At the start of every turn,
         an encampment takes 3 dmg per pestilence token currently on it.`
      }];

    this.attacks = [
      {
        name: 'Clubs, Maces, Daggers',
        range: 'Melee',
        dice: '4/2',
        attacks: '3',
        rend: '0',
        chargeBonus: ['+0/+1'],
        flankBonus: ['+1/+1'],
        damageTracks: [
          {
            hits1: '2 dmg',
            hits2: '3 dmg',
            hits3: '4 dmg',
            hits4: '5 dmg'
          },
          {
            hits2: '2" Push'
          }]
      }];

    this.objectives = [
      {
        name: 'Grave Robbers',
        description: `Whenever this unit controls a Grave Marker on the opponents half of the map, score 1 additional VP.`,
        reward: `1 VP`
      }
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
