import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

export class FireBornMage implements Unit {
  constructor() {
    this.id = "4";
    this.name = "Noble Elf Fireborn Mage";
    this.imageUrl = "../../../assets/high_elves/heroes.jpg";
    this.color = "blue";

    this.baseStats = {
      movement: 'M',
      defense: '2/3/4',
      resilience: '0',
      hp: '5',
      cost: '4 req.',
      base: '25mm'
    };

    this.fieldAllowance = 2;

    this.passiveAbilities = [
      {
        name: 'Lone figure',
        description: 'This unit cannot be targeted by ranged attacks from more than 5” away'
      }];

    this.activeAbilities = [];

    this.spells = [
      {
        name: 'Light of Elyr',
        cost: '2 MP',
        costCanBePaidWithSymbol: false,
        range: '10”',
        timesPerTurn: '1',
        description: 'A single ray of moonlight lights up the target enemy unit, giving friendly units +1/+0 to their ranged attacks targeting this unit'
      },
      {
        name: 'Arrows of Burning Mithril',
        cost: '2 MP',
        costCanBePaidWithSymbol: false,
        range: '6”',
        timesPerTurn: '1',
        description: 'Target friendly unit gain +0/+1 to their attack while using a ranged weapon'
      },
      {
        name: 'Lys Shield',
        cost: '2 MP',
        costCanBePaidWithSymbol: false,
        range: '6”',
        timesPerTurn: '2',
        description: 'Target unit gains a shield of 5 HP with a resilience of 1. This shield replaces the resilience of target unit for all damage taken as long as the shield has any HP left. If an attack exceeds the shields remaining HP, the shield is removed, but the remaining damage is lost'
      },
      {
        name: 'Flaming Meteor',
        cost: '2 MP',
        costCanBePaidWithSymbol: false,
        range: '10”',
        timesPerTurn: '*',
        description: 'Place a 25mm base anywhere within range. At the end of the next turn, models within 2” of that base is hit and suffers D6+5 damage'
      }
    ]

    this.activeLevelingAbilities = [];

    this.passiveLevelingAbilities = [
      {
        name: 'Power overwhelming',
        experienceCost: '4 xp',
        description: 'Gains the spell Flaming meteor for one cast per turn'
      }
    ];

    this.attacks = [
      {
        name: 'Spells',
        range: '*',
        dice: '4/3',
        attacks: '*',
        rend: '*',
        chargeBonus: ['-'],
        flankBonus: ['-'],
        damageTracks: []
      },
      {
        name: 'Elven Sword',
        range: 'Melee',
        dice: '2/2',
        attacks: '1',
        rend: '0',
        chargeBonus: ['-'],
        flankBonus: ['+0/+0'],
        damageTracks: [
          {
            hits1: '1 dmg',
            hits3: '2 dmg',
            hits4: '3 dmg',
          }]
      }];

    this.objectives = [];
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
