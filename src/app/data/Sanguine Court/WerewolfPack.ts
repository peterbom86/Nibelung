import { ActiveAbility, ActiveLevelingAbility, Attack, BaseStats, BattlefieldObjective, PassiveAbility, PassiveLevelingAbility, Spell, Unit } from "src/app/components/unit/unit";

/// Designers notes
/// Flanking unit that's really good at dealing damage.
/// Is not nearly as well-protected as the Blood Knights, but have an innate strong protection from ranged attacks
/// Has a special ability preventing enemies from healing

export class WerewolfPack implements Unit {
  constructor() {
    this.id = "SC4";
    this.name = "Werewolf Pack";
    this.imageUrl = "../../../assets/high_elves/spears4.jpg";

    this.baseStats = {
      movement: '6" / 9"',
      defense: '2/2/2',
      resilience: '1',
      hp: '15',
      cost: '3 req.',
      base: '50mm'
    };

    this.fieldAllowance = 2;

    this.activeAbilities = [
      {
        name: 'Terrorizing Howl',
        cost: '1 CP',
        costCanBePaidWithSymbol: true,
        range: '4"',
        oncePerTurn: true,
        description: `Every enemy model within 4" of this unit suffers -1/-1 to their attack rolls`
      }
    ];

    this.passiveAbilities = [
      {
        name: 'Stalks in the Shadows',
        description: `The unit cannot be targeted by ranged attacks from more than 5" away.`
      }
    ];

    this.activeLevelingAbilities = [
    ];

    this.passiveLevelingAbilities = [];

    this.attacks = [
      {
        name: 'Claws and Fangs',
        range: 'Melee',
        dice: '4/3',
        attacks: '3',
        rend: '1',
        chargeBonus: ['+1/+1'],
        flankBonus: ['+2/+1'],
        damageTracks: [
          {
            hits1: '3 dmg',
            hits2: '4 dmg',
            hits3: '5 dmg',
            hits4: '7 dmg'
          },
          {
            hits2: 'Units targeted cannot be healed next turn',
            hits4: 'Symbol'
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
}
