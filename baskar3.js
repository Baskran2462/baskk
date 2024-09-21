const data = {
    name: "N. Baskaran",
    phone: "8344054483",
    email: "bn0554331@gmail.com",
    address: "Plot No 5, Srinivasa Street, Madurai 14",
    languages: ["English", "Tamil"],
    education: [
        { degree: "Master of Computer Application", description: "Enthusiastic and dedicated MCA student..." },
        { degree: "Bachelor of Science (B.Sc.) in Physics", description: "" },
        { degree: "HSC - CEOA Higher Secondary School, Madurai", description: "" },
        { degree: "SSLC - CEOA Higher Secondary School, Madurai", description: "" }
    ],
    skills: [
        "Web Technologies: HTML, CSS, JavaScript",
        "Basics in cloud computing",
        "Tools: Git, Visual Studio Code",
        "Problem-solving",
        "Teamwork, Time Management, Adaptability"
    ],
};

function createProfile() {
    const leftSection = document.getElementById('left-section');
    leftSection.innerHTML = `
        <div class="profile">
            <img src="c:/Users/User/Downloads/myimage.jfif" alt="Profile Picture">
            <h2>ABOUT ME</h2>
            <h1 class="name">${data.name}</h1>
            <i class="fa-solid fa-phone">${data.phone}</i><br>
            <li><a href="mailto:${data.email}">${data.email}</a></li>
            <li><i class="fa-solid fa-location-dot"></i>${data.address}</li>
            <h3>Languages</h3>
            ${data.languages.map(lang => `<p>${lang}</p>`).join('')}
        </div>
    `;
}

function createEducation() {
    const rightSection = document.getElementById('right-section');
    let educationContent = '<h3>Education</h3>';
    data.education.forEach(item => {
        educationContent += `<h4>• ${item.degree}</h4>`;
        if (item.description) {
            educationContent += `<p>${item.description}</p>`;
        }
    });
    educationContent += '<div class="soft"><h3>Skills/Soft Skills</h3>';
    data.skills.forEach(skill => {
        educationContent += `<h4>• ${skill}</h4>`;
    });
    educationContent += '</div>';
    rightSection.innerHTML = educationContent;
}

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', () => {
    createProfile();
    createEducation();
});
