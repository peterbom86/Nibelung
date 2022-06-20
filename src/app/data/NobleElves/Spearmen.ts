import { Attack, BaseStats, BattlefieldObjective, LevelingAbility, Unit, UnitAbility } from "src/app/components/unit/unit";

export class Spearmen implements Unit {
  constructor() {
    this.id = "1";
    this.name = "Noble Elves Spearmen";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";

    this.baseStats = {
      movement: '4" / 7"',
      defense: '4/4/4',
      resilience: '1',
      hp: '12',
      cost: '2 CMD',
      base: '50mm'
    };

    this.abilities = [
      {
        name: 'Glimmering Shields',
        cost: '1 CMD',
        costCanBePaidWithSymbol: true,
        range: 'Melee',
        oncePerTurn: true,
        description: 'During target units next combat round, it rolls one fewer dice with each attack, down to a min. of one.'
      }];

    this.levelingAbilities = [{
      name: 'Shield Wall',
      cost: '1 CMD',
      costCanBePaidWithSymbol: false,
      range: 'Self',
      oncePerTurn: true,
      description: 'A unit can use this ability as part of an advance order. The unit will receive a +1/+2/+0 bonus to its defence, but suffer a -2” movement penalty as long as the ability is in effect. The effect can be ended anytime just before receiving an order. The unit can only select defensive combat orders.'
    },
    {
      name: 'Wall of Spears',
      cost: '1 CMD',
      costCanBePaidWithSymbol: false,
      range: 'Self',
      oncePerTurn: true,
      description: 'The unit can use this command as a reaction to being charged by a cavalry unit while not engaged by any other unit. This unit gets to make an attack immediately, as part of the enemy units activation. In the following combat round, the enemy unit loses any charge bonus for attacks targeting this unit.'
    }];

    this.attacks = [
      {
        name: 'Spear',
        range: 'Melee',
        dice: '4/3',
        attacks: '2',
        rend: '1',
        flankBonus: ['+0/+1', '-1 defense vs. melee'],
        damageTracks: [
          {
            hits1: '2 dmg',
            hits2: '3 dmg',
            hits3: '4 dmg',
            hits4: '5 dmg',
            hits5: '6 dmg'
          },
          {
            hits2: '2" Push',
            hits3: 'Symbol',
          }]
      }];

    this.objectives = [
      {
        name: 'Securing the Homeland',
        reward: '1 VP',
        description: ' When scoring VP for controlling an objective, this unit scores 1 extra VP.'
      }];
  }

  id: string;
  name: string;
  imageUrl: string;
  baseStats: BaseStats;
  abilities: UnitAbility[];
  levelingAbilities: LevelingAbility[];
  attacks: Attack[];
  objectives: BattlefieldObjective[];
}