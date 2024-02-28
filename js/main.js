// Static data goes here
const MonumentNames = [
'Beb Alioua',
'Beb Bhar',
'Beb Bnet',
'Beb El Falla',
'Beb Jdid',
'Beb Laalouj',
'Beb Lkasbah',
'Beb Lkhadhra',
'Beb Mnara',
'Beb Saadoun'
];
const MonumentDescriptions = [
    'LOREM IPSUM 1',
    'LOREM IPSUM 2',
    'LOREM IPSUM 3',
    'LOREM IPSUM 4',
    'LOREM IPSUM 5',
    'LOREM IPSUM 6',
    'LOREM IPSUM 7',
    'LOREM IPSUM 8',
    'LOREM IPSUM 9',
    'LOREM IPSUM 10'
];

// Gettting refs to the page's elements
var MonumentName = document.getElementById('monument-name');
var MonumentText = document.getElementById('monument-description');
var appframe = document.getElementById("app-frame");

// Keeps track of the current monument
var currentSet = 0;

/*--Goes to next monument--*/
function next(){
    // Fading out
    MonumentName.animate({opacity:[1,0]},{duration:2000});
    MonumentText.animate({opacity:[1,0]},{duration:2000});
    
    // Changing text to next
    currentSet = (currentSet + 1) % 10;
    MonumentName.innerText = MonumentNames[currentSet];
    MonumentText.innerText = MonumentDescriptions[currentSet];

    // load next scene
    loadScene("Monument".concat(currentSet),{hierarchy:!0,settings:!1});

    // Fading in
    MonumentName.animate({opacity:[0,1]},{duration:2000})
    MonumentText.animate({opacity:[0,1]},{duration:2000});
}

/*--Goes to previous monument--*/
function previous(){
    // Fading out
    MonumentName.animate({opacity:[1,0]},{duration:2000});
    MonumentText.animate({opacity:[1,0]},{duration:2000});

    // Changing to previous (check to prevent negatives)
    if (currentSet == 0) {
        currentSet = 9;
    } else {
        currentSet = (currentSet - 1) % 10;
    }
    MonumentName.innerText = MonumentNames[currentSet];
    MonumentText.innerText = MonumentDescriptions[currentSet];

    // load previous scene
    loadScene("Monument".concat(currentSet),{hierarchy:!0,settings:!1});
    // Fade in
    MonumentName.animate({opacity:[0,1]},{duration:2000})
    MonumentText.animate({opacity:[0,1]},{duration:2000});
}