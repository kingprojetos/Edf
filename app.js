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

// BANCOS DE DADOS
const bancos = {
    educacao_fisica: [
        { q: "Qual o objeto de estudo da Educação Física?", options: ["Esporte", "Corpo em movimento", "Anatomia", "Saúde", "Lazer"], a: 1 },
        // ... (Aqui você mantém as 100 questões de Ed. Física que já temos)
    ],
    biologia_celular: [
        { q: "A teoria celular afirma que:", options: ["Animais têm células", "Células surgem do nada", "Células vêm de pré-existentes", "Só microbios têm células", "Núcleo é a base"], a: 2 },
        { q: "Célula procariótica:", options: ["Tem núcleo", "DNA no núcleo", "DNA solto e sem organelas", "Só pluricelular", "Tem mitocôndria"], a: 2 },
        { q: "Produção de ATP:", options: ["Lisossomo", "Mitocôndria", "Núcleo", "Ribossomo", "Golgi"], a: 1 },
        { q: "Retículo rugoso:", options: ["Lipídios", "Digestão", "Produção de proteínas", "Energia", "Armazenamento"], a: 2 },
        { q: "Mitose:", options: ["4 diferentes", "2 idênticas", "1 célula", "4 iguais", "2 diferentes"], a: 1 },
        { q: "Meiose:", options: ["Células iguais", "Aumenta cromossomos", "Forma gametas (metade)", "Não reproduz", "Só bactérias"], a: 2 },
        { q: "Fecundação ocorre na:", options: ["Útero", "Ovário", "Tuba uterina", "Vagina", "Colo"], a: 2 },
        { q: "Zigoto é:", options: ["Óvulo", "Espermatozoide", "União dos gametas", "Embrião", "Hormônio"], a: 2 },
        { q: "Hormônio da ovulação:", options: ["Progesterona", "Estrogênio", "LH", "Testosterona", "Insulina"], a: 2 },
        { q: "Variabilidade genética:", options: ["Duplicação", "Divisão", "Crossing-over", "Sem divisão", "ATP"], a: 2 },
        { q: "Diferença animal x vegetal:", options: ["Animal tem parede", "Vegetal tem cloroplasto", "Animal faz fotossíntese", "Vegetal sem núcleo", "Sem organelas"], a: 1 },
        { q: "Empacotamento de substâncias:", options: ["Ribossomo", "Lisossomo", "Golgi", "Núcleo", "Mitocôndria"], a: 2 },
        { q: "Meiose I ocorre:", options: ["Separa cromátides", "DNA duplica", "Crossing-over", "Idênticas", "ATP"], a: 2 },
        { q: "Metáfase:", options: ["Prófase", "Alinhamento no centro", "Separação", "Final", "Divisão"], a: 1 },
        { q: "Lisossomo faz:", options: ["Proteína", "Digestão celular", "Energia", "Transporte", "Núcleo"], a: 1 },
        { q: "Entrada e saída da célula:", options: ["Núcleo", "Citoplasma", "Membrana plasmática", "Ribossomo", "Golgi"], a: 2 },
        { q: "Resultado da Meiose:", options: ["2 células", "Somáticas", "4 células com metade DNA", "Sem divisão", "Iguais"], a: 2 },
        { q: "Anáfase ocorre:", options: ["Início", "Meio", "Separação das cromátides", "Final", "Interfase"], a: 2 },
        { q: "Ribossomo produz:", options: ["Energia", "Digestão", "Proteínas", "Núcleo", "Armazenamento"], a: 2 },
        { q: "Sem fecundação ocorre:", options: ["Embrião", "Mantém endométrio", "Menstruação", "Óvulo", "Hormônio"], a: 2 },
        { q: "Células com muito RER + Golgi:", options: ["Energia", "Secretam proteínas", "Lipídios", "Divisão", "Digestão"], a: 1 },
        { q: "Meiose – separação homólogos:", options: ["Anáfase I", "Anáfase II", "Metáfase", "Telófase", "Prófase"], a: 0 },
        { q: "Meiose mantém cromossomos porque:", options: ["Duplica", "Reduz metade nos gametas", "Idênticas", "Impede fecundação", "Somática"], a: 1 },
        { q: "Célula com muita energia tem muita:", options: ["Lisossomo", "Ribossomo", "Mitocôndria", "Golgi", "Núcleo"], a: 2 },
        { q: "Ovócito fica em repouso até:", options: ["Fecundação", "Infância", "Puberdade", "Menopausa", "Ovulação"], a: 2 },
        { q: "O Hormônio LH causa:", options: ["Endométrio", "Folículo", "Ovulação", "Progesterona", "Inibe"], a: 2 },
        { q: "DNA duplica na:", options: ["Prófase", "Metáfase", "Anáfase", "Interfase", "Telófase"], a: 3 },
        { q: "Mitose vs Meiose:", options: ["Gametas", "Variabilidade", "Mitose 2 iguais / Meiose 4 diferentes", "Redução", "Iguais"], a: 2 },
        { q: "Energia do espermatozoide fica na:", options: ["Cabeça", "Acrossomo", "Núcleo", "Peça intermediária", "Flagelo"], a: 3 },
        { q: "Meiose II separa:", options: ["Homólogos", "Idênticas", "Cromátides", "Redução", "Crossing"], a: 2 },
        { q: "Presente em procarióticas:", options: ["Núcleo", "Mitocôndria", "Ribossomos", "Golgi", "Retículo"], a: 2 },
        { q: "Função do núcleo:", options: ["Energia", "Digestão", "Armazenar DNA/Controlar", "Proteínas", "Transporte"], a: 2 },
        { q: "Citoplasma é:", options: ["Núcleo", "Região entre membrana e núcleo", "DNA", "Organelas", "Parede"], a: 1 },
        { q: "Retículo liso atua em:", options: ["Proteínas", "Lipídios e desintoxicação", "DNA", "ATP", "Digestão"], a: 1 },
        { q: "Parede celular presente em:", options: ["Animais", "Vegetais e bactérias", "Humanas", "Vírus", "Núcleo"], a: 1 },
        { q: "Tem DNA próprio:", options: ["Golgi", "Lisossomo", "Mitocôndria", "Ribossomo", "Núcleo"], a: 2 },
        { q: "Acrossomo do espermatozoide:", options: ["Energia", "Enzimas para penetrar óvulo", "Movimento", "DNA", "Hormônios"], a: 1 },
        { q: "Ovulação ocorre no:", options: ["Início", "Meio (~14º dia)", "Final", "Menstruação", "Fecundação"], a: 1 },
        { q: "O FSH faz:", options: ["Ovulação", "Crescer folículos", "Testosterona", "ATP", "Digestão"], a: 1 },
        { q: "O endométrio é:", options: ["Óvulos", "Revestimento do útero", "Espermatozoides", "Transporte", "Digestão"], a: 1 },
        { q: "Nidação é:", options: ["Formar óvulo", "Produzir esperma", "Fixar embrião no útero", "Menstruação", "Ovulação"], a: 2 },
        { q: "Testosterona estimula:", options: ["Mulheres", "Características masculinas", "Digestão", "ATP", "Mitose"], a: 1 },
        { q: "Centríolos participam da:", options: ["Proteína", "Digestão", "Divisão celular", "Energia", "DNA"], a: 2 },
        { q: "Cromossomos são:", options: ["Organelas", "DNA + Proteínas", "Lipídios", "Hormônios", "Enzimas"], a: 1 },
        { q: "Prófase da mitose:", options: ["Condensação", "Separação", "Alinhamento", "Divisão", "Repouso"], a: 0 },
        { q: "Citocinese é:", options: ["Duplicar DNA", "Dividir citoplasma", "Formar núcleo", "Separar cromossomos", "ATP"], a: 1 },
        { q: "Gametas humanos têm:", options: ["46 cromossomos", "23 cromossomos", "92 cromossomos", "44 cromossomos", "2 cromossomos"], a: 1 },
        { q: "Fecundação resulta em:", options: ["Gameta", "Óvulo", "Zigoto com 46", "Embrião com 23", "Hormônio"], a: 2 },
        { q: "Flagelo permite:", options: ["Energia", "Movimento", "DNA", "Enzimas", "Divisão"], a: 1 },
        { q: "Função do Golgi:", options: ["ATP", "Digestão", "Empacotar e secretar", "DNA", "Dividir"], a: 2 }
    ]
};

