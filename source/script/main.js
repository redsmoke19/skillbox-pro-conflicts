import "../scss/style.scss"
import {iosVhFix} from "./utils/ios-vh-fix.js";
import {ScrollLock} from "./utils/scroll-lock.js";
import {initSearch} from "@/script/modules/search.js";
import {initSort} from "@/script/modules/sort.js";
import {initFilter} from "@/script/modules/filter.js";

window.addEventListener('DOMContentLoaded', () => {
  window.scrollLock = new ScrollLock();
  iosVhFix();

  console.log('Проверка работа скриптов');

  window.addEventListener('load', () => {
    initSort();
    initSearch();
    initFilter();
  });
});
