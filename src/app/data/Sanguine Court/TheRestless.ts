import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

export class TheRestless implements Unit {
  constructor() {
    this.id = "SC1";
    this.name = "Restless";
    this.imageUrl = "../../../assets/sanguine_court/lightinf.jpg";
    this.color = "black";

    this.baseStats = {
      movement: 'Short',
      defense: '2/2/1',
      resilience: '1',
      hp: '15',
      cost: '2 req.',
      base: '50mm'
    };

    this.fieldAllowance = 3;

    this.activeAbilities = [
    ];

    this.passiveAbilities = [
      {
        name: 'Restless Bones',
        description: `At the end of every turn, if this unit is within range 3 of a friendly Necromancer, this unit heals 3 HP.
         If not, this unit suffers 3 damage.`
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
  fieldAllowance: number;
  color: string;
}
