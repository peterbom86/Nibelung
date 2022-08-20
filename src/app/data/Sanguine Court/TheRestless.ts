import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

export class TheRestless implements Unit {
  constructor() {
    this.id = "SC1";
    this.name = "Restless";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";

    this.baseStats = {
      movement: '3" / 6"',
      defense: '3/3/1',
      resilience: '2',
      hp: '15',
      cost: '2 req.',
      base: '50mm'
    };

    this.activeAbilities = [
    ];

    this.passiveAbilities = [
      {
        name: 'Restless Bones',
        description: `At the end of every turn, if this unit is within 6" of a friendly Necromancer, this unit heals 2 HP.
         If not, this unit suffers 2 damage.`
      },
      {
        name: 'Raised',
        description: `This unit has the 'Raised' Keyword.`
      }
    ];

    this.activeLevelingAbilities = [
    ];

    this.passiveLevelingAbilities = [];

    this.attacks = [
      {
        name: 'Spear',
        range: 'Melee',
        dice: '3/2',
        attacks: '2',
        rend: '1',
        chargeBonus: ['+0/+1', '-1 defense vs. melee'],
        flankBonus: ['+1/+0'],
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
