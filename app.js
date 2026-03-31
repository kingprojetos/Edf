// 1. CONFIGURAÇÃO DO SEU FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyAsfJXibsG_q4lYbKtLIUJT8HJb4VVOLOw",
  authDomain: "introef-529bf.firebaseapp.com",
  projectId: "introef-529bf",
  storageBucket: "introef-529bf.firebasestorage.app",
  messagingSenderId: "1032565542910",
  appId: "1:1032565542910:web:3e0827dc9a4157b310faaf"
};

// Inicialização para Versão Compat (Celular)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 2. BANCO DE QUESTÕES (Exemplos variados do seu PDF)
const questionBank = [
    { q: "A Educação Física estuda apenas a prática de esportes?", options: ["Verdadeiro", "Falso (Envolve teoria e ciência)"], a: 1 },
    { q: "Em que ano a Educação Física entrou nos currículos escolares?", options: ["1850", "1937", "1998"], a: 0 },
    { q: "O que caracteriza a Negligência?", options: ["Falta de técnica", "Omissão (deixar de fazer)", "Ação sem cuidado"], a: 1 },
    { q: "Qual fase (1970) focava em competição e desempenho?", options: ["Higienista", "Militarista", "Esportivista"], a: 2 },
    { q: "O Bacharel pode dar aulas em escolas?", options: ["Sim", "Não (Apenas Licenciados)"], a: 1 },
    { q: "Qual década marca a consolidação da EF como ciência?", options: ["1950", "1980", "2020"], a: 1 },
    { q: "O que é Imperícia?", options: ["Falta de conhecimento técnico", "Ação precipitada", "Esquecimento"], a: 0 },
    { q: "O princípio da Bioética que preza pelo 'não dano' é:", options: ["Autonomia", "Justiça", "Não Maleficência"], a: 2 },
    { q: "Em que ano a EF tornou-se obrigatória por lei?", options: ["1937", "1938", "1977"], a: 0 },
    { q: "Quem defendia o dualismo corpo x mente?", options: ["Sócrates", "Platão e Descartes", "Paulo Freire"], a: 1 }
    // Para chegar a 90, basta copiar a linha acima e mudar o texto!
];

let currentUserName = "";
let currentScore = 0;

// 3. FUNÇÕES DO JOGO
window.startGame = function() {
    const nameInput = document.getElementById('username').value.trim();
    if (nameInput) {
        currentUserName = nameInput;
        currentScore = 0;
        document.getElementById('player-name').innerText = "Jogador: " + currentUserName;
        document.getElementById('login-screen').classList.remove('active');
        document.getElementById('game-screen').classList.add('active');
        loadRandomQuestion();
    } else {
        alert("Digite seu nome!");
    }
};

function loadRandomQuestion() {
    const qObj = questionBank[Math.floor(Math.random() * questionBank.length)];
    document.getElementById('question-text').innerText = qObj.q;
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    qObj.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = 'option-btn';
        btn.onclick = () => {
            const allBtns = container.querySelectorAll('button');
            allBtns.forEach(b => b.disabled = true);
            
            if(i === qObj.a) {
                currentScore += 10;
                btn.style.backgroundColor = "#28a745"; // Verde
            } else {
                btn.style.backgroundColor = "#dc3545"; // Vermelho
                allBtns[qObj.a].style.backgroundColor = "#28a745";
            }
            document.getElementById('score-display').innerText = "Pontos: " + currentScore;
            setTimeout(loadRandomQuestion, 1500); 
        };
        container.appendChild(btn);
    });
}

window.finishGame = async function() {
    try {
        await db.collection("leaderboard").add({
            name: currentUserName,
            score: currentScore,
            date: new Date()
        });
        showLeaderboard();
    } catch (e) {
        alert("Erro ao salvar! Verifique as Regras do seu Banco no Firebase.");
    }
};

function showLeaderboard() {
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('leaderboard-screen').classList.add('active');
    
    db.collection("leaderboard").orderBy("score", "desc").limit(10).onSnapshot(snap => {
        const list = document.getElementById('leaderboard-list');
        list.innerHTML = '';
        snap.forEach(doc => {
            const data = doc.data();
            list.innerHTML += `<li>${data.name}: ${data.score} pts</li>`;
        });
    });
}

window.restartGame = () => location.reload();
