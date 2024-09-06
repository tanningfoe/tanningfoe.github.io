// Function to show the sidebar
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

// Function to hide the sidebar
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
//Fucntion to hide welcome message
function hideWelcomeMsg() {
    const WelcomeMsg = document.querySelector('.overlay-box');
    WelcomeMsg.style.display = 'none';
}
// Add event listeners to the buttons
document.addEventListener('DOMContentLoaded', () => {
    const showButton = document.getElementById('showSidebarBtn');
    const hideButton = document.getElementById('hideSidebarBtn');

    showButton.addEventListener('click', showSidebar);
    hideButton.addEventListener('click', hideSidebar);
});
