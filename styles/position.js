const quizData = [
    {
        q: "top / left кайсы учурда иштейт? / Когда работают top / left?",
        a: [
            "A) static",
            "B) ✅relative / absolute / fixed / sticky",
            "C) inline",
            "D) block",
        ],
        correct: 1,
        explain: "top/left иштеши үчүн элемент positioned болушу керек: relative/absolute/fixed/sticky."
    },
    {
        q: "z-index эмне үчүн керек? / Для чего нужен z-index?",
        a: [
            "A) Өлчөмү үчүн / Размер",
            "B) Түсү үчүн / Цвет",
            "C) ✅Элементтердин катмарын жөнгө салуу үчүн / Порядок слоёв",
            "D) Шрифт үчүн / Шрифт",
        ],
        correct: 2,
        explain: "z-index катмар тартибин аныктайт жана көбүнчө positioned элементтерде иштейт."
    },
    {
        q: "relative менен absolute айырмасы эмнеде? / В чём отличие relative и absolute?",
        a: [
            "A) Айырмасы жок / Нет разницы",
            "B) ✅relative — өзүнүн ордуна салыштырмалуу жылат, absolute — ата-энеден эсептелет жана агымдан чыгат",
            "C) relative агымдан чыгат, absolute агымда калат",
            "D) relative viewport’ко бекитилет",
        ],
        correct: 1,
        explain: "relative орунду сактайт; absolute документ агымынан чыгып, containing block’ка карата эсептелет."
    },
    {
        q: "position: absolute кайсыга карата эсептелет? / Относительно чего считается absolute?",
        a: [
            "A) Ар дайым body’ге / Всегда относительно body",
            "B) ✅Эң жакын positioned ancestor’га / Ближайший предок с position (relative/absolute/fixed/sticky)",
            "C) Ар дайым viewport’ко / Всегда viewport",
            "D) Ар дайым html’ге / Всегда html",
        ],
        correct: 1,
        explain: "Absolute эң жакын positioned ancestor’га карайт. Эгер жок болсо — root/viewport логикасына өтөт."
    },
    {
        q: "Кайсы position баракты скролл кылганда да көрүнүп турат? / Что остаётся видимым при прокрутке?",
        a: [
            "A) relative",
            "B) absolute",
            "C) ✅fixed",
            "D) static",
        ],
        correct: 2,
        explain: "fixed viewport’ко бекем байланышат — скролл менен кыймылдабайт."
    },
    {
        q: "Кайсы position скроллдо “жабышып” калат? / Что “прилипает” при скролле?",
        a: [
            "A) fixed",
            "B) absolute",
            "C) relative",
            "D) ✅sticky",
        ],
        correct: 3,
        explain: "sticky агымда калат, бирок чекке жеткенде жабышат (мисалы top:0)."
    },
    {
        q: "display: none эмнени кылат? / Что делает display: none?",
        a: [
            "A) Жашырат, бирок орунду калтырат / Скрывает, но место остаётся",
            "B) ✅Элементти толугу менен жашырат (орун калтырбай) / Полностью убирает элемент",
            "C) Прозрачный кылат / Делает прозрачным",
            "D) Фиксациялайт / Фиксирует",
        ],
        correct: 1,
        explain: "display:none — элемент layout’тан толук чыгат, орун калбайт."
    },
    {
        q: "visibility: hidden эмнени кылат? / Что делает visibility: hidden?",
        a: [
            "A) Элементти толугу менен жок кылат / Убирает полностью",
            "B) ✅Жашырат, бирок орунду калтырат / Скрывает, но место остаётся",
            "C) DOMдон чыгарат / Удаляет из DOM",
            "D) Кичирейтет / Уменьшает",
        ],
        correct: 1,
        explain: "visibility:hidden көрүнбөйт кылат, бирок layout’та орун калат."
    },
    {
        q: "fixed vs sticky: негизги айырма? / Главное отличие fixed и sticky?",
        a: [
            "A) Экөө бирдей / Одинаковые",
            "B) ✅fixed — дайым viewport’ко бекитилет; sticky — чекке жеткенче агымда калат",
            "C) sticky — агымдан чыгат; fixed — агымда калат",
            "D) fixed top иштебейт",
        ],
        correct: 1,
        explain: "fixed — дайым бекем; sticky — шарт менен жабышат (контейнер/скролл чек)."
    }
];

