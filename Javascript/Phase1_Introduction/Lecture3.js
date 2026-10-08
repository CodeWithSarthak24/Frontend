// Variables and Data Types in JavaScript

const job = "AI/ML Developer";
console.log("Job : " + job);

// job = "Data Scientist";
// reassigning the value of job will result in an error because job is declared as a constant

// console.log(job);

const section = {
    name: "Sarthak sen",
    jobRole: "Java Full Stack Developer",
    Experience: "2 years"
};

// console.log("Details: " + section);

console.log("Name: " + section.name + "\n" + "Job Role : " + section.jobRole
     + "\n" + "Experience : " + section.Experience);

     section.name = "Senior Sarthak Sen";

     console.log("Updated Name: " + section.name + "\n" + "Job Role : " + section.jobRole
     + "\n" + "Experience : " + section.Experience);

