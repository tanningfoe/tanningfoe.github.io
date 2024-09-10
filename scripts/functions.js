//Function to hide bottom banner
function hideBottonBanner() {
    const welcomemsg = document.querySelector('.bottom-banner');
    welcomemsg.style.visibility = 'hidden';
}
//Function to show bottom banner
function showBottomBanner() {
    const welcomemsg = document.querySelector('.bottom-banner');
    welcomemsg.style.visibility = 'visible';
}

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

//Function to hide skills box
function hideSkillsBox() {
    const skillsbox = document.querySelector('.skills-box');
    skillsbox.style.display = 'none';
}
//Function to show skills box
function showSkillsBox() {
    const skillsbox = document.querySelector('.skills-box');
    skillsbox.style.display = 'flex';
}

//Function to hide about-me box
function hideAboutMeBox() {
    const aboutbox = document.querySelector('.about-me-box');
    aboutbox.style.display = 'none';
}
//Function to show about-me box
function showAboutMeBox() {
    const aboutbox = document.querySelector('.about-me-box');
    aboutbox.style.display = 'flex';
}   
// Function to show the sidebar
function showSidebar() {
    const welcomemsg = document.querySelector('.welcome-msg');
    const skillsmsg  = document.querySelector('.skills-box');
    const aboutbox  = document.querySelector('.about-me-box');
    if (welcomemsg != null)
        hideWelcomeMsg();
    if (skillsmsg != null)
        hideSkillsBox();
    if (aboutbox != null)
        hideAboutMeBox();
    hideBottonBanner();
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
// Function to hide the sidebar
function hideSidebar() {
    const welcomemsg = document.querySelector('.welcome-msg');
    const skillsbox  = document.querySelector('.skills-box');
    const aboutbox  = document.querySelector('.about-me-box');
    if (welcomemsg != null)
        showWelcomeMsg();
    if (skillsbox != null)
        showSkillsBox();
    if (aboutbox != null)
        showAboutMeBox();
    showBottomBanner();
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';   
}