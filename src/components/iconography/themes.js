import { FluentIconLib } from "./support/fluent-icons";
import { currentCourse } from "../../stores";
import { HeroIconLib } from "./support/hero-icons";
import { HalloweenIconLib } from "./support/halloween-icons";
let StandardIconLib = FluentIconLib;
export function setIconLib(iconLib) {
    StandardIconLib = iconLib;
}
export const themes = ["tutors", "tutors-dark", "tutors-dyslexia", "black", "lofi", "wireframe", "cyberpunk", "dracula"];
export const themeIcons = {
    "tutors": FluentIconLib,
    "tutors-dark": FluentIconLib,
    "tutors-dyslexia": FluentIconLib,
    "black": FluentIconLib,
    "lofi": HeroIconLib,
    "cyberpunk": FluentIconLib,
    "wireframe": FluentIconLib,
    "dracula": HalloweenIconLib,
};
export function getIcon(type) {
    let icon = StandardIconLib.default;
    if (currentIconLib[type]) {
        icon = currentIconLib[type];
    }
    else {
        if (StandardIconLib[type]) {
            icon = StandardIconLib[type];
        }
    }
    return icon;
}
export let currentIconLib = StandardIconLib;
currentCourse.subscribe(course => {
    if (course && course.lo && course.lo.properties.iconset) {
        currentIconLib = course.lo.properties.iconset;
    }
    else {
        currentIconLib = StandardIconLib;
    }
});
//# sourceMappingURL=themes.js.map