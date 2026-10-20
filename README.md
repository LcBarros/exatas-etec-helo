# Exatas ETEC — Helo

Aplicação de estudos de Matemática, Física e Química para preparação para o Vestibulinho ETEC.

## Estado atual

Publicação concluída em 19/10/2026 no GitHub Pages, pela branch `main`, pasta `/(root)`, com HTTPS obrigatório. Site: https://lcbarros.github.io/exatas-etec-helo/. Repositório público: https://github.com/LcBarros/exatas-etec-helo.

Foram corrigidos o escopo explícito do manifest, os metadados de instalação no iPhone e o registro/cache do Service Worker. O design e o conteúdo educacional foram preservados. Ícones PNG conferidos: 192 × 192, 512 × 512 e Apple 180 × 180. CSS, JavaScript e conteúdo estão embutidos no HTML, sem dependências externas. Os caminhos relativos atendem à publicação em subdiretório.

Verificações locais aprovadas com Node e DOM/armazenamento simulados: sintaxe JavaScript, 1.200 exercícios gerados com resposta válida, pontuação de acertos e erros, gravação do progresso, revisão de erros, resultado do bloco, assuntos de revisão e campos do manifest. A simulação do worker aprovou instalação dos seis recursos, fallback offline para navegação com e sem parâmetros e remoção isolada dos caches antigos, na raiz e em subdiretório.

Testes no site publicado aprovados: página inicial, CSS, JavaScript, respostas certas e erradas com explicação, revisão de erros, resultado de bloco, progresso preservado após recarga e revisão de Matemática, Física e Química. Viewport testado: 390 × 844. Console sem erros capturados durante esses fluxos. Os seis arquivos públicos retornaram HTTP 200 por HTTPS, com tipos de conteúdo corretos e conteúdo idêntico aos arquivos locais revisados. O título e o nome Apple foram conferidos no HTML publicado.

Limite da validação: a ferramenta de navegador disponível não expõe inspeção de Service Workers nem simulação de rede offline. O registro real do worker, a abertura em modo avião e a instalação em um iPhone físico não foram confirmados. O teste simulado de cache não substitui essas verificações.

## Estrutura esperada

### Visual e acessibilidade

Interface responsiva com cores por matéria, atalhos de revisão e treino, ícones SVG embutidos e navegação inferior. O layout adapta cartões e controles a celulares, tablets e computadores. Fontes do sistema e recursos embutidos mantêm a interface independente de CDNs. Há foco visível de teclado e respeito à preferência de movimento reduzido. A atualização visual usa o cache `v5` e mantém a chave de progresso existente. Verificados em navegador: larguras de 320, 390, 768 e 1440 pixels, sem rolagem horizontal na tela inicial e com botões de pelo menos 44 pixels de altura; atalhos de matéria, navegação, formulário de treino, correção e progresso continuam funcionando.

```text
/
├── index.html
├── manifest.json
├── sw.js
├── icon-192.png
├── icon-512.png
├── apple-touch-icon.png
├── README.md
└── .gitignore
```

## Hospedagem recomendada

GitHub Pages, com repositório público no GitHub Free. Para este app pessoal estático, manter código e hospedagem em um único serviço reduz configurações e contas. Publicar a raiz de uma branch dispensa ferramentas de build locais e arquivos de configuração adicionais. Não é necessário domínio próprio.

Comparação baseada nas páginas oficiais consultadas em 19/10/2026:

