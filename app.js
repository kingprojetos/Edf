// 1. IMPORTAÇÕES DO FIREBASE (Usando a versão modular atual)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, query, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// COLE SUAS CONFIGURAÇÕES AQUI (Pegue no Console do Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyAsfJXibsG_q4lYbKtLIUJT8HJb4VVOLOw",
  authDomain: "introef-529bf.firebaseapp.com",
  projectId: "introef-529bf",
  storageBucket: "introef-529bf.firebasestorage.app",
  messagingSenderId: "1032565542910",
  appId: "1:1032565542910:web:3e0827dc9a4157b310faaf"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 2. BANCO DE QUESTÕES (Adicione as 90 aqui seguindo este formato)
const questionBank = [
    {
        [span_1](start_span)question: "A Educação Física é uma área que estuda o corpo em movimento, integra o indivíduo à cultura corporal e promove desenvolvimento integral.", //[span_1](end_span)
        options: ["Verdadeiro", "Falso"],
        answer: 0
    },
    {
        [span_2](start_span)question: "Historicamente, nos séculos XVIII e XIX, qual era o foco principal da Educação Física?", //[span_2](end_span)
        options: ["Base militar e higienista", "Esporte de alto rendimento", "Inclusão social", "Tecnologia e games"],
        answer: 0
    },
    {
        [span_3](start_span)question: "A Educação Física consolidou-se como ciência, com base teórica e visão crítica, a partir de qual década?", //[span_3](end_span)
        options: ["1850", "1937", "Anos 1980", "2002"],
        answer: 2
    },
    {
        [span_4](start_span)question: "O profissional que age sem o cuidado necessário (faz sem cuidado) comete:", //[span_4](end_span)
        options: ["Imperícia", "Negligência", "Imprudência", "Beneficência"],
        answer: 2
    },
    {
        [span_5](start_span)question: "A 'Cultura Corporal' engloba práticas como esportes, jogos, danças, lutas e ginástica com significado social.", //[span_5](end_span)
        options: ["Verdadeiro", "Falso"],
        answer: 0
    }
    // Adicione vírgula e copie mais blocos para inserir as outras questões!
];

// 3. VARIÁVEIS DO JOGO
let currentUserName = "";
let currentScore = 0;
let currentQuestionObj = null;

// Elementos HTML
const screens = {
    login: document.getElementById('login-screen'),
    game: document.getElementById('game-screen'),
    leaderboard: document.getElementById('leaderboard-screen')
};

// 4. LÓGICA DE NAVEGAÇÃO E JOGO
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

document.getElementById('start-btn').addEventListener('click', () => {
    const nameInput = document.getElementById('username').value.trim();
    if (nameInput) {
        currentUserName = nameInput;
        currentScore = 0;
        document.getElementById('player-name').innerText = currentUserName;
        updateScoreDisplay();
        showScreen('game');
        loadRandomQuestion();
    } else {
        alert("Por favor, insira seu nome!");
    }
});

function loadRandomQuestion() {
    // Escolhe uma pergunta aleatória do banco
    const randomIndex = Math.floor(Math.random() * questionBank.length);
    currentQuestionObj = questionBank[randomIndex];
    
    document.getElementById('question-text').innerText = currentQuestionObj.question;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // Cria os botões de resposta
    currentQuestionObj.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.className = 'option-btn';
        btn.onclick = () => checkAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
    
    document.getElementById('next-btn').classList.add('hidden');
}

function checkAnswer(selectedIndex, btnElement) {
    const optionsContainer = document.getElementById('options-container');
    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    
    // Desativa botões após o clique
    allBtns.forEach(btn => btn.disabled = true);
    
    if (selectedIndex === currentQuestionObj.answer) {
        btnElement.classList.add('correct');
        currentScore += 10; // Ganha 10 pontos por acerto
        updateScoreDisplay();
    } else {
        btnElement.classList.add('wrong');
        allBtns[currentQuestionObj.answer].classList.add('correct'); // Mostra a certa
    }
    
    document.getElementById('next-btn').classList.remove('hidden');
}

function updateScoreDisplay() {
    document.getElementById('score-display').innerText = `Pontos: ${currentScore}`;
}

document.getElementById('next-btn').addEventListener('click', loadRandomQuestion);

// 5. ENCERRAR E SALVAR NO FIREBASE
document.getElementById('finish-btn').addEventListener('click', async () => {
    try {
        // Salva no banco de dados Firestore
        await addDoc(collection(db, "leaderboard"), {
            name: currentUserName,
            score: currentScore,
            timestamp: new Date()
        });
        showScreen('leaderboard');
        loadLeaderboard();
    } catch (e) {
        console.error("Erro ao salvar pontuação: ", e);
        alert("Erro ao salvar sua pontuação. Verifique a conexão.");
    }
});

// 6. CARREGAR RANKING EM TEMPO REAL
function loadLeaderboard() {
    const q = query(collection(db, "leaderboard"), orderBy("score", "desc"), limit(10));
    
    // onSnapshot atualiza a tela automaticamente se outra pessoa jogar
    onSnapshot(q, (snapshot) => {
        const list = document.getElementById('leaderboard-list');
        list.innerHTML = '';
        snapshot.forEach((doc) => {
            const data = doc.data();
            const li = document.createElement('li');
            li.innerHTML = `<span>${data.name}</span> <span>${data.score} pts</span>`;
            list.appendChild(li);
        });
    });
}

document.getElementById('restart-btn').addEventListener('click', () => {
    document.getElementById('username').value = '';
    showScreen('login');
});
