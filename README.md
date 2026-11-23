<p align="center">
  <img src="assets/shinefix-hero.png" width="100%" alt="ShineFix over a violet nebula">
</p>

<h1 align="center"><img src="docs/assets/shinefix-icon.png" width="30" height="30" alt=""> ShineFix</h1>

<p align="center">
  Reflections for solar panels and windows, transparent cabins, and visible Kerbal crews in Kerbal Space Program.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/release-2.0.4-8b5cf6?style=flat-square" alt="Release 2.0.4">
  <img src="https://img.shields.io/badge/KSP-1.12.5-64748b?style=flat-square" alt="KSP 1.12.5">
  <img src="https://img.shields.io/badge/human--tested-235_mods_%2B_Stock-14b8a6?style=flat-square" alt="235 mods and Stock tested by a human">
  <img src="https://img.shields.io/badge/verified-2026--11--23-22c55e?style=flat-square" alt="Verified November 23, 2026">
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

- **Solar panel and window reflections.** Human verification covers **235 mods and Stock**. The goal is to cover every player-created KSP part mod.
- **Kerbal helmet reflections in the main menu.** Helmet visors reflect their surroundings both in the menu and in gameplay.
- **Smoother boarding.** Small fixes reduce the hitch when Kerbals board a cabin. ShineFix updates the affected crew and reuses cabin geometry when it can.
- **Transparent windows for cabins and science modules.** See cockpit and lab interiors through their reflective glass.
- **Visible crew in the hangar.** Assign a Kerbal in the editor and see them at their seat, giving you a reference for the size and proportions of the craft.
- **FreeIVA-style movement in Through The Eyes of a Kerbal.** The optional controls make movement from IVA to first-person EVA feel continuous. The integration lives in ShineFix alongside the interior optimization that makes visible cabin windows practical without boarding hitches.
- **Readable interiors with the lights on.** Window glow is tuned so the cabin and Kerbals remain visible through the glass.
- **Live transparency switching.** Choose semi-transparent reflective windows or the classic ShineFix look with opaque reflective windows. The change applies as soon as you toggle it.
- **Adjustable window opacity and glow.** In the SF menu, set window opacity from 20% to 80% (default 80%) and window glow from 10% to 100% (default 50%). Both sliders apply immediately and remember their values. Glow follows each part's light switch.
- **Built from scratch.** ShineFix 2.0 reuses no protected asset files from KSP or other mods. I created all the texture masks, which ShineFix applies to installed materials at runtime.
- **Reflections and transparency survive recoloring.** A key difference in ShineFix 2.0 is that changing a supported part's paint keeps the effects aligned with its windows and reflective surfaces.
- **A dedicated in-game toolbar icon.** Click **SF** in the KSP toolbar to open ShineFix settings and quickly change window transparency or access the optional first-person EVA controls.

## Screenshots

### Stock Mk1 Inline Cockpit

<table align="center">
  <tr><th scope="col">Before · Without ShineFix</th><th scope="col">After · With ShineFix</th></tr>
  <tr>
    <td width="50%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/assets/mark2-cockpit-hangar-before.webp"><img src="docs/assets/mark2-cockpit-hangar-before.webp" width="460" alt="Stock Mk1 Inline Cockpit without ShineFix"></a></td>
    <td width="50%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/stock/stock/Images/000-Mark2Cockpit.hangar.webp"><img src="docs/evidence/PartGallery/stock/stock/Images/000-Mark2Cockpit.hangar.webp" width="460" alt="Stock Mk1 Inline Cockpit with ShineFix"></a></td>
  </tr>
</table>

### ReStock support

