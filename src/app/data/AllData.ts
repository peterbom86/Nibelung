import { Faction } from "src/app/components/faction/faction-rules/faction";
import { Subfaction } from "src/app/components/faction/subfaction/subfaction";
import { Unit } from "src/app/components/unit/unit";
import { Archers } from "./NobleElves/Archers";
import { BoltThrower } from "./NobleElves/Bolt Thrower";
import { FireBornMage } from "./NobleElves/FireBornMage";
import { GiantEagle } from "./NobleElves/Giant Eagle";
import { HighBornLord } from "./NobleElves/Highborn Lord";
import { NobleElvesFaction } from "./NobleElves/nobleElvesFaction";
import { HORSELORDS, SHINING_COMPANY } from "./NobleElves/NobleElvesSubfactions";
import { Spearmen } from "./NobleElves/Spearmen";
import { Necromancer } from "./Sanguine Court/Necromancer";
import { SanguineCourtFaction } from "./Sanguine Court/SanguineCourtFaction";
import { BLOODBORN, LIVING_DEAD, Nightstalkers } from "./Sanguine Court/SanguineCourtSubfactions";
import { TheRestless } from "./Sanguine Court/TheRestless";
import { WailingGhouls } from "./Sanguine Court/WailingGhouls";

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
