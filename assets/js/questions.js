const questions = [
    {
        question: "Uma empresa está planejando executar um aplicativo de marketing global na Nuvem AWS. O aplicativo contará com vídeos que poderão ser visualizados pelos usuários. A empresa deve garantir que todos os usuários possam visualizar esses vídeos com baixa latência.Qual serviço da AWS a empresa deve usar para atender a esse requisito? ",

        options: ["Escala automática da AWS",
            "Amazon Kinesis Video Streams",
            "Balanceamento elástico de carga",
            "Amazon CloudFront"],
        answer: 3
    },

    {
        question: "Qual pilar do AWS Well-Architected Framework refere-se à capacidade de um sistema se recuperar de interrupções de infraestrutura ou serviço e adquirir dinamicamente recursos de computação para atender à demanda? ",
        options: ["Segurança",
            "Confiabilidade",
            " Eficiência de desempenho",
            "Otimização de custos"],
        answer: 1
    },

    {
        question: "Uma empresa está planejando substituir seus servidores físicos de computação locais por serviços de computação sem servidor da AWS. A empresa deseja poder aproveitar as vantagens de tecnologias avançadas rapidamente após a migração.Qual pilar do AWS Well-Architected Framework esse plano representa?",

        options: ["Segurança",
            "Eficiência de desempenho",
            " Excelência operacional",
            "Confiabilidade"],
        answer: 1
    },

    {
        question: "Qual componente da infraestrutura global da AWS é composto por um ou mais datacenters distintos que possuem energia, rede e conectividade redundantes?",

        options: ["Região da AWS",
            "Localização de borda",
            "Postos avançados da AWS",
            "Zona de Disponibilidade"],
        answer: 3
    },

    {
        question: "Um usuário está comparando as opções de compra de um aplicativo executado no Amazon EC2 e no Amazon RDS. O aplicativo não pode suportar nenhuma interrupção. O aplicativo apresenta uma quantidade previsível de uso, incluindo alguns picos sazonais que duram apenas algumas semanas por vez. Não é possível modificar o aplicativo.Qual opção de compra atende a esses requisitos com a MELHOR relação custo-benefício?",

        options: ["Analise o AWS Marketplace e compre instâncias reservadas iniciais parciais para cobrir a carga prevista e sazonal.",
            "Compre instâncias reservadas para a quantidade prevista de uso ao longo do ano. Permita que qualquer uso sazonal seja executado em instâncias spot.",
            " Compre instâncias reservadas para a quantidade prevista de uso ao longo do ano. Permita que qualquer uso sazonal seja executado em uma taxa sob demanda.",
            "Compre instâncias reservadas para cobrir todo o uso potencial resultante do uso sazonal."],
        answer: 1
    },


    {
        question: "Uma empresa deseja revisar seus custos mensais de uso do Amazon EC2 e do Amazon RDS no último ano.Qual serviço ou ferramenta da AWS fornece essas informações?",

        options: ["Consultor de confiança da AWS",
            "Previsão da Amazônia",
            "Explorador de custos",
            "Amazon CloudWatch"],
        answer: 2
    },

    {
        question: "Uma empresa deseja migrar um aplicativo crítico para a AWS. O aplicativo tem um tempo de execução curto. O aplicativo é chamado por alterações nos dados ou por mudanças no estado do sistema. A empresa precisa de uma solução de computação que maximize a eficiência operacional e minimize o custo de execução do aplicativo.Qual solução da AWS a empresa deve usar para atender a esses requisitos?",

        options: ["AWS Lambda",
            " Instâncias sob demanda do Amazon EC2",
            "Instâncias reservadas do Amazon EC2",
            "Instâncias Spot do Amazon EC2"],
        answer: 0
    },

    {
        question: "Qual serviço ou recurso da AWS permite que os usuários se conectem e implantem serviços da AWS programaticamente?",

        options: ["Console de gerenciamento da AWS",
            "AWS Cloud9",
            "AWS CodePipeline",
            "Kits de desenvolvimento de software (SDKs) da AWS"],
        answer: 3
    },

    {
        question: "Uma empresa planeja criar um data lake que usa o Amazon S3.Qual fator terá o MAIOR efeito sobre o custo?",

        options: ["A seleção de níveis de armazenamento S3",
            "Cobranças para transferir dados existentes para o Amazon S3",
            "A adição de políticas de balde S3",
            "Taxas de ingestão S3 para cada solicitação"],
        answer: 0
    },

    {
        question: "Uma empresa está lançando um aplicativo de comércio eletrônico que deve estar sempre disponível. O aplicativo será executado em instâncias do Amazon EC2 continuamente pelos próximos 12 meses.Qual é a opção de compra de instância MAIS econômica que atende a esses requisitos?",

        options: ["Instâncias spot",
            "Planos de Poupança",
            "Hosts Dedicados",
            "Instâncias sob demanda"],
        answer: 1
    },

    {
        question: "Qual serviço ou recurso da AWS uma empresa pode usar para determinar qual unidade de negócios está usando recursos específicos da AWS?",

        options: ["Marcas de alocação de custo",
            "Pares de chaves",
            "Amazon Inspector",
            "AWS Trusted Advisor"],
        answer: 0
    },

    {
        question: "Qual documentação o AWS Artifact fornece?",

        options: ["Termos e condições do Amazon EC2",
            "Certificações ISO da AWS",
            " Um histórico dos gastos com AWS de uma empresa",
            "Uma lista de tipos de instância do Amazon EC2 da geração anterior"],
        answer: 1
    },

    {
        question: "Qual tarefa requer o uso de credenciais de usuário raiz da conta da AWS?",

        options: ["Visualizando informações de cobrança",
            "Alterar o plano do AWS Support",
            "Iniciando e parando instâncias do Amazon EC2",
            "Abrindo um caso do AWS Support"],
        answer: 0
    },

    {
        question: "Uma empresa precisa processar simultaneamente centenas de solicitações de diferentes usuários.Qual combinação de serviços da AWS a empresa deve usar para criar uma solução operacionalmente eficiente?",

        options: ["Amazon Simple Queue Service (Amazon SQS) e AWS Lambda",
            "Pipeline de dados da AWS e Amazon EC2",
            "Amazon Kinesis e Amazon Athena",
            "AWS Amplify e AWS AppSync"],
        answer: 1
    },

    {
        question: "Qual é o escopo de uma VPC na rede da AWS?",

        options: ["Um VPC pode abranger todas as zonas de disponibilidade globalmente.",
            "Uma VPC deve abranger pelo menos duas sub-redes em cada região da AWS.",
            "Uma VPC deve abranger pelo menos dois pontos de presença em cada região da AWS.",
            "Uma VPC pode abranger todas as zonas de disponibilidade em uma região da AWS."],
        answer: 3
    },
]

export default questions;