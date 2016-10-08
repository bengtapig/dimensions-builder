import { MinifigData, PieceState } from './data-types';
import { Ability } from './static-abilities';

export const minifigs: MinifigData[] = [
    <MinifigData>{ id: 7120401, name: 'The Doctor', skillIds: [7, 10, 18, 23, Ability.Intelligence, Ability.Level_DoctorWho, Ability.Adventure_DoctorWho], 
        packId: 71204, image: '712041to1MFMUGSHOTDr Who168', url: 'doctor-who' },
    <MinifigData>{ id: 7120201, name: 'Homer Simpson', skillIds: [Ability.SuperStrength, Ability.SuperStrengthHandles, 18, 33, Ability.Level_Simpsons, Ability.Adventure_Simpsons], 
        packId: 71202, image: '71005_Portrait_Homer', url: 'homer-simpson' },
    <MinifigData>{ id: 7120301, name: 'Chell', skillIds: [15, 38, Ability.Level_Portal2, Ability.Adventure_Portal2], 
        packId: 71203, image: '71203_1to1_MF_MUGSHOT_Chell_168', url: 'chell' },
    <MinifigData>{ id: 7120101, name: 'Marty McFly', skillIds: [18, Ability.Level_BackToTheFuture, Ability.Adventure_BackToTheFuture], 
        packId: 71201, image: '71201_1to1_MF_MUGSHOT_Marty_168', url: 'marty-mcfly' },
    <MinifigData>{ id: 7123501, name: 'Gamer Kid', skillIds: [Ability.SuperStrength, Ability.SuperStrengthHandles, 12, 37, 44, 45, Ability.MidwayArcadeLevel, Ability.Adventure_Midway, Ability.Invisibility], 
        packId: 71235, image: '71235_1to1_MF_MUGSHOT_Retro_Gamer_168', url: 'gamer-kid' },
    <MinifigData>{ id: 7122801, name: 'Peter Venkman', skillIds: [12, 34, 56, Ability.GhostbustersLevel, Ability.Adventure_Ghostbusters], 
        packId: 71228, image: '71228_1to1_MF_MUGSHOT_Peter_168', url: 'peter-venkman' },
    <MinifigData>{ id: 7124801, name: 'Ethan Hunt', skillIds: [Ability.Target, Ability.SilverDestroy, Ability.Stealth, Ability.XRay, Ability.Grapple, Ability.Technology, Ability.Drone, Ability.Disguise, Ability.FlyingDrone, Ability.MagnoGloves, Ability.Acrobat, Ability.Dive, Ability.MissionImpossibleLevel, Ability.MissionImpossibleWorld, Ability.DivePlusGrapple, Ability.DivePlusSilverDestroy, Ability.DivePlusTarget, Ability.DivePlusTechnology, Ability.DivePlusXRay, Ability.FuseBox], 
        packId: 71248, image: 'wave-6-ethan-hunt', state: PieceState.New, url: 'ethan-hunt' },
    <MinifigData>{ id: 7124501, name: 'Finn', skillIds: [Ability.SwordSwitch, Ability.Acrobat, Ability.VineCutting, Ability.RedDemonObjects, Ability.Grapple, Ability.LaserDeflector, Ability.Laser, Ability.Target, Ability.Electricity, Ability.RopeSwings, Ability.PoleVault, Ability.Level_AdventureTime, Ability.Adventure_AdventureTime], 
        packId: 71245, image: 'wave-6-finn', state: PieceState.New, url: 'finn' }, /* vine cutting = gras sword */
    /*{ id: 7124401, name: 'Sonic the Hedgehog', skillIds: [], packId: 71244, image: 'wave-6-sonic-the-hedgehog' },*/
    <MinifigData>{ id: 7120501, name: 'Owen', skillIds: [22, 26, 27, 37, Ability.Adventure_JurassicWorld], 
        packId: 71205, image: '75917_1to1_MF_OWEN_MUGSHOT_168', url: 'owen' },
    <MinifigData>{ id: 7120502, name: 'ACU Trooper', skillIds: [6, 31, Ability.Adventure_JurassicWorld], 
        packId: 71205, image: '75916_1to1_MF_ACU_MUGSHOT_168', url: 'acu-trooper' },
    <MinifigData>{ id: 7120601, name: 'Scooby Doo', skillIds: [3, 4, 26, 37, 49, Ability.DivePlusDigging, Ability.DivePlusTracking, Ability.Adventure_ScoobyDoo], 
        packId: 71206, image: '75900_Scooby_ft_Mugshot_168x224', url: 'scooby-doo' },// stealth?
    <MinifigData>{ id: 7120602, name: 'Shaggy', skillIds: [26, Ability.Illumination, 37, 49, Ability.Adventure_ScoobyDoo], 
        packId: 71206, image: '75901_Shaggy_Mugshot_168x224', url: 'shaggy' },//stealth??
    <MinifigData>{ id: 7120701, name: 'Kai', skillIds: [20, 37, 38, 39, Ability.Adventure_Ninjago], 
        packId: 71207, image: '71207_1to1_MF_MUGSHOT_Kai_168', url: 'kai' }, // fire?
    <MinifigData>{ id: 7120702, name: 'Cole', skillIds: [Ability.SuperStrength, Ability.SuperStrengthHandles, 20, 38, 39, 37, Ability.Adventure_Ninjago], 
        packId: 71207, image: '71207_1to1_MF_MUGSHOT_Cole_168', url: 'cole' },
    <MinifigData>{ id: 7122901, name: 'Joker', skillIds: [6, 22, 34, 36, Ability.Adventure_DC], 
        packId: 71229, image: '71229_1to1_MF_MUGSHOT_Joker_168', url: 'joker' },
    <MinifigData>{ id: 7122902, name: 'Harley Quinn', skillIds: [Ability.SuperStrength, Ability.SuperStrengthHandles, 38, Ability.Adventure_DC], 
        packId: 71229, image: '71229_1to1_MF_MUGSHOT_Harley_Quinn_168', url: 'harley-quinn' },
    <MinifigData>{ id: 7124601, name: 'Jake', skillIds: [Ability.Grapple, Ability.Illumination, Ability.Digging, Ability.SlurpAccess, Ability.BigTransformation, Ability.Drilling, Ability.Dive, Ability.Gyrosphere, Ability.MiniAccess, Ability.SuperStrength, Ability.SuperStrengthHandles, Ability.RopeSwings, Ability.SonarSmash, Ability.Tracking, Ability.Drone, Ability.Adventure_AdventureTime], 
        packId: 71246, image: 'wave-6-jake', state: PieceState.New, url: 'jake' },
    <MinifigData>{ id: 7124602, name: 'Lumpy Space Princess', skillIds: [Ability.Boomerang, Ability.MiniAccess, Ability.SlurpAccess, Ability.RainbowLego, Ability.HazardProtection, Ability.Adventure_AdventureTime], 
        packId: 71246, image: 'wave-6-lumpy-space-princess', state: PieceState.New, url: 'lumpy-space-princess' },
    <MinifigData>{ id: 7124701, name: 'Harry Potter', skillIds: [/*Ability.Laser, Ability.LaserDeflector, */Ability.Flying, Ability.Magic, Ability.Illumination, Ability.MagicShield, Ability.Diffindo, Ability.Parseltongue, Ability.Stealth, Ability.WaterSpray, Ability.WaterSprayOrIce, Ability.Growth, Ability.HazardCleaner, Ability.SilverDestroy, Ability.TargetPlusSilver, Ability.Adventure_HarryPotter], 
        packId: 71247, image: 'wave-6-harry-potter', state: PieceState.New, url: 'harry-potter' },
    <MinifigData>{ id: 7124702, name: 'Lord Voldemort', skillIds: [/*Ability.Laser, Ability.LaserDeflector, */Ability.Flying, Ability.Magic, Ability.MagicShield, Ability.Illumination, Ability.Diffindo, Ability.Parseltongue, Ability.MindControl, Ability.SilverDestroy, Ability.TargetPlusSilver, Ability.WaterSpray, Ability.WaterSprayOrIce, Ability.Growth, Ability.HazardCleaner, Ability.Adventure_HarryPotter], 
        packId: 71247, image: 'wave-6-lord-voldemort', state: PieceState.New, url: 'lord-voldemort' },
    <MinifigData>{ id: 7120901, name: 'Wonder Woman', skillIds: [Ability.SuperStrength, Ability.SuperStrengthHandles, 4, 38, 39, 35, 36, 41, 43, 44, Ability.DivePlusBoomerang, Ability.DivePlusGrapple, Ability.DivePlusSuperStrength, Ability.Adventure_DC], 
        packId: 71209, image: '71209_1to1_MF_MUGSHOT_Wonder_Woman_168', url: 'wonder-woman' },
    <MinifigData>{ id: 7121001, name: 'Cyborg', skillIds: [Ability.SuperStrength, Ability.SuperStrengthHandles, 4, 12, 22, 23, 33, Ability.DivePlusLaser, Ability.DivePlusTarget, Ability.Adventure_DC], 
        packId: 71210, image: '76028_Cyorg_1488x1984_mugshot_360w_2x', url: 'cyborg' },
    <MinifigData>{ id: 7121101, name: 'Bart Simpson', skillIds: [13, 22, Ability.Adventure_Simpsons], 
        packId: 71211, image: '71211_1to1_MF_MUGSHOT_Bart_168', url: 'bart-simpson' },
    <MinifigData>{ id: 7121201, name: 'Emmet', skillIds: [5, 7, 42, Ability.Adventure_LegoMovie], 
        packId: 71212, image: '70810_MF_Mugshot_Emmet_168', url: 'emmet' },
    <MinifigData>{ id: 7121301, name: 'Bad Cop', skillIds: [12, 22, 32, Ability.Adventure_LegoMovie], 
        packId: 71213, image: '70819_MF_Mugshot_BadCop_168', url: 'bad-cop' },
    <MinifigData>{ id: 7121401, name: 'Benny', skillIds: [10, 18, 22, 23, 42, 49, Ability.Adventure_LegoMovie], 
        packId: 71214, image: '70810_MF_Mugshot_Benny_168', url: 'benny' },
    <MinifigData>{ id: 7121501, name: 'Jay', skillIds: [6, 7, 20, 37, 38, Ability.Intelligence, Ability.Adventure_Ninjago], 
        packId: 71215, image: '71215_1to1_MF_MUGSHOT_Jay_168', url: 'jay' },
    <MinifigData>{ id: 7121601, name: 'Nya', skillIds: [7, 20, 37, 38, 39, Ability.Adventure_Ninjago], 
        packId: 71216, image: '71216_1to1_MF_MUGSHOT_Nya_168', url: 'nya' },//7 fix-it?
    <MinifigData>{ id: 7121701, name: 'Zane', skillIds: [4, 20, 30, 35, 37, 38, Ability.DivePlusXRay, Ability.Adventure_Ninjago], 
        packId: 71217, image: '71217_1to1_MF_MUGSHOT_Zane_168', url: 'zane' },
    <MinifigData>{ id: 7121801, name: 'Gollum', skillIds: [4, 13, 35, 38, Ability.DivePlusBoomerang, Ability.DivePlusMini, Ability.SilverDestroy, Ability.DivePlusSilverDestroy, Ability.Adventure_LordOfTheRing], 
        packId: 71218, image: '9470_1to1_MF_MUGSHOT_Gollum_168', url: 'gollum' },
    <MinifigData>{ id: 7121901, name: 'Legolas', skillIds: [14, 22, 38, , Ability.Adventure_LordOfTheRing], 
        packId: 71219, image: '9473_1to1_MF_MUGSHOT_Legolas_168', url: 'legolas' },//14?
    <MinifigData>{ id: 7122001, name: 'Gimli', skillIds: [Ability.SuperStrength, Ability.SuperStrengthHandles, 13, , Ability.Adventure_LordOfTheRing], 
        packId: 71220, image: '79008_Gimli_168', url: 'gimli' },
    <MinifigData>{ id: 7122101, name: 'The Wicked Witch', skillIds: [Ability.SilverDestroy, Ability.TargetPlusSilver, 31, 41, 43, 46, 47, Ability.Adventure_Oz], 
        packId: 71221, image: '71221_1to1_MF_MUGSHOT_WickedWitch_168', url: 'wicked-witch' },
    <MinifigData>{ id: 7122201, name: 'Laval', skillIds: [1, Ability.SuperStrength, 38, 39, Ability.SonarSmash, Ability.Adventure_Chima], 
        packId: 71222, image: '70144_1to1_MF_Laval_01_336_744w', url: 'laval' },
    <MinifigData>{ id: 7122301, name: 'Cragger', skillIds: [1, Ability.SuperStrength, 4, 34, Ability.DivePlusChi, Ability.DivePlusSuperStrength, Ability.Adventure_Chima], 
        packId: 71223, image: '70150_1to1_MF_Cragger_336_744w', url: 'cragger' },
    <MinifigData>{ id: 7122701, name: 'Krusty', skillIds: [11, Ability.WaterSpray, 52, Ability.WaterSprayOrIce, Ability.Adventure_Simpsons], 
        packId: 71227, image: '71005_Portrait_Krusty', url: 'krusty' },
    <MinifigData>{ id: 7123001, name: 'Doc Brown', skillIds: [7, 10, 23, 40, Ability.Intelligence, Ability.Adventure_BackToTheFuture], 
        packId: 71230, image: '71230_1to1_MF_MUGSHOT_Doc_Brown_168', url: 'doc-brown' },
    <MinifigData>{ id: 7123101, name: 'Unikitty', skillIds: [16, 33, 42, Ability.Adventure_LegoMovie], 
        packId: 71231, image: '70803_MF_Mugshot_Unikitty_168', url: 'unikitty' },
    <MinifigData>{ id: 7123201, name: 'Eris', skillIds: [1, Ability.SuperStrength, Ability.SuperStrengthHandles, 22, 43, Ability.Adventure_Chima], 
        packId: 71232, image: '70142_1to1_MF_Eris_01_168', url: 'eris' },
    <MinifigData>{ id: 7123301, name: 'Stay Puft', skillIds: [Ability.SuperStrength, Ability.SuperStrengthHandles, 33, 34, Ability.Adventure_Ghostbusters], 
        packId: 71233, image: '71233_1to1_MF_MUGSHOT_Stay_Puft_168', url: 'stay-puft' },
    <MinifigData>{ id: 7123401, name: 'Sensei Wu', skillIds: [14, 20, 37, 38, 49, Ability.Adventure_Ninjago], 
        packId: 71234, image: '71234_1to1_MF_MUGSHOT_Sensei_Wu_168', url: 'sensei-wu' },
    <MinifigData>{ id: 7123601, name: 'Superman', skillIds: [Ability.SuperStrength, Ability.SuperStrengthHandles, 4, 12, 30, 43, 44, Ability.Ice, Ability.DivePlusLaser, Ability.DivePlusSuperStrength, Ability.DivePlusXRay, Ability.FlightPlusLaser, Ability.WaterSprayOrIce, Ability.Adventure_DC], 
        packId: 71236, image: '71236_1to1_MF_MUGSHOT_Superman_168', url: 'superman' },
    <MinifigData>{ id: 7123701, name: 'Aquaman', skillIds: [0, 4, 11, Ability.WaterSpray, 52, Ability.DivePlusHazardCleaner, Ability.WaterSprayOrIce], 
        packId: 71237, image: '71237_1to1_MF_MUGSHOT_Aquaman_168', url: 'aquaman' },
    <MinifigData>{ id: 7123801, name: 'Cyberman', skillIds: [4, 10, Ability.SilverDestroy, Ability.TargetPlusSilver, 23, 30, 40, 41, Ability.DivePlusDrone, Ability.DivePlusHacking, Ability.DivePlusLaser, Ability.DivePlusSilverDestroy, Ability.DivePlusTechnology, Ability.DivePlusXRay, Ability.Adventure_DoctorWho], 
        packId: 71238, image: '71238_1to1_MF_MUGSHOT_Gyberman_168', url: 'cyberman' },
    <MinifigData>{ id: 7123901, name: 'Lloyd', skillIds: [20, 31, 37, 38, 39, Ability.Adventure_Ninjago], 
        packId: 71239, image: '71239_1to1_MF_MUGSHOT_Lloyd_168', url: 'lloyd' },
    <MinifigData>{ id: 7124001, name: 'Bane', skillIds: [Ability.SuperStrength, Ability.SuperStrengthHandles, 33, 34, Ability.Adventure_DC], 
        packId: 71240, image: '71240_1to1_MF_MUGSHOT_Bane_168', url: 'bane' },
    <MinifigData>{ id: 7124101, name: 'Slimer', skillIds: [Ability.MiniAccess, Ability.Dive, Ability.Flying, Ability.HazardCleaner, Ability.SonarSmash, Ability.Illumination, Ability.Boomerang, Ability.HazardProtection, Ability.DivePlusBoomerang, Ability.DivePlusGhostImmunity, Ability.DivePlusHazardCleaner, Ability.DivePlusMini, Ability.DivePlusSonarSmash, Ability.SlurpAccess, Ability.Adventure_Ghostbusters], 
        packId: 71241, image: '71241_1to1_MF_MUGSHOT_Slimer_168', url: 'slimer' },
    <MinifigData>{ id: 7125101, name: 'B.A. Baracus', skillIds: [Ability.FixIt, Ability.SuperStrength, Ability.SuperStrengthHandles, Ability.LaserDeflector, Ability.ATeamMasterBuild, Ability.Target, Ability.SilverDestroy, Ability.Adventure_ATeam], 
        packId: 71251, image: 'wave-6-ba-baracus', state: PieceState.New, url: 'ba-baracus' },
    /*{ id: 7128501, name: 'Marceline', skillIds: [], packId: 71285, image: 'wave-6-marceline' },*/
    <MinifigData>{ id: 7117001, name: 'Batman', skillIds: [35, 36, 37, Ability.Adventure_DC], 
        packId: 71170, image: '71200_1to1_MF_MUGSHOT_Batman_168', url: 'batman' },
    <MinifigData>{ id: 7117002, name: 'Gandalf', skillIds: [31, 46, 47, Ability.Adventure_LordOfTheRing], 
        packId: 71170, image: '10237_1to1_MF_MUGSHOT_GandalfTheGrey_168', url: 'gandalf' },
    <MinifigData>{ id: 7117003, name: 'Wyldstyle', skillIds: [32, 38, 42, Ability.Adventure_LegoMovie], 
        packId: 71170, image: '70810_MF_Mugshot_WildStyle_168', url: 'wyldstyle' },
    <MinifigData>{ id: 7128601, name: 'Michael Knight', skillIds: [Ability.Dodging, Ability.Speed, Ability.XRay, Ability.Hacking, Ability.Tracking, Ability.Level_KnightRider, Ability.Adventure_KnightRider], 
        packId: 71286, image: 'wave-7.5-knight-rider', state: PieceState.Incomplete, url: 'michael-knight' }, // doging, dash=speed?
    <MinifigData>{ id: 7134401, name: 'Excalibur Batman', skillIds: [Ability.SwordSwitch, Ability.MasterBuild, Ability.VineCutting, Ability.Adventure_Batman], 
        packId: 71344, image: 'wave-7.5-excalibur-batman', state: PieceState.Incomplete, url: 'excalibur-batman' },
    <MinifigData>{ id: 7126401, name: 'Batgirl', skillIds: [Ability.Boomerang, Ability.Gliding, Ability.Stealth, Ability.Story_Batman, Ability.Adventure_Batman], 
        packId: 71264, image: 'wave-7.5-batgirl', state: PieceState.Incomplete, url: 'batgirl' },
    <MinifigData>{ id: 7126402, name: 'Robin', skillIds: [Ability.Dive, Ability.VineCutting, Ability.LaserDeflector, Ability.Acrobat, Ability.Story_Batman, Ability.Adventure_Batman], 
        packId: 71264, image: 'wave-7.5-robin', state: PieceState.Incomplete, url: 'robin' },
    <MinifigData>{ id: 7124201, name: 'Abby Yates', skillIds: [Ability.Laser, Ability.SuspendGhost, Ability.TrapGhosts, Ability.HazardProtection, Ability.SuperStrength, Ability.SuperStrengthHandles, Ability.Intelligence, Ability.ChargeTransfer, Ability.Story_Ghostbusters2016, Ability.Adventure_Ghostbusters2016], 
        packId: 71242, image: 'wave-6-abby-yates', state: PieceState.New, url: 'abby-yates' }
];
