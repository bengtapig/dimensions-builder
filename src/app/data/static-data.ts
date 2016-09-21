import { PackType } from './data';
import { Ability } from './static-abilities';

export class PackData {
    id: number;
    name: string;
    type: PackType;
    wave: number;
    year: number;
    image: string;
    minifigs: number[];
    builds: number[];
    desc: string;
}

export const packs: PackData[] = [
    { id: 71205, wave: 1, year: 1, minifigs: [], builds: [], name: 'Jurassic World™',
        type: PackType.TeamPack, image: '03_LD_PO_TP_JurassicWorld', desc: '' },
    { id: 71170, wave: 1, year: 1, minifigs: [], builds: [], name: 'Lego Dimensions',
        type: PackType.StarterSet, image: 'Dimensions_71170_PS3_680x404', desc: '' },
    { id: 71201, wave: 1, year: 1, minifigs: [], builds: [], name: 'Back to the Future™',
        type: PackType.LevelPack, image: '03_LD_PO_LP_BTTF_Marty', desc: '' },
    { id: 71202, wave: 1, year: 1, minifigs: [], builds: [], name: 'The Simpsons™',
        type: PackType.LevelPack, image: '03_LD_PO_LP_Simpsons_Homer', desc: '' },
    { id: 71235, wave: 4, year: 1, minifigs: [], builds: [], name: 'Midway Arcade™',
        type: PackType.LevelPack, image: '03_LD_PO_FP_GB_INTL_GamerKid', desc: '' },
    { id: 71228, wave: 3, year: 1, minifigs: [], builds: [], name: 'Ghostbusters™',
        type: PackType.LevelPack, image: '03_LD_PO_FP_GB_PeterVenkman', desc: '' },
    { id: 71204, wave: 2, year: 1, minifigs: [], builds: [], name: 'Doctor Who', type: PackType.LevelPack, image: '03_LD_PO_LP_DocWho', desc: '' },
    { id: 71203, wave: 1, year: 1, minifigs: [], builds: [], name: 'Portal® 2', type: PackType.LevelPack, image: '03_LD_PO_LP_Portal', desc: '' },
    { id: 71229, wave: 3, year: 1, minifigs: [], builds: [], name: 'DC Comics™', type: PackType.TeamPack, image: '03_LD_PO_FP_DC_Joker_Harley', desc: '' },
    { id: 71207, wave: 2, year: 1, minifigs: [], builds: [], name: 'Lego® Ninjago™',
        type: PackType.TeamPack, image: '03_LD_PO_TP_Ninjago_Kai_Cole', desc: '' },
    { id: 71206, wave: 1, year: 1, minifigs: [], builds: [], name: 'Scooby-Doo!™', type: PackType.TeamPack, image: '03_LD_PO_TP_ScoobyDoo', desc: '' },
    { id: 71241, wave: 5, year: 1, minifigs: [], builds: [], name: 'Slimer', type: PackType.FunPack, image: '03_LD_PO_FP_GB_Slimer', desc: '' },
    { id: 71240, wave: 5, year: 1, minifigs: [], builds: [], name: 'Bane', type: PackType.FunPack, image: '03_LD_PO_FP_DC_Bane', desc: '' },
    { id: 71239, wave: 5, year: 1, minifigs: [], builds: [], name: 'Lloyd', type: PackType.FunPack, image: '03_LD_PO_FP_Ninjago_Lloyd', desc: '' },
    { id: 71237, wave: 4, year: 1, minifigs: [], builds: [], name: 'Aquaman', type: PackType.FunPack, image: '03_LD_PO_FP_DC_Aquaman', desc: '' },
    { id: 71236, wave: 4, year: 1, minifigs: [], builds: [], name: 'Superman', type: PackType.FunPack, image: '03_LD_PO_FP_DC_Superman', desc: '' },
    { id: 71233, wave: 4, year: 1, minifigs: [], builds: [], name: 'Stay Puft', type: PackType.FunPack, image: '03_LD_PO_FP_GB_StayPuft', desc: '' },
    { id: 71238, wave: 3, year: 1, minifigs: [], builds: [], name: 'Cyberman', type: PackType.FunPack, image: '03_LD_PO_FP_DrWho_Cyberman', desc: '' },
    { id: 71234, wave: 3, year: 1, minifigs: [], builds: [], name: 'Sensei Wu', type: PackType.FunPack, image: '03_LD_PO_FP_Ninjago_SenseiWu', desc: '' },
    { id: 71230, wave: 3, year: 1, minifigs: [], builds: [], name: 'Doc Brown', type: PackType.FunPack, image: '03_LD_PO_FP_BTTF_DocBrown', desc: '' },
    { id: 71231, wave: 2, year: 1, minifigs: [], builds: [], name: 'Unikitty', type: PackType.FunPack, image: '03_LD_PO_FP_Unikitty', desc: '' },
    { id: 71209, wave: 1, year: 1, minifigs: [], builds: [], name: 'Wonder Woman', type: PackType.FunPack, image: '03_LD_PO_FP_DC_WonderWoman', desc: '' },
    { id: 71210, wave: 1, year: 1, minifigs: [], builds: [], name: 'Cyborg', type: PackType.FunPack, image: '03_LD_PO_FP_Cyborg', desc: '' },
    { id: 71212, wave: 1, year: 1, minifigs: [], builds: [], name: 'Emmet', type: PackType.FunPack, image: '03_LD_PO_FP_Emmet', desc: '' },
    { id: 71213, wave: 1, year: 1, minifigs: [], builds: [], name: 'Bad Cop', type: PackType.FunPack, image: '03_LD_PO_FP_Badcop', desc: '' },
    { id: 71214, wave: 1, year: 1, minifigs: [], builds: [], name: 'Benny', type: PackType.FunPack, image: '03_LD_PO_FP_Benny', desc: '' },
    { id: 71215, wave: 1, year: 1, minifigs: [], builds: [], name: 'Jay', type: PackType.FunPack, image: '03_LD_PO_FP_Ninjago_Jay', desc: '' },
    { id: 71216, wave: 1, year: 1, minifigs: [], builds: [], name: 'Nya', type: PackType.FunPack, image: '03_LD_PO_FP_Ninjago_Nya', desc: '' },
    { id: 71217, wave: 1, year: 1, minifigs: [], builds: [], name: 'Zane', type: PackType.FunPack, image: '03_LD_PO_FP_Ninjago_Zane', desc: '' },
    { id: 71218, wave: 1, year: 1, minifigs: [], builds: [], name: 'Gollum', type: PackType.FunPack, image: '03_LD_PO_FP_LOTR_Gollum', desc: '' },
    { id: 71219, wave: 1, year: 1, minifigs: [], builds: [], name: 'Legolas', type: PackType.FunPack, image: '03_LD_PO_FP_LOTR_Legolas', desc: '' },
    { id: 71220, wave: 1, year: 1, minifigs: [], builds: [], name: 'Gimli', type: PackType.FunPack, image: '03_LD_PO_FP_LOTR_Gimli', desc: '' },
    { id: 71221, wave: 1, year: 1, minifigs: [], builds: [], name: 'Wicked Witch', type: PackType.FunPack, image: '03_LD_PO_FP_WickedWitch', desc: '' },
    { id: 71222, wave: 1, year: 1, minifigs: [], builds: [], name: 'Laval', type: PackType.FunPack, image: '03_LD_PO_FP_Chima_Laval', desc: '' },
    { id: 71223, wave: 1, year: 1, minifigs: [], builds: [], name: 'Cragger', type: PackType.FunPack, image: '03_LD_PO_FP_Chima_Cragger', desc: '' },
    { id: 71232, wave: 1, year: 1, minifigs: [], builds: [], name: 'Eris', type: PackType.FunPack, image: '03_LD_PO_FP_Chima_Eris', desc: '' },
    { id: 71211, wave: 2, year: 1, minifigs: [], builds: [], name: 'Bart Simpson', type: PackType.FunPack, image: '03_LD_PO_FP_Simpsons_Bart', desc: '' },
    { id: 71227, wave: 2, year: 1, minifigs: [], builds: [], name: 'Krusty', type: PackType.FunPack, image: '03_LD_PO_FP_Simpsons_Krusty', desc: '' },
    { id: 71245, wave: 6, year: 2, minifigs: [], builds: [], name: 'Adventure Time', type: PackType.LevelPack, image: 'adventure-time-level-pack', desc: 'This pack has not been released yet. The content is work-in-progress.' },
    { id: 71248, wave: 6, year: 2, minifigs: [], builds: [], name: 'Mission: Impossible', type: PackType.LevelPack, image: 'mission-impossible-level-pack', desc: 'This pack has not been released yet. The content is work-in-progress.' },
    { id: 71242, wave: 6, year: 2, minifigs: [], builds: [], name: 'Ghostbusters™', type: PackType.StoryPack, image: 'ghostbusters-story-pack', desc: 'This pack has not been released yet. The content is work-in-progress.' },
    { id: 71246, wave: 6, year: 2, minifigs: [], builds: [], name: 'Adventure Time', type: PackType.TeamPack, image: 'adventure-time-team-pack', desc: 'This pack has not been released yet. The content is work-in-progress.' },
    { id: 71247, wave: 6, year: 2, minifigs: [], builds: [], name: 'Harry Potter', type: PackType.TeamPack, image: 'harry-potter-team-pack', desc: 'This pack has not been released yet. The content is work-in-progress.' },
    { id: 71251, wave: 6, year: 2, minifigs: [], builds: [], name: 'the A-Team', type: PackType.FunPack, image: 'a-team-fun-pack', desc: 'This pack has not been released yet. The content is work-in-progress.' },
    { id: 71253, wave: 7, year: 2, minifigs: [], builds: [], name: 'Fantastic Beasts and Where to Find Them', type: PackType.StoryPack, image: 'wave-7-fantastic-beasts-story-pack', desc: 'This pack has not been released yet. The content is work-in-progress.' },
    { id: 71257, wave: 7, year: 2, minifigs: [], builds: [], name: 'Tina Goldstein', type: PackType.FunPack, image: 'wave-7-tina-goldstein-fun-pack', desc: 'This pack has not been released yet. The content is work-in-progress.' },
    { id: 71244, wave: 7, year: 2, minifigs: [], builds: [], name: 'Sonic the Hedgehog', type: PackType.LevelPack, image: 'wave-7-sonic-level-pack', desc: 'This pack has not been released yet. The content is work-in-progress.' },
    { id: 71256, wave: 7, year: 2, minifigs: [], builds: [], name: 'Gremlins', type: PackType.TeamPack, image: 'wave-7-gremlins-team-pack', desc: 'This pack has not been released yet. The content is work-in-progress.' },
    { id: 71258, wave: 7, year: 2, minifigs: [], builds: [], name: 'E.T. The Extra-Terrestrial', type: PackType.FunPack, image: 'wave-7-et-fun-pack', desc: 'This pack has not been released yet. The content is work-in-progress.' },
    { id: 71285, wave: 7, year: 2, minifigs: [], builds: [], name: 'Marceline', type: PackType.FunPack, image: 'wave-7-marceline-fun-pack', desc: 'This pack has not been released yet. The content is work-in-progress.' },
    { id: 71264, wave: 7.5, year: 2, minifigs: [], builds: [], name: 'LEGO Batman Movie', type: PackType.StoryPack, image: 'wave-7.5-batman-story-pack', desc: 'This pack has not been released yet. The content is work-in-progress.' },
    { id: 71344, wave: 7.5, year: 2, minifigs: [], builds: [], name: 'Excalibur Batman', type: PackType.FunPack, image: 'wave-7.5-excalibur-batman-fun-pack', desc: 'This pack has not been released yet. The content is work-in-progress.' },
    { id: 71286, wave: 7.5, year: 2, minifigs: [], builds: [], name: 'Knight Rider', type: PackType.FunPack, image: 'wave-7.5-knight-rider-fun-pack', desc: 'This pack has not been released yet. The content is work-in-progress.' },

/*
    { id: , wave: , year: , minifigs: [], builds: [], name: '', type: PackType.FunPack, image: '', desc: '' },
*/
];

