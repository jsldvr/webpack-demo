/**
 * Global scripts
 */

export class Global {
    constructor() {
        this.config = {
            "debug": true,
            "env": this.env(),
        }
    }

    init() {
        console.log('Global.init', this.config);
    }

    env() {
        return process.env.NODEcreateElementNV;
    }
}