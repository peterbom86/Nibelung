import { Faction } from "src/app/components/faction/faction-rules/faction";
import { Subfaction } from "src/app/components/faction/subfaction/subfaction";
import { Unit } from "src/app/components/unit/unit";
import { Archers } from "./NobleElves/Archers";
import { NobleElvesFaction } from "./NobleElves/nobleElvesFaction";
import { HORSELORDS, SHINING_COMPANY } from "./NobleElves/NobleElvesSubfactions";
import { Spearmen } from "./NobleElves/Spearmen";

export const UNITS: Unit[] =
[
  new Spearmen(),
  new Archers()
]

export const FACTIONS: Faction[] =
[
  new NobleElvesFaction()
]

export const SUBFACTIONS: Subfaction[] =
[
  HORSELORDS, SHINING_COMPANY
]
