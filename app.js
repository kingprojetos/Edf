// 1. CONFIGURAÇÃO DO SEU FIREBASE
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

// 2. BANCOS DE DADOS POR DISCIPLINA
const bancos = {
    educacao_fisica: [
        // COLE AQUI AS 100 QUESTÕES DE ED. FÍSICA QUE MANDAMOS ANTES
        { q: "Qual o objeto de estudo da Educação Física?", options: ["Esporte", "Corpo em movimento", "Anatomia", "Saúde", "Lazer"], a: 1 },
    ],
    biologia_celular: [
        { q: "1. A teoria celular estabelece que:", options: ["Apenas organismos multicelulares possuem células", "As células surgem por geração espontânea", "Todas as células se originam de células pré-existentes", "Apenas células animais possuem núcleo", "O núcleo é a unidade básica da vida"], a: 2 },
        { q: "2. Sobre as células procarióticas, é correto afirmar que:", options: ["Possuem núcleo delimitado por membrana", "Apresentam organelas membranosas desenvolvidas", "O DNA encontra-se disperso no citoplasma", "São exclusivamente pluricelulares", "Possuem mitocôndrias funcionais"], a: 2 },
        { q: "3. A organela responsável pela produção de ATP é:", options: ["Lisossomo", "Mitocôndria", "Núcleo", "Ribossomo", "Complexo golgiense"], a: 1 },
        { q: "4. O retículo endoplasmático rugoso tem como principal função:", options: ["Produção de lipídios", "Digestão intracelular", "Síntese de proteínas", "Produção de energia", "Armazenamento de água"], a: 2 },
        { q: "5. O resultado final da mitose é:", options: ["Quatro células geneticamente diferentes", "Duas células geneticamente idênticas", "Uma célula com o dobro de DNA", "Quatro células haploides", "Duas células diferentes"], a: 1 },
        { q: "6. A meiose é importante porque:", options: ["Produz células somáticas idênticas", "Aumenta o número de cromossomos", "Origina gametas haploides", "Ocorre apenas em bactérias", "Não participa da reprodução"], a: 2 },
        { q: "7. A fecundação humana ocorre:", options: ["No útero", "No ovário", "Na tuba uterina", "Na vagina", "No colo do útero"], a: 2 },
        { q: "8. O zigoto corresponde:", options: ["Ao óvulo não fecundado", "Ao espermatozoide maduro", "À célula formada pela união dos gametas", "A um embrião desenvolvido", "A um hormônio reprodutivo"], a: 2 },
        { q: "9. O hormônio responsável por desencadear a ovulação é:", options: ["Progesterona", "Estrogênio", "LH", "FSH", "Testosterona"], a: 2 },
        { q: "10. A variabilidade genética na meiose ocorre principalmente devido:", options: ["À duplicação do DNA", "À divisão celular simples", "Ao crossing-over", "À ausência de divisão", "À produção de ATP"], a: 2 },
        { q: "11. Uma diferença entre célula animal e vegetal é:", options: ["Animal possui parede celular", "Vegetal possui cloroplastos", "Animal realiza fotossíntese", "Vegetal não possui núcleo", "Ambas não possuem organelas"], a: 1 },
        { q: "12. O complexo golgiense atua principalmente em:", options: ["Produção de proteínas", "Digestão celular", "Empacotamento e secreção de substâncias", "Produção de energia", "Replicação do DNA"], a: 2 },
        { q: "13. Durante a meiose I ocorre:", options: ["Separação das cromátides-irmãs", "Duplicação do DNA", "Troca de segmentos entre cromossomos", "Formação de células idênticas", "Produção de ATP"], a: 2 },
        { q: "14. A metáfase é caracterizada por:", options: ["Condensação cromossômica", "Alinhamento dos cromossomos no plano equatorial", "Separação das cromátides", "Formação de dois núcleos", "Divisão do citoplasma"], a: 1 },
        { q: "15. Os lisossomos são responsáveis por:", options: ["Síntese proteica", "Digestão intracelular", "Produção de ATP", "Transporte celular", "Controle genético"], a: 1 },
        { q: "16. A membrana plasmática tem como função:", options: ["Produzir proteínas", "Armazenar DNA", "Controlar a entrada e saída de substâncias", "Produzir energia", "Realizar digestão"], a: 2 },
        { q: "17. A meiose resulta em:", options: ["Duas células diploides", "Células somáticas", "Quatro células haploides", "Células idênticas", "Apenas uma célula"], a: 2 },
        { q: "18. A anáfase da mitose envolve:", options: ["Formação de cromossomos", "Alinhamento celular", "Separação das cromátides-irmãs", "Formação de núcleo", "Repouso celular"], a: 2 },
        { q: "19. Os ribossomos são responsáveis por:", options: ["Produção de energia", "Digestão", "Síntese de proteínas", "Controle nuclear", "Armazenamento"], a: 2 },
        { q: "20. Na ausência de fecundação:", options: ["O embrião se forma", "O endométrio permanece intacto", "O endométrio é eliminado", "O óvulo se transforma", "Não ocorre ciclo menstrual"], a: 2 },
        { q: "21. Células com muito RER e Golgi:", options: ["Produzem energia", "Produzem e secretam proteínas", "Armazenam lipídios", "Estão em divisão", "Fazem digestão"], a: 1 },
        { q: "22. Na meiose, os cromossomos homólogos se separam em:", options: ["Anáfase I", "Anáfase II", "Metáfase I", "Telófase II", "Prófase II"], a: 0 },
        { q: "23. A meiose mantém o número de cromossomos porque:", options: ["Duplica o DNA", "Reduz o número pela metade nos gametas", "Produz células idênticas", "Impede fecundação", "Ocorre em células somáticas"], a: 1 },
        { q: "24. Células com alto gasto energético possuem muitas:", options: ["Lisossomos", "Ribossomos", "Mitocôndrias", "Golgi", "Núcleo"], a: 2 },
        { q: "25. Os ovócitos primários permanecem em repouso até:", options: ["Fecundação", "Infância", "Puberdade", "Menopausa", "Ovulação"], a: 2 },
        { q: "26. A função do LH é:", options: ["Crescer o endométrio", "Formar folículos", "Desencadear a ovulação", "Produzir progesterona", "Inibir gametas"], a: 2 },
        { q: "27. A duplicação do DNA ocorre na:", options: ["Prófase", "Metáfase", "Anáfase", "Interfase", "Telófase"], a: 3 },
        { q: "28. A principal diferença entre mitose e meiose é:", options: ["Mitose forma gametas", "Mitose gera variabilidade", "Mitose forma 2 células iguais e meiose 4 diferentes", "Mitose reduz cromossomos", "Não há diferença"], a: 2 },
        { q: "29. A produção de energia no espermatozoide ocorre na:", options: ["Cabeça", "Acrossomo", "Núcleo", "Peça intermediária", "Flagelo"], a: 3 },
        { q: "30. Na meiose II ocorre:", options: ["Separação de homólogos", "Formação de células idênticas", "Separação das cromátides-irmãs", "Redução cromossômica", "Crossing-over"], a: 2 },
        { q: "31. Células procarióticas possuem:", options: ["Núcleo", "Mitocôndria", "Ribossomos", "Golgi", "Retículo"], a: 2 },
        { q: "32. A principal função do núcleo é:", options: ["Produzir energia", "Digestão", "Controlar a célula e armazenar DNA", "Produzir proteínas", "Transporte"], a: 2 },
        { q: "33. O citoplasma é:", options: ["O núcleo", "Região onde ocorrem reações químicas", "DNA", "Organelas", "Parede"], a: 1 },
        { q: "34. O retículo liso atua em:", options: ["Proteínas", "Lipídios e desintoxicação", "DNA", "ATP", "Digestão"], a: 1 },
        { q: "35. A parede celular está presente em:", options: ["Células animais", "Células vegetais e bactérias", "Humanos", "Vírus", "Núcleo"], a: 1 },
        { q: "36. A organela com DNA próprio é:", options: ["Golgi", "Lisossomo", "Mitocôndria", "Ribossomo", "Núcleo"], a: 2 },
        { q: "37. O acrossomo tem função de:", options: ["Produzir energia", "Liberar enzimas para penetrar o óvulo", "Movimento", "DNA", "Hormônios"], a: 1 },
        { q: "38. A ovulação ocorre:", options: ["No início", "No meio do ciclo", "No final", "Na menstruação", "Após fecundação"], a: 1 },
        { q: "39. O FSH atua:", options: ["Ovulação", "Crescimento folicular", "Testosterona", "ATP", "Digestão"], a: 1 },
        { q: "40. O endométrio é:", options: ["Óvulo", "Revestimento do útero", "Esperma", "Transporte", "Digestão"], a: 1 },
        { q: "41. A nidação é:", options: ["Formação do óvulo", "Produção espermática", "Fixação do embrião no útero", "Menstruação", "Ovulação"], a: 2 },
        { q: "42. A testosterona:", options: ["Só feminina", "Desenvolve características masculinas", "Digestão", "ATP", "Mitose"], a: 1 },
        { q: "43. Os centríolos participam da:", options: ["Produção de proteínas", "Digestão", "Divisão celular", "Energia", "DNA"], a: 2 },
        { q: "44. Os cromossomos são:", options: ["Organelas", "DNA associado a proteínas", "Lipídios", "Hormônios", "Enzimas"], a: 1 },
        { q: "45. Na prófase ocorre:", options: ["Condensação dos cromossomos", "Separação", "Alinhamento", "Divisão", "Repouso"], a: 0 },
        { q: "46. A citocinese é:", options: ["Replicação do DNA", "Divisão do citoplasma", "Formação do núcleo", "Separação cromossômica", "Produção de ATP"], a: 1 },
        { q: "47. Os gametas humanos possuem:", options: ["46 cromossomos", "23 cromossomos", "92 cromossomos", "44 cromossomos", "2 cromossomos"], a: 1 },
        { q: "48. A fecundação forma:", options: ["Gameta", "Óvulo", "Zigoto com 46 cromossomos", "Embrião com 23", "Hormônio"], a: 2 },
        { q: "49. O flagelo tem função de:", options: ["Produzir energia", "Permitir movimento", "Armazenar DNA", "Produzir enzimas", "Divisão"], a: 1 },
        { q: "50. O complexo golgiense:", options: ["Produz ATP", "Faz digestão", "Empacotar e secreta substâncias", "Produz DNA", "Divide células"], a: 2 }
    ]
};