<table align="center">
  <tr><td width="50%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/restock/restock/Images/001-Large.Crewed.Lab.runway.webp"><img src="docs/evidence/PartGallery/restock/restock/Images/001-Large.Crewed.Lab.runway.webp" width="460" alt="Mobile Processing Lab on the runway"></a></td><td width="50%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/restock/restock/Images/001-LgRadialSolarPanel.runway.webp"><img src="docs/evidence/PartGallery/restock/restock/Images/001-LgRadialSolarPanel.runway.webp" width="460" alt="Deployed radial solar panel on the runway"></a></td></tr>
  <tr><td width="50%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/restock/restock/Images/001-InflatableAirlock.hangar.webp"><img src="docs/evidence/PartGallery/restock/restock/Images/001-InflatableAirlock.hangar.webp" width="460" alt="Inflatable airlock in the hangar"></a></td><td width="50%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/restock/restock/Images/001-mk2LanderCabin.v2.hangar.webp"><img src="docs/evidence/PartGallery/restock/restock/Images/001-mk2LanderCabin.v2.hangar.webp" width="460" alt="Mk2 Lander Can in the hangar"></a></td></tr>
</table>

### ReStock PBR support

<table align="center">
  <tr><td width="50%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/ReStockPBR/pbr/Images/003-mk2Cockpit.Standard.hangar.webp"><img src="docs/evidence/PartGallery/ReStockPBR/pbr/Images/003-mk2Cockpit.Standard.hangar.webp" width="460" alt="Mk2 Cockpit in the hangar"></a></td><td width="50%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/ReStockPBR/pbr/Images/003-Mark2Cockpit.runway.webp"><img src="docs/evidence/PartGallery/ReStockPBR/pbr/Images/003-Mark2Cockpit.runway.webp" width="460" alt="Mk1 Inline Cockpit on the runway"></a></td></tr>
</table>

### More supported mods

