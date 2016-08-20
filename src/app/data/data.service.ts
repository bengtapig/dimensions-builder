import { Injectable } from '@angular/core';
import { Pack, Minifig, Skill } from './data';
import { Abilities } from './ability';
import { minifigs, skills, packs } from './static-data';

@Injectable()
export class DataService {
    packMap: { [id: number] : Pack; } = null;
    minifigMap: { [id: number] : Minifig; } = null;
    minifigs: Minifig[];
    skillMap: { [id: number] : Skill; } = null;
    skills: Skill[];

    constructor() {
        this.ensureLoaded();
    }

    ensureLoaded() {
        if (this.packMap === null) {
            this.packMap = {};
            for (let pack of packs) {
                let p = Object.assign({}, pack);
                p.minifigs = [];
                if (pack.id in this.packMap) {
                    console.log('pack ' + pack.id + ' is already in packMap');
                }
                this.packMap[pack.id] = p;
            }

            this.skillMap = {};
            this.skills = [];
            for (let data of skills) {
                let skill = Object.assign({}, data);
                skill.providers = [];
                this.skillMap[skill.id] = skill;
                this.skills.push(skill);
            }

            this.minifigMap = {};
            this.minifigs = [];
            for (let data of minifigs) {
                let minifig: Minifig = Object.assign({}, data);
                minifig.skills = this.getSkills(data.skillIds);
                for (let skill of minifig.skills) {
                    skill.providers.push(minifig);
                }

                let pack = this.packMap[minifig.packId];
                if (pack !== undefined) {
                    pack.minifigs.push(minifig.id);
                } else {
                    console.log('cannot find pack ' + minifig.packId);
                }

                this.minifigMap[minifig.id] = minifig;
                this.minifigs.push(minifig);
            }
        }
    }

    getPack(id: number) {
        return this.packMap[id];
    }

    getAllPacks() {
        return packs;
    }

    getMinifig(id: number) {
        return this.minifigMap[id];
    }

    getMinifigs(ids: number[]) {
        let a: Minifig[] = [];
        for (let id of ids) {
            if (id in this.minifigMap) {
                a.push(this.minifigMap[id]);
            }
        }
        return a;
    }

    getAllMinifigs() {
        return this.minifigs;
    }

    getSkills(ids: number[]) {
        let a: Skill[] = [];
        for (let id of ids) {
            if (id in this.skillMap) {
                a.push(this.skillMap[id]);
            }
        }
        return a;
    }

    getAllSkills() {
        return this.skills;
    }

    getMainAbilities(except: Abilities) {
        let result = new Abilities(this.getSkills([46, 32, 36, 35, 31, 37, 38, 42]));
        if (except !== null) {
            result.removeRange(except);
        }
        return result;
    }

    getImportantAbilities(except: Abilities) {
        let result = new Abilities(this.getSkills([2, 4, 5, 6, 7, 10, 12, 13, 14, 17, 18]));
        if (except !== null) {
            result.removeRange(except);
        }
        return result;
    }

    getUniqueAbilities(except: Abilities) {
        let result = new Abilities([]);
        for (let skill of this.skills) {
            if (skill.providers.length == 1 && except !== null && !except.contains(skill)) {
                result.add(skill);
            }
        }
        return result;
    }

    getAbilities(except: Abilities) {
        let result = new Abilities(this.getAllSkills());
        if (except !== null) {
            result.removeRange(except);
        }
        return result;
    }
}
