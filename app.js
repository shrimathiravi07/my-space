// ========== Shrimathi's Space - Python Quiz App ==========

class PythonQuizApp {
    constructor() {
        // Quiz State
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedCategory = 'beginner';
        this.questions = [];
        this.userAnswers = [];
        this.timer = null;
        this.timeLeft = 60;
        this.totalTime = 0;
        this.playerName = 'Shrimathi';
        this.questionsPerQuiz = 15;
        this.userReason = '';
        
        // Load completed categories from localStorage
        this.completedCategories = JSON.parse(localStorage.getItem('completedCategories')) || [];
        
        // DOM Elements
        this.screens = {
            welcome: document.getElementById('welcome-screen'),
            category: document.getElementById('category-screen'),
            quiz: document.getElementById('quiz-screen'),
            result: document.getElementById('result-screen'),
            review: document.getElementById('review-screen')
        };
        
        // Initialize
        this.bindEvents();
        this.updateCategorySelection();
        this.updateCompletedCategories();
    }
    
    // ========== Event Bindings ==========
    bindEvents() {
        // Let's Go button - go to category selection
        document.getElementById('letsgo-btn').addEventListener('click', () => this.showScreen('category'));
        
        // Back button - go back to welcome
        document.getElementById('back-btn').addEventListener('click', () => this.showScreen('welcome'));
        
        // Start button
        document.getElementById('start-btn').addEventListener('click', () => this.startQuiz());
        
        // Category buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                
                // Check if category is completed
                if (this.completedCategories.includes(category)) {
                    this.showRetestModal(category);
                    return;
                }
                
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
                e.currentTarget.classList.add('selected');
                this.selectedCategory = category;
            });
        });
        
        // Retest modal buttons
        document.getElementById('retest-btn').addEventListener('click', () => this.handleRetest());
        document.getElementById('cancel-retest-btn').addEventListener('click', () => this.hideRetestModal());
        
        // Submit button
        document.getElementById('submit-btn').addEventListener('click', () => this.submitAnswer());
        
        // Next button
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        
        // Result screen buttons
        document.getElementById('restart-btn').addEventListener('click', () => this.restartQuiz());
        document.getElementById('review-btn').addEventListener('click', () => this.showReview());
        document.getElementById('back-to-result').addEventListener('click', () => this.showScreen('result'));
    }
    
    // ========== Screen Management ==========
    showScreen(screenName) {
        Object.values(this.screens).forEach(screen => screen.classList.remove('active'));
        this.screens[screenName].classList.add('active');
    }
    
    // ========== Quiz Initialization ==========
    startQuiz() {
        // Prepare questions based on category
        this.prepareQuestions();
        
        // Reset state
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.totalTime = 0;
        
        // Hide explanation box
        document.getElementById('explanation-box').classList.add('hidden');
        
        // Start quiz
        this.showScreen('quiz');
        this.displayQuestion();
    }
    
    prepareQuestions() {
        // All categories use intermediate level questions (mix of theory and program)
        let questionPool = [...pythonQuestions.theory, ...pythonQuestions.program];
        
        // Shuffle and select questions
        this.questions = this.shuffleArray(questionPool).slice(0, this.questionsPerQuiz);
    }
    
    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    // ========== Question Display ==========
    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        const isProgram = question.code !== undefined;
        
        // Hide explanation box and reason box
        document.getElementById('explanation-box').classList.add('hidden');
        document.getElementById('reason-box').classList.add('hidden');
        
        // Update question counter
        document.getElementById('question-counter').textContent = 
            `Question ${this.currentQuestion + 1}/${this.questions.length}`;
        
        // Update progress bar
        const progress = ((this.currentQuestion) / this.questions.length) * 100;
        document.getElementById('progress').style.width = `${progress}%`;
        
        // Update category badge based on selected level
        const badge = document.getElementById('category-badge');
        badge.textContent = this.selectedCategory.charAt(0).toUpperCase() + this.selectedCategory.slice(1);
        badge.className = `category-badge ${this.selectedCategory}`;
        
        // Update question type
        const questionType = document.getElementById('question-type');
        if (isProgram) {
            questionType.textContent = '💻 Program Output Question';
            questionType.className = 'question-type program';
        } else {
            questionType.textContent = '📚 Theory Question';
            questionType.className = 'question-type theory';
        }
        
        // Display question text
        document.getElementById('question').textContent = question.question;
        
        // Display code block if program question
        const codeBlock = document.getElementById('code-block');
        if (isProgram && question.code) {
            codeBlock.textContent = question.code;
            codeBlock.classList.add('visible');
        } else {
            codeBlock.textContent = '';
            codeBlock.classList.remove('visible');
        }
        
        // Display options
        this.displayOptions(question.options);
        
        // Reset buttons for new question
        document.getElementById('submit-btn').classList.remove('hidden');
        document.getElementById('submit-btn').disabled = true;
        document.getElementById('next-btn').classList.add('hidden');
        document.getElementById('next-btn').disabled = true;
        this.selectedOptionIndex = null;
        
        // Update score display
        document.getElementById('current-score').textContent = this.score;
        
        // Start timer
        this.startTimer();
    }
    
    displayOptions(options) {
        const container = document.getElementById('options');
        container.innerHTML = '';
        
        const letters = ['A', 'B', 'C', 'D'];
        
        options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.dataset.index = index;
            
            optionElement.innerHTML = `
                <span class="option-letter">${letters[index]}</span>
                <span class="option-text">${this.escapeHtml(option)}</span>
                <span class="option-icon"></span>
            `;
            
            optionElement.addEventListener('click', () => this.selectOption(index));
            container.appendChild(optionElement);
        });
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // ========== Option Selection ==========
    selectOption(selectedIndex) {
        // Prevent selection after submission
        const options = document.querySelectorAll('.option');
        if (options[0].classList.contains('disabled')) return;
        
        // Remove previous selection
        options.forEach(opt => opt.classList.remove('selected'));
        
        // Mark selected option
        options[selectedIndex].classList.add('selected');
        
        // Store selected index for submission
        this.selectedOptionIndex = selectedIndex;
        
        // Show reason input box
        this.showReasonInput();
    }
    
    // ========== Show Reason Input ==========
    showReasonInput() {
        const reasonBox = document.getElementById('reason-box');
        const reasonInput = document.getElementById('reason-input');
        reasonBox.classList.remove('hidden');
        reasonInput.value = '';
        reasonInput.focus();
        
        // Scroll to reason box
        reasonBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Enable submit button
        document.getElementById('submit-btn').disabled = false;
    }
    
    // ========== Hide Reason Input ==========
    hideReasonInput() {
        document.getElementById('reason-box').classList.add('hidden');
    }
    
    // ========== Submit Answer ==========
    submitAnswer() {
        const selectedIndex = this.selectedOptionIndex;
        if (selectedIndex === undefined || selectedIndex === null) return;
        
        // Stop timer
        this.stopTimer();
        
        // Get user's reason
        const reasonInput = document.getElementById('reason-input');
        this.userReason = reasonInput ? reasonInput.value.trim() : '';
        
        // Hide reason input box
        this.hideReasonInput();
        
        const question = this.questions[this.currentQuestion];
        const correctIndex = question.correct;
        const options = document.querySelectorAll('.option');
        
        // Disable all options
        options.forEach(opt => opt.classList.add('disabled'));
        
        // Check answer
        const isCorrect = selectedIndex === correctIndex;
        
        if (isCorrect) {
            options[selectedIndex].classList.add('correct');
            options[selectedIndex].querySelector('.option-icon').textContent = '✓';
            this.score += 10;
            document.getElementById('current-score').textContent = this.score;
        } else {
            options[selectedIndex].classList.add('wrong');
            options[selectedIndex].querySelector('.option-icon').textContent = '✗';
            options[correctIndex].classList.add('correct');
            options[correctIndex].querySelector('.option-icon').textContent = '✓';
        }
        
        // Show explanation with user's reason
        this.showExplanation(isCorrect, question, selectedIndex);
        
        // Store user answer with reason
        this.userAnswers.push({
            questionIndex: this.currentQuestion,
            selectedIndex: selectedIndex,
            correctIndex: correctIndex,
            isCorrect: isCorrect,
            userReason: this.userReason
        });
        
        // Hide submit button, show next button
        document.getElementById('submit-btn').classList.add('hidden');
        document.getElementById('next-btn').classList.remove('hidden');
        document.getElementById('next-btn').disabled = false;
        
        // Update button text if it's the last question
        if (this.currentQuestion === this.questions.length - 1) {
            document.getElementById('next-btn').innerHTML = 'Finish Quiz <span>→</span>';
        }
        
        // Reset selected option index and reason
        this.selectedOptionIndex = null;
        this.userReason = '';
    }
    
    // ========== Show Explanation ==========
    showExplanation(isCorrect, question, selectedIndex) {
        const explanationBox = document.getElementById('explanation-box');
        const explanationIcon = document.getElementById('explanation-icon');
        const explanationTitle = document.getElementById('explanation-title');
        const explanationText = document.getElementById('explanation-text');
        
        // Remove hidden class and set appropriate class
        explanationBox.classList.remove('hidden', 'correct', 'wrong');
        
        // Show user's reason if provided
        const userReasonHtml = this.userReason 
            ? `<div class="user-reason-display">
                <strong>💭 Your Reasoning:</strong><br>
                <em>"${this.escapeHtml(this.userReason)}"</em>
               </div><br>`
            : '';
        
        if (isCorrect) {
            explanationBox.classList.add('correct');
            explanationIcon.textContent = '🎉';
            explanationTitle.textContent = 'Correct pa superruuuu💜';
            
            const correctAnswer = question.options[question.correct];
            explanationText.innerHTML = `
                ${userReasonHtml}
                <strong>✅ Correct Answer:</strong> "${correctAnswer}"<br><br>
                <strong>💡 Explanation:</strong> ${question.explanation}
            `;
        } else {
            explanationBox.classList.add('wrong');
            explanationIcon.textContent = '💡';
            explanationTitle.textContent = 'ithu thappu pa enanu paru kojam 💜';
            
            // Show why their answer was wrong and what the correct answer is
            const wrongAnswer = question.options[selectedIndex];
            const correctAnswer = question.options[question.correct];
            explanationText.innerHTML = `
                ${userReasonHtml}
                <strong>❌ Your answer:</strong> "${wrongAnswer}" is incorrect.<br><br>
                <strong>✅ Correct answer:</strong> "${correctAnswer}"<br><br>
                <strong>💡 Explanation:</strong> ${question.explanation}
            `;
        }
        
        // Smooth scroll to explanation
        explanationBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // ========== Timer ==========
    startTimer() {
        this.timeLeft = 60;
        this.updateTimerDisplay();
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.totalTime++;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }
    
    updateTimerDisplay() {
        const timerElement = document.getElementById('timer');
        timerElement.textContent = this.timeLeft;
        
        // Add warning classes
        timerElement.classList.remove('warning', 'danger');
        if (this.timeLeft <= 5) {
            timerElement.classList.add('danger');
        } else if (this.timeLeft <= 10) {
            timerElement.classList.add('warning');
        }
    }
    
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    
    timeUp() {
        this.stopTimer();
        
        // Hide reason box
        this.hideReasonInput();
        
        // Auto-select wrong (no selection)
        const question = this.questions[this.currentQuestion];
        const correctIndex = question.correct;
        const options = document.querySelectorAll('.option');
        
        // Disable all options
        options.forEach(opt => opt.classList.add('disabled'));
        
        // Show correct answer
        options[correctIndex].classList.add('correct');
        options[correctIndex].querySelector('.option-icon').textContent = '✓';
        
        // Show explanation for time up
        const explanationBox = document.getElementById('explanation-box');
        const explanationIcon = document.getElementById('explanation-icon');
        const explanationTitle = document.getElementById('explanation-title');
        const explanationText = document.getElementById('explanation-text');
        
        explanationBox.classList.remove('hidden', 'correct', 'wrong');
        explanationBox.classList.add('wrong');
        explanationIcon.textContent = '⏰';
        explanationTitle.textContent = 'Time\'s Up!';
        explanationText.innerHTML = `
            <strong>Correct answer:</strong> "${question.options[correctIndex]}"<br><br>
            <strong>Explanation:</strong> ${question.explanation}
        `;
        
        // Store as wrong answer
        this.userAnswers.push({
            questionIndex: this.currentQuestion,
            selectedIndex: -1, // No selection
            correctIndex: correctIndex,
            isCorrect: false
        });
        
        // Enable next button
        document.getElementById('next-btn').disabled = false;
        
        if (this.currentQuestion === this.questions.length - 1) {
            document.getElementById('next-btn').innerHTML = 'Finish Quiz <span>→</span>';
        }
    }
    
    // ========== Navigation ==========
    nextQuestion() {
        this.currentQuestion++;
        
        if (this.currentQuestion >= this.questions.length) {
            this.showResults();
        } else {
            this.displayQuestion();
        }
    }
    
    // ========== Results ==========
    showResults() {
        this.stopTimer();
        this.showScreen('result');
        
        const totalQuestions = this.questions.length;
        const correctAnswers = this.userAnswers.filter(a => a.isCorrect).length;
        const wrongAnswers = totalQuestions - correctAnswers;
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        
        // Update display
        document.getElementById('player-result-name').textContent = `Great effort, Shrimathi! 💜`;
        document.getElementById('final-score').textContent = this.score;
        document.getElementById('correct-count').textContent = correctAnswers;
        document.getElementById('wrong-count').textContent = wrongAnswers;
        document.getElementById('percentage').textContent = `${percentage}%`;
        document.getElementById('time-taken').textContent = `${this.totalTime}s`;
        
        // Set special message based on score
        const specialMessage = document.getElementById('special-message');
        
        if (percentage >= 60) {
            // Score >= 60%
            specialMessage.textContent = '🌟 Super Laddu ! 🌟';
            specialMessage.className = 'special-message success';
        } else {
            // Score < 60%
            specialMessage.textContent = '💪 Inu Oru Round Polama ! 💪';
            specialMessage.className = 'special-message retry';
        }
        
        // Set result icon and message based on performance
        const resultIcon = document.getElementById('result-icon');
        const resultMessage = document.getElementById('result-message');
        
        if (percentage >= 90) {
            resultIcon.textContent = '🏆';
            resultMessage.textContent = '🎉 Outstanding! You\'re a Python Master, Shrimathi!';
            resultMessage.className = 'result-message excellent';
        } else if (percentage >= 70) {
            resultIcon.textContent = '🎉';
            resultMessage.textContent = '👏 Amazing work! Your Python skills are impressive!';
            resultMessage.className = 'result-message good';
        } else if (percentage >= 60) {
            resultIcon.textContent = '⭐';
            resultMessage.textContent = '👍 Good job! Keep practicing to get even better!';
            resultMessage.className = 'result-message average';
        } else {
            resultIcon.textContent = '📚';
            resultMessage.textContent = '📖 Keep learning! Review the concepts and try again!';
            resultMessage.className = 'result-message poor';
        }
        
        // Create confetti effect for good scores
        if (percentage >= 60) {
            this.createConfetti();
        }
        
        // Mark category as completed
        this.markCategoryCompleted(this.selectedCategory);
    }
    
    // ========== Mark Category Completed ==========
    markCategoryCompleted(category) {
        if (!this.completedCategories.includes(category)) {
            this.completedCategories.push(category);
            localStorage.setItem('completedCategories', JSON.stringify(this.completedCategories));
        }
        this.updateCompletedCategories();
    }
    
    // ========== Update Completed Categories UI ==========
    updateCompletedCategories() {
        document.querySelectorAll('.category-btn').forEach(btn => {
            const category = btn.dataset.category;
            const existingTick = btn.querySelector('.completed-tick');
            
            if (this.completedCategories.includes(category)) {
                btn.classList.add('completed');
                if (!existingTick) {
                    const tick = document.createElement('span');
                    tick.className = 'completed-tick';
                    tick.textContent = '✅';
                    btn.appendChild(tick);
                }
            } else {
                btn.classList.remove('completed');
                if (existingTick) {
                    existingTick.remove();
                }
            }
        });
    }
    
    // ========== Retest Modal ==========
    showRetestModal(category) {
        this.retestCategory = category;
        document.getElementById('retest-modal').classList.add('active');
    }
    
    hideRetestModal() {
        document.getElementById('retest-modal').classList.remove('active');
        this.retestCategory = null;
    }
    
    handleRetest() {
        this.hideRetestModal();
        
        // Show retest message
        this.showRetestMessage();
    }
    
    showRetestMessage() {
        const messageModal = document.getElementById('retest-message-modal');
        messageModal.classList.add('active');
        
        // Auto-hide and start quiz after 2 seconds
        setTimeout(() => {
            messageModal.classList.remove('active');
            
            // Select the category and start quiz
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
            document.querySelector(`.category-btn[data-category="${this.retestCategory}"]`).classList.add('selected');
            this.selectedCategory = this.retestCategory;
            this.startQuiz();
        }, 2000);
    }
    
    // ========== Confetti Effect ==========
    createConfetti() {
        const confettiContainer = document.getElementById('confetti');
        confettiContainer.innerHTML = '';
        
        const colors = ['#fd79a8', '#9b59b6', '#00cec9', '#fdcb6e', '#55efc4', '#ff7675'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: absolute;
                width: ${Math.random() * 10 + 5}px;
                height: ${Math.random() * 10 + 5}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}%;
                top: -20px;
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                animation: confettiFall ${Math.random() * 3 + 2}s linear forwards;
                animation-delay: ${Math.random() * 2}s;
            `;
            confettiContainer.appendChild(confetti);
        }
        
        // Add confetti animation
        if (!document.getElementById('confetti-style')) {
            const style = document.createElement('style');
            style.id = 'confetti-style';
            style.textContent = `
                @keyframes confettiFall {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(500px) rotate(720deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    // ========== Review ==========
    showReview() {
        this.showScreen('review');
        const container = document.getElementById('review-container');
        container.innerHTML = '';
        
        this.userAnswers.forEach((answer, index) => {
            const question = this.questions[answer.questionIndex];
            const isProgram = question.code !== undefined;
            
            const reviewItem = document.createElement('div');
            reviewItem.className = `review-item ${answer.isCorrect ? 'correct' : 'wrong'}`;
            
            let codeHtml = '';
            if (isProgram && question.code) {
                codeHtml = `<pre class="review-code">${this.escapeHtml(question.code)}</pre>`;
            }
            
            // Add user's reasoning if available
            let reasonHtml = '';
            if (answer.userReason && answer.userReason.trim()) {
                reasonHtml = `
                    <div class="review-reason">
                        <span class="review-reason-label">💭 Your Reasoning:</span>
                        <p class="review-reason-text">"${this.escapeHtml(answer.userReason)}"</p>
                    </div>
                `;
            }
            
            let answersHtml = '';
            if (answer.selectedIndex === -1) {
                answersHtml = `
                    <div class="review-answer user-answer">
                        <span class="review-answer-label">⏱️ Time's Up:</span> No answer selected
                    </div>
                    <div class="review-answer correct-answer">
                        <span class="review-answer-label">✓ Correct:</span> ${this.escapeHtml(question.options[answer.correctIndex])}
                    </div>
                `;
            } else if (answer.isCorrect) {
                answersHtml = `
                    <div class="review-answer user-answer is-correct">
                        <span class="review-answer-label">✓ Your Answer:</span> ${this.escapeHtml(question.options[answer.selectedIndex])}
                    </div>
                `;
            } else {
                answersHtml = `
                    <div class="review-answer user-answer">
                        <span class="review-answer-label">✗ Your Answer:</span> ${this.escapeHtml(question.options[answer.selectedIndex])}
                    </div>
                    <div class="review-answer correct-answer">
                        <span class="review-answer-label">✓ Correct:</span> ${this.escapeHtml(question.options[answer.correctIndex])}
                    </div>
                `;
            }
            
            reviewItem.innerHTML = `
                <div class="review-question-header">
                    <span class="review-question-number">Question ${index + 1}</span>
                    <span class="review-status ${answer.isCorrect ? 'correct' : 'wrong'}">
                        ${answer.isCorrect ? '✓ Correct' : '✗ Wrong'}
                    </span>
                </div>
                <p class="review-question-text">${question.question}</p>
                ${codeHtml}
                ${reasonHtml}
                <div class="review-answers">
                    ${answersHtml}
                </div>
                <div class="review-explanation">
                    <strong>💡 Explanation:</strong>
                    <p>${question.explanation}</p>
                </div>
            `;
            
            container.appendChild(reviewItem);
        });
    }
    
    // ========== Restart ==========
    restartQuiz() {
        this.stopTimer();
        document.getElementById('next-btn').innerHTML = 'Next Question <span>→</span>';
        document.getElementById('explanation-box').classList.add('hidden');
        document.getElementById('reason-box').classList.add('hidden');
        this.updateCompletedCategories();
        this.showScreen('category');
    }
    
    // ========== Category Update ==========
    updateCategorySelection() {
        // Select 'beginner' by default
        document.querySelector('.category-btn[data-category="beginner"]').classList.add('selected');
    }
}

// ========== Initialize App ==========
document.addEventListener('DOMContentLoaded', () => {
    new PythonQuizApp();
});
