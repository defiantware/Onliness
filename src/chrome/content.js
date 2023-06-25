/*
 * Project: Onliness
 * File: content.js
 *
 */

const htmlEl = document.documentElement;

function updateConnectionStatus() {
    if (navigator.onLine) {
        if (htmlEl.classList.contains("onliness-offline")) {
            htmlEl.classList.remove("onliness-offline");
            if (htmlEl.classList.length === 0) {
                htmlEl.removeAttribute("class");
            }
        }
    } else {
        if (!htmlEl.classList.contains("onliness-offline")) {
            htmlEl.classList.add("onliness-offline");
        }
    }
}

updateConnectionStatus();

window.addEventListener("online",  updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);
