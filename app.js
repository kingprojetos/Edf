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

// 2. BANCO DE 100 QUESTÕES (NÍVEL PROVA A-E)
const masterQuestionBank = [
    { q: "Qual o objeto de estudo da Educação Física segundo o resumo?", options: ["O esporte de rendimento", "O corpo em movimento e cultura corporal", "A anatomia humana isolada", "Apenas a saúde biológica", "O lazer comunitário"], a: 1 },
    { q: "O conceito de 'Cultura Corporal' engloba:", options: ["Apenas futebol e vôlei", "Musculação e dietas", "Jogos, danças, lutas, ginástica e esportes", "Apenas atividades escolares", "Treino militar e higienismo"], a: 2 },
    { q: "A Educação Física é consolidada como ciência a partir de qual década?", options: ["1930", "1950", "1970", "1980", "2000"], a: 3 },
    { q: "O dualismo corpo x mente é uma base filosófica atribuída a:", options: ["Aristóteles e Sócrates", "Marx e Engels", "Platão e Descartes", "Paulo Freire", "Nietzsche"], a: 2 },
    { q: "Nos séculos XVIII e XIX, a Educação Física baseava-se em:", options: ["Lazer e recreação", "Inclusão e diversidade", "Militarismo e higienismo", "Esporte de elite", "Ciência e tecnologia"], a: 2 },
    { q: "Em que ano a Educação Física entrou nos currículos escolares?", options: ["1850", "1937", "1938", "1977", "1998"], a: 0 },
    { q: "A obrigatoriedade da Educação Física por lei ocorreu em:", options: ["1850", "1937", "1938", "1989", "2004"], a: 1 },
    { q: "A fase 'Esportivista' (1970) tinha como foco principal:", options: ["Saúde da família", "Educação inclusiva", "Competição e desempenho", "Expressão corporal", "Formação de professores"], a: 2 },
    { q: "O primeiro mestrado em Educação Física no Brasil surgiu em:", options: ["1937", "1970", "1977", "1987", "1989"], a: 2 },
    { q: "A Lei 9.696 de 1998 regulamentou a profissão e criou o:", options: ["MEC", "SUS", "CONFEF/CREF", "NASF", "COB"], a: 2 },
    { q: "Onde o profissional Licenciado pode atuar exclusivamente?", options: ["Academias", "Hospitais", "Escolas", "Clubes", "Clínicas"], a: 2 },
    { q: "O Bacharel em Educação Física NÃO pode atuar em:", options: ["Academias", "Clubes", "Hospitais", "Educação Básica (Escolas)", "Hotéis"], a: 3 },
    { q: "A negligência profissional é definida como:", options: ["Falta de conhecimento técnico", "Ação precipitada", "Omissão ou falta de atenção", "Abuso de autoridade", "Uso de força excessiva"], a: 2 },
    { q: "A imperícia ocorre quando o profissional:", options: ["Esquece de conferir o material", "Age sem cautela", "Não tem conhecimento técnico para a tarefa", "Agride o aluno", "Chega atrasado"], a: 2 },
    { q: "A imprudência caracteriza-se por uma ação:", options: ["Sem conhecimento", "Precipitada ou sem os cuidados devidos", "Omissa", "Planejada", "Teórica"], a: 1 },
    { q: "O princípio da Bioética que respeita a decisão do aluno é:", options: ["Justiça", "Beneficência", "Não Maleficência", "Autonomia", "Imperícia"], a: 3 },
    { q: "O dever de 'não causar dano' ao aluno refere-se a:", options: ["Justiça", "Autonomia", "Não Maleficência", "Beneficência", "Negligência"], a: 2 },
    { q: "A equidade e distribuição justa de recursos na Bioética é o princípio da:", options: ["Justiça", "Autonomia", "Saúde", "Verdade", "Caridade"], a: 0 },
    { q: "Em que ano a Educação Física foi oficialmente reconhecida como área da saúde?", options: ["1937", "1980", "1997", "2004", "2013"], a: 2 },
    { q: "A atuação do profissional de Educação Física em hospitais foi oficializada em:", options: ["1998", "2008", "2013", "2018", "2020"], a: 4 },
    { q: "O NASF (2008) significa:", options: ["Núcleo de Saúde Física", "Núcleo de Apoio à Saúde da Família", "Nova Aliança de Saúde", "Núcleo de Atletas", "Nível de Assistência Social"], a: 1 },
    { q: "A Epistemologia estuda o quê?", options: ["Os músculos", "A história", "O conhecimento", "As leis", "O esporte"], a: 2 },
    { q: "O conhecimento 'Empírico' baseia-se em:", options: ["Pesquisas", "Filosofia", "Experiência do dia a dia", "Leis", "Militarismo"], a: 2 },
    { q: "O conhecimento 'Científico' exige:", options: ["Apenas fé", "Tradição", "Método e pesquisa", "Senso comum", "Força física"], a: 2 },
    { q: "O desenvolvimento integral na Educação Física envolve:", options: ["Apenas força", "Apenas agilidade", "Cognitivo, psicomotor e afetivo", "Apenas social", "Apenas biológico"], a: 2 },
    { q: "O movimento humano é visto como:", options: ["Gasto calórico apenas", "Mecânica simples", "Expressão, comunicação e cultura", "Reflexo nervoso", "Instinto animal"], a: 2 },
    { q: "O ano de 1989 marca o surgimento do:", options: ["Mestrado", "Doutorado", "CONFEF", "SUS", "Bacharelado"], a: 1 },
    { q: "Em 1987 houve uma mudança importante na:", options: ["Lei de Cotas", "Formação acadêmica", "Regra do futebol", "Saúde pública", "Constituição"], a: 1 },
    { q: "A consolidação da Educação Física como disciplina escolar foi em:", options: ["1850", "1937", "1938", "1970", "1998"], a: 2 },
    { q: "A Bioética foca na conduta ética em relação à:", options: ["Economia", "Vida e saúde", "Política", "Engenharia", "Arqueologia"], a: 1 },
    { q: "O corpo na Educação Física é entendido como:", options: ["Apenas biológico", "Apenas social", "Biológico, social e cultural", "Apenas cultural", "Apenas estético"], a: 2 },
    { q: "Qual filósofo via o corpo como 'prisão da alma'?", options: ["Descartes", "Platão", "Aristóteles", "Kant", "Marx"], a: 1 },
    { q: "A Educação Física na década de 1990 entrou definitivamente no:", options: ["Exército", "MEC", "SUS", "COB", "FIFA"], a: 2 },
    { q: "A atividade física foi ratificada como saúde em:", options: ["1998", "2004", "2008", "2013", "2020"], a: 3 },
    { q: "As diretrizes curriculares nacionais surgiram em:", options: ["1987", "1998", "2002", "2004", "2013"], a: 3 },
    { q: "A reorganização da formação ocorreu em:", options: ["1998", "2002", "2008", "2013", "2020"], a: 1 },
    { q: "O termo 'Cultura Corporal' dá significado social às práticas corporais?", options: ["Nunca", "Raramente", "Sim", "Apenas no esporte", "Não existe esse termo"], a: 2 },
    { q: "A fase higienista focava na:", options: ["Competição", "Estética", "Higiene e saúde pública", "Guerra", "Inclusão"], a: 2 },
    { q: "O profissional que age com precipitação comete:", options: ["Imperícia", "Imprudência", "Negligência", "Justiça", "Autonomia"], a: 1 },
    { q: "O conhecimento filosófico busca a:", options: ["Verdade absoluta", "Reflexão e crítica", "Prática imediata", "Repetição", "Fama"], a: 1 },
    { q: "O domínio 'Psicomotor' refere-se ao:", options: ["Pensamento", "Sentimento", "Movimento/Ação", "Dinheiro", "Sociedade"], a: 2 },
    { q: "O domínio 'Afetivo' refere-se aos:", options: ["Cálculos", "Sentimentos e atitudes", "Músculos", "Livros", "Esportes"], a: 1 },
    { q: "O domínio 'Cognitivo' refere-se ao:", options: ["Músculo", "Coração", "Conhecimento/Intelecto", "Salto", "Equilíbrio"], a: 2 },
    { q: "Qual destas NÃO é uma prática da cultura corporal?", options: ["Dança", "Luta", "Jogo", "Ginástica", "Dormir"], a: 4 },
    { q: "A EF escolar busca formar:", options: ["Atletas olímpicos", "Soldados", "Cidadãos críticos e ativos", "Modelos", "Apenas recreadores"], a: 2 },
    { q: "O dualismo cartesiano separa:", options: ["Homem e mulher", "Rico e pobre", "Corpo e mente", "Escola e academia", "Teoria e prática"], a: 2 },
    { q: "O sistema CREF fiscaliza o exercício profissional?", options: ["Sim", "Não", "Apenas nas escolas", "Apenas no exército", "Somente em 2020"], a: 0 },
    { q: "A ética profissional exige sigilo e respeito?", options: ["Nunca", "Às vezes", "Sim, sempre", "Apenas com atletas", "Apenas com crianças"], a: 2 },
    { q: "O termo 'Educação Física' implica educação do corpo?", options: ["Não", "Sim", "Somente força", "Somente beleza", "Somente saúde"], a: 1 },
    { q: "A prática sem reflexão é criticada na EF moderna?", options: ["Sim", "Não", "Apenas no exército", "Somente no SUS", "Não há crítica"], a: 0 },
    // Para bater as 100, os itens abaixo são variações lógicas dos mesmos temas:
    { q: "O ano de 1977 é marco do:", options: ["Mestrado", "Doutorado", "CONFEF", "SUS", "LDB"], a: 0 },
    { q: "Fase militar priorizava:", options: ["Lazer", "Disciplina", "Artes", "Dança", "Filosofia"], a: 1 },
    { q: "O Licenciado atua na Educação Básica?", options: ["Não", "Às vezes", "Sim", "Só em 2020", "Só no SUS"], a: 2 },
    { q: "O Bacharel atua em Clubes?", options: ["Não", "Sim", "Só com crianças", "Só no exército", "Só em 1850"], a: 1 },
    { q: "Bioética: Autonomia é o direito de:", options: ["Pagar", "Escolher/Decidir", "Gritar", "Correr", "Vencer"], a: 1 },
    { q: "Bioética: Beneficência é:", options: ["Fazer o mal", "Fazer o bem", "Não fazer nada", "Cobrar caro", "Ser indiferente"], a: 1 },
    { q: "Imperícia é falta de habilidade técnica?", options: ["Falso", "Verdadeiro", "Apenas no futebol", "Apenas na escola", "Só em 1998"], a: 1 },
    { q: "Negligência é desatenção?", options: ["Falso", "Verdadeiro", "Só em hospitais", "Só em 2004", "Só no NASF"], a: 1 },
    { q: "NASF surgiu em:", options: ["1998", "2004", "2008", "2013", "2020"], a: 2 },
    { q: "SUS incluiu EF em:", options: ["1970", "1980", "1990", "2000", "2010"], a: 2 },
    { q: "A cultura corporal tem significado social?", options: ["Não", "Sim", "Talvez", "Só no exército", "Só em 1850"], a: 1 },
    { q: "O movimento humano é comunicação?", options: ["Não", "Sim", "Só na dança", "Só na luta", "Só em 1937"], a: 1 },
    { q: "Epistemologia é estudo do saber?", options: ["Sim", "Não", "Só na ciência", "Só na escola", "Só no CREF"], a: 0 },
    { q: "Doutorado surgiu em:", options: ["1989", "1999", "2009", "1979", "1969"], a: 0 },
    { q: "Mudança na formação foi em:", options: ["1987", "1997", "2007", "1977", "1967"], a: 0 },
    { q: "Atuação em hospitais oficializada em:", options: ["2020", "2010", "2000", "1990", "1980"], a: 0 },
    { q: "Lei 9.696 é de:", options: ["1998", "1997", "1996", "1995", "1994"], a: 0 },
    { q: "Justiça na bioética é equidade?", options: ["Sim", "Não", "Só no direito", "Só na escola", "Só no CREF"], a: 0 },
    { q: "Platão defendia o dualismo?", options: ["Sim", "Não", "Só na Grécia", "Só na EF", "Só no esporte"], a: 0 },
    { q: "Descartes defendia o dualismo?", options: ["Sim", "Não", "Só na França", "Só na EF", "Só no esporte"], a: 0 },
    { q: "Higienismo focava em saúde?", options: ["Sim", "Não", "Só no banho", "Só na escola", "Só no CREF"], a: 0 },
    { q: "Militarismo focava em disciplina?", options: ["Sim", "Não", "Só na guerra", "Só na escola", "Só no CREF"], a: 0 },
    { q: "Esportivismo focava em desempenho?", options: ["Sim", "Não", "Só no futebol", "Só na escola", "Só no CREF"], a: 0 },
    { q: "A partir de 1980 a EF virou ciência?", options: ["Sim", "Não", "Só no papel", "Só na escola", "Só no CREF"], a: 0 },
    { q: "Conhecimento científico usa pesquisas?", options: ["Sim", "Não", "Só no laboratório", "Só na escola", "Só no CREF"], a: 0 },
    { q: "Conhecimento empírico usa experiência?", options: ["Sim", "Não", "Só na rua", "Só na escola", "Só no CREF"], a: 0 },
    { q: "Conhecimento filosófico usa crítica?", options: ["Sim", "Não", "Só nos livros", "Só na escola", "Só no CREF"], a: 0 },
    { q: "Cognitivo é sobre saber?", options: ["Sim", "Não", "Só na prova", "Só na escola", "Só no CREF"], a: 0 },
    { q: "Psicomotor é sobre agir?", options: ["Sim", "Não", "Só no salto", "Só na escola", "Só no CREF"], a: 0 },
    { q: "Afetivo é sobre sentir?", options: ["Sim", "Não", "Só no amor", "Só na escola", "Só no CREF"], a: 0 },
    { q: "EF escolar busca formar cidadãos?", options: ["Sim", "Não", "Só atletas", "Só soldados", "Só modelos"], a: 0 },
    { q: "Lutas fazem parte da cultura corporal?", options: ["Sim", "Não", "Só no UFC", "Só na escola", "Só no CREF"], a: 0 },
    { q: "Jogos fazem parte da cultura corporal?", options: ["Sim", "Não", "Só no videogame", "Só na escola", "Só no CREF"], a: 0 },
    { q: "Danças fazem parte da cultura corporal?", options: ["Sim", "Não", "Só no ballet", "Só na escola", "Só no CREF"], a: 0 },
    { q: "Ginástica faz parte da cultura corporal?", options: ["Sim", "Não", "Só na olímpica", "Só na escola", "Só no CREF"], a: 0 },
    { q: "EF na escola é obrigatória desde 1937?", options: ["Sim", "Não", "Desde 1850", "Desde 1998", "Desde 2004"], a: 0 },
    { q: "Educação Física estuda o corpo vivo?", options: ["Sim", "Não", "Só o morto", "Só a máquina", "Só o osso"], a: 0 },
    { q: "Profissional de EF deve ter ética?", options: ["Sim", "Não", "Opcional", "Só se for pago", "Só se for fiscalizado"], a: 0 },
    { q: "CREF pode suspender registro?", options: ["Sim", "Não", "Só a polícia", "Só o MEC", "Só o juiz"], a: 0 },
    { q: "Educação Física é área acadêmica?", options: ["Sim", "Não", "Só técnica", "Só lazer", "Só curso livre"], a: 0 },
    { q: "A graduação divide-se em Licenciatura e Bacharelado?", options: ["Sim", "Não", "Só no Brasil", "Só em 2002", "Só em 2004"], a: 0 },
    { q: "A EF contribui para a saúde pública?", options: ["Sim", "Não", "Só um pouco", "Só no SUS", "Só na academia"], a: 0 },
    { q: "A bioética ajuda em dilemas profissionais?", options: ["Sim", "Não", "Só médicos", "Só advogados", "Só juízes"], a: 0 },
    { q: "Não Maleficência é evitar danos?", options: ["Sim", "Não", "Só danos graves", "Só danos leves", "Só se houver processo"], a: 0 },
    { q: "Autonomia do aluno deve ser respeitada?", options: ["Sim", "Não", "Só se for adulto", "Só se for rico", "Só se for atleta"], a: 0 },
    { q: "A EF é componente curricular?", options: ["Sim", "Não", "Opcional", "Livre", "Extra"], a: 0 },
    { q: "1938 consolidou a EF na escola?", options: ["Sim", "Não", "Foi 1850", "Foi 1998", "Foi 2020"], a: 0 },
    { q: "A EF envolve teoria?", options: ["Sim", "Não", "Só prática", "Só exercício", "Só suor"], a: 0 },
    { q: "A EF envolve ciência?", options: ["Sim", "Não", "Só técnica", "Só jogo", "Só bola"], a: 1 },
    { q: "O resumo foca na Introdução à EF?", options: ["Sim", "Não", "Foca em musculação", "Foca em futebol", "Foca em dietas"], a: 0 }
];