export class PieceData {
    id: number;
    name: string;
    skillIds: number[];
    packId: number;
    image: string;
}

export class MinifigData extends PieceData {
};

export class VehicleData extends PieceData {
    stage: number;
    vehicleId: number;
}

export const minifigs: MinifigData[] = [
    { id: 7120401, name: 'The Doctor', skillIds: [7, 10, 18, 23], packId: 71204, image: '712041to1MFMUGSHOTDr Who168' },
    { id: 7120201, name: 'Homer Simpson', skillIds: [2, 18, 33], packId: 71202, image: '71005_Portrait_Homer' },
    { id: 7120301, name: 'Chell', skillIds: [15, 38], packId: 71203, image: '71203_1to1_MF_MUGSHOT_Chell_168' },
    { id: 7120101, name: 'Marty McFly', skillIds: [18], packId: 71201, image: '71201_1to1_MF_MUGSHOT_Marty_168' },
    { id: 7123501, name: 'Gamer Kid', skillIds: [2, 12, 37, 44, 45], packId: 71235, image: '71235_1to1_MF_MUGSHOT_Retro_Gamer_168' },
    { id: 7122801, name: 'Peter Venkman', skillIds: [12, 34, 56], packId: 71228, image: '71228_1to1_MF_MUGSHOT_Peter_168' },
    //{ id: 7124801, name: 'Ethan Hunt', skillIds: [], packId: 71248, image: '' },
    //{ id: 7124501, name: 'Finn', skillIds: [], packId: 71245, image: '' },
    //{ id: 7124401, name: 'Sonic the Hedgehog', skillIds: [], packId: 71244, image: '' },
    { id: 7120501, name: 'Owen', skillIds: [22, 26, 27, 37], packId: 71205, image: '75917_1to1_MF_OWEN_MUGSHOT_168' },
    { id: 7120502, name: 'ACU Trooper', skillIds: [6, 31], packId: 71205, image: '75916_1to1_MF_ACU_MUGSHOT_168' },
    { id: 7120601, name: 'Scooby Doo', skillIds: [3, 4, 26, 37, 49, Ability.DivePlusDigging, Ability.DivePlusTracking], packId: 71206, image: '75900_Scooby_ft_Mugshot_168x224' },// stealth?
    { id: 7120602, name: 'Shaggy', skillIds: [26, 31, 37, 49], packId: 71206, image: '75901_Shaggy_Mugshot_168x224' },//stealth??
    { id: 7120701, name: 'Kai', skillIds: [20, 37, 38, 39], packId: 71207, image: '71207_1to1_MF_MUGSHOT_Kai_168' }, // fire?
    { id: 7120702, name: 'Cole', skillIds: [2, 20, 38, 39, 37], packId: 71207, image: '71207_1to1_MF_MUGSHOT_Cole_168' },
    { id: 7122901, name: 'Joker', skillIds: [6, 22, 34, 36], packId: 71229, image: '71229_1to1_MF_MUGSHOT_Joker_168' },
    { id: 7122902, name: 'Harley Quinn', skillIds: [2, 38], packId: 71229, image: '71229_1to1_MF_MUGSHOT_Harley_Quinn_168' },
    //{ id: 7124601, name: 'Jake', skillIds: [], packId: 71246, image: '' },
    //{ id: 7124602, name: 'Jumpy Space Princess', skillIds: [], packId: 71246, image: '' },
    //{ id: 7124701, name: 'Harry Potter', skillIds: [], packId: 71247, image: '' },
    //{ id: 7124702, name: 'Lord Voldemort', skillIds: [], packId: 71247, image: '' },
    { id: 7120901, name: 'Wonder Woman', skillIds: [2, 4, 38, 39, 35, 36, 41, 43, 44, Ability.DivePlusBoomerang, Ability.DivePlusGrapple, Ability.DivePlusSuperStrength], packId: 71209,
        image: '71209_1to1_MF_MUGSHOT_Wonder_Woman_168' },
    { id: 7121001, name: 'Cyborg', skillIds: [2, 4, 12, 22, 23, 33, Ability.DivePlusLazer, Ability.DivePlusTarget], packId: 71210, image: '76028_Cyorg_1488x1984_mugshot_360w_2x' },
    { id: 7121101, name: 'Bart Simpson', skillIds: [13, 22], packId: 71211, image: '71211_1to1_MF_MUGSHOT_Bart_168' },
    { id: 7121201, name: 'Emmet', skillIds: [5, 7, 42], packId: 71212, image: '70810_MF_Mugshot_Emmet_168' },
    { id: 7121301, name: 'Bad Cop', skillIds: [12, 22, 32], packId: 71213, image: '70819_MF_Mugshot_BadCop_168' },
    { id: 7121401, name: 'Benny', skillIds: [10, 18, 22, 23, 42, 49], packId: 71214, image: '70810_MF_Mugshot_Benny_168' },
    { id: 7121501, name: 'Jay', skillIds: [6, 7, 20, 37, 38], packId: 71215, image: '71215_1to1_MF_MUGSHOT_Jay_168' },
    { id: 7121601, name: 'Nya', skillIds: [7, 20, 37, 38, 39], packId: 71216, image: '71216_1to1_MF_MUGSHOT_Nya_168' },//7 fix-it?
    { id: 7121701, name: 'Zane', skillIds: [4, 20, 30, 35, 37, 38, Ability.DivePlusXRay], packId: 71217, image: '71217_1to1_MF_MUGSHOT_Zane_168' },
    { id: 7121801, name: 'Gollum', skillIds: [4, 13, 35, 38, Ability.DivePlusBoomerang, Ability.DivePlusMini, Ability.DivePlusSilverDestroy], packId: 71218, image: '9470_1to1_MF_MUGSHOT_Gollum_168' },
    { id: 7121901, name: 'Legolas', skillIds: [14, 22, 38], packId: 71219, image: '9473_1to1_MF_MUGSHOT_Legolas_168' },//14?
    { id: 7122001, name: 'Gimli', skillIds: [2, 13], packId: 71220, image: '79008_Gimli_168' },
    { id: 7122101, name: 'Wicked Witch', skillIds: [17, 31, 41, 43, 46, 47], packId: 71221,
        image: '71221_1to1_MF_MUGSHOT_WickedWitch_168' },
    { id: 7122201, name: 'Laval', skillIds: [1, 2, 38, 39], packId: 71222, image: '70144_1to1_MF_Laval_01_336_744w' },
    { id: 7122301, name: 'Cragger', skillIds: [1, 2, 4, 34, Ability.DivePlusChi, Ability.DivePlusSuperStrength], packId: 71223, image: '70150_1to1_MF_Cragger_336_744w' },
    { id: 7122701, name: 'Krusty', skillIds: [11, 28, 52], packId: 71227, image: '71005_Portrait_Krusty' },
    { id: 7123001, name: 'Doc Brown', skillIds: [7, 10, 23, 40], packId: 71230, image: '71230_1to1_MF_MUGSHOT_Doc_Brown_168' },
    { id: 7123101, name: 'Unikitty', skillIds: [16, 33, 42], packId: 71231, image: '70803_MF_Mugshot_Unikitty_168' },
    { id: 7123201, name: 'Eris', skillIds: [1, 2, 22, 43], packId: 71232, image: '70142_1to1_MF_Eris_01_168' },
    { id: 7123301, name: 'Stay Puft', skillIds: [2, 33, 34], packId: 71233, image: '71233_1to1_MF_MUGSHOT_Stay_Puft_168' },
    { id: 7123401, name: 'Sensei Wu', skillIds: [14, 20, 37, 38, 49], packId: 71234, image: '71234_1to1_MF_MUGSHOT_Sensei_Wu_168' },
    { id: 7123601, name: 'Superman', skillIds: [2, 4, 12, 30, 43, 44, 48, Ability.DivePlusLazer, Ability.DivePlusSuperStrength, Ability.DivePlusXRay, Ability.FlightPlusLaser], packId: 71236, image: '71236_1to1_MF_MUGSHOT_Superman_168' },
    { id: 7123701, name: 'Aquaman', skillIds: [0, 4, 11, 28, 52, Ability.DivePlusHazardCleaner], packId: 71237, image: '71237_1to1_MF_MUGSHOT_Aquaman_168' },
    { id: 7123801, name: 'Cyberman', skillIds: [4, 10, 17, 23, 30, 40, 41, Ability.DivePlusDrone, Ability.DivePlusHacking, Ability.DivePlusLazer, Ability.DivePlusSilverDestroy, Ability.DivePlusTechnology, Ability.DivePlusXRay], packId: 71238, image: '71238_1to1_MF_MUGSHOT_Gyberman_168' },
    { id: 7123901, name: 'Lloyd', skillIds: [20, 31, 37, 38, 39], packId: 71239, image: '71239_1to1_MF_MUGSHOT_Lloyd_168' },
    { id: 7124001, name: 'Bane', skillIds: [2, 33, 34], packId: 71240, image: '71240_1to1_MF_MUGSHOT_Bane_168' },
    { id: 7124101, name: 'Slimer', skillIds: [4, 11, 13, 18, 31, 34, 35, 43, Ability.DivePlusBoomerang, Ability.DivePlusGhostImmunity, Ability.DivePlusHazardCleaner, Ability.DivePlusMini, Ability.DivePlusSonarSmash], packId: 71241, image: '71241_1to1_MF_MUGSHOT_Slimer_168' },
    //{ id: 7125101, name: 'B.A. Baracus', skillIds: [], packId: 71251, image: '' },
    //{ id: 7128501, name: 'Marceline', skillIds: [], packId: 71285, image: '' },
    { id: 7117001, name: 'Batman', skillIds: [35, 36, 37], packId: 71170, image: '71200_1to1_MF_MUGSHOT_Batman_168' },
    { id: 7117002, name: 'Gandalf', skillIds: [31, 46, 47], packId: 71170, image: '10237_1to1_MF_MUGSHOT_GandalfTheGrey_168' },
    { id: 7117003, name: 'Wyldstyle', skillIds: [32, 38, 42], packId: 71170, image: '70810_MF_Mugshot_WildStyle_168' }
];

