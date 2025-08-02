function generateResume() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const school = document.getElementById('school').value;
    const degree = document.getElementById('degree').value;
    const graduationYear = document.getElementById('graduationYear').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
    const yearsWorked = document.getElementById('yearsWorked').value;

    const resumeOutput = `
        <h2>${fullName}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Education</h3>
        <p>${degree}, ${school} (${graduationYear})</p>
        <h3>Experience</h3>
        <p>${jobTitle} at ${company} (${yearsWorked})</p>
    `;

    document.getElementById('resumeOutput').innerHTML = resumeOutput;
}
