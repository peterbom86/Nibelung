import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

export class Necromancer implements Unit {
  constructor() {
    this.id = "SC2";
    this.name = "Necromancer";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";

    this.baseStats = {
      movement: '3" / 6"',
      defense: '0/2/4',
      resilience: '0',
      hp: '5',
      cost: '3 req.',
      base: '25mm'
    };

    this.passiveAbilities = [
      {
        name: 'Lone figure',
        description: 'This unit cannot be targeted by ranged attacks from more than 5” away'
      }];

    this.activeAbilities = [];

    this.spells = [
      {
        name: 'Raise Dead',
        cost: '2 MP',
        costCanBePaidWithSymbol: false,
        range: '6”',
        timesPerTurn: '1',
        description: 'Summon a Restless unit within 6” of this unit. The summoned unit enters the game with a command token (hence it cannot be activated this turn, but can be summoned into combat).'
      },
      {
        name: 'Unholy Vigor',
        cost: '1 MP',
        costCanBePaidWithSymbol: false,
        range: '6”',
        timesPerTurn: '2',
        description: 'Heal target Restless unit for 5 HP. The target unit gain +1 resilience for the rest of the turn.'
      },
      {
        name: 'Hands from below',
        cost: '1 MP',
        costCanBePaidWithSymbol: false,
        range: '12”',
        timesPerTurn: '2',
        description: `Target an enemy unit within 12" of this model and within 6" of a Grave Marker. The targeted unit suffers 2 damage and loses 2" movement in the next turn.
         A flying unit cannot be targeted by this ability.`
      },
      {
        name: 'All-Consuming darkness',
        cost: '2 MP',
        costCanBePaidWithSymbol: false,
        range: '6”',
        timesPerTurn: '*',
        description: `Enemy models suffer -1/-0 attack dice when making ranged attacks targeting an unit within 6" of this model.`
      }
    ]

    this.activeLevelingAbilities = [];

    this.passiveLevelingAbilities = [
      {
        name: 'Dark Ritual',
        experienceCost: '4 xp',
        description: 'Gains the spell All-Consuming darkness for one cast per turn'
      }
    ];

    this.attacks = [
      {
        name: 'Spells',
        range: '*',
        dice: '3/2',
        attacks: '*',
        rend: '*',
        chargeBonus: ['-'],
        flankBonus: ['-'],
        damageTracks: []
      },
      {
        name: 'Withered Staff',
        range: 'Melee',
        dice: '1/1',
        attacks: '1',
        rend: '0',
        chargeBonus: ['-'],
        flankBonus: ['-'],
        damageTracks: [
          {
            hits1: '1 dmg',
            hits3: '2 dmg',
            hits4: '3 dmg',
          }]
      }];

    this.objectives = [
      {
        name: 'Prized Servant of The Undying King',
        description: `If this model is destroyed, the opponent player gains 1 VP`,
        reward: '1 VP to opponent player.'
      }
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
}