<table align="center">
  <tr><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/TundraExploration-Review/tundra-exploration/Images/089-TE.18.DRAGONV2.POD.I4.runway.webp"><img src="docs/evidence/PartGallery/TundraExploration-Review/tundra-exploration/Images/089-TE.18.DRAGONV2.POD.I4.runway.webp" width="340" alt="Tundra Exploration Dragon V2 pod on the runway"></a></td><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/BluedogDB-Verified/bluedog-db/Images/037-bluedog.Pioneer6.ServiceModule.runway.webp"><img src="docs/evidence/PartGallery/BluedogDB-Verified/bluedog-db/Images/037-bluedog.Pioneer6.ServiceModule.runway.webp" width="340" alt="Bluedog Design Bureau Pioneer 6 service module on the runway"></a></td><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/AirplanePlusL/airplaneplus/Images/019-fighterinlinecockpit.runway.webp"><img src="docs/evidence/PartGallery/AirplanePlusL/airplaneplus/Images/019-fighterinlinecockpit.runway.webp" width="340" alt="Airplane Plus inline fighter cockpit on the runway"></a></td></tr>
  <tr><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/StockalikeStationPartsExpansionRedux/addons/Images/014-sspx-dome-greenhouse-5-1.runway.webp"><img src="docs/evidence/PartGallery/StockalikeStationPartsExpansionRedux/addons/Images/014-sspx-dome-greenhouse-5-1.runway.webp" width="340" alt="SSPX greenhouse dome on the runway"></a></td><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/KSPIE-Verified/interstellar-optics/Images/096-kspiIXSCommandModule.hangar.webp"><img src="docs/evidence/PartGallery/KSPIE-Verified/interstellar-optics/Images/096-kspiIXSCommandModule.hangar.webp" width="340" alt="KSP Interstellar Extended IXS command module in the hangar"></a></td><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/AirplanePlusL/airplaneplus/Images/019-bellcockpit.runway.webp"><img src="docs/evidence/PartGallery/AirplanePlusL/airplaneplus/Images/019-bellcockpit.runway.webp" width="340" alt="Airplane Plus Bell cockpit on the runway"></a></td></tr>
  <tr><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/TantaresSP-Gallery/tantares-sp/Images/094-4mv.sensor.infrared.light.camera.srf.1.runway.webp"><img src="docs/evidence/PartGallery/TantaresSP-Gallery/tantares-sp/Images/094-4mv.sensor.infrared.light.camera.srf.1.runway.webp" width="340" alt="TantaresSP infrared camera on the runway"></a></td><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/Tantares-Verified/tantares/Images/084-tucana.crew.s2.1.runway.webp"><img src="docs/evidence/PartGallery/Tantares-Verified/tantares/Images/084-tucana.crew.s2.1.runway.webp" width="340" alt="Tantares Tucana crew module on the runway"></a></td><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/BluedogDB-Verified/bluedog-db/Images/037-bluedog.solarBattery.hangar.webp"><img src="docs/evidence/PartGallery/BluedogDB-Verified/bluedog-db/Images/037-bluedog.solarBattery.hangar.webp" width="340" alt="Bluedog Design Bureau solar battery in the hangar"></a></td></tr>
  <tr><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/ImpulseParty-Native/impulse-party/Images/111-impp.scoopS3.runway.webp"><img src="docs/evidence/PartGallery/ImpulseParty-Native/impulse-party/Images/111-impp.scoopS3.runway.webp" width="340" alt="Impulse Party scoop on the runway"></a></td><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/Buffalo2-Verified/buffalo2/Images/042-wbiGuppyCommandPod.runway.webp"><img src="docs/evidence/PartGallery/Buffalo2-Verified/buffalo2/Images/042-wbiGuppyCommandPod.runway.webp" width="340" alt="Buffalo 2 Guppy command pod on the runway"></a></td><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/ColdWarAerospace/cold-war-aerospace/Images/058-UAZ-452.hangar.webp"><img src="docs/evidence/PartGallery/ColdWarAerospace/cold-war-aerospace/Images/058-UAZ-452.hangar.webp" width="340" alt="Cold War Aerospace UAZ-452 in the hangar"></a></td></tr>
  <tr><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/Mk2Expansion/mk2-expansion/Images/087-M2X.DropshipCockpit.runway.webp"><img src="docs/evidence/PartGallery/Mk2Expansion/mk2-expansion/Images/087-M2X.DropshipCockpit.runway.webp" width="340" alt="Mk2 Expansion dropship cockpit on the runway"></a></td><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/KerbalTubes-Native/kerbal-tubes/Images/131-KT.LargeStructuralAdapter.hangar.webp"><img src="docs/evidence/PartGallery/KerbalTubes-Native/kerbal-tubes/Images/131-KT.LargeStructuralAdapter.hangar.webp" width="340" alt="Kerbal Tubes structural adapter in the hangar"></a></td><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/KerbalTubes-Native/kerbal-tubes/Images/131-KT.MedStructuralViewselageHalf.runway.webp"><img src="docs/evidence/PartGallery/KerbalTubes-Native/kerbal-tubes/Images/131-KT.MedStructuralViewselageHalf.runway.webp" width="340" alt="Kerbal Tubes Viewselage on the runway"></a></td></tr>
  <tr><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/USIExploration-Verified/usi-exploration/Images/092-HERP.Pod.hangar.webp"><img src="docs/evidence/PartGallery/USIExploration-Verified/usi-exploration/Images/092-HERP.Pod.hangar.webp" width="340" alt="USI Exploration HERP pod in the hangar"></a></td><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/USIExploration-Verified/usi-exploration/Images/092-AES.Pod.runway.webp"><img src="docs/evidence/PartGallery/USIExploration-Verified/usi-exploration/Images/092-AES.Pod.runway.webp" width="340" alt="USI Exploration AES pod on the runway"></a></td><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/StockalikeStationPartsExpansionRedux/addons/Images/014-sspx-observation-25-1.hangar.webp"><img src="docs/evidence/PartGallery/StockalikeStationPartsExpansionRedux/addons/Images/014-sspx-observation-25-1.hangar.webp" width="340" alt="SSPX observation module in the hangar"></a></td></tr>
  <tr><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/Tantares-Verified/tantares/Images/084-aquila.solar.srf.1.hangar.webp"><img src="docs/evidence/PartGallery/Tantares-Verified/tantares/Images/084-aquila.solar.srf.1.hangar.webp" width="340" alt="Tantares Aquila solar panel in the hangar"></a></td><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/CJUV-Verified/cjuv/Images/097-BusCJ.hangar.webp"><img src="docs/evidence/PartGallery/CJUV-Verified/cjuv/Images/097-BusCJ.hangar.webp" width="340" alt="CJUV bus in the hangar"></a></td><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/NearFutureSpacecraft/spacecraft/Images/017-command-125-orbit-1.hangar.webp"><img src="docs/evidence/PartGallery/NearFutureSpacecraft/spacecraft/Images/017-command-125-orbit-1.hangar.webp" width="340" alt="Near Future Spacecraft command pod in the hangar"></a></td></tr>
  <tr><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/Tantares-Verified/tantares/Images/084-andromeda.control.core.s1.1.hangar.webp"><img src="docs/evidence/PartGallery/Tantares-Verified/tantares/Images/084-andromeda.control.core.s1.1.hangar.webp" width="340" alt="Tantares Andromeda control core in the hangar"></a></td><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/ColdWarAerospace/cold-war-aerospace/Images/058-HMMWV.runway.webp"><img src="docs/evidence/PartGallery/ColdWarAerospace/cold-war-aerospace/Images/058-HMMWV.runway.webp" width="340" alt="Cold War Aerospace HMMWV on the runway"></a></td><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/Buffalo2-Verified/buffalo2/Images/042-wbiObservationModule.hangar.webp"><img src="docs/evidence/PartGallery/Buffalo2-Verified/buffalo2/Images/042-wbiObservationModule.hangar.webp" width="340" alt="Buffalo 2 observation module in the hangar"></a></td></tr>
  <tr><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/Airships/airships/Images/020-WBI.BisonCab.hangar.webp"><img src="docs/evidence/PartGallery/Airships/airships/Images/020-WBI.BisonCab.hangar.webp" width="340" alt="Airships Bison Cab in the hangar"></a></td><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/KSPIE-Verified/interstellar-optics/Images/096-KspiCommandCenterDome.runway.webp"><img src="docs/evidence/PartGallery/KSPIE-Verified/interstellar-optics/Images/096-KspiCommandCenterDome.runway.webp" width="340" alt="KSP Interstellar Extended command center dome on the runway"></a></td><td width="33%"><a href="https://rockmeowstar.github.io/KSP_ShineFix/evidence/PartGallery/BargainRockets/bargain-rockets/Images/030-br.commandpod.hangar.webp?revision=b290c9f"><img src="docs/evidence/PartGallery/BargainRockets/bargain-rockets/Images/030-br.commandpod.hangar.webp" width="340" alt="Bargain Rockets BC-1 Space Box in the hangar"></a></td></tr>
