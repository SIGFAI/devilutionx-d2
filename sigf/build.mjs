// DevilutionX-D2-Movement (ITSTDMCC, Sustainable Use License 1.0, inherited from DevilutionX): Diablo 1 through
// DevilutionX 1.5.3 with Diablo 2 1.12's movement (free point-to-point walking, sliding past corners, running in town).
// The license allows free non-commercial redistribution only, so upstream fetch (PLATFORM-SPEC section 4, "Upstream
// fetch"): the Windows zip of the pre-release `v0.2.0` is downloaded by the app from the author's release, never
// rehosted. SIGFAI/devilutionx-d2 hosts only the recipe. No Diablo data is shipped by anyone.
//
// Placement: the zip is wrapped in a top `devilutionx/` folder, so the install file `root: "devilutionx"` places its
// contents as released into {game}, the player's own Diablo folder (GOG: the one holding DIABDAT.MPQ). DevilutionX
// looks for DIABDAT.MPQ in its exe folder first (Source/init.cpp GetMPQSearchPaths: BasePath, PrefPath, ConfigPath,
// then the GOG install path from the registry, GOG id 1412601690, and its hellfire/ sub-folder, then the working
// folder), so nothing is copied: the player's DIABDAT.MPQ (and Hellfire's MPQs) are used in place. game-dir-snapshot:
// a same-named file already in the folder (README.txt, SDL2.dll) is backed up and put back by Restore.
// Upstream issues are disabled: `issues: false` (no "report a bug" link).
//   node library/devilutionx-d2/build.mjs       (outputs: library/lib.mjs)
import { asset, card, dl, emit, pinned } from '../lib.mjs';

const UP = {
  repo: 'https://github.com/ITSTDMCC/DevilutionX-D2-Movement', tag: 'v0.2.0', commit: 'c8a67aead1abe43bd6dab241314d482c02b1a069', // annotated tag -> commit
  authors: ['ITSTDMCC'], base: { name: 'DevilutionX', version: '1.5.3', repo: 'https://github.com/diasurgical/devilutionX' },
  zip: { file: 'DevilutionX-D2-Movement-v0.2.0-windows-x64.zip', sha256: 'c28b1840c8a472a33739666c075cee96d7aa3ff6215771199be5a2067e2fddee' }, // = GitHub digest, 2026-10-05
};
const ID = 'devilutionx-d2', VERSION = '0.2.0', NAME = 'Diablo with Diablo 2 Movement';
const TAGLINE = 'Diablo 1 through DevilutionX with Diablo 2\'s movement: walk straight to where you click, slide past corners and run in town.';

const upUrl = `${UP.repo}/releases/download/${UP.tag}/${UP.zip.file}`;
const mod = asset(UP.zip.file, await pinned(upUrl, UP.zip.sha256), { zipped: true, upstream: upUrl });
const assets = [mod];

const make = (urls, set) => ({
  id: `sigf/${ID}`,
  version: VERSION,
  name: NAME,
  tagline: TAGLINE,
  kind: 'mashup',
  games: [
    { game: 'diablo', role: 'host', label: 'Diablo', engine: 'DevilutionX 1.5.3 fork (C++, SDL2), Windows x64; reads your DIABDAT.MPQ',
      apps: { gog: '1412601690' }, runtime: 'any Diablo with DIABDAT.MPQ (GOG, or the original CD); Hellfire MPQs optional' },
    { game: 'diablo2', role: 'guest', label: 'Diablo II', note: 'movement re-made from Diablo II 1.12\'s behaviour; Diablo II is not needed' },
  ],
  requires: [],
  install: [
    { game: 'diablo', strategy: 'game-dir-snapshot', files: [
      // Upstream file as released. root: only devilutionx/ is placed, into the Diablo folder next to DIABDAT.MPQ.
      { src: mod.name, dst: '{game}', root: 'devilutionx', unpack: true, contents: mod.contents, ...dl(mod, urls) },
    ] },
  ],
  // exe: DevilutionX instead of the store's Diablo (the app does not read it yet; the notes tell the player).
  launch: [{ game: 'diablo', args: [], exe: 'devilutionx.exe' }],
  files: set.map(a => ({ name: a.name, ...dl(a, urls) })),
  source: {
    repo: UP.repo, license: 'Sustainable Use License 1.0', upstream_license: 'Sustainable Use License 1.0 (non-commercial, free distribution only)',
    fetch: 'upstream', tag: UP.tag, commit: UP.commit, hosted: `https://github.com/SIGFAI/${ID}`,
    based_on: UP.base.repo, prerelease: true,
  },
  media: {},
  built_by: { author: UP.authors[0], authors: [...UP.authors, 'DevilutionX contributors'], packaged_by: 'SIGF' },
  idea_by: UP.authors[0],
  built_at: '2026-10-05T00:00:00.000Z',
  ...card(UP.repo),
  issues: false, // issues are disabled on the upstream repo
  notes: [
    'You need your own Diablo with DIABDAT.MPQ (GOG\'s Diablo, or the original CD copied to a folder): pick that folder as the Diablo game folder. Nothing from Diablo is downloaded; DevilutionX reads your DIABDAT.MPQ in place (and Hellfire\'s MPQs, when present). Diablo II is not needed.',
    'DevilutionX is installed into your Diablo folder, downloaded from the author\'s own release; Restore removes it and puts back any file it replaced. Start the game with devilutionx.exe in that folder, not Diablo.exe.',
    'Click to walk straight to that point; R toggles running in town (Left Ctrl for a moment). Settings > Gameplay > "Diablo 2 Movement" off gives you Diablo 1\'s tile walking back. Multiplayer games only see other players running this mod.',
    'Pre-release, a personal learning project: expect rough edges. The upstream repo has no issue tracker; DevilutionX bugs that also happen without the mod belong to DevilutionX.',
    'License: DevilutionX\'s Sustainable Use License 1.0 (free, non-commercial use and sharing only). SIGF never rehosts it: the app downloads the author\'s file.',
  ],
});

// No app fixture: the zip is the author's 9.3 MB file under a non-commercial license.
emit({ slug: ID, version: VERSION, assets, fixtureAssets: null, make });
