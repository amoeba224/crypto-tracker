import { atom } from "recoil";

export const isDarkAtom = atom({
    key: "isDark", // key 값은 unique 해야 함
    default: false,
})