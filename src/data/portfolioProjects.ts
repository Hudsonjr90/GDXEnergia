import laudoImage from '../assets/images/portfolio/Laudo-Tecnico--1024x1024.jpg'
import legalizacaoImage from '../assets/images/portfolio/legalizacao.jpeg'
import iluminacaoImage from '../assets/images/portfolio/iluminacaopublica.png'
import autoconstrucaoImage from '../assets/images/portfolio/auto-construcao-de-rede-1024x1024.png'
import subestacaoAbrigadaImage from '../assets/images/portfolio/subestacao-abrigada.jpeg'
import subestacaoBlindadaImage from '../assets/images/portfolio/Subestacao-Blindada-1024x1024.png'
import subestacaoSimplificadaImage from '../assets/images/portfolio/subestacao-simplificada.png'

export interface PortfolioProject {
  slug: string
  title: string
  image: string
  previewText: string
  modalDescription: string
}

export const featuredProjects: PortfolioProject[] = [
  {
    slug: 'laudo-tecnico-nr10-e-spda',
    title: 'Laudo Técnico – NR10 e SPDA',
    image: laudoImage,
    previewText: 'A segurança elétrica é um dos pilares fundamentais para qualquer empresa ou empreendimento que dependa de energia para suas operações. A GDX oferece serviços especializados na emissão de Laudo Técnico – NR10 e SPDA, garantindo que sua instalação elétrica esteja dentro das normas vigentes e protegida contra acidentes, falhas e descargas atmosféricas.',
    modalDescription: `O que é o Laudo NR10 e sua importância?
A Norma Regulamentadora NR10 estabelece diretrizes para garantir a segurança dos trabalhadores que lidam direta ou indiretamente com instalações elétricas. Esse laudo certifica que a empresa segue as exigências da norma, minimizando riscos de choques elétricos, curtos-circuitos e incêndios. Além disso, a NR10 exige que profissionais envolvidos com eletricidade sejam qualificados e capacitados para atuar com segurança.

Principais aspectos abordados no Laudo NR10:
✅ Análise das condições da instalação elétrica
✅ Avaliação do aterramento elétrico e proteções
✅ Inspeção dos Equipamentos de Proteção Individual (EPIs) e Coletiva (EPCs)
✅ Verificação de conformidade com a legislação vigente
✅ Recomendações para adequação e melhorias

Empresas que não possuem o Laudo NR10 podem enfrentar sanções e penalidades, além de expor seus colaboradores a riscos sérios. Contar com a expertise da GDX assegura conformidade legal e segurança operacional.

SPDA – Proteção Contra Descargas Atmosféricas (Para-raios)
O SPDA (Sistema de Proteção contra Descargas Atmosféricas) é essencial para proteger edificações, equipamentos e pessoas contra os impactos de raios. Sua instalação segue normas específicas da ABNT NBR 5419, garantindo que as descargas elétricas atmosféricas sejam conduzidas com segurança até o solo, sem causar danos.

Elementos principais de um SPDA eficiente:
⚡ Captores de descargas atmosféricas (para-raios)
⚡ Sistema de descida para conduzir a energia até o solo
⚡ Aterramento elétrico adequado para dissipar a corrente com segurança
⚡ Proteção de equipamentos sensíveis contra surtos elétricos

A GDX realiza um estudo técnico detalhado para avaliar a necessidade do SPDA em sua edificação, projetando e instalando um sistema adequado ao seu tipo de construção e demanda elétrica.

Benefícios do Laudo NR10 e SPDA para sua empresa
🔹 Redução de riscos – Menos chances de acidentes elétricos, incêndios e danos estruturais.
🔹 Conformidade com normas – Evita multas e sanções por descumprimento de normas regulamentadoras.
🔹 Proteção para equipamentos – Evita danos a máquinas e dispositivos eletrônicos sensíveis.
🔹 Maior segurança jurídica – Documentação técnica necessária em auditorias e fiscalizações.
🔹 Sustentabilidade – Adoção de práticas seguras reduz o consumo excessivo de energia e perdas elétricas.

Por que escolher a GDX?
A GDX é referência no setor elétrico e possui um time de especialistas para realizar inspeções, diagnósticos e certificações de instalações elétricas. Contamos com uma equipe técnica altamente capacitada para desenvolver soluções seguras e eficazes, garantindo conformidade com todas as exigências normativas e melhorando a segurança do seu ambiente elétrico.

Entre em contato conosco e solicite um orçamento para emissão do Laudo Técnico – NR10 e SPDA. Proteja seu patrimônio e evite riscos desnecessários!`
  },
  {
    slug: 'legalizacao',
    title: 'Legalização',
    image: legalizacaoImage,
    previewText: 'A regularização de instalações elétricas é um processo fundamental para garantir que um empreendimento esteja em conformidade com as normas técnicas e regulamentações das concessionárias de energia. Sem essa regularização, o fornecimento de energia pode ser comprometido, resultando em multas, cortes no abastecimento e riscos de segurança.',
    modalDescription: `O que é a Legalização de Instalações Elétricas?
A legalização consiste na adequação das instalações elétricas às normas técnicas exigidas pelos órgãos reguladores, incluindo:

✅ Projeto elétrico aprovado – O primeiro passo para a regularização é um projeto elétrico bem elaborado, de acordo com as normas da ABNT (Associação Brasileira de Normas Técnicas) e os requisitos da concessionária de energia da sua região.

✅ Adequação às normas vigentes – As instalações elétricas precisam estar dentro dos padrões exigidos pela NR10 (Norma Regulamentadora de Segurança em Instalações e Serviços em Eletricidade), pela NBR 5410 (Instalações elétricas de baixa tensão) e pela NBR 14039 (Instalações elétricas de média tensão).

✅ Obtenção de ART (Anotação de Responsabilidade Técnica) – Esse documento, emitido por um engenheiro eletricista registrado no CREA, atesta que a instalação elétrica foi projetada e executada corretamente.

✅ Vistorias e inspeções técnicas – São realizadas análises detalhadas para verificar se a instalação está de acordo com as exigências das concessionárias de energia.

✅ Emissão do Laudo Técnico – Documento essencial que certifica que a instalação elétrica atende aos padrões de segurança e funcionamento adequados.

Por que regularizar sua instalação elétrica?
🔹 Evita multas e penalidades – A não conformidade com as normas pode resultar em sanções aplicadas pelos órgãos fiscalizadores e concessionárias de energia.
🔹 Garante um fornecimento seguro e contínuo – A regularização evita cortes de energia e garante que o empreendimento tenha um abastecimento confiável.
🔹 Reduz riscos elétricos – Instalações irregulares podem gerar curtos-circuitos, incêndios e acidentes elétricos.
🔹 Facilita financiamentos e certificações – Muitos bancos e órgãos exigem que as instalações elétricas estejam regularizadas para aprovação de crédito e certificações ambientais e de segurança.
🔹 Valorização do imóvel ou empresa – Estar com a instalação elétrica regularizada aumenta a credibilidade do empreendimento e facilita transações imobiliárias e comerciais.

Como a GDX pode ajudar na legalização elétrica?
A GDX possui uma equipe especializada em projetos, regularização e certificação elétrica, oferecendo suporte completo desde a análise inicial até a aprovação final da instalação junto à concessionária de energia.

Nosso serviço inclui:
✔ Elaboração de projetos elétricos conforme as normas vigentes.
✔ Correção e adequação das instalações existentes para atendimento aos requisitos legais.
✔ Emissão de laudos técnicos e ART para garantir a conformidade da instalação.
✔ Acompanhamento de processos burocráticos junto às concessionárias e órgãos reguladores.
✔ Assessoria para novos empreendimentos que necessitam de ligação elétrica regularizada.

Precisa legalizar sua instalação elétrica? Fale com a GDX!
Evite riscos e problemas com a concessionária de energia! Regularize sua instalação elétrica com quem entende do assunto. Entre em contato com a GDX e solicite uma consultoria especializada para garantir um fornecimento de energia seguro, eficiente e dentro das normas.`
  },
  {
    slug: 'iluminacao-publica',
    title: 'Iluminação Pública',
    image: iluminacaoImage,
    previewText: 'A iluminação pública é essencial para a segurança, o bem-estar e a qualidade de vida das pessoas. Além de proporcionar visibilidade nas vias urbanas e rurais, ela também desempenha um papel vital na redução de crimes, acidentes e na melhoria da mobilidade urbana. A GDX oferece serviços especializados para planejamento, instalação e manutenção de sistemas de iluminação pública, com soluções modernas, eficientes e sustentáveis, utilizando tecnologia LED e sistemas de automação inteligente.',
    modalDescription: `A Importância da Iluminação Pública Eficiente
Uma iluminação pública bem projetada oferece diversos benefícios para as cidades e seus moradores. Ela contribui para:

🔹 Segurança pública – A iluminação adequada nas ruas reduz consideravelmente os índices de criminalidade, proporcionando maior segurança para pedestres e motoristas. Em áreas de alto risco, a presença de iluminação pública é um dos maiores dissuasores de crimes.

🔹 Melhoria na mobilidade – Estradas e vias bem iluminadas proporcionam condições mais seguras para o tráfego de veículos e pedestres, reduzindo acidentes e facilitando a locomoção.

🔹 Sustentabilidade e economia – A adoção de tecnologias mais eficientes, como lâmpadas LED, contribui para a redução do consumo de energia, gerando economia significativa no orçamento público, sem comprometer a qualidade da iluminação.

🔹 Valorização urbana – A iluminação pública também tem um impacto direto na valorização imobiliária e no turismo local. Um ambiente bem iluminado é mais atrativo e acolhedor, o que melhora a qualidade do espaço urbano e favorece o desenvolvimento da região.

Como a GDX Pode Ajudar no Projeto e Execução de Iluminação Pública?
A GDX se destaca no mercado por oferecer soluções personalizadas, de acordo com as necessidades e características específicas de cada local. Nossa equipe técnica possui ampla experiência na elaboração de projetos de iluminação pública, levando em consideração aspectos técnicos, estéticos e orçamentários. Nossos serviços incluem:

Projetos Personalizados de Iluminação Pública
A GDX realiza levantamentos detalhados das condições de cada área a ser iluminada, desenvolvendo projetos de iluminação pública eficientes e adaptados à infraestrutura local. A escolha de equipamentos adequados, como luminárias LED de alta performance, é fundamental para proporcionar economia de energia e alta durabilidade.

Instalação de Sistemas de Iluminação Pública
A instalação de sistemas de iluminação pública requer cuidados técnicos, como dimensionamento correto de circuitos elétricos, adequação das instalações à rede elétrica e verificação das condições de segurança para os trabalhadores e moradores da área. Na GDX, garantimos que todas as instalações atendam às normas de segurança e aos critérios técnicos exigidos pela ABNT e pelas concessionárias de energia elétrica.

Manutenção Preventiva e Corretiva
A manutenção contínua é crucial para garantir o bom funcionamento dos sistemas de iluminação pública, evitando falhas e prolongando a vida útil dos equipamentos. A GDX realiza a manutenção preventiva (inspeções periódicas, troca de componentes danificados, ajustes e calibragens) e manutenção corretiva (reparo de sistemas danificados), garantindo a eficiência e a segurança contínuas.

Sistemas de Iluminação Inteligente
A GDX também oferece soluções de iluminação inteligente, que permitem controle remoto e automatização da intensidade da luz conforme as condições externas. Isso resulta em maior eficiência energética, redução de custos operacionais e um ajuste dinâmico da iluminação conforme as necessidades de segurança e mobilidade. Esses sistemas também podem ser integrados a sistemas de monitoramento urbano para aumentar a segurança pública.

Vantagens de Escolher a GDX para Iluminação Pública
🔹 Qualidade e Confiabilidade – Trabalhamos com equipamentos de alta qualidade e marcas renomadas, garantindo que sua cidade ou empreendimento tenha uma iluminação eficiente e duradoura.
🔹 Soluções Sustentáveis – Nossa proposta é usar tecnologias sustentáveis, como lâmpadas LED, que além de eficientes, têm menor impacto ambiental.
🔹 Eficiência Energética – Reduzimos significativamente o consumo de energia elétrica, proporcionando savings substanciais nos custos de operação.
🔹 Segurança e Conformidade – Todos os projetos e instalações são realizados dentro das normas técnicas de segurança e de acordo com as exigências legais.

Fale Conosco
Entre em contato com a GDX e descubra como podemos transformar a iluminação pública de sua cidade ou empreendimento, trazendo mais segurança, eficiência energética e qualidade de vida para todos. Solicite uma consultoria técnica e um projeto personalizado para o seu ambiente.`
  },
  {
    slug: 'autoconstrucao-rede-distribuicao-mt-bt',
    title: 'Autoconstrução de Rede de Distribuição MT e BT',
    image: autoconstrucaoImage,
    previewText: 'A autoconstrução de rede de distribuição é uma alternativa vantajosa para empresas e empreendedores que desejam otimizar o processo de fornecimento de energia elétrica, especialmente em regiões que não possuem infraestrutura adequada. Essa solução envolve a execução das obras de construção da rede de distribuição de energia elétrica, tanto para média tensão (MT) quanto para baixa tensão (BT), garantindo que as instalações atendam às normas e regulamentações exigidas pelas concessionárias e órgãos reguladores.',
    modalDescription: `A Importância da Autoconstrução da Rede de Distribuição
A autoconstrução de rede de distribuição oferece uma série de benefícios, tais como:

🔹 Economia de custos – A construção da rede de distribuição de forma autônoma pode ser mais econômica, já que elimina intermediários e possibilita otimização de recursos.

🔹 Maior controle sobre o projeto – A autoconstrução permite um controle completo sobre o projeto, desde o planejamento até a execução, garantindo que a rede atenda de forma precisa às necessidades e exigências do cliente.

🔹 Rapidez na execução – A execução direta da obra facilita o controle de prazos e a coordenação de etapas, resultando em um prazo de entrega mais curto.

🔹 Conformidade e segurança – A GDX garante que o projeto da rede de distribuição esteja em conformidade com as normas de segurança e regulamentações da ANEEL e das concessionárias.

Como a GDX Realiza a Autoconstrução de Redes de Distribuição?
Na GDX, realizamos todo o processo de autoconstrução de redes de distribuição com uma abordagem técnica, segura e eficiente. A seguir, explicamos como fazemos isso:

Planejamento e Projeto Personalizado
Nossa equipe de engenheiros realiza uma análise completa das necessidades do seu empreendimento, elaborando um projeto personalizado para a rede de distribuição, levando em consideração as características da instalação e as exigências técnicas.

Execução da Obra
A GDX cuida de todas as fases da execução da obra, desde a implantação de postes, instalação de cabos e transformadores, até a conexão da rede à concessionária de energia. Tudo é feito com total segurança e qualidade.

Regularização junto à Concessionária
Após a conclusão da obra, cuidamos de todo o processo de registro e homologação junto à concessionária de energia, garantindo que a rede de distribuição esteja regularizada e pronta para operar.

Vantagens de Optar pela Autoconstrução com a GDX
✅ Soluções personalizadas – Projetos de redes de distribuição feitos sob medida, garantindo eficiência e economia.
✅ Garantia de conformidade – A GDX assegura que o projeto e a execução atendam às exigências da ANEEL e da concessionária.
✅ Execução eficiente – Acompanhamento completo da obra, desde o planejamento até a entrega final.
✅ Redução de custos – A autoconstrução elimina intermediários e proporciona economias substanciais.

Entre em contato com a GDX e aproveite a solução ideal para a construção de sua rede de distribuição MT e BT. Solicite uma consultoria personalizada!`
  },
  {
    slug: 'subestacao-abrigada',
    title: 'Subestação Abrigada',
    image: subestacaoAbrigadaImage,
    previewText: 'A subestação abrigada é uma solução projetada para oferecer alta proteção e confiabilidade no fornecimento de energia elétrica. Ao contrário das subestações tradicionais, as subestações abrigadas são instaladas em estruturas fechadas, proporcionando maior proteção aos equipamentos contra intempéries, riscos externos e vandalismo. São ideais para locais onde a segurança e a eficiência são prioridade, como em áreas urbanas ou zonas com alto risco de exposição a eventos ambientais adversos.',
    modalDescription: `A Importância da Subestação Abrigada
A subestação abrigada oferece uma série de vantagens, entre as principais estão:

🔹 Segurança aprimorada – Equipamentos protegidos por estruturas fechadas ficam imunes a intempéries, riscos ambientais e ações externas, garantindo maior segurança e menor risco de danos.

🔹 Menos manutenção – A proteção contra condições adversas aumenta a vida útil dos componentes e reduz a necessidade de manutenção frequente, resultando em economia a longo prazo.

🔹 Maior confiabilidade no fornecimento de energia – Com a instalação protegida, os sistemas elétricos operam de forma mais estável e confiável, minimizando interrupções e falhas no fornecimento.

Como a GDX Constrói uma Subestação Abrigada?
A GDX realiza a construção de subestações abrigadas com um enfoque na proteção e confiabilidade do sistema elétrico. O nosso processo inclui:

Projeto Personalizado
Elaboramos um projeto personalizado levando em conta as especificidades do local, as necessidades energéticas e as exigências normativas de segurança.

Construção e Implantação da Subestação
A GDX cuida de todo o processo de execução da obra, desde a implantação da estrutura de abrigo até a instalação dos equipamentos elétricos, como transformadores, disjuntores e cabos.

Testes e Regularização
Após a construção, realizamos testes de eficiência e segurança e garantimos que a subestação esteja regularizada junto à concessionária de energia, conforme as normas da ANEEL.

Vantagens de Optar pela Subestação Abrigada com a GDX
✅ Proteção superior – Estrutura fechada para maior segurança contra intempéries e riscos externos.
✅ Eficiência a longo prazo – Menor necessidade de manutenção e maior durabilidade dos componentes.
✅ Atendimento a normas – Garantia de conformidade com as exigências legais e normas de segurança.

Entre em contato com a GDX para garantir que sua subestação seja protegida e eficiente com o serviço de subestação abrigada. Solicite um orçamento!`
  },
  {
    slug: 'subestacao-blindada',
    title: 'Subestação Blindada',
    image: subestacaoBlindadaImage,
    previewText: 'A subestação blindada é uma instalação elétrica projetada para oferecer proteção e segurança superiores em sistemas de distribuição de energia elétrica. Com o aumento da demanda por infraestruturas mais seguras e eficientes, as subestações blindadas se destacam como uma solução moderna para proteger equipamentos e sistemas contra riscos ambientais e eventos externos, como choques elétricos, intempéries e vandalismo.',
    modalDescription: `A Importância da Subestação Blindada
A subestação blindada é crucial para garantir a segurança e a eficiência do fornecimento de energia elétrica, principalmente em áreas que necessitam de equipamentos protegidos contra intempéries ou riscos externos. Entre as vantagens desse tipo de subestação, destacam-se:

🔹 Proteção contra danos – A blindagem garante que os equipamentos internos da subestação, como transformadores e disjuntores, fiquem protegidos contra riscos de curto-circuito e outros danos causados por choques elétricos ou intempéries.

🔹 Segurança aprimorada – A subestação blindada oferece maior segurança para os operadores e equipes de manutenção, minimizando o risco de acidentes elétricos.

🔹 Redução de custos de manutenção – Equipamentos protegidos exigem menos manutenção e têm uma vida útil mais longa, o que resulta em economia a longo prazo.

Como a GDX Realiza a Construção da Subestação Blindada?
A GDX realiza a construção de subestações blindadas com foco em eficiência, segurança e tecnologia de ponta. Nosso processo inclui:

Planejamento e Projeto da Subestação
A GDX desenvolve um projeto personalizado, considerando as necessidades energéticas do seu empreendimento, a proteção necessária e a conformidade com as normas de segurança.

Execução da Obra e Implantação
Realizamos a implantação da subestação blindada, incluindo a estruturação de proteção, instalação de equipamentos e todos os processos de conexão à rede elétrica.

Testes e Homologação
Após a instalação, realizamos testes de eficiência e segurança para garantir que a subestação esteja em pleno funcionamento, atendendo a todas as normas e exigências legais.

Vantagens de Optar pela Subestação Blindada com a GDX
✅ Proteção superior – A subestação blindada oferece uma segurança aprimorada contra riscos externos e ambientais.
✅ Eficiência a longo prazo – Maior vida útil e menor necessidade de manutenção.
✅ Atendimento às normas – Garantimos que o projeto e a instalação estejam em conformidade com as normas regulamentadoras.

Entre em contato com a GDX e saiba mais sobre como a subestação blindada pode oferecer proteção máxima e eficiência para sua instalação elétrica. Solicite um orçamento!`
  },
  {
    slug: 'subestacao-simplificada',
    title: 'Subestação Simplificada',
    image: subestacaoSimplificadaImage,
    previewText: 'A subestação simplificada é uma solução ideal para instalações de menor porte, que demandam eficiência energética e segurança, mas com custo reduzido e menos complexidade. Essas subestações são compactas e fáceis de instalar, atendendo principalmente empreendimentos de pequeno e médio porte que precisam de um fornecimento de energia confiável e eficiente, mas não necessitam de uma estrutura tão grande quanto as subestações tradicionais.',
    modalDescription: `A Importância da Subestação Simplificada
A subestação simplificada oferece as vantagens de ser uma solução econômica e eficiente, ideal para diversas situações. Entre os benefícios estão:

🔹 Custo reduzido – Por ser compacta e com uma estrutura mais simples, a subestação simplificada exige menor investimento inicial, tornando-a uma opção econômica para empreendimentos de menor porte.

🔹 Eficiência e confiabilidade – Embora compacta, a subestação simplificada oferece alta eficiência na distribuição de energia elétrica e é uma solução confiável para empresas que não necessitam de sistemas de grande porte.

🔹 Facilidade de instalação – A subestação simplificada pode ser instalada com rapidez e menor complexidade, o que reduz o tempo de execução da obra.

Como a GDX Constrói a Subestação Simplificada?
A GDX realiza o planejamento, execução e instalação de subestações simplificadas com base nas necessidades específicas do cliente, atendendo a todos os requisitos técnicos e legais. O processo inclui:

Análise Técnica e Projeto Personalizado
Elaboramos um projeto sob medida que considera as necessidades energéticas e as exigências normativas para garantir a eficiência e segurança da subestação.

Execução e Instalação
A equipe da GDX cuida de toda a execução da obra, realizando a instalação do sistema de forma rápida, eficiente e conforme o projeto aprovado.

Testes e Regularização
Após a instalação, realizamos testes de eficiência e garantimos que a subestação simplificada esteja regularizada junto à concessionária de energia e em conformidade com as normas da ANEEL.

Vantagens de Optar pela Subestação Simplificada com a GDX
✅ Custo-benefício – Solução econômica com excelente desempenho para empreendimentos menores.
✅ Instalação rápida – Processo de execução mais ágil, com menos complexidade.
✅ Eficiência garantida – Apesar de simplificada, oferece alta confiabilidade e segurança.

Entre em contato com a GDX para descobrir como a subestação simplificada pode ser a solução ideal para sua empresa. Solicite um orçamento personalizado!`
  },
]

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return featuredProjects.find((project) => project.slug === slug)
}
