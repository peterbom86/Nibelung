import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

/// Designers notes
/// This unit is a fast and cheap unit, but it is not very strong. It has some good scenario play since it has multiple ways of scoring VPs.

export class WailingGhouls implements Unit {
  constructor() {
    this.id = "SC3";
    this.name = "Wailing Ghouls";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";

    this.baseStats = {
      movement: '4" / 7"',
      defense: '3/4/1',
      resilience: '0',
      hp: '10',
      cost: '1 req.',
      base: '50mm'
    };

    this.activeAbilities = [

    ];

    this.passiveAbilities = [
      {
        name: 'Stench of Death',
        description: `Enemy units in melee with this unit suffers -1/-1 when making attacks.`
      },
      {
        name: 'Horrible Wailing',
        description: `Enemy units receiving orders while within 4" of this unit must pay an additional CP for the order to take effect.`
      }
    ];

    this.activeLevelingAbilities = [
    ];

    this.passiveLevelingAbilities = [];

    this.attacks = [
      {
        name: 'Clubs, Maces, Daggers',
        range: 'Melee',
        dice: '4/2',
        attacks: '3',
        rend: '0',
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
        name: 'Flesh Eaters',
        description: `Whenever this unit destroys an enemy unit, it gains 1 VP.`,
        reward: `1 VP`
      },
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
}
