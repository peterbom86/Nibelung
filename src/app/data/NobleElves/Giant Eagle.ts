import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

export class GiantEagle implements Unit {
  constructor() {
    this.id = "3";
    this.name = "Noble Elf Giant Eagle";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";

    this.baseStats = {
      movement: '7" / 10"',
      defense: '3/2/3',
      resilience: '1',
      hp: '10',
      cost: '2 req.',
      base: '40mm'
    };

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
      }
    ];

    this.passiveAbilities = [
      {
        name: 'Hit and run',
        description: 'This unit may retreat without suffering any negative effects to defence and damage. If this unit charged this turn, when activating next turn it may choose to issue an advance order and move even if it is still engaged in combat.'
      },
      {
        name: 'Creature',
        description: 'This model cannot claim objectives, it can still contest.'
      },
      {
        name: 'Magical transference',
        description: `Friendly mages can use this unit as the point of origin for spells by spending one additional mana point to cast the spell.
         This unit counts as a mage for dispelling purposes.`
      }
    ];

    this.activeLevelingAbilities = [];
    this.passiveLevelingAbilities = [];

    this.attacks = [
      {
        name: 'Claws and beak',
        range: 'Melee',
        dice: '3/3',
        attacks: '2',
        rend: '0',
        chargeBonus: ['-'],
        flankBonus: ['+1/+1'],
        damageTracks: [
          {
            hits1: '2 dmg',
            hits2: '3 dmg',
            hits3: '4 dmg',
            hits6: '6 dmg'
          },
          {
            hits2: '2" Slow'
          }]
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
