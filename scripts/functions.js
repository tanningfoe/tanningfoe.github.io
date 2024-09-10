// JS global functions template, global variables set before function

const bottombanner = document.querySelector('.bottom-banner');
//Function to hide bottom banner
function hideBottonBanner() {
    bottombanner.style.visibility = 'hidden';
}
//Function to show bottom banner
function showBottomBanner() {
    bottombanner.style.visibility = 'visible';
}

const welcomemsg = document.querySelector('.welcome-msg');
//Function to hide welcome message
function hideWelcomeMsg() {
    const welcomemsg = document.querySelector('.welcome-msg');
    welcomemsg.style.display = 'none';
}
//Function to show welcome message
function showWelcomeMsg() {
    const welcomemsg = document.querySelector('.welcome-msg');
    welcomemsg.style.display = 'flex';
}

const skillsbox = document.querySelector('.skills-box');
//Function to hide skills box
function hideSkillsBox() {
    skillsbox.style.display = 'none';
}
//Function to show skills box
function showSkillsBox() {
    skillsbox.style.display = 'flex';
}

const aboutbox  = document.querySelector('.about-me-box');
//Function to hide about-me box
function hideAboutMeBox() {
    aboutbox.style.display = 'none';
}
//Function to show about-me box
function showAboutMeBox() {
    aboutbox.style.display = 'flex';
}   

const sidebar = document.querySelector('.sidebar');
// Function to show the sidebar in tablets and phones
function showSidebar() {

    //Fix display check
    if (welcomemsg != null)
        hideWelcomeMsg();
    if (skillsbox != null)
        hideSkillsBox();
    if (aboutbox != null)
        hideAboutMeBox();
    if (bottombanner != null)

    // Hide bottom banner
    hideBottonBanner();

    // Set sidebar visible
    sidebar.style.display = 'flex';
}

// Function to hide the sidebar
function hideSidebar() {

    // Fix display check
    if (welcomemsg != null)
        showWelcomeMsg();
    if (skillsbox != null)
        showSkillsBox();
    if (aboutbox != null)
        showAboutMeBox();
    
    // Show bottom banner
    showBottomBanner();

    // Set sidebar invisble
    sidebar.style.display = 'none';   
}