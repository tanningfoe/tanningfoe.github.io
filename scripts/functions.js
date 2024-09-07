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
    const welcomemsg = document.querySelector('.overlay-box');
    welcomemsg.style.display = 'none';
}
//Function to show welcome message
function showWelcomeMsg() {
    const welcomemsg = document.querySelector('.overlay-box');
    welcomemsg.style.display = 'flex';
}

// Function to show the sidebar
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    hideWelcomeMsg();
    hideBottonBanner();
    sidebar.style.display = 'flex';
}
// Function to hide the sidebar
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    showWelcomeMsg();
    showBottomBanner();
}
