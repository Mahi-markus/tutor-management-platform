import { useState, useEffect } from "react";

const TutorJobDetailsPage = () => {
  // Default job details (fallback data)
  const defaultJobDetails = {
    title: "Mathematics Tutor Needed",
    jobId: "12345",
    postedDate: "2025-02-25",
    location: "Dhaka, Bangladesh",
    medium: "English",
    class: "Class 10",
    studentGender: "Male",
    preferredTutor: "Male/Female",
    tutoringDays: "Monday, Wednesday, Friday",
    tutoringTime: "5:00 PM - 7:00 PM",
    numberOfStudents: 1,
    subjects: ["Mathematics", "Physics"],
    salary: "$100 per month",
    otherRequirements: "Must have prior experience in teaching high school students.",
  };

  // State to store job details
  const [jobDetails, setJobDetails] = useState(defaultJobDetails);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch("http://localhost:5000/details");

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        setJobDetails(data);
      } catch (err) {
        console.error("Error fetching job details:", err);
        // Keep defaultJobDetails if API fails
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-700">Loading job details...</p>
        </div>
      </div>
    );
  }

  // Main content with job details
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen py-8">
      <div className="w-full max-w-5xl">
        {/* Main content card */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-4">
          <h1 className="text-3xl font-bold text-center text-navy-800 mb-2">
            {jobDetails.title}
          </h1>
          <div className="text-center text-gray-600 mb-6">
            Job ID : {jobDetails.jobId} &nbsp;&nbsp; Posted at : {jobDetails.postedDate}
          </div>

          {/* Location */}
          <div className="flex justify-center items-center mb-8">
            <div className="flex items-center">
              <div className="text-red-500 mr-2">
                📍
              </div>
              <span className="text-xl font-semibold">{jobDetails.location}</span>
            </div>
          </div>

          {/* Job details grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <strong>Medium:</strong> {jobDetails.medium}
            </div>
            <div>
              <strong>Class:</strong> {jobDetails.class}
            </div>
            <div>
              <strong>Student Gender:</strong> {jobDetails.studentGender}
            </div>
            <div>
              <strong>Preferred Tutor:</strong> {jobDetails.preferredTutor}
            </div>
            <div>
              <strong>Tutoring Days:</strong> {jobDetails.tutoringDays}
            </div>
            <div>
              <strong>Tutoring Time:</strong> {jobDetails.tutoringTime}
            </div>
            <div>
              <strong>No of Students:</strong> {jobDetails.numberOfStudents}
            </div>
            <div>
              <strong>Subjects:</strong>{" "}
              {jobDetails.subjects.map((subject, index) => (
                <span key={index} className="px-2 py-1 bg-green-500 text-white text-xs rounded">
                  {subject}
                </span>
              ))}
            </div>
            <div>
              <strong>Salary:</strong> <span className="text-blue-500">{jobDetails.salary}</span>
            </div>
          </div>

          {/* Other Requirements */}
          {jobDetails.otherRequirements && (
            <div className="mb-6">
              <strong>Other Requirements:</strong>
              <p>{jobDetails.otherRequirements}</p>
            </div>
          )}

          {/* Apply Button */}
          <div className="text-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorJobDetailsPage;
