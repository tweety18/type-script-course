"use strict";
const student1 = {
    id: '1',
    name: 'Rayn Gosling',
    age: 18
};
const student2 = {
    id: '2',
    name: 'Jane Smith',
    age: 22
};
const student3 = {
    id: '3',
    name: 'Alice Johnson',
    age: 19
};
const record1 = {
    students: {
        '1': student1,
        '2': student2,
        '3': student3
    },
    grades: {
        '1': { Math: 90, Science: 85, Literature: 88, History: 92 },
        '2': { Math: 95, Science: 80, Literature: 87, History: 90 },
        '3': { Math: 78, Science: 82, Literature: 91, History: 85 }
    }
};
const getStudentGrades = (universityRecord, studentId) => {
    return universityRecord.grades[studentId];
};
getStudentGrades(record1, '2');
const getAverageGrade = (universityRecord, subject) => {
    const subjects = ['Math', 'Science', 'Literature', 'History'];
    const totals = { Math: 0, Science: 0, Literature: 0, History: 0 };
    const counts = { Math: 0, Science: 0, Literature: 0, History: 0 };
    for (const studentId in universityRecord.grades) {
        const grades = universityRecord.grades[studentId];
        for (const subject of subjects) {
            if (grades.hasOwnProperty(subject)) {
                totals[subject] += grades[subject];
                counts[subject] += 1;
            }
        }
    }
    const averages = { Math: 0, Science: 0, Literature: 0, History: 0 };
    for (const subject of subjects) {
        averages[subject] = totals[subject] / counts[subject];
    }
    return parseFloat(averages[subject].toFixed(2));
};
getAverageGrade(record1, 'Math');
