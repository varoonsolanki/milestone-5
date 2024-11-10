document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    // Type assertion
    const firstnameElement = document.getElementById('firstname') as HTMLInputElement;
    const lastnameElement = document.getElementById('lastname') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const cityElement = document.getElementById('city') as HTMLInputElement;
    const countryElement = document.getElementById('country') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
      //**
    const usernameElement = document.getElementById(
        'username'
    ) as HTMLInputElement;
     
     if (profilePictureInput
          && countryElement
          && cityElement 
          && firstnameElement 
          && lastnameElement 
          && addressElement 
          && emailElement 
          && phoneElement 
          && educationElement 
          && experienceElement 
          && skillsElement
          && usernameElement)
          {
        
        const firstname = firstnameElement.value;
        const lastname = lastnameElement.value;
        const address = addressElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const city = cityElement.value;
        const country = countryElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        //**
        const username = usernameElement.value;
        const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`
         // Handle profile picture
    const profilePictureFile = profilePictureInput.files?.[0];
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Create Resume Output with the corrected template literals
        const resumeOutput = `
            <h2>Resume</h2>
             ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-picture">` : ''}
            <p><strong>First Name:</strong> <span id="edit-firstname" class="editable">${firstname}</span></p>
            <p><strong>last Name:</strong> <span id="edit-lastname" class="editable">${lastname}</span></p>
            <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
            <p><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
            <p><strong>Address:</strong> <span id="edit-address" class="editable">${address}</span></p>
            <p><strong>City:</strong> <span id="edit-city" class="editable">${city}</span></p>
            <p><strong>Country:</strong> <span id="edit-country" class="editable">${country}</span></p>
            
            <h3>Education</h3>
            <p id="edit-education" class="editable">${education}</p>
            
            <h3>Work Experience</h3>
            <p id="edit-experience" class="editable">${experience}</p>
            
            <h3>Skills</h3>
            <p id="edit-skills" class="editable">${skills}</p>
        `;
              // Display the resume output
        const resumeOutputElement = document.getElementById("resumeOutput");
        if(resumeOutputElement){
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden");
            // Create container for buttons
            const buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);

            // Add download PDF button
            const downloadButton = document.createElement("button")
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click",() => {
                window.print(); //open the print dialog, allowing the user to save as PDF.
});
buttonsContainer.appendChild(downloadButton);   

//Add Shareable Link Button
const shareLinkButton = document.createElement("button");
shareLinkButton.textContent = "copy Shareable Link ";
shareLinkButton.addEventListener("click", async () => {
    try{
        //Create a Unique shareable link (simulate it in this case)
        const shareableLink = `https://yourdomain.com/resumes/${firstname.replace(
            /\s+/g,
            "_"
        )}_cv.html`;
        //use clipboard API to copy the shareable Link 
        await navigator.clipboard.writeText(shareableLink);
        alert("Shareable link copied to clipboard!");
    }catch (err) {
        console.error("Failed to copy link:", err);
        alert("Failed to copy link to clipboard.Please try again.");
    }
});
buttonsContainer.appendChild(shareLinkButton);
} else {
    console.error("Resume output container not found");
}
} else  {
    console.error("Form elements are missing");
}
});












