# Diablo with Diablo 2 Movement

Diablo 1 through DevilutionX with Diablo 2's movement: walk straight to where you click, slide past corners and run in town.

**Diablo with Diablo 2 Movement is made by [ITSTDMCC](https://github.com/ITSTDMCC).** All credit for the mod goes to them. It is built on [diasurgical/devilutionX](https://github.com/diasurgical/devilutionX) by DevilutionX contributors.

- Original project: https://github.com/ITSTDMCC/DevilutionX-D2-Movement
- Report bugs and ask questions there: https://github.com/ITSTDMCC/DevilutionX-D2-Movement/issues
- Upstream release packaged here: [v0.2.0](https://github.com/ITSTDMCC/DevilutionX-D2-Movement/releases/tag/v0.2.0) (commit [`c8a67ae`](https://github.com/ITSTDMCC/DevilutionX-D2-Movement/tree/c8a67aead1abe43bd6dab241314d482c02b1a069))

> **Beta.** Nobody at SIGF has played this build yet. Back up your saves.
> Bugs in the mod itself go to the author's issue tracker above; problems with the one-click install go to this repository's issues.

## What you need

- **Diablo**: any Diablo with DIABDAT.MPQ (GOG, or the original CD); Hellfire MPQs optional.
- **Diablo II**.
- Windows and the [SIGF app](https://sigf.ai). The app installs  for you.

## Install

In the SIGF app, open **Diablo with Diablo 2 Movement** in the catalog, press **Install**, then **Play**. **Restore** puts your game folders back exactly as they were.
The app follows `mashup.json` in this repository: every download is pinned by sha256. `DevilutionX-D2-Movement-v0.2.0-windows-x64.zip` comes from the author's own release.

### Good to know

- You need your own Diablo with DIABDAT.MPQ (GOG's Diablo, or the original CD copied to a folder): pick that folder as the Diablo game folder. Nothing from Diablo is downloaded; DevilutionX reads your DIABDAT.MPQ in place (and Hellfire's MPQs, when present). Diablo II is not needed.
- DevilutionX is installed into your Diablo folder, downloaded from the author's own release; Restore removes it and puts back any file it replaced. Start the game with devilutionx.exe in that folder, not Diablo.exe.
- Click to walk straight to that point; R toggles running in town (Left Ctrl for a moment). Settings > Gameplay > "Diablo 2 Movement" off gives you Diablo 1's tile walking back. Multiplayer games only see other players running this mod.
- Pre-release, a personal learning project: expect rough edges. The upstream repo has no issue tracker; DevilutionX bugs that also happen without the mod belong to DevilutionX.
- License: DevilutionX's Sustainable Use License 1.0 (free, non-commercial use and sharing only). SIGF never rehosts it: the app downloads the author's file.

## What this repository holds

DevilutionX-D2-Movement is under the Sustainable Use License 1.0 (inherited from DevilutionX: free, non-commercial distribution only), so SIGF does not rehost it. This repository holds **only SIGF's own files**, never the author's:

1. This README, `sigf/` (the script that built the recipe, for reference) and `mashup.json` (the SIGF app recipe).
2. Not here: `DevilutionX-D2-Movement-v0.2.0-windows-x64.zip` (sha256 `c28b1840c8a472a33739666c075cee96d7aa3ff6215771199be5a2067e2fddee`). The app downloads it on the player's demand from the author's release, as released: https://github.com/ITSTDMCC/DevilutionX-D2-Movement/releases/download/v0.2.0/DevilutionX-D2-Movement-v0.2.0-windows-x64.zip
3. The release `v0.2.0`, which has no assets: the recipe's only download is the author's file above.

The sha256 of every file inside the zips is in `mashup.json` (`contents`).

## Licenses

| Part | License | Where |
|---|---|---|
| DevilutionX-D2-Movement (the author's release zip) | Sustainable Use License 1.0. Not stored here; the app downloads it from the author's release | https://github.com/ITSTDMCC/DevilutionX-D2-Movement |

## Why this repository exists

The SIGF app (https://sigf.ai) installs mods from recipes (`mashup.json`) whose downloads are pinned release files. This repository makes Diablo with Diablo 2 Movement installable in one click, credited to ITSTDMCC. If you are the author and want anything changed or taken down, open an issue here.