const quizData1 = [
    {
        q: "z-index эмне үчүн керек? / Для чего нужен z-index?",
        a: [
            "A) Өлчөмү үчүн / Размер",
            "B) Түсү үчүн / Цвет",
            "C) ✅Элементтердин катмарын жөнгө салуу үчүн / Слой элементов",
            "D) Шрифт үчүн / Шрифт"
        ],
        correct: 2
    },
    {
        q: "display: none эмнени кылат? / Что делает display: none?",
        a: [
            "A) Жашырат, бирок орунду калтырат / Скрывает, но оставляет место",
            "B) ✅Элементти толугу менен жашырат (орун калтырбай) / Полностью убирает элемент",
            "C) Прозрачный кылат / Делает прозрачным",
            "D) Фиксациялайт / Фиксирует"
        ],
        correct: 1
    },
    {
        q: "visibility: hidden эмнени кылат? / Что делает visibility: hidden?",
        a: [
            "A) Элементти толугу менен жок кылат / Убирает элемент полностью",
            "B) ✅Жашырат, бирок орунду калтырат / Скрывает, но место остаётся",
            "C) DOMдон чыгарат / Удаляет из DOM",
            "D) Кичирейтет / Делает маленьким"
        ],
        correct: 1
    },
    {
        q: "top / left кайсы учурда иштейт? / Когда работают top / left?",
        a: [
            "A) static",
            "B) ✅relative / absolute / fixed (жана sticky)",
            "C) inline",
            "D) block"
        ],
        correct: 1
    },
    {
        q: "Как скрыть элемент, но оставить место в layout? / Элементти жашырып, бирок орун калтыруу үчүн кайсы касиет колдонулат?",
        a: [
            "A) display: none",
            "B) opacity: 0",
            "C) ✅visibility: hidden",
            "D) z-index: -1"
        ],
        correct: 2
    },
    {
        q: "Как скрыть элемент полностью (без места)? / Элементти толугу менен жашыруу (орун калтырбай) үчүн кайсы касиет колдонулат?",
        a: [
            "A) visibility: hidden",
            "B) opacity: 0",
            "C) ✅display: none",
            "D) z-index: -1"
        ],
        correct: 2
    },
    {
        q: "z-index эмне үчүн керек? / Для чего нужен z-index?",
        a: [
            "A) Өлчөмү үчүн / Размер",
            "B) Түсү үчүн / Цвет",
            "C) ✅Элементтердин катмарын жөнгө салуу үчүн / Слой элементов",
            "D) Шрифт үчүн / Шрифт"
        ],
        correct: 2
    },
    {
  q: "top: 20px качан иштейт? / Когда работает top: 20px?",
  a: [
    "A) ар дайым / всегда",
    "B) ✅position бар болгондо / только если задано свойство position",
    "C) width бар болсо / если задан width",
    "D) display block болгондо / если display: block"
  ],
  correct: 1
}, 
{
  q: "Какое значение position «прилипает» при скролле? / Скроллда «чапталуучу» позиция кайсы?",
  a: [
    "A) fixed",
    "B) absolute",
    "C) relative",
    "D) ✅sticky"
  ],
  correct: 3
}


];

const root = document.getElementById("positionQuiz");
const scoreEl = document.getElementById("quizScore");
const totalEl = document.getElementById("quizTotal");
const resetBtn = document.getElementById("quizReset");

let score = 0;
const answered = new Set();

totalEl.textContent = quizData.length;

function renderQuiz() {
    root.innerHTML = quizData.map((item, idx) => {
        const options = item.a.map((opt, i) => `
        <button class="quiz-option" type="button" data-q="${idx}" data-i="${i}">
          ${opt}
        </button>
      `).join("");

        return `
        <div class="quiz-card" data-card="${idx}">
          <div class="quiz-q"><span class="quiz-num">#${idx + 1}</span>${item.q}</div>
          <div class="quiz-options">${options}</div>
          <div class="quiz-result" id="res-${idx}" style="display:none;"></div>
          <div class="quiz-answer" id="ans-${idx}" style="display:none;"></div>
        </div>
      `;
    }).join("");
}

function resetQuiz() {
    score = 0;
    answered.clear();
    scoreEl.textContent = score;
    renderQuiz();
}

renderQuiz();
scoreEl.textContent = score;

root.addEventListener("click", (e) => {
    const btn = e.target.closest(".quiz-option");
    if (!btn) return;

    const qIndex = Number(btn.dataset.q);
    const iIndex = Number(btn.dataset.i);

    if (answered.has(qIndex)) return;

    answered.add(qIndex);
    const correct = quizData[qIndex].correct;

    const all = root.querySelectorAll(`.quiz-option[data-q="${qIndex}"]`);
    all.forEach((b) => (b.disabled = true));

    const res = document.getElementById(`res-${qIndex}`);
    const ans = document.getElementById(`ans-${qIndex}`);

    if (iIndex === correct) {
        btn.classList.add("is-correct");
        res.textContent = "✅ Туура!";
        res.className = "quiz-result ok";
        score++;
        scoreEl.textContent = score;
    } else {
        btn.classList.add("is-wrong");
        all[correct].classList.add("is-correct");
        res.textContent = "❌ Туура эмес. Туура жооп белгиленди.";
        res.className = "quiz-result bad";
    }

    res.style.display = "block";
    ans.style.display = "block";
    ans.innerHTML = `Туура жооп: <code>${quizData[qIndex].a[correct]}</code><br><span style="font-weight:700;color:#666;">Түшүндүрмө: ${quizData[qIndex].explain}</span>`;
});

resetBtn.addEventListener("click", resetQuiz);