// 3. LÓGICA DO SISTEMA
let currentMateria = "";
let availableQuestions = [];
let userName = "";
let score = 0;

function goToMenu() {
    userName = document.getElementById('username').value.trim();
    if (userName) {
        document.getElementById('login-screen').classList.remove('active');
        document.getElementById('menu-screen').classList.add('active');
    } else { alert("Por favor, digite seu nome!"); }
}

function startQuiz(materia) {
    currentMateria = materia;
    score = 0;
    availableQuestions = [...bancos[materia]];
    document.getElementById('display-materia').innerText = materia === 'biologia_celular' ? "🧬 Biologia" : "⚽ Ed. Física";
    document.getElementById('menu-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    loadNext();
}

function loadNext() {
    if (availableQuestions.length === 0) {
        alert("Fim do simulado! Vamos ver seu ranking.");
        finishGame();
        return;
    }

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
                if(all[qObj.a]) {
                    all[qObj.a].style.backgroundColor = "#28a745";
                    all[qObj.a].style.color = "white";
                }
            }
            document.getElementById('score-display').innerText = "Pts: " + score;
            setTimeout(loadNext, 1300);
        };
        container.appendChild(btn);
    });
}

async function finishGame() {
    try {
        await db.collection("ranking_" + currentMateria).add({
            name: userName,
            score: score,
            date: firebase.firestore.FieldValue.serverTimestamp()
        });
        showRank();
    } catch (e) { alert("Erro ao salvar pontos!"); }
}

function showRank() {
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('leaderboard-screen').classList.add('active');
    document.getElementById('rank-title').innerText = "🏆 Ranking: " + (currentMateria === 'biologia_celular' ? "Biologia" : "Ed. Física");

    db.collection("ranking_" + currentMateria).orderBy("score", "desc").limit(10).onSnapshot(snap => {
        const list = document.getElementById('leaderboard-list');
        list.innerHTML = '';
        snap.forEach(doc => {
            const d = doc.data();
            list.innerHTML += `<li>${d.name}: ${d.score} pts</li>`;
        });
    });
}
