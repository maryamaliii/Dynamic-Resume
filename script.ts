// Function to generate the resume
function generateResume(event: Event) {
    event.preventDefault();

    // Get form data
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const profession = (document.getElementById('Profession') as HTMLInputElement).value;
    const photoInput = (document.getElementById('photo') as HTMLInputElement);
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const cnic = (document.getElementById('cnic') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const school = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Fill in the resume fields
    (document.getElementById('resumeUsername') as HTMLElement).innerText = username;
    (document.getElementById('resumeProfession') as HTMLElement).innerText = profession;
    (document.getElementById('resumeFullname') as HTMLElement).innerText = `Name: ${name}`;
    (document.getElementById('resumeEmail') as HTMLElement).innerText = `Email: ${email}`;
    (document.getElementById('resumePhone') as HTMLElement).innerText = `Phone: ${phone}`;
    (document.getElementById('resumeCNIC') as HTMLElement).innerText = `CNIC: ${cnic}`;
    (document.getElementById('resumeDegree') as HTMLElement).innerText = `Degree: ${degree}`;
    (document.getElementById('resumeEducation') as HTMLElement).innerText = `School: ${school}`;
    (document.getElementById('resumeExperiece') as HTMLElement).innerText = experience;
    (document.getElementById('resumeSkills') as HTMLElement).innerText = skills;

    // Handle the image preview
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function () {
            (document.getElementById('resumePhoto') as HTMLImageElement).src = reader.result as string;
        };
        reader.readAsDataURL(photoInput.files[0]);
    }

    // Display the resume and hide the form
    (document.getElementById('resumeForm') as HTMLElement).classList.add('hidden');
    (document.getElementById('resumePage') as HTMLElement).classList.remove('hidden');
}

// Functionality for the "Edit" button
document.getElementById('editButton')?.addEventListener('click', () => {
    (document.getElementById('resumeForm') as HTMLElement).classList.remove('hidden');
    (document.getElementById('resumePage') as HTMLElement).classList.add('hidden');
});

// Functionality for the "Download PDF" button
document.getElementById('downloadpdf')?.addEventListener('click', () => {
    // Hide buttons before print
    const buttons = ['editButton', 'downloadpdf', 'shareLinkButton', 'backButton'];
    buttons.forEach(buttonId => {
        (document.getElementById(buttonId) as HTMLElement).style.display = 'none';
    });

    // Print and download as PDF
    window.print();

    // Restore buttons after print
    buttons.forEach(buttonId => {
        (document.getElementById(buttonId) as HTMLElement).style.display = 'inline-block';
    });
});

// Functionality for the "Share" button
document.getElementById('shareLinkButton')?.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'My Resume',
            text: 'Check out my resume!',
            url: window.location.href // Sharing the current page URL
        }).then(() => {
            console.log('Successfully shared');
        }).catch((error) => {
            console.error('Error sharing:', error);
        });
    } else {
        alert('Web Share API not supported in this browser.');
    }
});

// Event listener for the form submission
document.getElementById('resumeForm')?.addEventListener('submit', generateResume);
