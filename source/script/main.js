import "../scss/style.scss"
import {ScrollLock} from "./utils/scroll-lock.js";
import {initSort} from "@/script/modules/sort.js";
import {initFilter} from "@/script/modules/filter.js";
import {iosVhFix} from "./utils/ios-vh-fix.js";

window.addEventListener('DOMContentLoaded', () => {
  window.scrollLock = new ScrollLock();
  iosVhFix();

  window.addEventListener('load', () => {
    console.log('Проверка работы скриптов');
    initFilter();
    initSort();
  });
});
