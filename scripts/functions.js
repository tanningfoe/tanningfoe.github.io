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

// Flag to prevent multiple fade-ins during navigation
let alreadyLoaded = false;

// Define the function that will trigger the fade-in effect
function fadeInPage() {
    var contentBox = document.getElementById("content_msgs");

    // Set opacity for both elements to trigger fade-in
    contentBox.style.opacity = 1;
}

// Window onload event: Ensure fade-in only happens once on page load
window.onload = function() {
    if (!alreadyLoaded) {
        fadeInPage(); // Trigger fade-in effect
        alreadyLoaded = true; // Set flag to prevent repeated fade-ins
    }
}

document.querySelectorAll('.expand-button').forEach(button => {
    button.addEventListener('click', function() {
        const paragraph = this.nextElementSibling;  // The paragraph right after the button

        if (paragraph.style.display === 'none' || paragraph.style.display === '') {
            paragraph.style.display = 'block';  // Show the paragraph
            // this.textContent = 'Collapse';  // Change button text
        } else {
            paragraph.style.display = 'none';  // Hide the paragraph
            this.textContent = '...';  // Reset button text to '...'
        }
    });
});