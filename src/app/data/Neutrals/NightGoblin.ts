import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

export class NightGoblins implements Unit {
  constructor() {
    this.id = "N1";
    this.name = "Night Goblins";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";

    this.baseStats = {
      movement: '5" / 8"',
      defense: '2/1/1',
      resilience: '0',
      hp: '15',
      cost: '-',
      base: '50mm'
    };

    this.fieldAllowance = 0;

    this.activeAbilities = [
      {
        name: 'Net entaglement',
        cost: '-',
        costCanBePaidWithSymbol: true,
        range: 'Melee',
        oncePerTurn: true,
        description: `A unit hit by this ability suffers -1/-1/-0 in this and the next combat round.`
      }
    ];

    this.passiveAbilities = [];

    this.activeLevelingAbilities = [
    ];

    this.passiveLevelingAbilities = [];

    this.attacks = [
      {
        name: 'Spears, swords and nets',
        range: 'Melee',
        dice: '3/2',
        attacks: '2',
        rend: '0',
        chargeBonus: ['+1/+1'],
        flankBonus: ['+1/+1'],
        damageTracks: [
          {
            hits1: '2 dmg',
            hits2: '3 dmg',
            hits3: '4 dmg',
            hits4: '5 dmg',
            hits5: '6 dmg'
          },
          {
            hits3: 'Symbol',
          }]
      }];

    this.objectives = [
      {
        name: 'Cleanse the land',
        description: 'Destroying this unit grants the destroying player this reward',
        reward: `5 XP + 2 req. points`
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
}