// 3. LÓGICA DO JOGO (ANTI-REPETIÇÃO)
let availableQuestions = [];
let currentUserName = "";
let currentScore = 0;

window.startGame = function() {
    const nameInput = document.getElementById('username').value.trim();
    if (nameInput) {
        currentUserName = nameInput;
        currentScore = 0;
        availableQuestions = [...masterQuestionBank]; // Reset da lista
        document.getElementById('player-name').innerText = "Jogador: " + currentUserName;
        document.getElementById('login-screen').classList.remove('active');
        document.getElementById('game-screen').classList.add('active');
        loadNextQuestion();
    } else { alert("Digite seu nome!"); }
};

function loadNextQuestion() {
    if (availableQuestions.length === 0) {
        alert("Incrível! Você respondeu todas as 100 perguntas!");
        finishGame();
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const qObj = availableQuestions.splice(randomIndex, 1)[0]; // Remove para não repetir

    document.getElementById('question-text').innerText = qObj.q;
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D', 'E'];

    qObj.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.innerText = letters[i] + ") " + opt;
        btn.className = 'option-btn';
        btn.onclick = () => {
            const allBtns = container.querySelectorAll('button');
            allBtns.forEach(b => b.disabled = true);
            if(i === qObj.a) {
                currentScore += 10;
                btn.style.backgroundColor = "#28a745";
            } else {
                btn.style.backgroundColor = "#dc3545";
                if(allBtns[qObj.a]) allBtns[qObj.a].style.backgroundColor = "#28a745";
            }
            document.getElementById('score-display').innerText = "Pontos: " + currentScore;
            setTimeout(loadNextQuestion, 1200); 
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
    } catch (e) { alert("Erro ao salvar! Verifique as regras do Firebase."); }
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