let currentMateria = "";
let availableQuestions = [];
let userName = "";
let score = 0;

function goToMenu() {
    userName = document.getElementById('username').value.trim();
    if (userName) {
        document.getElementById('login-screen').classList.remove('active');
        document.getElementById('menu-screen').classList.add('active');
    } else { alert("Digite seu nome!"); }
}

function startQuiz(materia) {
    currentMateria = materia;
    score = 0;
    availableQuestions = [...bancos[materia]];
    document.getElementById('display-materia').innerText = materia === 'biologia_celular' ? "Bio. Celular" : "Ed. Física";
    document.getElementById('menu-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    loadNext();
}

function loadNext() {
    if (availableQuestions.length === 0) { finishGame(); return; }
    const idx = Math.floor(Math.random() * availableQuestions.length);
    const qObj = availableQuestions.splice(idx, 1)[0];
    
    document.getElementById('question-text').innerText = qObj.q;
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    const letters = ['A','B','C','D','E'];

    qObj.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.innerText = letters[i] + ") " + opt;
        btn.className = 'option-btn';
        btn.onclick = () => {
            const all = container.querySelectorAll('button');
            all.forEach(b => b.disabled = true);
            if(i === qObj.a) {
                score += 10;
                btn.style.backgroundColor = "#28a745"; btn.style.color = "white";
            } else {
                btn.style.backgroundColor = "#dc3545"; btn.style.color = "white";
                all[qObj.a].style.backgroundColor = "#28a745"; all[qObj.a].style.color = "white";
            }
            document.getElementById('score-display').innerText = "Pts: " + score;
            setTimeout(loadNext, 1200);
        };
        container.appendChild(btn);
    });
}

async function finishGame() {
    // Salva no ranking específico da matéria
    await db.collection("ranking_" + currentMateria).add({
        name: userName, score: score, date: new Date()
    });
    showRank();
}

function showRank() {
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('leaderboard-screen').classList.add('active');
    document.getElementById('rank-title').innerText = "🏆 Ranking: " + (currentMateria === 'biologia_celular' ? "Bio" : "Ed. Física");

    db.collection("ranking_" + currentMateria).orderBy("score", "desc").limit(10).onSnapshot(snap => {
        const list = document.getElementById('leaderboard-list');
        list.innerHTML = '';
        snap.forEach(doc => {
            const d = doc.data();
            list.innerHTML += `<li>${d.name}: ${d.score} pts</li>`;
        });
    });
}
