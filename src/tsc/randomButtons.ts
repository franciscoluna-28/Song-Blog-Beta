//dom setup
const buttonDiv: HTMLDivElement | any = document.getElementById("pageButtons");
const domButtons = buttonDiv?.getElementsByTagName("a")
const myButtons: HTMLButtonElement[] = Array.from(domButtons)




//creating an array for the available tracks 
const availableTracks: {name: string, link: string, id: number} [] = [
    {id: 1, name: "GIVE IT(REMIX)", link: "https://www.youtube.com/watch?v=B9iaNmDOIgA"},
    {id: 2, name: "BREAKTHROUGH", link: "https://www.youtube.com/watch?v=G-HXHYVVxwM"},
    {id: 3, name: "EUPHORIA", link: "https://www.youtube.com/watch?v=kfM34omVpME"},
    {id: 4, name: "VIOLENCE", link: "https://soundcloud.com/officialxfran/violence-original-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"},
    {id: 5, name: "ESCAPING FROM REALITY", link: "https://www.youtube.com/watch?v=FnV-aPZZ2ps"},
    {id: 6, name: "IMPULSE", link: "https://www.youtube.com/watch?v=Ulzwi7humQA"},
    {id: 7, name: "IT'S OVER", link: "https://www.youtube.com/watch?v=SQWIT77GN78"},
    {id: 8, name: "LET'S BOUNCE", link: "https://soundcloud.com/officialxfran/lets-bounce-original-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"},
    {id: 9, name: "THE JOURNEY", link: "https://www.youtube.com/watch?v=NhLOFKaAoVw"}
]

//maps
let myIDs: number[] = availableTracks.map(track => track.id) 
const myNames: string[] = availableTracks.map(track => track.name)
const myLinks: string[] = availableTracks.map(track => track.link)


//random ID generator 
const shuffledArray = myIDs
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)


//randomizing each button individually
myButtons.forEach(button => {
    const availableID: number | undefined = shuffledArray.shift();
    const randomSet: any  = availableTracks.find(Element => Element.id === availableID) //Matching an ID to the 
    //availableTracks array to get the metadata
    //once we get the metadata is easy to access to it using dom properties
    button.textContent = randomSet?.name //Dom text content
    button.setAttribute("href", randomSet?.link) //Dom link 
    })
   

































































/* //global IDs
const availableIDs = availableTracks.map(({id}) => ({id}))


//global set for randomizing
let nums = new Set<number>();
while(nums.size < 3) {
  nums.add(Math.floor(Math.random() * availableIDs.length) + 1);
}

//node reference for the set
let randomSet: any = ""


//generating a random set according to the available IDs
const randomSetGenerator = (element: Set<number>) => {
    element.forEach(n => {
        randomSet = availableTracks.find(Element => Element.id === n)
        console.log(randomSet)
})
}

//global object

const randomButtonGenerator = () => {
 //random sets to use within the function
    randomSetGenerator(nums)
    myButtons.forEach(b => {
    });
}







 */























































/* let randomButtonHandler = function(){ 
    myButtons.forEach(b => {
        randomObjectFromID(b)
        domHandler(b)
        
        function randomObjectFromID(button: HTMLButtonElement): any {
            nums.forEach(n => {
                const randomID = availableTracks.find(Element => Element.id === n)
                console.log(randomID)
                button.textContent = randomID?.name
            })
        } 

        function domHandler(b){

        } */
/* })}



randomButtonHandler()
 */


/* 

    function domHandler(): void {
        button.textContent = randomID.name
        const trackLink = document.createElement("a")
        trackLink.href = randomID?.link
        button.append(trackLink)
        console.log(randomID)

    } return domHandler */














/* let keys = Array.from(mainButtonData.keys());
const randomStuff = keys[Math.floor(Math.random() * keys.length)]

const index = mainButtonData.findIndex(el => el.id === randomStuff) */

















