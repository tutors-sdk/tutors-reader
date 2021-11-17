import { writable } from "svelte/store";
const weekType = {
    title: "",
    type: "",
    date: "",
    dateObj: null
};
export const revealSidebar = writable(false);
export const profile = writable({ show: false, bar: [] });
export const week = writable(weekType);
export const courseUrl = writable("");
export const currentCourse = writable(null);
export const currentLo = writable(null);
export const studentsOnline = writable(0);
export const live = writable(false);
export const layout = writable("");
//# sourceMappingURL=stores.js.map