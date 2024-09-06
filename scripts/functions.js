// Function to show the sidebar
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const bottombanner = document.querySelector('.bottom-banner');
    bottombanner.style.display = 'none';
    sidebar.style.display = 'flex';
}

// Function to hide the sidebar
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const bottombanner = document.querySelector('.bottom-banner');
    bottombanner.style.display = 'flex';
    sidebar.style.display = 'none';
}
//Function to hide welcome message
function hideWelcomeMsg() {
    const welcomemsg = document.querySelector('.overlay-box');
    welcomemsg.style.display = 'none';
}
// Add event listeners to the buttons
document.addEventListener('DOMContentLoaded', () => {
    const showButton = document.getElementById('showSidebarBtn');
    const hideButton = document.getElementById('hideSidebarBtn');

    showButton.addEventListener('click', showSidebar);
    hideButton.addEventListener('click', hideSidebar);
});
