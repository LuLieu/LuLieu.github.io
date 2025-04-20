document.getElementById("introForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const form = e.target;
    const data = new FormData(form);
  
    
    const firstName = data.get("firstName");
    const middleInitial = data.get("middleInitial");
    const lastName = data.get("lastName");
  
    const fullName = middleInitial
      ? `${firstName} ${middleInitial}. ${lastName}`
      : `${firstName} ${lastName}`;
  
    const mascot = data.get("mascot");
    const caption = data.get("imageCaption");
  
    
    const courseEntries = [...document.querySelectorAll(".courseEntry")];

    const courseList = courseEntries.map(entry => {
    const id = entry.querySelector(".courseID")?.value.trim();
    const name = entry.querySelector(".courseName")?.value.trim();
    const reason = entry.querySelector(".courseReason")?.value.trim();

  return `<li><strong>${id}</strong>: ${name} — ${reason}</li>`;
}).join("");
  
    
    const outputHTML = `
      <h2>Introduction</h2>
      <h3>${fullName} || ${mascot}</h3>
      <img src="${document.getElementById("imagePreview").src}" alt="${caption}" />
      <p><em>${caption}</em></p>
      <ul>
        <li><strong>Personal Background:</strong> ${data.get("personalBackground")}</li>
        <li><strong>Professional Background:</strong> ${data.get("professionalBackground")}</li>
        <li><strong>Academic Background:</strong> ${data.get("academicBackground")}</li>
        <li><strong>Background in this subject:</strong> ${data.get("webBackground")}</li>
        <li><strong>Primary Computer Platform:</strong> ${data.get("platform")}</li>
        <li><strong>Courses I'm Taking & Why:</strong><ul>${courseList}</ul></li>
        <li><strong>Funny Thing:</strong> ${data.get("funnyThing")}</li>
        <li><strong>I'd also like to share:</strong> ${data.get("anythingElse")}</li>
      </ul>
    `;
  
    document.getElementById("result").innerHTML = outputHTML;
    form.style.display = "none";
  });

  document.getElementById("imageInput").addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("imagePreview").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  function addCourse() {
    const div = document.createElement("div");
    div.className = "courseEntry";
    div.innerHTML = `
      <label>Course ID: <input type="text" class="courseID" /></label>
      <label>Course Name: <input type="text" class="courseName" /></label>
      <label>Reason: <input type="text" class="courseReason" /></label>
      <button type="button" onclick="this.parentElement.remove()">Delete</button>
    `;
    document.getElementById("courses").appendChild(div);
  }