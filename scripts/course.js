const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This will introduce students to programming.',
        technology: [ 'Python' ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web.',
        technology: [ 'HTML', 'CSS' ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students spend more time with functions.',
        technology: [ 'Python' ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the concepts of object-oriented programming.',
        technology: [ 'C#' ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior Web Fundamentals knowledge.',
        technology: [ 'HTML', 'CSS', 'JavaScript' ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Web Frontend Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior web development skills.',
        technology: [ 'HTML', 'CSS', 'JavaScript' ],
        completed: false
    }
];

const coursesContainer = document.querySelector('#courses-container');
const totalCreditsEl = document.querySelector('#total-credits');
const allBtn = document.querySelector('#all-btn');
const wddBtn = document.querySelector('#wdd-btn');
const cseBtn = document.querySelector('#cse-btn');

function displayCourses(filteredCourses) {
    coursesContainer.innerHTML = '';
    filteredCourses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card');
        if (course.completed) {
            card.classList.add('completed');
            card.innerHTML = `✓ ${course.subject} ${course.number}`;
        } else {
            card.textContent = `${course.subject} ${course.number}`;
        }
        coursesContainer.appendChild(card);
    });

    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsEl.textContent = `The total credits for courses listed above is ${totalCredits}`;
}

allBtn.addEventListener('click', () => displayCourses(courses));
wddBtn.addEventListener('click', () => displayCourses(courses.filter(c => c.subject === 'WDD')));
cseBtn.addEventListener('click', () => displayCourses(courses.filter(c => c.subject === 'CSE')));

displayCourses(courses);