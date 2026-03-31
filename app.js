// 1. CONFIGURAÇÃO DO SEU FIREBASE (MANTENHA OS SEUS DADOS)
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

// 2. BANCOS DE DADOS ATUALIZADOS
const bancos = {
    educacao_fisica: [
        { q: "1. Como a Educação Física é definida no material em relação ao educando?", options: ["Uma prática de adestramento físico.", "Uma atividade puramente recreativa.", "Disciplina que integra o educando na cultura corporal de movimento.", "Um conjunto de exercícios sem fundamentação teórica.", "Uma ferramenta exclusiva para o alto rendimento."], a: 2 },
        { q: "2. Quais são as dimensões do desenvolvimento integral promovido pela Educação Física?", options: ["Apenas física e biológica.", "Cognitiva, psicomotora e afetiva.", "Muscular, cardiovascular e esquelética.", "Técnica, tática e estratégica.", "Social, política e econômica."], a: 1 },
        { q: "3. Segundo o material, a Educação Física constitui uma área de:", options: ["Atividade técnica de nível médio.", "Formação superior com base científica e intervenção social.", "Lazer sem necessidade de supervisão profissional.", "Saúde voltada exclusivamente para a cura de doenças.", "Educação informal baseada no senso comum."], a: 1 },
        { q: "4. Para Vitor Marinho de Oliveira (1983), qual é o foco central da Educação Física?", options: ["O esporte de rendimento.", "O corpo como máquina.", "O homem em movimento.", "A ginástica militar.", "A anatomia humana."], a: 2 },
        { q: "5. O movimento humano, segundo a perspectiva cultural, é uma forma de:", options: ["Gasto calórico apenas.", "Resposta reflexa ao ambiente.", "Expressão, comunicação e construção cultural.", "Treinamento de força.", "Mecanismo biológico isolado."], a: 2 },
        { q: "6. Na cultura ocidental clássica, Platão via o corpo como:", options: ["O centro da sabedoria.", "A prisão da alma.", "Um templo sagrado e intocável.", "Uma extensão do intelecto.", "O único componente da existência."], a: 1 },
        { q: "7. Qual filósofo moderno reforçou o dualismo com a frase 'Penso, logo existo'?", options: ["Aristóteles.", "Sócrates.", "René Descartes.", "Immanuel Kant.", "John Locke."], a: 2 },
        { q: "8. A Educação Física brasileira teve origens influenciadas por quais modelos?", options: ["Médico e Militar.", "Artístico e Filosófico.", "Esportivo e Tecnológico.", "Psicológico e Recreativo.", "Sociológico e Antropológico."], a: 0 },
        { q: "9. Qual era o objetivo principal no modelo Higienista (Médico)?", options: ["Formar atletas olímpicos.", "Melhorar a saúde pública e 'sanear' a raça.", "Promover a inclusão social.", "Desenvolver o pensamento crítico.", "Ensinar táticas de combate."], a: 1 },
        { q: "10. O método de ginástica oficialmente adotado pelo Exército Brasileiro na origem foi:", options: ["Método Sueco.", "Método Alemão.", "Método Francês.", "Método Inglês.", "Método Calistênico."], a: 1 },
        { q: "11. Em que ano a Educação Física tornou-se obrigatória na escola pela Constituição?", options: ["1889.", "1920.", "1937.", "1964.", "1988."], a: 2 },
        { q: "12. Qual década é marcada pela 'Esportivização' visando o rendimento?", options: ["1930.", "1950.", "1970.", "1990.", "2010."], a: 2 },
        { q: "13. A abordagem que foca na justiça social e critica o rendimento puro é a:", options: ["Psicomotricidade.", "Crítico-Superadora.", "Desenvolvimentista.", "Construtivista.", "Saúde Renovada."], a: 1 },
        { q: "14. Go Tani propôs a organização da área a partir de qual ciência-mãe?", options: ["Fisiologia.", "Cinesiologia.", "Pedagogia.", "Biomecânica.", "Sociologia."], a: 1 },
        { q: "15. Segundo Go Tani, a subárea que estuda as adaptações ao esforço é a:", options: ["Comportamento Motor.", "Biodinâmica.", "Sociocultural.", "Pedagógica.", "Psicológica."], a: 1 },
        { q: "16. A Lei nº 9.696/1998 é fundamental porque:", options: ["Instituiu o esporte nas escolas.", "Regulamentou a profissão e criou o sistema CONFEF/CREFs.", "Tornou a EF facultativa.", "Criou o Ministério do Esporte.", "Definiu o currículo da Licenciatura."], a: 1 },
        { q: "17. O profissional que atua exclusivamente em escolas deve possuir:", options: ["Bacharelado.", "Licenciatura.", "Pedagogia.", "Tecnólogo.", "Provisionado."], a: 1 },
        { q: "18. O Bacharel em Educação Física pode atuar em:", options: ["Academias, clubes, hospitais e hotéis.", "Apenas em escolas de ensino fundamental.", "Exclusivamente no treinamento militar.", "Somente em órgãos públicos de saúde.", "Apenas como gestor."], a: 0 },
        { q: "19. Quem são os 'Provisionados' no sistema CREF?", options: ["Recém-formados.", "Pessoas sem graduação que exerciam a função antes de 1998.", "Doutores universitários.", "Atletas aposentados.", "Gestores."], a: 1 },
        { q: "20. A Resolução nº 218/1997 reconhece o profissional de EF como:", options: ["Educador apenas.", "Profissional de saúde de nível superior.", "Técnico de atividades.", "Instrutor.", "Auxiliar médico."], a: 1 },
        { q: "21. O registro no Conselho Regional de Educação Física (CREF) é:", options: ["Opcional.", "Obrigatório para o exercício legal em qualquer área.", "Só para donos de academia.", "Isento para mestres.", "Facultativo."], a: 1 },
        { q: "22. Qual cor caracteriza a Cédula de Identidade Profissional do graduado (Licenciatura ou Bacharelado)?", options: ["Verde.", "Azul.", "Vermelha.", "Amarela.", "Branca."], a: 0 },
        { q: "23. O que define as 'Hard Skills' na formação?", options: ["Comunicação.", "Conhecimentos técnicos e acadêmicos (Ex: Anatomia).", "Empatia.", "Liderança.", "Criatividade."], a: 1 },
        { q: "24. Qual 'Soft Skill' se destaca para 2025 no atendimento?", options: ["Softwares de gestão.", "Inteligência emocional e comunicação assertiva.", "Levantamento de peso.", "Bioquímica.", "Programação."], a: 1 },
        { q: "25. A atuação do profissional no NASF foca em:", options: ["Maratonas.", "Prevenção de doenças e promoção da saúde comunitária.", "Dietas fitoterápicas.", "Diagnóstico por imagem.", "Cirurgias."], a: 1 },
        { q: "26. Qual tendência utiliza sensores para exigir movimentos reais em jogos?", options: ["Realidade passiva.", "Exergames.", "E-sports tradicionais.", "Podcasts.", "Softwares contábeis."], a: 1 },
        { q: "27. O uso de 'Wearables' permite monitorar:", options: ["Frequência cardíaca, passos e sono.", "Apenas localização GPS.", "Conta bancária.", "Escolaridade.", "Temperatura ambiente."], a: 0 },
        { q: "28. Na Bioética, o princípio da 'Autonomia' refere-se a:", options: ["Profissional decide tudo.", "Direito do aluno de decidir sobre sua participação.", "Treino militar obrigatório.", "Treinar sozinho.", "Pagamento em dia."], a: 1 },
        { q: "29. O documento que informa riscos e benefícios de uma atividade é o:", options: ["Contrato.", "TCLE (Termo de Consentimento).", "Atestado.", "Lattes.", "Comprovante."], a: 1 },
        { q: "30. Na Biossegurança, os EPIs servem para:", options: ["Estética.", "Minimizar riscos à saúde e integridade no trabalho.", "Substituir aparelhos.", "Identificar a empresa.", "Aumentar a carga."], a: 1 },
        { q: "31. Qual NR é citada para atividades de aventura nas alturas?", options: ["NR-10.", "NR-35.", "NR-5.", "NR-18.", "NR-32."], a: 1 },
        { q: "32. Em uma clínica, quais EPIs são essenciais?", options: ["Luvas, máscaras e jalecos.", "Chuteiras.", "Óculos de sol.", "Cronômetro.", "Kimono."], a: 0 },
        { q: "33. O risco relacionado a posturas inadequadas é o:", options: ["Químico.", "Ergonômico.", "Biológico.", "Radioativo.", "Explosão."], a: 1 },
        { q: "34. Na Educação Física adaptada, o objetivo é:", options: ["Excluir inaptos.", "Promover a inclusão e autonomia de PCDs.", "Treinar apenas elites.", "Substituir fisioterapia.", "Treinar partes sem deficiência."], a: 1 },
        { q: "35. A 'Cultura Corporal de Movimento' engloba:", options: ["Futebol e vôlei apenas.", "Jogos, esportes, lutas, ginásticas e danças.", "Musculação apenas.", "Anatomia e fisiologia.", "Folclore apenas."], a: 1 },
        { q: "36. A interdisciplinaridade ocorre quando:", options: ["Trabalha sozinho.", "Diferentes áreas dialogam para um objetivo comum.", "Retira a EF do currículo.", "Ignora a saúde.", "Foca apenas na biologia."], a: 1 },
        { q: "37. O que caracteriza o lazer?", options: ["Obrigação.", "Tempo de livre escolha para satisfação pessoal.", "Dormir após o trabalho.", "Atividade intensa obrigatória.", "Desemprego."], a: 1 },
        { q: "38. Papel da EF na prevenção de doenças crônicas (DANTs):", options: ["Combater o sedentarismo e melhorar indicadores.", "Diagnósticos médicos.", "Receitar suplementos.", "Curar câncer com alongamento.", "Substituir vacinas."], a: 0 },
        { q: "39. O conceito de 'Corpo-Sujeito' opõe-se a:", options: ["Corpo saudável.", "Corpo-objeto ou corpo-máquina.", "Corpo em movimento.", "Corpo social.", "Corpo cultural."], a: 1 },
        { q: "40. No mercado atual, o profissional deve ser:", options: ["Passivo.", "Empreendedor de sua própria carreira.", "Especialista em uma só máquina.", "Antitecnologia.", "Focado apenas em jovens."], a: 1 },
        { q: "41. O 'Código de Ética' serve para:", options: ["Preços.", "Estabelecer direitos, deveres e condutas morais.", "Escolher esportes.", "Proibir cores.", "Organizar festas."], a: 1 },
        { q: "42. A avaliação física inicial é importante para:", options: ["Identificar nível atual e riscos.", "Julgar estética.", "Decidir pagamento.", "Burocracia.", "Comparar com atletas."], a: 0 },
        { q: "43. Atividades na natureza devem focar em:", options: ["Baixo custo.", "Segurança e respeito ao meio ambiente.", "Velocidade.", "Fotos sociais.", "Roupas de marca."], a: 1 },
        { q: "44. 'Fitness' no contexto moderno é:", options: ["Ser magro.", "Aptidão física voltada à saúde e performance.", "Suplementação intensa.", "Concursos de beleza.", "Fim de semana."], a: 1 },
        { q: "45. Importância da hidratação:", options: ["Nenhuma.", "Manter termorregulação e equilíbrio.", "Aumentar peso.", "Boca seca.", "Diminuir treino."], a: 1 },
        { q: "46. A ludicidade é essencial para:", options: ["Crianças e idosos, mas para todas as idades.", "Apenas profissionais.", "Somente lutas.", "Treino de força pesado.", "Pessoas em coma."], a: 0 },
        { q: "47. O profissional de EF pode prescrever dietas?", options: ["Sim, se for personal.", "Não, competência exclusiva do Nutricionista.", "Se o aluno pedir.", "Para perda rápida.", "Dieta de internet."], a: 1 },
        { q: "48. A ergonomia visa:", options: ["Aumentar tempo sem pausas.", "Adaptar o trabalho ao homem, prevenindo lesões.", "Reduzir salários.", "Móveis bonitos.", "Eliminar exercícios."], a: 1 },
        { q: "49. O que caracteriza o 'Estilo de Vida Ativo'?", options: ["Inserir movimento na rotina (escadas, caminhadas).", "Treinar 5h uma vez por mês.", "Ver canais de esporte.", "Usar roupas esportivas.", "Ser motorista de atletas."], a: 0 },
        { q: "50. O futuro da Educação Física aponta para:", options: ["Fim pela IA.", "Integração entre tecnologia, saúde personalizada e humanização.", "Volta ao militarismo.", "Fim nas escolas.", "Foco em remédios."], a: 1 }
    ],
    biologia_celular: [
        { q: "1. A teoria celular estabelece que:", options: ["Apenas organismos multicelulares possuem células", "As células surgem por geração espontânea", "Todas as células se originam de células pré-existentes", "Apenas células animais possuem núcleo", "O núcleo é a unidade básica da vida"], a: 2 },
        { q: "2. Sobre as células procarióticas, é correto afirmar que:", options: ["Possuem núcleo delimitado por membrana", "Apresentam organelas membranosas desenvolvidas", "O DNA encontra-se disperso no citoplasma", "São exclusivamente pluricelulares", "Possuem mitocôndrias funcionais"], a: 2 },
        { q: "3. A organela responsável pela produção de ATP é:", options: ["Lisossomo", "Mitocôndria", "Núcleo", "Ribossomo", "Complexo golgiense"], a: 1 },
        { q: "4. O retículo rugoso tem como principal função:", options: ["Produção de lipídios", "Digestão intracelular", "Síntese de proteínas", "Produção de energia", "Armazenamento de água"], a: 2 },
        { q: "5. O resultado final da mitose é:", options: ["Quatro células geneticamente diferentes", "Duas células geneticamente idênticas", "Uma célula com o dobro de DNA", "Quatro células haploides", "Duas células diferentes"], a: 1 },
        { q: "6. A meiose é importante porque:", options: ["Produz células somáticas idênticas", "Aumenta o número de cromossomos", "Origina gametas haploides", "Ocorre apenas em bactérias", "Não participa da reprodução"], a: 2 },
        { q: "7. A fecundação humana ocorre:", options: ["No útero", "No ovário", "Na tuba uterina", "Na vagina", "No colo do útero"], a: 2 },
        { q: "8. O zigoto corresponde:", options: ["Ao óvulo não fecundado", "Ao espermatozoide maduro", "À célula formada pela união dos gametas", "A um embrião desenvolvido", "A um hormônio reprodutivo"], a: 2 },
        { q: "9. O hormônio que desencadeia a ovulação é:", options: ["Progesterona", "Estrogênio", "LH", "FSH", "Testosterona"], a: 2 },
        { q: "10. A variabilidade genética na meiose ocorre devido ao:", options: ["Duplicação do DNA", "Divisão celular simples", "Crossing-over", "Ausência de divisão", "Produção de ATP"], a: 2 },
        { q: "11. Diferença entre célula animal e vegetal:", options: ["Animal tem parede", "Vegetal possui cloroplastos", "Animal faz fotossíntese", "Vegetal sem núcleo", "Sem organelas"], a: 1 },
        { q: "12. O complexo golgiense atua em:", options: ["Produção de proteínas", "Digestão", "Empacotamento e secreção", "Energia", "Replicação"], a: 2 },
        { q: "13. Durante a meiose I ocorre:", options: ["Separação de cromátides", "Duplicação", "Troca de segmentos (Crossing-over)", "Células idênticas", "ATP"], a: 2 },
        { q: "14. A metáfase é caracterizada por:", options: ["Condensação", "Alinhamento no plano equatorial", "Separação", "Dois núcleos", "Citocinese"], a: 1 },
        { q: "15. Os lisossomos fazem:", options: ["Síntese", "Digestão intracelular", "ATP", "Transporte", "Genética"], a: 1 },
        { q: "16. A membrana plasmática:", options: ["Produz proteínas", "Guarda DNA", "Controla a entrada e saída", "Produz energia", "Faz digestão"], a: 2 },
        { q: "17. A meiose resulta em:", options: ["2 diploides", "Somáticas", "4 haploides", "Iguais", "Uma célula"], a: 2 },
        { q: "18. A anáfase da mitose envolve:", options: ["Formação", "Alinhamento", "Separação das cromátides-irmãs", "Núcleo", "Repouso"], a: 2 },
        { q: "19. Ribossomos são responsáveis por:", options: ["Energia", "Digestão", "Síntese de proteínas", "Controle", "Armazenamento"], a: 2 },
        { q: "20. Na ausência de fecundação:", options: ["Forma embrião", "Mantém endométrio", "Elimina o endométrio", "Óvulo vira zigoto", "Ciclo para"], a: 2 },
        { q: "21. Células com muito RER e Golgi:", options: ["Energia", "Produzem e secretam proteínas", "Lipídios", "Divisão", "Digestão"], a: 1 },
        { q: "22. Cromossomos homólogos se separam na:", options: ["Anáfase I", "Anáfase II", "Metáfase I", "Telófase II", "Prófase II"], a: 0 },
        { q: "23. A meiose mantém o número de cromossomos porque:", options: ["Duplica", "Reduz pela metade nos gametas", "São idênticas", "Impede fecundação", "Somática"], a: 1 },
        { q: "24. Células com alto gasto energético têm muita:", options: ["Lisossomo", "Ribossomo", "Mitocôndria", "Golgi", "Núcleo"], a: 2 },
        { q: "25. Ovócitos primários repousam até:", options: ["Fecundação", "Infância", "Puberdade", "Menopausa", "Ovulação"], a: 2 },
        { q: "26. Função do LH:", options: ["Endométrio", "Folículos", "Desencadear a ovulação", "Progesterona", "Inibir"], a: 2 },
        { q: "27. Duplicação do DNA ocorre na:", options: ["Prófase", "Metáfase", "Anáfase", "Interfase", "Telófase"], a: 3 },
        { q: "28. Diferença mitose/meiose:", options: ["Gametas", "Variabilidade", "Mitose 2 iguais / Meiose 4 diferentes", "Redução", "Nenhuma"], a: 2 },
        { q: "29. Energia do espermatozoide fica na:", options: ["Cabeça", "Acrossomo", "Núcleo", "Peça intermediária", "Flagelo"], a: 3 },
        { q: "30. Na meiose II ocorre:", options: ["Separa homólogos", "Idênticas", "Separação das cromátides-irmãs", "Redução", "Crossing"], a: 2 },
        { q: "31. Procarióticas possuem:", options: ["Núcleo", "Mitocôndria", "Ribossomos", "Golgi", "Retículo"], a: 2 },
        { q: "32. Função do núcleo:", options: ["Energia", "Digestão", "Controlar a célula e guardar DNA", "Proteínas", "Transporte"], a: 2 },
        { q: "33. Citoplasma é:", options: ["Núcleo", "Onde ocorrem as reações químicas", "DNA", "Organelas", "Parede"], a: 1 },
        { q: "34. Retículo liso atua em:", options: ["Proteínas", "Lipídios e desintoxicação", "DNA", "ATP", "Digestão"], a: 1 },
        { q: "35. Parede celular presente em:", options: ["Animais", "Vegetais e bactérias", "Humanos", "Vírus", "Núcleo"], a: 1 },
        { q: "36. Organela com DNA próprio:", options: ["Golgi", "Lisossomo", "Mitocôndria", "Ribossomo", "Núcleo"], a: 2 },
        { q: "37. Acrossomo serve para:", options: ["Energia", "Liberar enzimas para penetrar o óvulo", "Movimento", "DNA", "Hormônios"], a: 1 },
        { q: "38. Ovulação ocorre no:", options: ["Início", "Meio do ciclo", "Final", "Menstruação", "Fecundação"], a: 1 },
        { q: "39. FSH atua no:", options: ["Ovulação", "Crescimento folicular", "Testosterona", "ATP", "Digestão"], a: 1 },
        { q: "40. O endométrio é o:", options: ["Óvulo", "Revestimento do útero", "Esperma", "Transporte", "Digestão"], a: 1 },
        { q: "41. Nidação é a:", options: ["Formação", "Produção", "Fixação do embrião no útero", "Menstruação", "Ovulação"], a: 2 },
        { q: "42. Testosterona desenvolve:", options: ["Mulheres", "Características masculinas", "Digestão", "ATP", "Mitose"], a: 1 },
        { q: "43. Centríolos fazem parte da:", options: ["Proteína", "Digestão", "Divisão celular", "Energia", "DNA"], a: 2 },
        { q: "44. Cromossomos são:", options: ["Organelas", "DNA + Proteínas", "Lipídios", "Hormônios", "Enzimas"], a: 1 },
        { q: "45. Na prófase:", options: ["Condensação dos cromossomos", "Separação", "Alinhamento", "Divisão", "Repouso"], a: 0 },
        { q: "46. Citocinese é a:", options: ["Replicação", "Divisão do citoplasma", "Núcleo", "Separação", "ATP"], a: 1 },
        { q: "47. Gametas têm:", options: ["46", "23 cromossomos", "92", "44", "2"], a: 1 },
        { q: "48. Fecundação forma:", options: ["Gameta", "Óvulo", "Zigoto (46 cromossomos)", "Embrião", "Hormônio"], a: 2 },
        { q: "49. Flagelo permite o:", options: ["Energia", "Movimento", "DNA", "Enzimas", "Divisão"], a: 1 },
        { q: "50. Complexo golgiense:", options: ["ATP", "Digestão", "Empacota e secreta", "DNA", "Divide"], a: 2 }
    ]
};

// 3. LÓGICA DO JOGO (COM RANKINGS SEPARADOS)
let currentMateria = "";
let availableQuestions = [];
let userName = "";
let score = 0;

window.goToMenu = function() {
    userName = document.getElementById('username').value.trim();
    if (userName) {
        document.getElementById('login-screen').classList.remove('active');
        document.getElementById('menu-screen').classList.add('active');
    } else { alert("Digite seu nome!"); }
};

window.startQuiz = function(materia) {
    currentMateria = materia;
    score = 0;
    availableQuestions = [...bancos[materia]];
    document.getElementById('display-materia').innerText = materia === 'biologia_celular' ? "🧬 Biologia" : "⚽ Ed. Física";
    document.getElementById('menu-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    loadNext();
};

function loadNext() {
    if (availableQuestions.length === 0) {
        alert("Simulado concluído!");
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
            setTimeout(loadNext, 1200);
        };
        container.appendChild(btn);
    });
}

window.finishGame = async function() {
    try {
        await db.collection("ranking_" + currentMateria).add({
            name: userName,
            score: score,
            date: firebase.firestore.FieldValue.serverTimestamp()
        });
        showRank();
    } catch (e) { alert("Erro ao salvar no Firebase!"); }
};

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
