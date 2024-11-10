var _a, _b, _c, _d;
// Function to generate the resume
function generateResume(event) {
    event.preventDefault();
    // Get form data
    var username = document.getElementById('username').value;
    var profession = document.getElementById('Profession').value;
    var photoInput = document.getElementById('photo');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var cnic = document.getElementById('cnic').value;
    var degree = document.getElementById('degree').value;
    var school = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Fill in the resume fields
    document.getElementById('resumeUsername').innerText = username;
    document.getElementById('resumeProfession').innerText = profession;
    document.getElementById('resumeFullname').innerText = "Name: ".concat(name);
    document.getElementById('resumeEmail').innerText = "Email: ".concat(email);
    document.getElementById('resumePhone').innerText = "Phone: ".concat(phone);
    document.getElementById('resumeCNIC').innerText = "CNIC: ".concat(cnic);
    document.getElementById('resumeDegree').innerText = "Degree: ".concat(degree);
    document.getElementById('resumeEducation').innerText = "School: ".concat(school);
    document.getElementById('resumeExperiece').innerText = experience;
    document.getElementById('resumeSkills').innerText = skills;
    // Handle the image preview
    if (photoInput.files && photoInput.files[0]) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            document.getElementById('resumePhoto').src = reader_1.result;
        };
        reader_1.readAsDataURL(photoInput.files[0]);
    }
    // Display the resume and hide the form
    document.getElementById('resumeForm').classList.add('hidden');
    document.getElementById('resumePage').classList.remove('hidden');
}
// Functionality for the "Edit" button
(_a = document.getElementById('editButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    document.getElementById('resumeForm').classList.remove('hidden');
    document.getElementById('resumePage').classList.add('hidden');
});
// Functionality for the "Download PDF" button
(_b = document.getElementById('downloadpdf')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    // Hide buttons before print
    var buttons = ['editButton', 'downloadpdf', 'shareLinkButton', 'backButton'];
    buttons.forEach(function (buttonId) {
        document.getElementById(buttonId).style.display = 'none';
    });
    // Print and download as PDF
    window.print();
    // Restore buttons after print
    buttons.forEach(function (buttonId) {
        document.getElementById(buttonId).style.display = 'inline-block';
    });
});
// Functionality for the "Share" button
(_c = document.getElementById('shareLinkButton')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    if (navigator.share) {
        navigator.share({
            title: 'My Resume',
            text: 'Check out my resume!',
            url: window.location.href // Sharing the current page URL
        }).then(function () {
            console.log('Successfully shared');
        }).catch(function (error) {
            console.error('Error sharing:', error);
        });
    }
    else {
        alert('Web Share API not supported in this browser.');
    }
});
// Event listener for the form submission
(_d = document.getElementById('resumeForm')) === null || _d === void 0 ? void 0 : _d.addEventListener('submit', generateResume);
