(() => {
  "use strict";

  const bank = Array.isArray(window.QUESTION_BANK) ? window.QUESTION_BANK : [];
  const $ = (selector) => document.querySelector(selector);
  const els = {
    bankCount: $("#bank-count"),
    countSelect: $("#question-count"),
    start: $("#start-button"),
    layout: $("#quiz-layout"),
    finishPanel: $("#finish-panel"),
    counter: $("#question-counter"),
    progressTrack: $("#progress-track"),
    progressFill: $("#progress-fill"),
    questionKicker: $("#question-kicker"),
    questionText: $("#question-text"),
    questionContext: $("#question-context"),
    options: $("#answer-options"),
    explanation: $("#explanation-box"),
    previous: $("#previous-button"),
    next: $("#next-button"),
    submit: $("#submit-button"),
    submitHint: $("#submit-hint"),
    answeredCount: $("#answered-count"),
    nav: $("#question-navigator"),
    navCount: $("#nav-count"),
    statAnswered: $("#stat-answered"),
    statRemaining: $("#stat-remaining"),
    miniProgressFill: $("#mini-progress-fill"),
    resultBanner: $("#result-banner"),
    finishTitle: $("#finish-title"),
    scoreNumber: $("#score-number"),
    scorePercent: $("#score-percent"),
    scoreMessage: $("#score-message"),
    correctCount: $("#correct-count"),
    wrongCount: $("#wrong-count"),
    blankCount: $("#blank-count"),
    reviewWrong: $("#review-wrong-button"),
    restart: $("#restart-button")
  };

  const state = {
    deck: [],
    answers: Object.create(null),
    index: 0,
    submitted: false,
    lastWrongIds: [],
    previousCount: "all"
  };

  function shuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function createDeck(countValue, onlyWrong = false) {
    let pool = bank;
    if (onlyWrong) {
      pool = bank.filter((question) => state.lastWrongIds.includes(question.id));
    }
    const shuffled = shuffle(pool).map((question) => ({
      ...question,
      options: shuffle(question.options)
    }));
    const requested = countValue === "all" ? shuffled.length : Number(countValue);
    return shuffled.slice(0, Math.min(requested || shuffled.length, shuffled.length));
  }

  function startQuiz({ onlyWrong = false, scroll = true } = {}) {
    const countValue = els.countSelect.value || "all";
    state.deck = createDeck(countValue, onlyWrong);
    state.answers = Object.create(null);
    state.index = 0;
    state.submitted = false;
    state.previousCount = countValue;

    if (state.deck.length === 0) {
      alert("Chưa có câu sai để ôn lại. Ông làm một lượt trước nha!");
      return;
    }

    els.layout.hidden = false;
    els.finishPanel.hidden = true;
    els.start.innerHTML = "<span>⤨</span> Trộn lại đề";
    els.resultBanner.hidden = true;
    els.resultBanner.textContent = "";
    renderNavigator();
    renderQuestion();
    if (scroll) els.layout.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function getCurrentQuestion() {
    return state.deck[state.index];
  }

  function answeredTotal() {
    return state.deck.reduce((total, question) => total + (state.answers[question.id] ? 1 : 0), 0);
  }

  function getResults() {
    let correct = 0;
    let wrong = 0;
    let blank = 0;
    const wrongIds = [];

    state.deck.forEach((question) => {
      const selected = state.answers[question.id];
      if (!selected) {
        blank += 1;
      } else if (selected === question.answer) {
        correct += 1;
      } else {
        wrong += 1;
        wrongIds.push(question.id);
      }
    });
    return { correct, wrong, blank, wrongIds, total: state.deck.length };
  }

  function renderQuestion() {
    if (!state.deck.length) return;
    const question = getCurrentQuestion();
    const total = state.deck.length;
    const selected = state.answers[question.id];
    const progress = Math.round((answeredTotal() / total) * 100);

    els.counter.textContent = `Câu ${state.index + 1} / ${total}`;
    els.questionKicker.textContent = `CÂU HỎI ${String(state.index + 1).padStart(2, "0")}`;
    els.questionText.textContent = question.question;
    els.questionContext.hidden = !question.context;
    els.questionContext.textContent = question.context || "";
    els.progressFill.style.width = `${progress}%`;
    els.progressTrack.setAttribute("aria-valuenow", String(progress));
    els.answeredCount.textContent = `Đã chọn ${answeredTotal()} / ${total}`;
    els.statAnswered.textContent = String(answeredTotal());
    els.statRemaining.textContent = String(total - answeredTotal());
    els.miniProgressFill.style.width = `${progress}%`;
    els.previous.disabled = state.index === 0;
    els.next.disabled = state.index === total - 1;
    els.submit.disabled = state.submitted;

    els.options.replaceChildren();
    question.options.forEach((option, index) => {
      const label = document.createElement("label");
      label.className = "answer-option";
      if (selected === option.id) label.classList.add("selected");
      if (state.submitted && option.id === question.answer) label.classList.add("correct");
      if (state.submitted && selected === option.id && selected !== question.answer) label.classList.add("incorrect");
      if (state.submitted) label.classList.add("locked");

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `answer-${question.id}`;
      radio.value = option.id;
      radio.checked = selected === option.id;
      radio.disabled = state.submitted;
      radio.setAttribute("aria-label", `${String.fromCharCode(65 + index)}. ${option.text}`);
      radio.addEventListener("change", () => {
        if (state.submitted) return;
        state.answers[question.id] = option.id;
        renderQuestion();
        renderNavigator();
      });

      const letter = document.createElement("span");
      letter.className = "answer-letter";
      letter.textContent = String.fromCharCode(65 + index);
      const text = document.createElement("span");
      text.className = "answer-text";
      text.textContent = option.text;
      label.append(radio, letter, text);
      els.options.append(label);
    });

    if (state.submitted) {
      const isCorrect = selected === question.answer;
      const correctIndex = question.options.findIndex((option) => option.id === question.answer);
      const correctLetter = correctIndex >= 0 ? String.fromCharCode(65 + correctIndex) : "—";
      const chosenIndex = question.options.findIndex((option) => option.id === selected);
      const chosenLetter = chosenIndex >= 0 ? String.fromCharCode(65 + chosenIndex) : "chưa chọn";
      els.explanation.hidden = false;
      els.explanation.replaceChildren();

      const heading = document.createElement("div");
      heading.className = `explanation-heading ${isCorrect ? "good" : "bad"}`;
      heading.textContent = isCorrect ? "✓ Chính xác" : `Đáp án đúng: ${correctLetter}${selected ? ` · Ông chọn: ${chosenLetter}` : " · Câu bỏ trống"}`;
      const body = document.createElement("p");
      body.textContent = question.explanation;
      const source = document.createElement("p");
      source.className = "explanation-source";
      source.textContent = `Tham chiếu: ${question.source || "Ngân hàng câu hỏi K21"}`;
      els.explanation.append(heading, body, source);
      els.submitHint.textContent = "Đã nộp bài. Chọn số câu để xem lại đáp án và giải thích.";
      els.submit.innerHTML = "Đã nộp bài ✓";
    } else {
      els.explanation.hidden = true;
      els.explanation.replaceChildren();
      els.submitHint.textContent = "Đáp án sẽ được giải thích sau khi nộp bài.";
      els.submit.innerHTML = "Nộp bài <span>↗</span>";
    }

    renderNavigator();
  }

  function renderNavigator() {
    els.nav.replaceChildren();
    const total = state.deck.length;
    els.navCount.textContent = String(total);

    state.deck.forEach((question, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "nav-question";
      button.textContent = String(index + 1);
      button.setAttribute("aria-label", `Đi đến câu ${index + 1}`);
      if (index === state.index) button.classList.add("current");
      if (state.answers[question.id]) button.classList.add("answered");
      if (state.submitted) {
        if (state.answers[question.id] === question.answer) button.classList.add("result-correct");
        else button.classList.add("result-wrong");
      }
      button.addEventListener("click", () => {
        state.index = index;
        renderQuestion();
      });
      els.nav.append(button);
    });
  }

  function submitQuiz() {
    if (state.submitted || !state.deck.length) return;
    const unanswered = state.deck.length - answeredTotal();
    if (unanswered > 0 && !confirm(`Còn ${unanswered} câu chưa chọn. Ông vẫn muốn nộp bài chứ?`)) return;

    state.submitted = true;
    const results = getResults();
    state.lastWrongIds = results.wrongIds;
    const percent = Math.round((results.correct / results.total) * 100);

    els.finishTitle.textContent = percent >= 80 ? "Quá ổn luôn!" : percent >= 50 ? "Đang lên tay rồi!" : "Mình ôn lại nhé!";
    els.scoreNumber.textContent = `${results.correct}/${results.total}`;
    els.scorePercent.textContent = `${percent}%`;
    els.correctCount.textContent = String(results.correct);
    els.wrongCount.textContent = String(results.wrong);
    els.blankCount.textContent = String(results.blank);
    els.scoreMessage.textContent = percent >= 80
      ? "Nắm khá chắc rồi đó. Xem lại những câu chưa đúng để củng cố kiến thức."
      : percent >= 50
        ? "Ông đã có nền tảng, giờ xem giải thích từng câu và thử thêm một lượt trộn mới."
        : "Không sao, đây là lượt ôn tập. Đọc phần giải thích rồi làm lại để nhớ lâu hơn nha.";
    els.reviewWrong.disabled = results.wrongIds.length === 0;
    els.reviewWrong.textContent = results.wrongIds.length ? `Ôn lại ${results.wrongIds.length} câu sai` : "Không có câu sai để ôn";
    els.finishPanel.hidden = false;
    els.resultBanner.hidden = false;
    els.resultBanner.textContent = `Kết quả: ${results.correct}/${results.total} câu đúng (${percent}%). Chọn câu ở bảng bên phải để xem đáp án và giải thích.`;
    renderQuestion();
    els.finishPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  els.start.addEventListener("click", () => startQuiz());
  els.previous.addEventListener("click", () => {
    if (state.index > 0) {
      state.index -= 1;
      renderQuestion();
    }
  });
  els.next.addEventListener("click", () => {
    if (state.index < state.deck.length - 1) {
      state.index += 1;
      renderQuestion();
    }
  });
  els.submit.addEventListener("click", submitQuiz);
  els.restart.addEventListener("click", () => startQuiz());
  els.reviewWrong.addEventListener("click", () => startQuiz({ onlyWrong: true }));

  els.bankCount.textContent = String(bank.length);
  if (els.countSelect) {
    [...els.countSelect.options].forEach((option) => {
      if (option.value !== "all" && Number(option.value) > bank.length) option.disabled = true;
    });
  }
  startQuiz({ scroll: false });
})();
