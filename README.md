# JavaScript-Fundamentals
This application provides a function named `getLearnerData()` that accepts data related to a course, assignment groups, and learner submissions. It processes this data to calculate the weighted average scores for each learner, along with the scores for individual assignments. The function ensures data validity, handles potential errors, and returns the formatted result as an array of objects.

## Usage

To use the `getLearnerData()` function:

1. Provide the required input parameters in the following order:
   - CourseInfo: Information about the course, including ID and name.
   - AssignmentGroup: Information about assignment groups within the course, including group ID, name, course ID, group weight, and assignments.
   - LearnerSubmission: An array of learner submissions, each containing learner ID, assignment ID, submission details (submitted date and score).

2. Call the function with the provided parameters.

3. The function will process the data, calculate the weighted averages, and return the formatted result as an array of objects, each containing the learner ID, weighted average score, and individual assignment scores.

## Example

```javascript
const courseInfo = {
    id: 1,
    name: "Sample Course"
};

const assignmentGroups = [
    {
        id: 1,
        name: "Homework",
        course_id: 1,
        group_weight: 30,
        assignments: [
            {
                id: 1,
                name: "Homework 1",
                due_at: "2024-04-30",
                points_possible: 100
            },
            {
                id: 2,
                name: "Homework 2",
                due_at: "2024-05-10",
                points_possible: 80
            }
        ]
    }
];

const learnerSubmissions = [
    {
        learner_id: 1,
        assignment_id: 1,
        submission: {
            submitted_at: "2024-04-25",
            score: 90
        }
    }
];

try {
    const result = getLearnerData(courseInfo, assignmentGroups, learnerSubmissions);
    console.log(result);
} catch (error) {
    console.error(error.message);
}