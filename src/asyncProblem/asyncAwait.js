import studentData from './data/students'
import evaluationData from './data/evaluations'

export async function getStudentsAndScoresFromClassroom(id = 75) {
  try {
    const students = await getStudentsAsync()
    const studentsInClassroom = students.filter((student) => student.classroomId === id)
    const evaluations = await studentsInClassroom.reduce(async (previousPromise, student) => {
        // Because of the async calls in here, we must wait for each to finish otherwise the accumulator will be a Promise
        // after the first iteration
        const summaryArray = await previousPromise
        const studentEvals = await getEvaluationsByStudent(student.id)

        const calculated = {
          name: student.name,
          id: student.id,
          average: studentEvals.reduce((aggregate, e) => e.score + aggregate, 0) / studentEvals.length,
        }

        summaryArray.push(calculated)

        return summaryArray
      }, Promise.resolve([]))

    console.log('evaluations ', evaluations)
  } catch (err) {
    console.log('Error with students ', err)
  }
}

// Mocking API calls
function getStudentsAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(studentData), 1000)
  })
}

function getEvaluationsByStudent(id) {
  const evalsForStudent = evaluationData.filter((e) => e.studentId === id)
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(evalsForStudent), 0)
  })
}
