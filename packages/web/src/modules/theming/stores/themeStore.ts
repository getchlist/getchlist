import { observable, computed } from "mobx"
import { defaultTheme, themeName, themes } from "../themes"
import { Store } from "../../../common/state/types/Store"

export class ThemeStore implements Store {
    @observable
    public themeName: themeName = defaultTheme

    @computed
    public get theme() {
        return themes[this.themeName]
    }

    public setTheme(name: themeName) {
        this.themeName = name
    }

    public reset() {
        this.themeName = defaultTheme
    }

    public next() {
        const themeNames = Object.keys(themes) as themeName[]
        const index =
            (themeNames.indexOf(this.themeName) + 1) % themeNames.length

        this.themeName = themeNames[index]
    }
}