</table>

And many other wonderful, surprising mods in the [full screenshot gallery](https://rockmeowstar.github.io/KSP_ShineFix/gallery.html).

## Runtime requirements

The verified target is **KSP 1.12.5 on Windows x64 with Direct3D 11**. Install [HarmonyKSP](https://github.com/KSPModdingLibs/HarmonyKSP), [ModuleManager](https://github.com/sarbian/ModuleManager), and [Deferred](https://github.com/LGhassen/Deferred) with its required shader loader [Shabby](https://github.com/KSPModdingLibs/Shabby).

[Through The Eyes of a Kerbal](https://github.com/FirstPersonKSP/Through-The-Eyes) is needed for the optional first-person EVA controls.

## Installation

1. Remove your previous version of ShineFix. If `GameData/000_ShineFix` is still present, ShineFix 2.0 disables itself to prevent both versions from patching the same materials.
2. Move the `000_ShineFixDynamic` folder from the archive into your KSP `GameData` folder.
3. Launch the game. If installation succeeded, the **SF** icon will appear in the in-game toolbar.

Install `ShineFixFreeIva` only if [FreeIVA](https://github.com/pizzaoverhead/FreeIva) is installed. Move the `ShineFixFreeIva` folder from the archive into `GameData` to enable the bridge.

## License

ShineFix-owned code and mod assets are licensed under [GNU GPL version 3 or later](LICENSE). The KSP screenshots depict game and community-mod assets whose rights remain with their respective owners. The banner was rendered with [Procedural Nebula v5](https://github.com/rockmeowstar/procedural-nebula).

## AI disclosure

It is estimated that AI contributed **2% of the code** and **72% of the tests**.

## Performance disclaimer

> The official single-cabin measurement recorded a **0.046% FPS decrease** with one visible interior, its crew and window glass, relative to the same case with reflections disabled. This figure describes that measured configuration.
