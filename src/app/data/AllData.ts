import { Faction } from "src/app/components/faction/faction-rules/faction";
import { Subfaction } from "src/app/components/faction/subfaction/subfaction";
import { Unit } from "src/app/components/unit/unit";
import { NightGoblins } from "./Neutrals/NightGoblin";
import { Archers } from "./NobleElves/Archers";
import { BoltThrower } from "./NobleElves/Bolt Thrower";
import { Encampment } from "./NobleElves/Encampment";
import { FireBornMage } from "./NobleElves/FireBornMage";
import { GiantEagle } from "./NobleElves/Giant Eagle";
import { HalthirTheDragonLord } from "./NobleElves/HalthirTheDragonLord";
import { HighBornLord } from "./NobleElves/Highborn Lord";
import { IthilChariot } from "./NobleElves/IthilChariot";
import { NobleElvesFaction } from "./NobleElves/nobleElvesFaction";
import { HORSELORDS, SHINING_COMPANY } from "./NobleElves/NobleElvesSubfactions";
import { Spearmen } from "./NobleElves/Spearmen";
import { BloodKnights } from "./Sanguine Court/BloodKnights";
import { DeathMage } from "./Sanguine Court/DeathMage";
import { Necromancer } from "./Sanguine Court/Necromancer";
import { NighthauntVampire } from "./Sanguine Court/NighthauntVampire";
import { SanguineCourtFaction } from "./Sanguine Court/SanguineCourtFaction";
import { BLOODBORN, LIVING_DEAD, Nightstalkers } from "./Sanguine Court/SanguineCourtSubfactions";
import { Sepulcher } from "./Sanguine Court/Sepulcher";
import { TheRestless } from "./Sanguine Court/TheRestless";
import { WailingGhouls } from "./Sanguine Court/WailingGhouls";
import { WerewolfPack } from "./Sanguine Court/WerewolfPack";

export const UNITS: Unit[] =
[
  new Spearmen(),
  new Archers(),
  new GiantEagle(),
  new FireBornMage(),
  new BoltThrower(),
  new HighBornLord(),
  new TheRestless(),
  new Necromancer(),
  new WailingGhouls(),
  new WerewolfPack(),
  new BloodKnights(),
  new NighthauntVampire(),
  new Sepulcher(),
  new Encampment(),
  new NightGoblins(),
  new DeathMage(),
  new IthilChariot(),
  new HalthirTheDragonLord()
  // new LordOfTheDead()
]

export const FACTIONS: Faction[] =
[
  new NobleElvesFaction(),
  new SanguineCourtFaction()
]

export const SUBFACTIONS: Subfaction[] =
[
  HORSELORDS, SHINING_COMPANY, BLOODBORN, LIVING_DEAD, Nightstalkers
]
