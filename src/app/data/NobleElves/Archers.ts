import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

export class Archers implements Unit {
  constructor() {
    this.id = "2";
    this.name = "Noble Elf House Guard Archers";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";

    this.baseStats = {
      movement: '4" / 7"',
      defense: '1/2/3',
      resilience: '0',
      hp: '10',
      cost: '3 req.',
      base: '40mm'
    };

    this.activeAbilities = [
      {
        name: 'Coordinated fire',
        cost: '1 CMD',
        costCanBePaidWithSymbol: false,
        range: 'Self',
        oncePerTurn: true,
        description: 'The unit must target the same model with both attacks. Make an attack as normal for each attack, but the total amount of hits from both the first and second attack is summed up before reducing number of hits from targets defence and then choosing a result on the damage table. If the attacks results on more than 6 hits, any leftover hits can be used to choose an extra result from the combat track.'
      }];

    this.passiveAbilities = [];

    this.activeLevelingAbilities = [
      {
        name: 'Unleash!',
        cost: '1 CMD',
        costCanBePaidWithSymbol: false,
        range: 'Self',
        oncePerTurn: true,
        experienceCost: '2 xp',
        description: 'The unit can use this command as a reaction to a friendly unit within 6” being charged while this unit is not engaged. This unit may then make a stand and shoot reaction against the enemy unit, as if this was being charged.'
      }];

    this.passiveLevelingAbilities = [
      {
        name: 'Aura of Magic Resistance',
        experienceCost: '2 xp',
        description: 'If countering an enemy spell targeting a model within 6” of a model in this unit, lower the countering cost by 1.'
      }
    ]

    this.attacks = [
      {
        name: 'Elven Bow',
        range: '12"',
        dice: '4/2',
        attacks: '2',
        rend: '0',
        chargeBonus: ['-'],
        flankBonus: ['-'],
        damageTracks: [
          {
            hits1: '2 dmg',
            hits2: '3 dmg',
            hits3: '4 dmg',
            hits4: '5 dmg',
            hits6: '6 dmg'
          },
          {
            hits2: '2" Slow'
          }]
      },
      {
        name: 'Elven Sword',
        range: 'Melee',
        dice: '2/2',
        attacks: '2',
        rend: '0',
        chargeBonus: ['-'],
        flankBonus: ['+1/+1'],
        damageTracks: [
          {
            hits1: '2 dmg',
            hits2: '3 dmg',
            hits3: '4 dmg',
            hits4: '5 dmg',
          }]
      }];

    this.objectives = [];
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
