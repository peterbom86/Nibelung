import { Unit, BaseStats, ActiveAbility, PassiveAbility, ActiveLevelingAbility, PassiveLevelingAbility, Attack, BattlefieldObjective, Spell } from "src/app/components/unit/unit";

export class HalthirTheDragonLord implements Unit {
  constructor() {
    this.id = "9";
    this.name = "Halthir, The Dragon Lord";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";

    this.baseStats = {
      movement: '6" / 10"',
      defense: '3/1/4',
      resilience: '3',
      hp: '30',
      cost: '6 req.',
      base: '50mm'
    };

    this.fieldAllowance = 1;

    this.activeAbilities = [
      {
        name: 'Roam the Skies',
        cost: '1 CP',
        costCanBePaidWithSymbol: false,
        range: 'Self',
        oncePerTurn: true,
        description: `When issuing this order, the unit gains the “Roaming the skies” status effect. This unit can remove the status effect at any time during its activation.
        When this unit performs a charge against a unit not affected by “Roaming the skies”, the status effect ends.
        \n While affected by “Roam the Skies” a unit cannot be targeted by melee attacks or charged by non-flying models.
        Enemy models targeting a model affected by this suffer -1/-1 and -6" range to their ranged attacks. A model affected by this cannot contest objectives or seize resources.`
      },
      {
        name: 'Terrifying Roar',
        cost: '1 CP',
        costCanBePaidWithSymbol: false,
        range: 'Self',
        oncePerTurn: true,
        description: `The dragon unleashes a fearsome roars, inspiring the elves while terrifying its foes.
        All friendly units within 8” gain +1 dmg to their melee attacks. All enemy units within 4” suffer -1 dmg from their melee attacks.`
      }
    ];

    this.passiveAbilities = [
      {
        name: 'Legendary Unit',
        description: `This unit is a legendary unit.
         It can only be summoned after on or after round 4 and only if the player summoning it is behind in victory points.
         \n If this unit is ever slain in combat, the controlling player immediately loses the game.`
      },
    ];

    this.activeLevelingAbilities = [
    ];

    this.passiveLevelingAbilities = [
    ];

    this.attacks = [
      {
        name: 'Sword, Claws and Bite',
        range: 'Melee',
        dice: '6/4',
        attacks: '4',
        rend: '3',
        chargeBonus: ['+1/+1', '+1 Rend'],
        flankBonus: ['+2 dmg'],
        damageTracks: [
          {
            hits1: '4 dmg',
            hits2: '5 dmg',
            hits3: '6 dmg',
            hits4: '8 dmg',
            hits6: '10 dmg',
            hits8: '12 dmg'
          }]
      },
      {
        name: 'Flaming Breath',
        range: 'Melee/6"',
        dice: '3/3',
        attacks: '6',
        rend: '1',
        chargeBonus: [],
        flankBonus: ['+1/+1'],
        damageTracks: [
          {
            hits1: '2 dmg',
            hits2: '3 dmg',
            hits3: '4 dmg',
            hits4: '6 dmg',
            hits6: '7 dmg',
            hits8: '9 dmg'
          }]
      }
    ];

    this.objectives = [
    ];

    this.spells = [
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
  fieldAllowance: number;
}
