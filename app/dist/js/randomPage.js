"use strict";
/* //creating an array for the available pages
const availablePages:string[] =
["/dist/pages/giveIt.html",
,"/dist/pages/breakthrough.html",
"/dist/pages/letsbounce.html"]

var random = availablePages[Math.floor(Math.random()*availablePages.length)]
if(random === undefined)


console.log(random)
 */
//dom collection
const randomTrackText1 = document.getElementById("randomTrackTemplate1");
const randomTrackText2 = document.getElementById("randomTrackTemplate2");
//link collection
const availableLinks = ["/dist/pages/giveIt.html",
    "/dist/pages/breakthrough.html", "/dist/pages/escapingFromReality.html", "/dist/pages/impulse.html",
    "/dist/pages/letsbounce.html", "/dist/pages/itsOver.html", "/dist/pages/thejourney.html",
    "/dist/pages/violence.html", "/dist/pages/euphoria.html"];
//obj reference
let currentLink = "";
//random link generator
const getRandomLink = (a) => {
    return a[Math.round(Math.random() * a.length)];
};
//saving a new reference for the link with the random index
currentLink = getRandomLink(availableLinks);
console.log(currentLink);
//DOM handling
const createDomElement = (element) => {
    if (currentLink != undefined)
        return element.setAttribute("href", currentLink);
    element.setAttribute("href", availableLinks[0]);
};
createDomElement(randomTrackText1);
createDomElement(randomTrackText2);
