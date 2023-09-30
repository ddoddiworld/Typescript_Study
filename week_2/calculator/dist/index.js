"use strict";
function assignGrade(average) {
    //평균이 90점 이상이면 “A”, 80점 이상이면 “B”, 70점 이상이면 “C”, 60점 이상이면 “D”, 그 이하면 “F”를 주는 로직으로 코드를 작성해보죠!
    if (average >= 90) {
        return "A";
    }
    else if (average >= 80) {
        return "B";
    }
    else if (average >= 70) {
        return "C";
    }
    else if (average >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
function calculateAverage(student) {
    const sum = student.scores.korean + student.scores.math + student.scores.society + student.scores.science + student.scores.english / 5;
    const average = sum / Object.keys(student.scores).length;
    return average;
}
function createStudent(name, age, korean, math, society, science, english) {
    return {
        name,
        age,
        scores: {
            korean,
            math,
            society,
            science,
            english,
        },
    };
}
function printResult(student) {
    const average = calculateAverage(student); //  평균
    const grade = assignGrade(average); // 학점
    console.log(`${student.name} (${student.age}세) - 평균: ${average.toFixed(2)}, 학점: ${grade}`);
}
function main() {
    const ddoddi = createStudent('ddoddi', 30, 95, 89, 76, 90, 97);
    printResult(ddoddi);
}
