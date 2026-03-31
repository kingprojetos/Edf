const firebaseConfig = {
  apiKey: "AIzaSyAsfJXibsG_q4lYbKtLIUJT8HJb4VVOLOw",
  authDomain: "introef-529bf.firebaseapp.com",
  projectId: "introef-529bf",
  storageBucket: "introef-529bf.firebasestorage.app",
  messagingSenderId: "1032565542910",
  appId: "1:1032565542910:web:3e0827dc9a4157b310faaf"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// BANCO DE 50 QUESTÕES EXTRAÍDAS DO PDF
const questionBank = [
    { q: "A Educação Física estuda o corpo em movimento e a cultura corporal?", options: ["Verdadeiro", "Falso"], a: 0 },
    { q: "O movimento humano é apenas biológico, sem construção cultural?", options: ["Verdadeiro", "Falso"], a: 1 },
    { q: "Quais são os 3 conhecimentos da área?", options: ["Prático, Teórico, Técnico", "Empírico, Científico, Filosófico", "Escolar, Militar, Esportivo"], a: 1 },
    { q: "Em que ano a EF entrou nos currículos escolares?", options: ["1850", "1937", "1980"], a: 0 },
    { q: "A EF tornou-se obrigatória por lei em qual ano?", options: ["1850", "1937", "1998"], a: 1 },
    { q: "Qual fase histórica focava em disciplina e saúde no século XIX?", options: ["Esportivista", "Militar e Higienista", "Inclusiva"], a: 1 },
    { q: "A fase esportivista de 1970 tinha foco em:", options: ["Saúde pública", "Competição e desempenho", "Dança e lutas"], a: 1 },
    { q: "O primeiro mestrado em Educação Física surgiu em:", options: ["1977", "1987", "1997"], a: 0 },
    { q: "A regulamentação da profissão (Lei 9.696) ocorreu em:", options: ["1980", "1990", "1998"], a: 2 },
    { q: "O CONFEF e o CREF foram criados em:", options: ["1998", "2004", "2020"], a: 0 },
    { q: "Onde o Licenciado em Ed. Física pode atuar?", options: ["Academias", "Escolas", "Hospitais"], a: 1 },
    { q: "O Bacharel pode atuar na Educação Básica?", options: ["Sim", "Não"], a: 1 },
    { q: "Deixar de fazer o que deveria (omissão) é:", options: ["Imprudência", "Imperícia", "Negligência"], a: 2 },
    { q: "Agir sem o cuidado necessário é:", options: ["Imprudência", "Imperícia", "Negligência"], a: 0 },
    { q: "Falta de conhecimento técnico para a tarefa é:", options: ["Imprudência", "Imperícia", "Negligência"], a: 1 },
    { q: "O princípio da Bioética focado na decisão do aluno é:", options: ["Justiça", "Autonomia", "Beneficência"], a: 1 },
    { q: "Qual princípio diz para não causar dano intencional?", options: ["Não Maleficência", "Justiça", "Autonomia"], a: 0 },
    { q: "A EF foi reconhecida como área da saúde em:", options: ["1990", "1997", "2013"], a: 1 },
    { q: "A atuação em hospitais foi oficializada em:", options: ["2008", "2015", "2020"], a: 2 },
    { q: "O dualismo (corpo separado da mente) vem de:", options: ["Platão e Descartes", "Paulo Freire", "Aristóteles"], a: 0 },
    { q: "Epistemologia significa o estudo de quê?", options: ["Do corpo", "Do conhecimento", "Do esporte"], a: 1 },
    { q: "A Cultura Corporal inclui danças, lutas e jogos?", options: ["Sim", "Não"], a: 0 },
    { q: "Desenvolvimento integral envolve as áreas:", options: ["Só física", "Cognitiva, psicomotora e afetiva", "Só técnica"], a: 1 },
    { q: "O corpo é visto apenas como biológico?", options: ["Sim", "Não, também é social e cultural"], a: 1 },
    { q: "A EF é consolidada como ciência a partir de:", options: ["1937", "Anos 1980", "2004"], a: 1 },
    { q: "O que significa NASF (criado em 2008)?", options: ["Núcleo de Saúde da Família", "Núcleo de Apoio à Saúde da Família", "Nova Aliança de Saúde Física"], a: 1 },
    { q: "As diretrizes curriculares foram estabelecidas em:", options: ["2002", "2004", "2013"], a: 1 },
    { q: "A mudança na formação acadêmica ocorreu em:", options: ["1987", "1997", "2007"], a: 0 },
    { q: "O doutorado na área surgiu em:", options: ["1980", "1989", "1999"], a: 1 },
    { q: "O SUS passou a incluir a EF na década de:", options: ["1980", "1990", "2000"], a: 1 },
    { q: "A atividade física foi ratificada como saúde em:", options: ["2004", "2008", "2013"], a: 2 },
    { q: "A consolidação da disciplina na escola foi em:", options: ["1850", "1938", "1970"], a: 1 },
    { q: "Fazer o bem ao próximo na Bioética é:", options: ["Justiça", "Beneficência", "Imperícia"], a: 1 },
    { q: "O princípio da equidade (divisão justa) é:", options: ["Autonomia", "Justiça", "Não Maleficência"], a: 1 },
    { q: "A Educação Física na escola busca formar atletas?", options: ["Sim", "Não, busca formação integral e crítica"], a: 1 },
    { q: "O conhecimento científico baseia-se em pesquisas?", options: ["Verdadeiro", "Falso"], a: 0 },
    { q: "O conhecimento empírico vem da experiência do dia a dia?", options: ["Verdadeiro", "Falso"], a: 0 },
    { q: "A fase higienista focava na limpeza e saúde pública?", options: ["Verdadeiro", "Falso"], a: 0 },
    { q: "A Licenciatura permite trabalhar em clubes e academias?", options: ["Sim", "Não, apenas no ensino escolar"], a: 1 },
    { q: "O Bacharelado permite trabalhar em hospitais e clínicas?", options: ["Sim", "Não"], a: 0 },
    { q: "A disciplina é obrigatória para todos os níveis escolares?", options: ["Verdadeiro", "Falso"], a: 0 },
    { q: "O sistema CONFEF/CREF fiscaliza a profissão?", options: ["Sim", "Não"], a: 0 },
    { q: "Educação Física envolve apenas prática?", options: ["Sim", "Não, envolve teoria e ciência"], a: 1 },
    { q: "Na fase militar, o foco era formar soldados saudáveis?", options: ["Verdadeiro", "Falso"], a: 0 },
    { q: "A Epistemologia estuda como o saber é produzido?", options: ["Verdadeiro", "Falso"], a: 0 },
    { q: "A Bioética orienta a conduta do profissional?", options: ["Verdadeiro", "Falso"], a: 0 },
    { q: "O profissional deve respeitar a vontade do aluno?", options: ["Sim, princípio da autonomia", "Não"], a: 0 },
    { q: "A formação integral inclui o domínio psicomotor?", options: ["Verdadeiro", "Falso"], a: 0 },
    { q: "O termo 'Cultura Corporal' é de qual década?", options: ["1930", "1980", "2020"], a: 1 },
    { q: "A Educação Física hoje é uma profissão da saúde?", options: ["Sim", "Não"], a: 0 }
];

let currentUserName = "";
let currentScore = 0;

window.startGame = function() {
    const nameInput = document.getElementById('username').value.trim();
    if (nameInput) {
        currentUserName = nameInput;
        currentScore = 0;
        document.getElementById('player-name').innerText = "Jogador: " + currentUserName;
        document.getElementById('login-screen').classList.remove('active');
        document.getElementById('game-screen').classList.add('active');
        loadRandomQuestion();
    } else { alert("Digite seu nome!"); }
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
                btn.style.backgroundColor = "#28a745";
            } else {
                btn.style.backgroundColor = "#dc3545";
                allBtns[qObj.a].style.backgroundColor = "#28a745";
            }
            document.getElementById('score-display').innerText = "Pontos: " + currentScore;
            setTimeout(loadRandomQuestion, 1200); 
        };
        container.appendChild(btn);
    });
}

window.finishGame = async function() {
    try {
        await db.collection("leaderboard").add({
            name: currentUserName,
            score: currentScore,
            date: firebase.firestore.FieldValue.serverTimestamp()
        });
        showLeaderboard();
    } catch (e) { alert("Erro ao salvar!"); }
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
