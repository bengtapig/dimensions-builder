export class AbilityData {
    id: number;
    name: string;
    desc: string;
    url: string;
    combo: boolean;
};

export enum Ability {
    Atlantis = 0,
    Chi,
    SuperStrength,
    Digging,
    Dive,
    Drilling,
    Electricity,
    FixIt,
    FlightDock,
    Gyrosphere,
    Hacking,
    HazardCleaner,
    Laser,
    MiniAccess,
    PoleVault,
    PortalGun,
    RainbowLego,
    SilverDestroy,
    SonarSmash,
    TrapGhosts,
    Spinjitzu,
    Target = 22,
    Technology,
    TowBar = 25,
    Tracking,
    VineCutting,
    WaterSpray,
    WeightSwitch,
    XRay,
    Illumination,
    RelicDetector,
    BigTransformation,
    HazardProtection,
    Boomerang,
    Grapple,
    Stealth,
    Acrobat,
    LaserDeflector,
    Drone,
    MindControl,
    MasterBuild,
    Flying,
    Invulnerability,
    Speed,
    Magic,
    MagicShield,
    Ice,
    Gliding,
    Accelerator,
    CargoHook,
    Growth,
    TimeTravel,
    Tardis,
    Arcade,
    SuspendGhost,

    DivePlusDigging,
    DivePlusBoomerang,
    DivePlusChi,
    DivePlusDrone,
    DivePlusGhostImmunity,
    DivePlusGrapple,
    DivePlusHacking,
    DivePlusHazardCleaner,
    DivePlusLazer,
    DivePlusMini,
    DivePlusSilverDestroy,
    DivePlusSonarSmash,
    DivePlusSuperStrength,
    DivePlusTarget,
    DivePlusTechnology,
    DivePlusTracking,
    DivePlusXRay,
    FlightPlusLaser,

    Dodging,
    SwordSwitching

    /* end of year 1 */
}