| Serviço | Gratuito / cartão | Endereço incluído / HTTPS | Limites relevantes | Publicação e manutenção |
|---|---|---|---|---|
| GitHub Pages | GitHub Free com repositório público; cadastro Free sem etapa de cobrança | `usuario.github.io/repositorio/`; HTTPS automático | Site até 1 GB; tráfego de 100 GB/mês e 10 builds/h como limites flexíveis | Settings → Pages → branch e raiz; deploy após push; menor complexidade neste caso |
| Cloudflare Pages | Free; página oficial informa que não exige cartão | `projeto.pages.dev`; SSL incluído | 500 builds/mês; 20 mil arquivos; 25 MiB por arquivo; requisições e banda estáticas ilimitadas | Vincular GitHub/GitLab e escolher Static HTML; exige conta e integração adicionais |
| Netlify | Free: US$ 0; limite rígido, sem recarga automática; documentação legada confirma uso sem cartão, mas não serve como garantia de todo cadastro atual | `projeto.netlify.app`; HTTPS | 300 créditos/mês compartilhados pelo consumo; esgotamento pode pausar sites | Importar Git ou enviar pasta; sem build para HTML puro; acompanhar créditos |
| Vercel | Hobby gratuito, pessoal e não comercial; exigência de cartão no cadastro não ficou explicitamente confirmada nas páginas consultadas | `projeto.vercel.app`; HTTPS | 100 deploys/dia; upload estático de 100 MB pela CLI; excedentes podem bloquear uso temporariamente | Importar Git; framework Other, sem build; mais recursos do que este projeto requer |
| Firebase Hosting | Spark gratuito; tabela oficial dispensa meio de pagamento | `projeto.web.app` e `projeto.firebaseapp.com`; SSL automático | 10 GB de armazenamento; 360 MB/dia de transferência | Firebase CLI; Git automático com Actions e configuração extra; usar Hosting clássico, sem ativar Blaze/App Hosting |
| GitLab Pages | Free; verificação pode exigir cartão, inclusive para executar CI | domínio `gitlab.io`; HTTPS padrão | Repositório Free: 10 GiB; Pages: 200 mil entradas de arquivos; CI sujeito a cotas | Pipeline `.gitlab-ci.yml` e runner; configuração adicional e possível verificação |

Todos servem HTML/CSS/JS estáticos por HTTPS, condição adequada para registrar um Service Worker no navegador. Isso é uma conclusão técnica sobre a hospedagem; PWA, offline e Safari dependem do código e precisam de teste. Não foi estabelecida garantia contratual de disponibilidade para planos gratuitos.

Fontes oficiais:

