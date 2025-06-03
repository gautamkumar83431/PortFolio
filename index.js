const { MongoClient } = require('mongodb');

// MongoDB connection URL
const uri = "mongodb://localhost:27017"; // Change if using cloud (e.g., MongoDB Atlas)
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db("StudentDB");
        const students = db.collection("Student");

        // Insert a student
        const studentData = {
            id: "S001",
            name: "Rahul Kumar",
            age: 21,
            course: "BCA"
        };

        await students.insertOne(studentData);
        console.log("Student inserted!");

        // Fetch all students
        const allStudents = await students.find().toArray();
        console.log("All Students:");
        console.log(allStudents);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