export const abilities: AbilityData[] = [
    { id: 0, url: 'atlantis', name: 'Atlantis Pools', desc: 'speak to the fishes', combo: false },
    { id: 1, url: 'chi-power', name: 'Chi Power', desc: 'use \'Chi Up\'', combo: false },
    { id: 2, url: 'super-strength', name: 'Super Strength', desc: 'destroy cracked Lego walls', combo: false }, // aka cracked wall
    { id: 3, url: 'digging', name: 'Digging', desc: 'use dig spots', combo: false },
    { id: 4, url: 'dive', name: 'Dive', desc: 'dive and swim underwater', combo: false },
    { id: 5, url: 'drilling', name: 'Drilling', desc: 'drill at drill spots', combo: false },
    { id: 6, url: 'electricity', name: 'Electricity', desc: 'power eletric coils', combo: false },
    { id: 7, url: 'fix-it', name: 'Fix-it', desc: 'fix blue glowing Lego objects', combo: false },
    { id: 8, url: 'flight-dock', name: 'Flight Dock', desc: 'power jet switches', combo: false },
    { id: 9, url: 'gyrosphere-switch', name: 'Gyropshere Switch', desc: 'use gyrosphere switches', combo: false },
    { id: 10, url: 'hacking', name: 'Hacking', desc: 'hack terminals', combo: false },
    { id: 11, url: 'hazard-cleaner', name: 'Hazard Cleaner', desc: 'clear toxic hazards', combo: false },
    { id: 12, url: 'laser', name: 'Laser', desc: 'destroy gold Lego objects; melt Lego ice', combo: false },
    { id: 13, url: 'mini-access', name: 'Mini Access', desc: 'enter small hatches', combo: false },
    { id: 14, url: 'pole-vault', name: 'Pole Vault', desc: 'create extra twirl poles', combo: false },
    { id: 15, url: 'portal-gun', name: 'Portal Gun', desc: 'fire portals at white Lego panels to reach other areas', combo: false },
    { id: 16, url: 'rainbow-lego', name: 'Rainbow Lego', desc: 'smash rainbow Lego objects', combo: false },
    { id: 17, url: 'silver-destroy', name: 'Silver Destroy', desc: 'destroy silver Lego objects', combo: false },
    { id: 18, url: 'sonar-smash', name: 'Sonar Smash', desc: 'destroy sonar glass', combo: false },
    { id: 19, url: 'trap-ghosts', name: 'Trap Ghosts', desc: 'clear ghostly swarms', combo: false },
    { id: 20, url: 'spinjitzu', name: 'Spinjitzu', desc: 'use Spinjitzu switches', combo: false },
    { id: 22, url: 'target', name: 'Target', desc: 'use target switches', combo: false },
    { id: 23, url: 'technology', name: 'Technology', desc: 'use technology panels', combo: false },
    { id: 25, url: 'tow-bar', name: 'Tow Bar', desc: 'pull down weak Lego walls', combo: false },
    { id: 26, url: 'tracking', name: 'Tracking', desc: 'track trails', combo: false },
    { id: 27, url: 'vine-cutting', name: 'Vine Cutting', desc: 'cut vines', combo: false },
    { id: 28, url: 'water-spray', name: 'Water Spray', desc: 'grow Lego plants', combo: false },
    { id: 29, url: 'weight-switch', name: 'Weight Switch', desc: 'place on cube switches', combo: false },
    { id: 30, url: 'x-ray-vision', name: 'X-Ray Vision', desc: 'see through green Lego walls', combo: false },
    { id: 31, url: 'illumination', name: 'Illumination', desc: 'light up dark areas', combo: false },
    { id: 32, url: 'relic-detector', name: 'Relic Detector', desc: 'unhide objects that are indicated by purple sparkles', combo: false },
    { id: 33, url: 'big-transformation', name: 'Big Transformation', desc: 'become big and more powerful', combo: false },
    { id: 34, url: 'hazard-protection', name: 'Hazard Protection', desc: 'enter toxic areas without damage', combo: false },
    { id: 35, url: 'boomerang', name: 'Batarang', desc: 'throw a boomerang at a switch', combo: false },
    { id: 36, url: 'grapple', name: 'Grapple', desc: 'use an orange grab point to pull or climb', combo: false },
    { id: 37, url: 'stealth', name: 'Stealth', desc: 'hide from security cameras', combo: false },
    { id: 38, url: 'acrobat', name: 'Acrobat', desc: 'jump extra high, climb special walls and grab poles', combo: false },
    { id: 39, url: 'laser-deflector', name: 'Laser Deflector', desc: 'deflect laser when standing on deflection points', combo: false },
    { id: 40, url: 'drone', name: 'Drone', desc: 'spawn a small drone controlled by the user', combo: false },
    { id: 41, url: 'mind-control', name: 'Mind Control', desc: 'take over characters with a question mark above their head', combo: false },
    { id: 42, url: 'master-build', name: 'Master Build', desc: 'rebuild objects like in the Lego Movie', combo: false },
    { id: 43, url: 'flying', name: 'Flying', desc: 'fly', combo: false },
    { id: 44, url: 'invulnerability', name: 'Invulnerability', desc: 'take no damage', combo: false },
    { id: 45, url: 'speed', name: 'Speed', desc: 'move faster', combo: false },
    { id: 46, url: 'magic', name: 'Magic', desc: 'move objects with blue stars', combo: false },
    { id: 47, url: 'magic-shield', name: 'Magic Shield', desc: 'prevent damage using a shield', combo: false },
    { id: 48, url: 'ice', name: 'Ice', desc: 'freeze other characters and extinguish fire', combo: false },
    { id: 49, url: 'gliding', name: 'Gliding', desc: 'fall down slower', combo: false },
    { id: 50, url: 'accelerator-switch', name: 'Accelerator Switch', desc: 'use accelerator switches', combo: false },
    { id: 51, url: 'cargo-hook', name: 'Cargo Hook', desc: 'grab cargo while flying and place it somewhere else', combo: false },
    { id: 52, url: 'growth', name: 'Growth', desc: 'grow plants', combo: false },
    { id: 53, url: 'time-travel-switch', name: 'Time Travel Switch', desc: 'use time travel switches', combo: false },
    { id: 54, url: 'tardis-pad', name: 'Tardis Pad', desc: 'use the Tardis pads', combo: false },
    { id: 55, url: 'arcade-station', name: 'Arcade Station', desc: 'use the arcade station pads', combo: false },
    { id: 56, url: 'suspend-ghost', name: 'Suspend Ghost', desc: 'prepare ghosts for capturing', combo: false },

    { id: 57, url: 'dive+digging', name: 'Dive + Digging', desc: 'use dig spots underwater', combo: true },
    { id: 58, url: 'dive+boomerang', name: 'Dive + Boomerang', desc: '', combo: true },
    { id: 59, url: 'dive+chi', name: 'Dive + Chi', desc: '', combo: true },
    { id: 60, url: 'dive+drone-access', name: 'Dive + Drone Access', desc: '', combo: true },
    { id: 61, url: 'dive+ghost-immunity', name: 'Dive + Ghost Immunity', desc: '', combo: true },
    { id: 62, url: 'dive+grapple', name: 'Dive + Grapple', desc: '', combo: true },
    { id: 63, url: 'dive+hacking', name: 'Dive + Hacking', desc: '', combo: true },
    { id: 64, url: 'dive+hazard-cleaner', name: 'Dive + Hazard Cleaner', desc: '', combo: true },
    { id: 65, url: 'dive+laser', name: 'Dive + Laser', desc: '', combo: true },
    { id: 66, url: 'dive+mini-access', name: 'Dive + Mini Access', desc: '', combo: true },
    { id: 67, url: 'dive+silver-destroy', name: 'Dive + Silver Destroy', desc: '', combo: true },
    { id: 68, url: 'dive+sonar-smash', name: 'Dive + Sonar Smash', desc: '', combo: true },
    { id: 69, url: 'dive+super-strength', name: 'Dive + Super Strength', desc: '', combo: true },
    { id: 70, url: 'dive+target', name: 'Dive + Target', desc: '', combo: true },
    { id: 71, url: 'dive+technology', name: 'Dive + Technology', desc: '', combo: true },
    { id: 72, url: 'dive+tracking', name: 'Dive + Tracking', desc: '', combo: true },
    { id: 73, url: 'dive+x-ray-vision', name: 'Dive + X-Ray Vision', desc: '', combo: true },
    { id: 74, url: 'flight+laser', name: 'Flight + Laser', desc: '', combo: true },

    { id: 75, url: 'dodging', name: 'Dodging', desc: 'dodge (not confirmed ability)', combo: false },
    { id: 76, url: 'sword-switching', name: 'Sword Switching', desc: 'sword switching (not confirmed ability)', combo: false }
/*
    { id: , url: '', name: '', desc: '' },
*/
];
