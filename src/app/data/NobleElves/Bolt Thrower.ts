import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

// TODO: not entered yet
export class BoltThrower implements Unit {
  constructor() {
    this.id = "5";
    this.name = "Noble Elf House Guard Archers";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";

    this.baseStats = {
      movement: '2"',
      defense: '0/1/1',
      resilience: '1',
      hp: '5',
      cost: '2 req.',
      base: '40mm'
    };

    this.activeAbilities = [];

    this.passiveAbilities = [
      {
        name: 'Keen sight',
        description: 'This unit can shoot at models using “Roaming the skies” without the normal penalty. When doing so, this unit gains +6” range on its Heavy Bolt attack'
      },
      {
        name: 'Wing shot',
        description: 'Models damaged by this models Heavy Bolt attack will suffer -2” movement during the next round and cannot benefit from the “Roaming the skies” special rules'
      },
      {
        name: 'Monster Slayer',
        description: 'Gain +4 damage vs. monsters, Gain -2 damage vs infantry'
      }
    ];

    this.activeLevelingAbilities = [];

    this.passiveLevelingAbilities = [
      {
        name: 'Magically enhanced bolts',
        experienceCost: '3 xp',
        description: 'This unit gains Rend 4'
      }
    ];

    this.attacks = [
      {
        name: 'Heavy Bolt',
        range: '18"',
        dice: '3/3',
        attacks: '2',
        rend: '2',
        chargeBonus: ['-'],
        flankBonus: ['-'],
        damageTracks: [
          {
            hits1: '3 dmg',
            hits2: '4 dmg',
            hits3: '5 dmg',
            hits4: '6 dmg',
            hits6: '8 dmg'
          }
        ]
      }
    ];

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