export const vehicles: VehicleData[] = [
    { id: 71170041, name: 'Batmobile', skillIds: [50], packId: 71170, image: 'none', stage: 1, vehicleId: 7117004 },
    { id: 71170042, name: 'Batblaster', skillIds: [18, 25, 50], packId: 71170, image: 'none', stage: 2, vehicleId: 7117004 },
    { id: 71170043, name: 'Sonic Batray', skillIds: [18, 50], packId: 71170, image: 'none', stage: 3, vehicleId: 7117004 },
    { id: 71209021, name: 'Invisible Jet', skillIds: [8, 37, 43, 51, Ability.FlightPlusLaser], packId: 71209, image: '71209021', stage: 1, vehicleId: 7120902 },
    { id: 71209022, name: 'Laser Shooter', skillIds: [8, 12, 37, 43, 51], packId: 71209, image: 'none', stage: 2, vehicleId: 7120902 },
    { id: 71209023, name: 'Torpedo Bomber', skillIds: [8, 17, 37, 43, 51], packId: 71209, image: 'none', stage: 3, vehicleId: 7120902 },
    { id: 71210021, name: 'Cyber Guard', skillIds: [], packId: 71210, image: 'none', stage: 1, vehicleId: 7121002 },
    { id: 71210022, name: 'Cyber-Wrecker', skillIds: [2, 3, 17], packId: 71210, image: 'none', stage: 2, vehicleId: 7121002 },
    { id: 71210023, name: 'Laser Robot Walker', skillIds: [12], packId: 71210, image: 'none', stage: 3, vehicleId: 7121002 },
    { id: 71237021, name: 'Aqua Watercraft', skillIds: [4, Ability.DivePlusSilverDestroy, Ability.DivePlusTarget], packId: 71237, image: 'none', stage: 1, vehicleId: 7123702 },
    { id: 71237022, name: 'Seven Seas Speeder', skillIds: [4], packId: 71237, image: 'none', stage: 2, vehicleId: 7123702 },
    { id: 71237023, name: 'Trident of Fire', skillIds: [4, 17], packId: 71237, image: 'none', stage: 3, vehicleId: 7123702 },
    { id: 71229031, name: 'Joker\'s Chopper', skillIds: [8, 43, 51], packId: 71229, image: 'none', stage: 1, vehicleId: 7122903 },
    { id: 71229032, name: 'Mischievous Missile Blaster', skillIds: [8, 43, 51], packId: 71229, image: 'none', stage: 2, vehicleId: 7122903 },
    { id: 71229033, name: 'Lock \'n\' Laser Jet', skillIds: [8, 12, 43, 51], packId: 71229, image: 'none', stage: 3, vehicleId: 7122903 },
    { id: 71229041, name: 'Quinn Mobile', skillIds: [50], packId: 71229, image: 'none', stage: 1, vehicleId: 7122904 },
    { id: 71229042, name: 'Quinn Ultra Racer', skillIds: [25, 50], packId: 71229, image: 'none', stage: 2, vehicleId: 7122904 },
    { id: 71229043, name: 'Missile Launcher', skillIds: [17, 50], packId: 71229, image: 'none', stage: 3, vehicleId: 7122904 },
    { id: 71240021, name: 'Drill Driver', skillIds: [3, 5], packId: 71240, image: 'none', stage: 1, vehicleId: 7124002 },
    { id: 71240022, name: 'Bane Dig \'n\' Drill', skillIds: [3, 5, 25], packId: 71240, image: 'none', stage: 2, vehicleId: 7124002 },
    { id: 71240023, name: 'Bane Drill \'n\' Blast', skillIds: [3, 5, 17], packId: 71240, image: 'none', stage: 3, vehicleId: 7124002 },
    { id: 71236021, name: 'Hover Pod', skillIds: [8, 43, 51], packId: 71236, image: 'none', stage: 1, vehicleId: 7123602 },
    { id: 71236022, name: 'Krypton Striker', skillIds: [8, 43, 51], packId: 71236, image: 'none', stage: 2, vehicleId: 7123602 },
    { id: 71236023, name: 'Super Stealth Pod', skillIds: [8, 17, 43, 51], packId: 71236, image: 'none', stage: 3, vehicleId: 7123602 },
    { id: 71220021, name: 'Axe Chariot', skillIds: [25, 50], packId: 71220, image: 'none', stage: 1, vehicleId: 7122002 },
    { id: 71220022, name: 'Axe Hurler', skillIds: [25, 50], packId: 71220, image: 'none', stage: 2, vehicleId: 7122002 },
    { id: 71220023, name: 'Soaring Chariot', skillIds: [8, 43, 25, 51], packId: 71220, image: 'none', stage: 3, vehicleId: 7122002 },
    { id: 71218021, name: 'Shelob the Great', skillIds: [3], packId: 71218, image: 'none', stage: 1, vehicleId: 7121802 },
    { id: 71218022, name: '8-Legged Stalker', skillIds: [2, 3], packId: 71218, image: 'none', stage: 2, vehicleId: 7121802 },
    { id: 71218023, name: 'Poison Slinger', skillIds: [2, 3], packId: 71218, image: 'none', stage: 3, vehicleId: 7121802 },
    { id: 71212021, name: 'Emmet\'s Excavator', skillIds: [50], packId: 71212, image: 'none', stage: 1, vehicleId: 7121202 },
    { id: 71212022, name: 'Destroy Dozer', skillIds: [3, 25, 50], packId: 71212, image: 'none', stage: 2, vehicleId: 7121202 },
    { id: 71212023, name: 'Destruct-o-Mech', skillIds: [2, 3], packId: 71212, image: 'none', stage: 3, vehicleId: 7121202 },
    { id: 71213021, name: 'Police Car', skillIds: [25, 50], packId: 71213, image: 'none', stage: 1, vehicleId: 7121302 },
    { id: 71213022, name: 'Aerial Squad Car', skillIds: [8, 43, 50, 51], packId: 71213, image: 'none', stage: 2, vehicleId: 7121302 },
    { id: 71213023, name: 'Missile Striker', skillIds: [8, 17, 43, 51], packId: 71213, image: 'none', stage: 3, vehicleId: 7121302 },
    { id: 71214021, name: 'Benny\'s Spaceship', skillIds: [8, 43, 51], packId: 71214, image: 'none', stage: 1, vehicleId: 7121402 },
    { id: 71214022, name: 'Laser Craft', skillIds: [8, 43, 51], packId: 71214, image: 'none', stage: 2, vehicleId: 7121402 }, // no laser ability?
    { id: 71214023, name: 'The Annihilator', skillIds: [8, 12, 17, 43, 51], packId: 71214, image: 'none', stage: 3, vehicleId: 7121402 },
    { id: 71231021, name: 'Cloud Cuckoo Car', skillIds: [8, 43, 51], packId: 71231, image: 'none', stage: 1, vehicleId: 7123102 },
    { id: 71231022, name: 'X-treme Soaker', skillIds: [8, 11, 28, 43, 51, 52], packId: 71231, image: 'none', stage: 2, vehicleId: 7123102 },
    { id: 71231023, name: 'Rainbow Cannon', skillIds: [8, 43, 51], packId: 71231, image: 'none', stage: 3, vehicleId: 7123102 },
    { id: 71207031, name: 'Blade\'s Bike', skillIds: [50, Ability.FlightPlusLaser], packId: 71207, image: 'none', stage: 1, vehicleId: 7120703 },
    { id: 71207032, name: 'Flying Fire Bike', skillIds: [8, 25, 43, 51], packId: 71207, image: 'none', stage: 2, vehicleId: 7120703 },
    { id: 71207033, name: 'Blades of Fire', skillIds: [8, 12, 43, 51], packId: 71207, image: 'none', stage: 3, vehicleId: 7120703 },
    { id: 71207041, name: 'Boulder Bomber', skillIds: [8, 43, 51], packId: 71207, image: 'none', stage: 1, vehicleId: 7120704 },
    { id: 71207042, name: 'Boulder Blaster', skillIds: [8, 17, 43, 51], packId: 71207, image: 'none', stage: 2, vehicleId: 7120704 },
    { id: 71207043, name: 'Cyclone Jet', skillIds: [8, 43, 51], packId: 71207, image: 'none', stage: 3, vehicleId: 7120704 },
    { id: 71215021, name: 'Storm Fighter', skillIds: [8, 43, 51, Ability.FlightPlusLaser], packId: 71215, image: 'none', stage: 1, vehicleId: 7121502 },
    { id: 71215022, name: 'Lightning Jet', skillIds: [8, 12, 43, 51], packId: 71215, image: 'none', stage: 2, vehicleId: 7121502 },
    { id: 71215023, name: 'Electro-Shooter', skillIds: [6, 8, 12, 43, 51], packId: 71215, image: 'none', stage: 3, vehicleId: 7121502 },
    { id: 71216021, name: 'Samurai Mech', skillIds: [2], packId: 71216, image: 'none', stage: 1, vehicleId: 7121602 },
    { id: 71216022, name: 'Samurai Shooter', skillIds: [17], packId: 71216, image: 'none', stage: 2, vehicleId: 7121602 },
    { id: 71216023, name: 'Soaring Samurai Mech', skillIds: [8, 43, 51], packId: 71216, image: 'none', stage: 3, vehicleId: 7121602 },
    { id: 71217021, name: 'Ninja Copter', skillIds: [8, 43, 51, Ability.FlightPlusLaser], packId: 71217, image: 'none', stage: 1, vehicleId: 7121702 },
    { id: 71217022, name: 'Glaciator', skillIds: [8, 43, 48, 51], packId: 71217, image: 'none', stage: 2, vehicleId: 7121702 },
    { id: 71217023, name: 'Freeze Fighter', skillIds: [8, 12, 43, 48, 51], packId: 71217, image: 'none', stage: 3, vehicleId: 7121702 },
    { id: 71234021, name: 'Flying White Dragon', skillIds: [8, 43, 48], packId: 71234, image: 'none', stage: 1, vehicleId: 7123402 },
    { id: 71234022, name: 'Golden Fire Dragon', skillIds: [8, 43, 48], packId: 71234, image: 'none', stage: 2, vehicleId: 7123402 },
    { id: 71234023, name: 'Ultra Destruction Dragon', skillIds: [8, 43, 48], packId: 71234, image: 'none', stage: 3, vehicleId: 7123402 },
    { id: 71239021, name: 'Lloyd\'s Golden Dragon', skillIds: [43], packId: 71239, image: 'none', stage: 1, vehicleId: 7123902 },
    { id: 71239022, name: 'Sword Projector Dragon', skillIds: [43], packId: 71239, image: 'none', stage: 2, vehicleId: 7123902 },
    { id: 71239023, name: 'Mega Flight Dragon', skillIds: [43], packId: 71239, image: 'none', stage: 3, vehicleId: 7123902 },
    { id: 71201021, name: 'DeLorean Time Machine', skillIds: [50, 53], packId: 71201, image: 'none', stage: 1, vehicleId: 7120102 },
    { id: 71201022, name: 'Electric Time Machine', skillIds: [6, 25, 50, 53], packId: 71201, image: 'none', stage: 2, vehicleId: 7120102 },
    { id: 71201023, name: 'Ultra Time Machine', skillIds: [8, 17, 43, 51, 53], packId: 71201, image: 'none', stage: 3, vehicleId: 7120102 },
    { id: 71230021, name: 'Travelling Time Train', skillIds: [50, 53], packId: 71230, image: 'none', stage: 1, vehicleId: 7123002 },
    { id: 71230022, name: 'Flying Time Machine', skillIds: [8, 25, 43, 50, 51, 53], packId: 71230, image: 'none', stage: 2, vehicleId: 7123002 },
    { id: 71230023, name: 'Missile Blast Time Train', skillIds: [8, 17, 43, 51, 53], packId: 71230, image: 'none', stage: 3, vehicleId: 7123002 },
    { id: 71201031, name: 'Hoverboard', skillIds: [], packId: 71201, image: 'none', stage: 1, vehicleId: 7120103 },
    { id: 71201032, name: 'Cyclone Board', skillIds: [], packId: 71201, image: 'none', stage: 2, vehicleId: 7120103 },
    { id: 71201033, name: 'Ultimate Hoverjet', skillIds: [17, 43], packId: 71201, image: 'none', stage: 3, vehicleId: 7120103 },
    { id: 71206031, name: 'Mystery Machine', skillIds: [50], packId: 71206, image: 'none', stage: 1, vehicleId: 7120603 },
    { id: 71206032, name: 'Mystery Tow & Go', skillIds: [25, 28, 50], packId: 71206, image: 'none', stage: 2, vehicleId: 7120603 }, // water spray should be same as growth?
    { id: 71206033, name: 'Mystery Monster', skillIds: [11, 50, 52], packId: 71206, image: 'none', stage: 3, vehicleId: 7120603 },
    { id: 71205031, name: 'Velociraptor', skillIds: [27], packId: 71205, image: 'none', stage: 1, vehicleId: 7120503 },
    { id: 71205032, name: 'Spike Attack Raptor', skillIds: [2, 3, 27], packId: 71205, image: 'none', stage: 2, vehicleId: 7120503 },
    { id: 71205033, name: 'Venom Raptor', skillIds: [2, 27], packId: 71205, image: 'none', stage: 3, vehicleId: 7120503 },
    { id: 71205041, name: 'Gyrosphere', skillIds: [9], packId: 71205, image: 'none', stage: 1, vehicleId: 7120504 },
    { id: 71205042, name: 'Sonic Beam Gyrosphere', skillIds: [9, 18], packId: 71205, image: 'none', stage: 2, vehicleId: 7120504 },
    { id: 71205043, name: 'Speed Boost Gyrosphere', skillIds: [9, 31, 45], packId: 71205, image: 'none', stage: 3, vehicleId: 7120504 },
    { id: 71203031, name: 'Sentry Turret', skillIds: [], packId: 71203, image: 'none', stage: 1, vehicleId: 7120303 },
    { id: 71203032, name: 'Turret Striker', skillIds: [12], packId: 71203, image: 'none', stage: 2, vehicleId: 7120303 },
    { id: 71203033, name: 'Flying Turret Carrier', skillIds: [8, 17, 43, 51], packId: 71203, image: 'none', stage: 3, vehicleId: 7120303 },
    { id: 71202031, name: 'Homer\'s Car', skillIds: [25, 50, Ability.DivePlusSilverDestroy, Ability.DivePlusTarget], packId: 71202, image: 'none', stage: 1, vehicleId: 7120203 },
    { id: 71202032, name: 'The Homercraft', skillIds: [], packId: 71202, image: 'none', stage: 2, vehicleId: 7120203 },
    { id: 71202033, name: 'The SubmaHomer', skillIds: [4, 17, 50], packId: 71202, image: 'none', stage: 3, vehicleId: 7120203 },
    { id: 71211021, name: 'Gravity Sprinter', skillIds: [50], packId: 71211, image: 'none', stage: 1, vehicleId: 7121102 },
    { id: 71211022, name: 'Street Shredder', skillIds: [25], packId: 71211, image: 'none', stage: 2, vehicleId: 7121102 },
    { id: 71211023, name: 'Sky Clobberer', skillIds: [8, 43, 45, 51], packId: 71211, image: 'none', stage: 3, vehicleId: 7121102 },
    { id: 71227021, name: 'Clown Bike', skillIds: [50], packId: 71227, image: 'none', stage: 1, vehicleId: 7122702 },
    { id: 71227022, name: 'Cannon Bike', skillIds: [25, 50], packId: 71227, image: 'none', stage: 2, vehicleId: 7122702 },
    { id: 71227023, name: 'Anti-Gravity Rocket Bike', skillIds: [8, 43, 51], packId: 71227, image: 'none', stage: 3, vehicleId: 7122702 },
    { id: 71223021, name: 'Swamp Skimmer', skillIds: [Ability.DivePlusSilverDestroy, Ability.DivePlusTarget], packId: 71223, image: 'none', stage: 1, vehicleId: 7122302 },
    { id: 71223022, name: 'Cragger\'s Fireship', skillIds: [], packId: 71223, image: 'none', stage: 2, vehicleId: 7122302 },
    { id: 71223023, name: 'Croc Command Sub', skillIds: [4, 17], packId: 71223, image: 'none', stage: 3, vehicleId: 7122302 },
    { id: 71222021, name: 'Mighty Lion Rider', skillIds: [50], packId: 71222, image: 'none', stage: 1, vehicleId: 7122202 },
    { id: 71222022, name: 'Lion Blazer', skillIds: [25, 50], packId: 71222, image: 'none', stage: 2, vehicleId: 7122202 },
    { id: 71222023, name: 'Fire Lion', skillIds: [50], packId: 71222, image: 'none', stage: 3, vehicleId: 7122202 },
    { id: 71232021, name: 'Eagle Interceptor', skillIds: [8, 43, 51], packId: 71232, image: 'none', stage: 1, vehicleId: 7123202 },
    { id: 71232022, name: 'Eagle Sky Blazer', skillIds: [8, 17, 43, 51], packId: 71232, image: 'none', stage: 2, vehicleId: 7123202 },
    { id: 71232023, name: 'Eagle Swoop Diver', skillIds: [8, 43, 51], packId: 71232, image: 'none', stage: 3, vehicleId: 7123202 },
    { id: 71221021, name: 'Winged Monkey', skillIds: [43], packId: 71221, image: 'none', stage: 1, vehicleId: 7122102 },
    { id: 71221022, name: 'Battle Monkey', skillIds: [43, 17], packId: 71221, image: 'none', stage: 2, vehicleId: 7122102 },
    { id: 71221023, name: 'Commander Monkey', skillIds: [43, 18], packId: 71221, image: 'none', stage: 3, vehicleId: 7122102 },
    { id: 71204021, name: 'TARDIS', skillIds: [8, 37, 43, 51, 54, Ability.FlightPlusLaser], packId: 71204, image: 'none', stage: 1, vehicleId: 7120402 },
    { id: 71204022, name: 'Laser-Pulse TARDIS', skillIds: [8, 12, 37, 43, 51, 54], packId: 71204, image: 'none', stage: 2, vehicleId: 7120402 },
    { id: 71204023, name: 'Energy-Burst TARDIS', skillIds: [8, 37, 43, 51, 54], packId: 71204, image: 'none', stage: 3, vehicleId: 7120402 },
    { id: 71204031, name: 'K-9', skillIds: [17], packId: 71204, image: 'none', stage: 1, vehicleId: 7120403 },
    { id: 71204032, name: 'K-9 Ruff Rover', skillIds: [18], packId: 71204, image: 'none', stage: 2, vehicleId: 7120403 },
    { id: 71204033, name: 'K-9 Laser Cutter', skillIds: [12], packId: 71204, image: 'none', stage: 3, vehicleId: 7120403 },
    { id: 71238021, name: 'Dalek', skillIds: [], packId: 71238, image: 'none', stage: 1, vehicleId: 7123802 },
    { id: 71238022, name: 'Fire \'n\' Ride Dalek', skillIds: [12], packId: 71238, image: 'none', stage: 2, vehicleId: 7123802 },
    { id: 71238023, name: 'Silver Shooter Dalek', skillIds: [8, 17, 43, 51], packId: 71238, image: 'none', stage: 3, vehicleId: 7123802 },
    { id: 71228021, name: 'Ecto-1', skillIds: [50, Ability.DivePlusSilverDestroy, Ability.DivePlusTarget], packId: 71228, image: 'none', stage: 1, vehicleId: 7122802 },
    { id: 71228022, name: 'Ecto-1 Blaster', skillIds: [17, 25, 52], packId: 71228, image: 'none', stage: 2, vehicleId: 7122802 }, // dive should be 3?, 4, 11, 28
    { id: 71228023, name: 'Ecto-1 Water Diver', skillIds: [4, 11, 28], packId: 71228, image: 'none', stage: 3, vehicleId: 7122802 },
    { id: 71233021, name: 'Terror Dog', skillIds: [], packId: 71233, image: 'none', stage: 1, vehicleId: 7123302 },
    { id: 71233022, name: 'Terror Dog Destroyer', skillIds: [3, 17], packId: 71233, image: 'none', stage: 2, vehicleId: 7123302 },
    { id: 71233023, name: 'Soaring Terror Dog', skillIds: [43], packId: 71233, image: 'none', stage: 3, vehicleId: 7123302 },
    { id: 71235021, name: 'G-6155 Spy Hunter', skillIds: [25, 50, Ability.DivePlusTarget], packId: 71235, image: 'none', stage: 1, vehicleId: 7123502 },
    { id: 71235022, name: 'Interdiver', skillIds: [17], packId: 71235, image: 'none', stage: 2, vehicleId: 7123502 },
    { id: 71235023, name: 'Aerial Spyhunter', skillIds: [8, 12, 43, 51], packId: 71235, image: 'none', stage: 3, vehicleId: 7123502 },
    { id: 71219021, name: 'Arrow Launcher', skillIds: [50], packId: 71219, image: 'none', stage: 1, vehicleId: 7121902 },
    { id: 71219022, name: 'Seeking Shooter', skillIds: [25, 50], packId: 71219, image: 'none', stage: 2, vehicleId: 7121902 },
    { id: 71219023, name: 'Triple Ballista', skillIds: [50], packId: 71219, image: 'none', stage: 3, vehicleId: 7121902 },
    { id: 71203031, name: 'Companion Cube', skillIds: [29], packId: 71203, image: 'none', stage: 1, vehicleId: 7120303 },
    { id: 71203032, name: 'Laser Deflector', skillIds: [29, 39], packId: 71203, image: 'none', stage: 2, vehicleId: 7120303 },
    { id: 71203033, name: 'Gold Heart Emitter', skillIds: [29], packId: 71203, image: 'none', stage: 3, vehicleId: 7120303 },
    { id: 71206031, name: 'Scooby Snack', skillIds: [2], packId: 71206, image: 'none', stage: 1, vehicleId: 7120603 },
    { id: 71206032, name: 'Scooby Fire Snack', skillIds: [12], packId: 71206, image: 'none', stage: 2, vehicleId: 7120603 },
    { id: 71206033, name: 'Scooby Ghost Snack', skillIds: [37], packId: 71206, image: 'none', stage: 3, vehicleId: 7120603 },
    { id: 71202021, name: 'Taunt-o-Vision', skillIds: [17], packId: 71202, image: 'none', stage: 1, vehicleId: 7120202 },
    { id: 71202022, name: 'Blast Cam', skillIds: [], packId: 71202, image: 'none', stage: 2, vehicleId: 7120202 },
    { id: 71202023, name: 'The MechaHomer', skillIds: [12], packId: 71202, image: 'none', stage: 3, vehicleId: 7120202 },
    { id: 71241021, name: 'Slime Shooter', skillIds: [], packId: 71241, image: 'none', stage: 1, vehicleId: 7124102 }, // nothing?
    { id: 71241022, name: 'Slime Exploder', skillIds: [], packId: 71241, image: 'none', stage: 2, vehicleId: 7124102 },
    { id: 71241023, name: 'Slime Streamer', skillIds: [17], packId: 71241, image: 'none', stage: 3, vehicleId: 7124102 },
    { id: 71228031, name: 'Ghost Trap', skillIds: [19], packId: 71228, image: 'none', stage: 1, vehicleId: 7122803 },
    { id: 71228032, name: 'Ghost Stun \'n\' Trap', skillIds: [19], packId: 71228, image: 'none', stage: 2, vehicleId: 7122803 },
    { id: 71228033, name: 'Proton Zapper', skillIds: [19], packId: 71228, image: 'none', stage: 3, vehicleId: 7122803 },
    { id: 71235031, name: 'Arcade Machine', skillIds: [55], packId: 71235, image: 'none', stage: 1, vehicleId: 7123503 },
    { id: 71235032, name: '8-Bit Shooter', skillIds: [55], packId: 71235, image: 'none', stage: 2, vehicleId: 7123503 },
    { id: 71235033, name: 'The Pixelator', skillIds: [55], packId: 71235, image: 'none', stage: 3, vehicleId: 7123503 }, // nothing?
/*
    { id: 021, name: '', skillIds: [], packId: , image: 'none', stage: 1, vehicleId:  },
    { id: 022, name: '', skillIds: [], packId: , image: 'none', stage: 2, vehicleId:  },
    { id: 023, name: '', skillIds: [], packId: , image: 'none', stage: 3, vehicleId:  },
*/];
