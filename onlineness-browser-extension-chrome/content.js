/*
 * Project: Onlineness
 * File: content.js
 *
 */

const htmlEl = document.documentElement;

function updateConnectionStatus() {
    if (navigator.onLine) {
        if (htmlEl.classList.contains("onlineliness-offline")) {
            htmlEl.classList.remove("onlineliness-offline");
            if (htmlEl.classList.length === 0) {
                htmlEl.removeAttribute("class");
            }
        }
    } else {
        if (!htmlEl.classList.contains("onlineliness-offline")) {
            htmlEl.classList.add("onlineliness-offline");
        }   
    }
}

updateConnectionStatus();

window.addEventListener("online",  updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);
