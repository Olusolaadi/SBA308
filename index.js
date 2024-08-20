const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

  function getLearnerData(CI, AG, LS) {

    // Do course IDs match?
    try {
        if (AG.course_id !== CI.id) {
          throw(`Invalid Input!`);
        }
      }
      catch(err) {
        return err;
      }


      const ArrOfObjs = [];

      // get learner IDs and assignment IDs.

      const learner_id = id(LS);
      const assignments = assignid(AG.assignments);

        let getIdAssignment = [];
        LS.forEach(submission => {
            if (!getIdAssignment.includes(submission.learner_id)) {
                getIdAssignment.push(submission.learner_id);
            }
            if (!getIdAssignment.includes(submission.assignment_id)) {
                getIdAssignment.push(submission.assignment_id);
            }
        });
     
        return getIdAssignment;


    }

   

// Get scorees from the LearnerSubmissions.
    const  score = score(submission);


function score(submissions) {
        let score = 0;
        submissions.forEach(submission => {
            score += submission.score;

        });
        return score;
    }

    // points possible cannot be 0. 
    const pointsPossible = pointsPossible(assignments);
    function pointsPossible(assignments) {
        assignments.forEach(assignment => {
       if(pointsPossible = 0) {
        throw new Error("Points possible cannot be 0.");
       }

       return pointsPossible += assignment.points_possible;
    });
}

// Get average.
function average(score) {
    let avg = 0;
    score.forEach(score => {
        totalAvg += score;
    });
    avg = score / pointsPossible;
    return avg;

    }

// Calculate the average score for each learner
for (const l_id in ArrOfObjs) {
    const learner = ArrOfObjs[l_id];
    let t_avg = 0; 
    
    for (const a_id in learner.scores) {
      t_avg += learner.scores[a_id];
    }
    t_avg /= learner.no_assign;
    
    // Add the average score to the learner data
    ArrOfObjs[l_id] = {
      id: learner.id,
      avg: t_avg,
      ...learner.scores 
    };
    }