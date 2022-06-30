import { Faction } from "src/app/components/faction/faction-rules/faction";
import { Subfaction } from "src/app/components/faction/subfaction/subfaction";
import { Unit } from "src/app/components/unit/unit";
import { Archers } from "./NobleElves/Archers";
import { BoltThrower } from "./NobleElves/Bolt Thrower";
import { FireBornMage } from "./NobleElves/FireBornMage";
import { GiantEagle } from "./NobleElves/Giant Eagle";
import { NobleElvesFaction } from "./NobleElves/nobleElvesFaction";
import { HORSELORDS, SHINING_COMPANY } from "./NobleElves/NobleElvesSubfactions";
import { Spearmen } from "./NobleElves/Spearmen";

export const UNITS: Unit[] =
[
  new Spearmen(),
  new Archers(),
  new GiantEagle(),
  new FireBornMage(),
  new BoltThrower(),
]

export const FACTIONS: Faction[] =
[
  new NobleElvesFaction()
]

export const SUBFACTIONS: Subfaction[] =
[
  HORSELORDS, SHINING_COMPANY
]