- GitHub: [Pages e endereços](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages), [limites](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits), [HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https), [publicar por branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [cadastro Free](https://docs.github.com/en/account-and-profile/how-tos/account-management/creating-an-account-on-github).
- Cloudflare: [plano, SSL e cartão](https://www.cloudflare.com/products/pages/), [limites](https://developers.cloudflare.com/pages/platform/limits/), [Git](https://developers.cloudflare.com/pages/get-started/git-integration/), [HTML estático](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/).
- Netlify: [planos atuais](https://www.netlify.com/pricing/), [créditos](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/), [deploy](https://docs.netlify.com/deploy/create-deploys/), [cartão: FAQ legado](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-legacy-plans/billing-faq-for-legacy-plans/).
- Vercel: [Hobby](https://vercel.com/docs/plans/hobby), [limites](https://vercel.com/docs/limits), [planos](https://vercel.com/pricing).
- Firebase: [preços e cartão](https://firebase.google.com/pricing), [cotas e deploy](https://firebase.google.com/products/hosting), [Hosting e domínios](https://firebase.google.com/docs/hosting).
- GitLab: [configuração Pages](https://docs.gitlab.com/user/project/pages/introduction/), [HTTPS](https://docs.gitlab.com/user/project/pages/custom_domains_ssl_tls_certification/ssl_tls_concepts/), [verificação](https://docs.gitlab.com/security/identity_verification/), [armazenamento](https://docs.gitlab.com/user/storage_usage_quotas/), [limites Pages](https://docs.gitlab.com/administration/instance_limits/).

## Como abrir

Após a publicação, abrir a URL HTTPS no Safari ou em outro navegador atualizado. Para testar PWA localmente, servir a pasta em `localhost` usando um servidor HTTP estático. Abrir `index.html` por `file://` não valida Service Worker.

## Como publicar

Após revisar os arquivos, criar um repositório público `exatas-etec-helo` na conta GitHub Free e enviar os arquivos para sua branch principal. Revisar antes se não há dados pessoais ou credenciais no conteúdo publicado.

Em **Settings → Pages → Build and deployment**, escolher **Deploy from a branch**, selecionar a branch principal e **/(root)**, e clicar em **Save**. O GitHub executa a publicação e mostra a URL real. Manter HTTPS ativo. A URL esperada tem formato `https://USUARIO.github.io/exatas-etec-helo/`; esse exemplo não é um endereço publicado.

## Como atualizar

Editar os arquivos, incrementar a versão do cache em `sw.js` quando necessário, e enviar um commit para a branch publicada. Também é possível editar ou enviar arquivos pelo próprio GitHub. Aguardar o deploy concluir e abrir o app com internet. Fechar todas as janelas do app e reabrir caso haja um Service Worker aguardando ativação.

## Configuração PWA

- Título HTML: `Exatas ETEC — Helo`.
- Manifest: `name` igual ao título, `short_name` igual a `Exatas Helo`, `start_url` e `scope` relativos, como `./`, e `display: standalone`.
- `theme_color` coerente com a cor existente do app; ícones PNG reais de 192 e 512 pixels.
- Links relativos para manifest, ícones e recursos; evitar caminhos começando em `/` que saem do subdiretório do GitHub Pages.
- Registro relativo `navigator.serviceWorker.register('./sw.js')`, com escopo dentro da pasta do app.
- Cache com nome exclusivo do app, incluindo todos os recursos necessários aos exercícios e à revisão, sem depender de rede para estudar após a instalação do cache.
- Limpeza de caches antigos restrita aos nomes deste app; evitar remover caches de outros projetos no mesmo domínio.
- Metatag `apple-mobile-web-app-title` com `Exatas Helo` e link relativo para `apple-touch-icon.png`; verificar ícone Apple de 180 × 180 pixels e modo independente.

## Como instalar no iPhone

Abrir a URL publicada no Safari, aguardar o primeiro carregamento completo, tocar em **Compartilhar → Adicionar à Tela de Início**, confirmar o nome **Exatas Helo** e tocar em **Adicionar**. Se aparecer a opção **Abrir como App**, ativá-la. Abrir pelo novo ícone com internet antes de testar em modo avião.

[Instruções oficiais da Apple](https://support.apple.com/en-in/guide/iphone/iph42ab2f3a7/ios) e [metadados de apps web](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html).

## Como limpar o cache

Primeiro tentar fechar todas as janelas e reabrir com internet, sem apagar dados. Em ferramentas de desenvolvedor, remover somente o registro do Service Worker e os caches deste app preserva o localStorage. No iPhone, remover dados do site em Ajustes → Apps → Safari → Avançado → Dados dos Sites também pode apagar o progresso. Os nomes dos menus variam com o iOS. Não usar essa opção como rotina de atualização.

## Como atualizar o Service Worker

Alterar o conteúdo de `sw.js` e incrementar a versão do cache usada pela implementação. O evento `install` deve preparar o novo cache; `activate` deve remover apenas versões antigas deste app. Publicar pelo Git e reabrir com internet. O navegador verifica a atualização; o novo worker pode aguardar o fechamento das janelas antigas. Não forçar recarga durante uma resposta de exercício sem tratar a preservação do estado.

## Verificação final no iPhone

Abrir o site com internet no Safari, instalar na Tela de Início, abrir pelo ícone e aguardar o carregamento. Fechar o app, ativar modo avião e reabrir pelo ícone; conferir revisão, exercícios e progresso. Um viewport de iPhone não substitui teste real no Safari/iPhone. Se o app não abrir offline, desativar o modo avião, abrir novamente com internet e conferir o registro do worker pelo Web Inspector do Safari.

O progresso é local ao navegador e dispositivo, sem sincronização ou backup remoto. Apagar os dados do site pode apagá-lo. O sistema pode remover dados locais; offline depende da preservação do cache. Usar sempre o mesmo endereço publicado.
