// Import questions data (assuming questions.js is loaded before this script)
// In a real project, you might use import/export modules, but for simplicity
// and direct browser execution, questionsData is assumed to be globally available.

document.addEventListener('DOMContentLoaded', () => {
    loadQuestions();
});

function loadQuestions() {
    const mcqPoolContainer = document.getElementById('mcq-pool-questions');
    const essayPoolContainer = document.getElementById('essay-pool-questions');
    const mcqTestContainer = document.getElementById('mcq-test-questions');
    const essayTestContainer = document.getElementById('essay-test-questions');
    const testMcqAnswerKey = document.getElementById('test-mcq-answer-key');
    const testEssayAnswerKey = document.getElementById('test-essay-answer-key');
    // --- START: Added for supplementary content ---
    const textbookContainer = document.getElementById('textbook-supplementary');
    const teacherGuideContainer = document.getElementById('teacher-guide-supplementary');
    const hallidayContainer = document.getElementById('halliday-supplementary');
    // --- END: Added for supplementary content ---

    questionsData.forEach(q => {
        if (q.type === 'mcq-pool') {
            mcqPoolContainer.innerHTML += `
                <div class="mb-6">
                    <p class="question-text">${q.text}</p>
                    <ul class="text-gray-800">
                        ${q.options.map(option => `<li>${option}</li>`).join('')}
                    </ul>
                    <p class="bloom-level">**سطح بلوم:** ${q.bloomLevel}</p>
                    <div class="explanation">
                        <p class="font-semibold mb-1">توضیح تفصیلی:</p>
                        <p>${q.explanation}</p>
                    </div>
                </div>
            `;
        } else if (q.type === 'essay-pool') {
            essayPoolContainer.innerHTML += `
                <div class="mb-6">
                    <p class="question-text">${q.text}</p>
                    <p class="bloom-level">**سطح بلوم:** ${q.bloomLevel}</p>
                    <div class="explanation">
                        <p class="font-semibold mb-1">پاسخ تفصیلی:</p>
                        <p>${q.explanation}</p>
                    </div>
                </div>
            `;
        } else if (q.type === 'mcq-test') {
            mcqTestContainer.innerHTML += `
                <div class="mb-4">
                    <p class="question-text">${q.text}</p>
                    <div class="flex flex-col space-y-2">
                        ${q.options.map((option, index) => `
                            <label class="option-label">
                                <input type="radio" name="${q.id}" value="${String.fromCharCode(97 + index)}" class="ml-2"> ${option}
                            </label>
                        `).join('')}
                    </div>
                    <p class="bloom-level">**سطح بلوم:** ${q.bloomLevel}</p>
                </div>
            `;
            // Add to answer key
            testMcqAnswerKey.innerHTML += `<li>**${q.text.split('.')[0]}.** پاسخ: ${String.fromCharCode(97 + q.options.findIndex(opt => String.fromCharCode(97 + q.options.indexOf(opt)).toLowerCase() === q.correctAnswer))}) ${q.options.find(opt => String.fromCharCode(97 + q.options.indexOf(opt)).toLowerCase() === q.correctAnswer)}</li>`;

        } else if (q.type === 'essay-test') {
            essayTestContainer.innerHTML += `
                <div class="mb-6">
                    <p class="question-text">${q.text}</p>
                    <p class="bloom-level">**سطح بلوم:** ${q.bloomLevel}</p>
                </div>
            `;
            // Add to answer key
            testEssayAnswerKey.innerHTML += `<li>**${q.text.split('.')[0]}.** پاسخ: به بخش استخر سوالات تشریحی، سوال ${q.text.split('.')[0]} مراجعه کنید.</li>`;
        
        // --- START: This is the new part you need to add ---
        } else if (q.type === 'supplementary-textbook') {
            textbookContainer.innerHTML += `
                <div class="mb-4">
                    <p class="question-text font-semibold">${q.title}</p>
                    <p class="text-gray-800">${q.content}</p>
                </div>
            `;
        } else if (q.type === 'supplementary-teacher-guide') {
            teacherGuideContainer.innerHTML += `
                <div class="mb-4">
                    <p class="question-text font-semibold">${q.title}</p>
                    <p class="text-gray-800">${q.content}</p>
                </div>
            `;
        } else if (q.type === 'supplementary-halliday') {
            hallidayContainer.innerHTML += `
                <div class="mb-4">
                    <p class="question-text font-semibold">${q.title}</p>
                    <p class="text-gray-800">${q.content}</p>
                </div>
            `;
        }
    });

    // Typeset MathJax after content is loaded
    if (window.MathJax) {
        window.MathJax.typesetPromise();
    }
}

function checkAnswers() {
    let score = 0;
    const form = document.getElementById('test-form');
    const scoreResult = document.getElementById('score-result');

    questionsData.filter(q => q.type === 'mcq-test').forEach(q => {
        const selectedOption = form.elements[q.id].value;
        const correctChar = q.correctAnswer; // 'a', 'b', 'c', 'd'

        const optionsElements = form.elements[q.id];
        Array.from(optionsElements).forEach(optionElement => {
            const label = optionElement.closest('label');
            if (label) {
                label.classList.remove('bg-green-100', 'bg-red-100'); // Reset colors
                if (optionElement.value === correctChar) {
                    label.classList.add('bg-green-100'); // Highlight correct answer
                }
                if (optionElement.checked && optionElement.value !== correctChar) {
                    label.classList.add('bg-red-100'); // Highlight incorrect selected answer
                }
            }
        });

        if (selectedOption === correctChar) {
            score += q.points;
        }
    });

    scoreResult.classList.remove('hidden');
    scoreResult.innerHTML = `امتیاز شما در بخش تستی: ${score} از 4`; // Total points for MCQs is 4 (4 questions * 1 point each)
}
