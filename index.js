
// function scrollToDiv(id) {
//     console.log({ id });
//     var targetDiv = document.getElementById(id);
//     targetDiv.scrollIntoView();
// }

const scrollToTop = () => {
    var targetDiv = document.getElementById('body');
    targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
const scrollToAbout = () => {
    var targetDiv = document.getElementById('About');
    targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
const scrollToExperience = () => {
    var targetDiv = document.getElementById('Experience');
    targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
const scrollToContact = () => {
    var targetDiv = document.getElementById('Contact');
    targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
const downloadPDF = () => {
    return null;
}