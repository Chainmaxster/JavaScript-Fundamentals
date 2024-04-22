function getLearnerData(courseInfo, assignmentGroups, learnerSubmissions) {
    // Validate input data
    if (!courseInfo || !assignmentGroups || !learnerSubmissions) {
        throw new Error("Invalid input data. Please provide CourseInfo, AssignmentGroup, and LearnerSubmission.");
    }

    // Validate assignment groups
    for (const group of assignmentGroups) {
        if (group.course_id !== courseInfo.id) {
            throw new Error("Invalid assignment group: mismatching course ID.");
        }
    }

    // Initialize result array
    const result = [];

    // Iterate over learner submissions
    for (const submission of learnerSubmissions) {
        const learnerId = submission.learner_id;
        const learnerScores = {};
        let totalScore = 0;
        let totalPointsPossible = 0;

        // Iterate over assignment groups
        for (const group of assignmentGroups) {
            // Iterate over assignments within the group
            for (const assignment of group.assignments) {
                if (assignment.id === submission.assignment_id) {
                    const pointsPossible = assignment.points_possible;
                    // Check if assignment is past due
                    if (new Date(assignment.due_at) < new Date()) {
                        const submissionScore = submission.submission.score;
                        // Handle division by zero
                        const scorePercentage = pointsPossible !== 0 ? (submissionScore / pointsPossible) * 100 : 0;
                        learnerScores[assignment.id] = scorePercentage;
                        totalScore += submissionScore;
                        totalPointsPossible += pointsPossible;
                    }
                    break; // Exit inner loop once assignment is found
                }
            }
        }

        // Calculate weighted average
        const weightedAverage = totalPointsPossible !== 0 ? (totalScore / totalPointsPossible) * 100 : 0;

        // Construct learner data object
        const learnerData = {
            id: learnerId,
            avg: weightedAverage,
            ...learnerScores
        };

        // Push learner data to result array
        result.push(learnerData);
    }

    return result;
}

// Example usage:
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
    },
    // Add more assignment groups as needed
];

const learnerSubmissions = [
    {
        learner_id: 1,
        assignment_id: 1,
        submission: {
            submitted_at: "2024-04-25",
            score: 90
        }
    },
    // Add more learner submissions as needed
];

try {
    const result = getLearnerData(courseInfo, assignmentGroups, learnerSubmissions);
    console.log(result);
} catch (error) {
    console.error(error.message);
}

// Data Validation for mismatching course IDs, handling division by zero and handling potential errors
function getLearnerData(courseInfo, assignmentGroups, learnerSubmissions) {
    // Validate input data
    if (!courseInfo || !assignmentGroups || !learnerSubmissions) {
        throw new Error("Invalid input data. Please provide CourseInfo, AssignmentGroup, and LearnerSubmission.");
    }

    // Validate assignment groups
    for (const group of assignmentGroups) {
        if (group.course_id !== courseInfo.id) {
            throw new Error("Invalid assignment group: mismatching course ID.");
        }
    }

    // Initialize result array
    const result = [];

    // Iterate over learner submissions
    for (const submission of learnerSubmissions) {
        const learnerId = submission.learner_id;
        const learnerScores = {};
        let totalScore = 0;
        let totalPointsPossible = 0;

        // Iterate over assignment groups
        for (const group of assignmentGroups) {
            // Iterate over assignments within the group
            for (const assignment of group.assignments) {
                if (assignment.id === submission.assignment_id) {
                    const pointsPossible = assignment.points_possible;
                    // Check if points_possible is zero
                    if (pointsPossible === 0) {
                        throw new Error(`Assignment ${assignment.name} has points_possible set to 0.`);
                    }
                    // Check if assignment is past due
                    if (new Date(assignment.due_at) < new Date()) {
                        const submissionScore = submission.submission.score;
                        // Handle division by zero
                        const scorePercentage = (submissionScore / pointsPossible) * 100;
                        learnerScores[assignment.id] = scorePercentage;
                        totalScore += submissionScore;
                        totalPointsPossible += pointsPossible;
                    }
                    break; // Exit inner loop once assignment is found
                }
            }
        }

        // Calculate weighted average
        const weightedAverage = totalPointsPossible !== 0 ? (totalScore / totalPointsPossible) * 100 : 0;

        // Construct learner data object
        const learnerData = {
            id: learnerId,
            avg: weightedAverage,
            ...learnerScores
        };

        // Push learner data to result array
        result.push(learnerData);
    }

    return result;
}

// Example usage:
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
                points_possible: 0 // Example of points_possible set to 0
            }
        ]
    },
    // Add more assignment groups as needed
];

const learnerSubmissions = [
    {
        learner_id: 1,
        assignment_id: 1,
        submission: {
            submitted_at: "2024-04-25",
            score: 90
        }
    },
    // Add more learner submissions as needed
];

try {
    const result = getLearnerData(courseInfo, assignmentGroups, learnerSubmissions);
    console.log(result);
} catch (error) {
    console.error(error.message);
}

// Create a function named getLearnerData()

function getLearnerData(courseInfo, assignmentGroups, learnerSubmissions) {
    // Validate input data
    if (!courseInfo || !assignmentGroups || !learnerSubmissions) {
        throw new Error("Invalid input data. Please provide CourseInfo, AssignmentGroup, and LearnerSubmission.");
    }

    // Validate assignment groups
    for (const group of assignmentGroups) {
        if (group.course_id !== courseInfo.id) {
            throw new Error("Invalid assignment group: mismatching course ID.");
        }
    }

    // Initialize result array
    const result = [];

    // Iterate over learner submissions
    for (const submission of learnerSubmissions) {
        const learnerId = submission.learner_id;
        const learnerScores = {};
        let totalScore = 0;
        let totalPointsPossible = 0;

        // Iterate over assignment groups
        for (const group of assignmentGroups) {
            // Iterate over assignments within the group
            for (const assignment of group.assignments) {
                if (assignment.id === submission.assignment_id) {
                    const pointsPossible = assignment.points_possible;
                    // Check if points_possible is zero
                    if (pointsPossible === 0) {
                        throw new Error(`Assignment ${assignment.name} has points_possible set to 0.`);
                    }
                    // Check if assignment is past due
                    if (new Date(assignment.due_at) < new Date()) {
                        const submissionScore = submission.submission.score;
                        // Handle division by zero
                        const scorePercentage = (submissionScore / pointsPossible) * 100;
                        learnerScores[assignment.id] = scorePercentage;
                        totalScore += submissionScore;
                        totalPointsPossible += pointsPossible;
                    }
                    break; // Exit inner loop once assignment is found
                }
            }
        }

        // Calculate weighted average
        const weightedAverage = totalPointsPossible !== 0 ? (totalScore / totalPointsPossible) * 100 : 0;

        // Construct learner data object
        const learnerData = {
            id: learnerId,
            avg: weightedAverage,
            ...learnerScores
        };

        // Push learner data to result array
        result.push(learnerData);
    }

    return result;
}

// Example usage:
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
    },
    // Add more assignment groups as needed
];

const learnerSubmissions = [
    {
        learner_id: 1,
        assignment_id: 1,
        submission: {
            submitted_at: "2024-04-25",
            score: 90
        }
    },
    // Add more learner submissions as needed
];

try {
    const result = getLearnerData(courseInfo, assignmentGroups, learnerSubmissions);
    console.log(result);
} catch (error) {
    console.error(error.message);
}