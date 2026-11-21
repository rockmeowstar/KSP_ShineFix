<p align="center">
  <img src="assets/shinefix-hero.png" width="100%" alt="ShineFix over a violet nebula">
</p>

<h1 align="center">ShineFix</h1>

<p align="center">
  Reflections for solar panels and windows, transparent cabins, and visible Kerbal crews in Kerbal Space Program.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/release-2.0.0--rc2-8b5cf6?style=flat-square" alt="Release candidate 2.0.0-rc2">
  <img src="https://img.shields.io/badge/KSP-1.12.5-64748b?style=flat-square" alt="KSP 1.12.5">
  <img src="https://img.shields.io/badge/human--tested-229_mods_%2B_Stock-14b8a6?style=flat-square" alt="229 mods and Stock tested by a human">
  <img src="https://img.shields.io/badge/verified-2026--11--21-22c55e?style=flat-square" alt="Verified November 21, 2026">
  <a href="#ai-disclosure"><img src="https://img.shields.io/badge/AI_code-2%25_estimated-8b5cf6?style=flat-square" alt="Estimated AI-generated code 2 percent"></a>
  <a href="#ai-disclosure"><img src="https://img.shields.io/badge/AI_tests-72%25_estimated-a78bfa?style=flat-square" alt="Estimated AI-generated tests 72 percent"></a>
</p>

<p align="center">
  <a href="https://github.com/rockmeowstar/KSP_ShineFix/releases">Download</a> ·
  <a href="https://github.com/rockmeowstar/KSP_ShineFix">GitHub</a> ·
  <a href="https://spacedock.info/mod/3764/ShineFix">SpaceDock</a> ·
  <a href="https://forum.kerbalspaceprogram.com/topic/225969-1125-shinefix-adds-proper-reflections-to-kerbal-space-program-1/">Forum</a> ·
  <a href="https://github.com/rockmeowstar/KSP_ShineFix/issues">Issues</a>
</p>

<p align="center">
  <a href="https://rockmeowstar.github.io/KSP_ShineFix/support/">Support catalog</a> ·
  <a href="https://rockmeowstar.github.io/KSP_ShineFix/gallery.html">Screenshot gallery</a> ·
  <a href="https://rockmeowstar.github.io/KSP_ShineFix/support/evidence.html">Verification evidence</a> ·
  <a href="https://github.com/rockmeowstar/KSP_ShineFix/tree/legacy_shinefix">Legacy ShineFix</a>
</p>

## What’s new

| Feature | How it works |
|---|---|
| **Solar panels, windows, and recolors** | Human testing covers 229 mods and Stock. The release profiles explicitly name **1,694 unique part targets**. The optics galleries show **1,522 unique photographed part IDs** across the integrations with optics changes. Reflection and transparency masks stay registered when you recolor a supported part. The long-term goal is to cover every player-created KSP part mod. |
| **Transparent cabins and labs** | See IVA interiors through reflective cockpit and laboratory windows. Tuned window emission keeps the interior and crew readable when the cabin lights are on. |
| **Crew in the hangar** | See assigned Kerbals in their actual seats while building. Their position and scale give you a reference for judging craft dimensions. Targeted crew updates reduce hitches when Kerbals board a cabin. |
| **Reflective helmet visors** | Helmet reflections also appear in the main menu. |
| **Continuous IVA and EVA handling** | With FreeIVA and Through The Eyes of a Kerbal, the optional first-person EVA controls carry familiar FreeIVA movement into EVA. The control bridge lives in ShineFix alongside the optimized cabin code that draws crew through windows with low overhead. |
| **Live transparency switch** | The SF menu changes window transparency immediately. Use reflective semi-transparent windows or the classic reflective opaque finish at any time. |

## Runtime requirements

The verified target is **KSP 1.12.5 on Windows x64 with Direct3D 11**. Install [HarmonyKSP](https://github.com/KSPModdingLibs/HarmonyKSP), [ModuleManager](https://github.com/sarbian/ModuleManager), and [Deferred](https://github.com/LGhassen/Deferred) with its required shader loader [Shabby](https://github.com/KSPModdingLibs/Shabby).

[FreeIVA](https://github.com/pizzaoverhead/FreeIva) is needed for the optional bridge. [Through The Eyes of a Kerbal](https://github.com/linuxgurugamer/ThroughTheEyesOfAKerbal) is needed for the optional first-person EVA controls. The download links currently point to the published legacy releases. The 2.0.0-rc2 catalog and verification evidence are available above.

## Original work and license

ShineFix 2.0 is a ground-up implementation. The mod uses author-created texture masks and applies them at runtime to materials already installed in the game. It distributes no copied KSP or third-party mod asset files. ShineFix-owned code and mod assets are licensed under [GNU GPL version 3 or later](LICENSE). The KSP screenshots depict game and community-mod assets whose rights remain with their respective owners. The banner was rendered with [Procedural Nebula v5](https://github.com/rockmeowstar/procedural-nebula).

## AI disclosure

The author estimates AI contribution at **2% of the code** and **72% of the tests**.

## Performance disclaimer

> The official single-cabin measurement recorded a **0.046% FPS decrease** with one visible interior, its crew and window glass, relative to the same case with reflections disabled. This figure describes that measured configuration.
