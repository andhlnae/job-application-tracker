// 1. Grab the elements we need from the page
const form = document.getElementById("job-form");
const jobList = document.getElementById("job-list");

// 2. This array is where all the applications live
let jobs = [];

// 3. Run this code when the form is submitted
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop the page from reloading and wipe out the data we just typed in

    // Build an object from what the user typed
    const job = {
        id: Date.now(), // unique number, useful for delete/edit later
        company: document.getElementById("company").value,
        role: document.getElementById("role").value,
        date: document.getElementById("date").value,
        status: document.getElementById("status").value,
    };

    jobs.push(job); // Add the new job to the array
    renderJobs(); // Update the screen with the new job
    form.reset(); // Clear the form for the next entry
});

// 4. Draw every job in the array to the page
function renderJobs() {
    jobList.innerHTML = "";

    jobs.forEach(function (job) {
        const card = document.createElement("article");
        card.classList.add("job-card");

        const company = document.createElement("h3"); 
        company.textContent = job.company;

        const role = document.createElement("p");
        role.textContent = job.role;

        const date = document.createElement("p");
        date.textContent = "Applied: " + (job.date || "no date"); // what does this do? If the user didn't enter a date, it will say "no date"

        const status = document.createElement("span");
        status.textContent = job.status;
        status.classList.add("Status", "status-" + job.status.toLowerCase()); // what does this do? It adds a class like "status-applied" or "status-interview" so we can style them differently

        card.append(company, role, date, status);
        jobList.appendChild(card); // what does this do? It adds the card to the page 
    });

}



