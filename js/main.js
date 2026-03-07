// ── Service Detail Modal Data ──
const serviceDetails = {
  'cloud-infra': {
    icon: '☁️', iconBg: 'rgba(59,130,246,0.15)', title: 'Cloud Infrastructure (IaaS)',
    desc: 'We design, deploy, and manage enterprise-grade cloud infrastructure across Azure, AWS, and GCP. Our team architects highly available, fault-tolerant environments with auto-scaling compute, managed databases, load balancers, and virtual networking — all optimised for performance and cost.',
    workflow: [
      { title: 'Discovery & Audit', desc: 'Assess existing infrastructure, workloads, and performance bottlenecks to build a baseline.' },
      { title: 'Architecture Design', desc: 'Design multi-region, highly available cloud architecture with redundancy and failover strategies.' },
      { title: 'Provisioning & IaC', desc: 'Deploy infrastructure using Terraform, ARM templates, or CloudFormation for repeatable builds.' },
      { title: 'Network & Security', desc: 'Configure VNets, subnets, NSGs, firewalls, and private endpoints for secure communication.' },
      { title: 'Monitoring Setup', desc: 'Implement Azure Monitor, CloudWatch, or Stackdriver with custom alerts and dashboards.' },
      { title: 'Handover & Support', desc: 'Documentation, knowledge transfer, and ongoing managed support with SLA guarantees.' }
    ],
    archHtml: true,
    tech: ['Azure VMs', 'AWS EC2', 'GCP Compute', 'Terraform', 'ARM Templates', 'CloudFormation', 'Azure Monitor', 'CloudWatch', 'VNet Peering', 'Auto-Scaling'],
    deploy: [
      { icon: '🔄', title: 'Blue-Green Deployment', desc: 'Run two identical production environments and switch traffic seamlessly for zero-downtime releases.' },
      { icon: '🌍', title: 'Multi-Region Active-Active', desc: 'Distribute workloads across regions with geo-load balancing for resilience and low latency.' },
      { icon: '📦', title: 'Infrastructure as Code', desc: 'Version-controlled Terraform modules ensure every environment is reproducible and auditable.' }
    ]
  },
  'managed-cloud': {
    icon: '🔧', iconBg: 'rgba(168,85,247,0.15)', title: 'Managed Cloud Services',
    desc: 'We take full ownership of your cloud operations — from 24/7 monitoring and incident response to cost optimisation and capacity planning. Our managed services ensure your environments are always secure, performant, and cost-efficient so you can focus on building your product.',
    workflow: [
      { title: 'Environment Onboarding', desc: 'Inventory all cloud resources, tag them, and set up centralised management with governance policies.' },
      { title: 'Monitoring & Alerting', desc: 'Deploy comprehensive observability with metrics, logs, traces, and intelligent alerting rules.' },
      { title: 'Cost Analysis', desc: 'Identify idle resources, rightsize instances, and implement reserved capacity and savings plans.' },
      { title: 'Patch & Update Cycles', desc: 'Scheduled maintenance windows for OS patches, runtime updates, and security fixes.' },
      { title: 'Incident Management', desc: '24/7 on-call rotation with defined SLAs, escalation paths, and post-incident reviews.' },
      { title: 'Monthly Reporting', desc: 'Detailed reports on uptime, cost trends, security posture, and optimisation recommendations.' }
    ],
    arch: '',
    archHtml: true,
    tech: ['Azure Monitor', 'Grafana', 'Prometheus', 'Datadog', 'PagerDuty', 'Terraform', 'Ansible', 'Azure Advisor', 'AWS Trusted Advisor', 'FinOps'],
    deploy: [
      { icon: '🤖', title: 'Auto-Remediation', desc: 'Automated runbooks detect and fix common issues like disk full, high CPU, or expired certificates without human intervention.' },
      { icon: '💰', title: 'FinOps Governance', desc: 'Real-time budget alerts, resource tagging enforcement, and automated shutdown of non-production resources after hours.' },
      { icon: '📊', title: 'SLA-Backed Support', desc: '99.9% uptime SLA with defined response times — 15min critical, 1hr high, 4hr medium priority.' }
    ]
  },
  'cloud-migration': {
    icon: '🚀', iconBg: 'rgba(129,140,248,0.15)', title: 'Cloud Migration Services',
    desc: 'We plan and execute seamless migrations from on-premises or between cloud providers. Using proven methodologies — Rehost, Refactor, Rearchitect, or Rebuild — we ensure zero data loss, minimal downtime, and a clear rollback strategy for every workload we move.',
    workflow: [
      { title: 'Assessment & Discovery', desc: 'Map all applications, dependencies, data volumes, and network topology using automated discovery tools.' },
      { title: 'Migration Strategy', desc: 'Define the right approach for each workload — lift-and-shift, re-platform, or cloud-native rebuild.' },
      { title: 'Proof of Concept', desc: 'Migrate a pilot workload to validate the strategy, measure performance, and refine the runbook.' },
      { title: 'Data Migration', desc: 'Use Azure Migrate, AWS DMS, or custom ETL pipelines for secure, validated data transfer with checksums.' },
      { title: 'Cutover & Validation', desc: 'Coordinated switchover with DNS changes, smoke testing, and real-time monitoring during the transition window.' },
      { title: 'Optimisation', desc: 'Post-migration rightsizing, cost analysis, and performance tuning to maximise cloud-native benefits.' }
    ],
    arch: '',
    archHtml: true,
    tech: ['Azure Migrate', 'AWS DMS', 'GCP Transfer', 'Azure Site Recovery', 'CloudEndure', 'VPN Gateway', 'ExpressRoute', 'Data Box', 'Terraform', 'Ansible'],
    deploy: [
      { icon: '🔀', title: 'Phased Migration', desc: 'Migrate workloads in planned waves — starting with low-risk systems and progressively moving business-critical applications.' },
      { icon: '⏪', title: 'Rollback Strategy', desc: 'Every migration includes a documented rollback plan with DNS failover and data sync to revert within minutes if needed.' },
      { icon: '🔗', title: 'Hybrid Coexistence', desc: 'Run hybrid during transition with site-to-site VPN or ExpressRoute ensuring seamless connectivity between on-prem and cloud.' }
    ]
  },
  'devops': {
    icon: '⚡', iconBg: 'rgba(192,132,252,0.15)', title: 'DevOps & Automation',
    desc: 'We build end-to-end DevOps pipelines that automate everything from code commit to production deployment. Our approach combines CI/CD, Infrastructure as Code, container orchestration, and GitOps to deliver software faster, more reliably, and with full auditability.',
    workflow: [
      { title: 'Code & Branch Strategy', desc: 'Establish Git workflows (trunk-based or GitFlow), branch protection rules, and code review processes.' },
      { title: 'CI Pipeline', desc: 'Automated build, lint, unit tests, security scanning (SAST/DAST), and artefact publishing on every commit.' },
      { title: 'CD Pipeline', desc: 'Progressive deployment to dev → staging → production with automated approval gates and smoke tests.' },
      { title: 'Infrastructure as Code', desc: 'Terraform modules for all environments — version-controlled, peer-reviewed, and auto-applied via pipeline.' },
      { title: 'Container Orchestration', desc: 'Dockerise applications and deploy to Kubernetes (AKS/EKS/GKE) with Helm charts and auto-scaling.' },
      { title: 'Observability', desc: 'Unified logging, distributed tracing, and metrics with Grafana dashboards and PagerDuty alerts.' }
    ],
    arch: '',
    archHtml: true,
    tech: ['GitHub Actions', 'Azure DevOps', 'GitLab CI', 'Terraform', 'Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'SonarQube', 'Trivy'],
    deploy: [
      { icon: '🔵', title: 'Blue-Green via K8s', desc: 'Deploy new version alongside old, validate with health checks, then switch service routing instantly.' },
      { icon: '🐤', title: 'Canary Releases', desc: 'Route 5% of traffic to new version, monitor error rates and latency, then gradually increase to 100%.' },
      { icon: '🏷️', title: 'GitOps with ArgoCD', desc: 'Declare desired state in Git — ArgoCD continuously reconciles the cluster to match, with full audit trail.' }
    ]
  },
  'security': {
    icon: '🔒', iconBg: 'rgba(37,99,235,0.15)', title: 'Security & Compliance',
    desc: 'We implement defence-in-depth security across your cloud estate — from identity and access management to network segmentation, encryption, and continuous compliance monitoring. Our team ensures your infrastructure meets GDPR, HIPAA, PCI-DSS, and ISO 27001 standards.',
    workflow: [
      { title: 'Security Assessment', desc: 'Comprehensive audit of IAM policies, network rules, encryption, logging, and vulnerability exposure.' },
      { title: 'Zero Trust Design', desc: 'Implement identity-based access with conditional policies, MFA, and just-in-time privilege escalation.' },
      { title: 'Network Hardening', desc: 'Private endpoints, WAF, DDoS protection, NSGs, and micro-segmentation to minimise attack surface.' },
      { title: 'Data Protection', desc: 'Encryption at rest and in transit, key vault management, and data classification policies.' },
      { title: 'Threat Detection', desc: 'Deploy Microsoft Sentinel, GuardDuty, or Security Command Centre for real-time threat intelligence.' },
      { title: 'Compliance Automation', desc: 'Continuous compliance checks with Azure Policy, AWS Config, and automated remediation workflows.' }
    ],
    arch: '',
    archHtml: true,
    tech: ['Azure AD', 'AWS IAM', 'Microsoft Sentinel', 'GuardDuty', 'WAF', 'Key Vault', 'Azure Policy', 'Defender for Cloud', 'SonarQube', 'Trivy'],
    deploy: [
      { icon: '🛡️', title: 'Shift-Left Security', desc: 'Security scanning in CI/CD — SAST, DAST, dependency checks, and container image scanning before any deployment.' },
      { icon: '🔍', title: 'Continuous Compliance', desc: 'Automated policy enforcement with real-time drift detection and auto-remediation for non-compliant resources.' },
      { icon: '🚨', title: 'Incident Response', desc: 'Predefined playbooks with automated containment, forensic data collection, and stakeholder notification workflows.' }
    ]
  },
  'backup-dr': {
    icon: '🛡️', iconBg: 'rgba(124,58,237,0.15)', title: 'Backup, Disaster Recovery & Business Continuity',
    desc: 'We design and implement comprehensive backup and disaster recovery solutions that guarantee your business can recover from any disruption. From automated daily backups with geo-redundant storage to full DR failover with defined RPO/RTO targets, we protect what matters most.',
    workflow: [
      { title: 'Business Impact Analysis', desc: 'Identify critical systems, define RPO/RTO targets, and map dependencies for recovery prioritisation.' },
      { title: 'Backup Strategy', desc: 'Configure automated backups — daily incrementals, weekly fulls — with geo-redundant storage and retention policies.' },
      { title: 'DR Architecture', desc: 'Design active-passive or active-active DR with Azure Site Recovery, AWS Backup, or cross-region replication.' },
      { title: 'Runbook Creation', desc: 'Document step-by-step recovery procedures for every critical system with assigned owners and timelines.' },
      { title: 'DR Testing', desc: 'Quarterly failover drills to validate recovery procedures, measure actual RTO, and identify gaps.' },
      { title: 'Continuous Improvement', desc: 'Post-test reviews, runbook updates, and architecture refinements based on drill results and new threats.' }
    ],
    arch: '',
    archHtml: true,
    tech: ['Azure Site Recovery', 'AWS Backup', 'GRS Storage', 'Azure Backup Vault', 'Veeam', 'Zerto', 'Traffic Manager', 'Route 53', 'Terraform', 'Runbooks'],
    deploy: [
      { icon: '⚡', title: 'Instant Failover', desc: 'Automated DNS failover to DR region with health probes — production restored in under 15 minutes RPO.' },
      { icon: '🔒', title: 'Immutable Backups', desc: 'Write-once, read-many backup vaults prevent ransomware from encrypting or deleting your recovery points.' },
      { icon: '📋', title: 'Quarterly DR Drills', desc: 'Scheduled failover tests with documented results, gap analysis, and continuous improvement tracking.' }
    ]
  },
  'ai-ml': {
    icon: '🤖', iconBg: 'rgba(168,85,247,0.15)', title: 'AI & Machine Learning',
    desc: 'We build production-ready AI and machine learning solutions — from intelligent chatbots and document processing to predictive analytics and custom ML models. Our team handles the full lifecycle: data engineering, model training, deployment, and continuous monitoring.',
    workflow: [
      { title: 'Use Case Discovery', desc: 'Identify high-impact AI opportunities aligned with business goals — automation, prediction, or personalisation.' },
      { title: 'Data Engineering', desc: 'Build data pipelines to collect, clean, transform, and store training data in cloud data lakes.' },
      { title: 'Model Development', desc: 'Train and evaluate models using Azure ML, SageMaker, or custom frameworks with experiment tracking.' },
      { title: 'Testing & Validation', desc: 'Rigorous A/B testing, bias detection, and performance benchmarking against business KPIs.' },
      { title: 'Production Deployment', desc: 'Deploy models as REST APIs, batch inference, or edge deployments with auto-scaling and versioning.' },
      { title: 'Monitoring & Retraining', desc: 'Track model drift, accuracy degradation, and trigger automated retraining pipelines when thresholds are breached.' }
    ],
    archHtml: true,
    arch: '',
    tech: ['Azure ML', 'AWS SageMaker', 'OpenAI', 'LangChain', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Azure Cognitive Services', 'Vector DBs', 'MLflow'],
    deploy: [
      { icon: '🔬', title: 'Model Versioning', desc: 'Every model version is tracked in a registry with lineage, metrics, and rollback capability for production safety.' },
      { icon: '📈', title: 'A/B Model Testing', desc: 'Route traffic between model versions to compare accuracy and business impact before full rollout.' },
      { icon: '🔄', title: 'Auto-Retraining', desc: 'Scheduled or drift-triggered retraining pipelines that automatically validate and promote improved models.' }
    ]
  },
  'cloud-strategy': {
    icon: '📋', iconBg: 'rgba(59,130,246,0.15)', title: 'Cloud Strategy & Advisory',
    desc: 'We help organisations develop a clear, actionable cloud strategy — from initial assessment and cloud readiness evaluation to vendor selection, cost modelling, and a phased adoption roadmap. Our advisory ensures every decision is backed by data, aligned with business goals, and optimised for long-term value.',
    workflow: [
      { title: 'Current State Assessment', desc: 'Evaluate existing IT landscape, applications, infrastructure maturity, and team capabilities.' },
      { title: 'Cloud Readiness Score', desc: 'Score each workload on cloud suitability considering complexity, compliance, and business criticality.' },
      { title: 'Vendor & Model Selection', desc: 'Compare Azure, AWS, GCP based on your requirements — recommend single, multi, or hybrid cloud strategy.' },
      { title: 'Cost Modelling', desc: 'Build detailed TCO analysis comparing on-prem vs cloud with 3-year projections and savings estimates.' },
      { title: 'Roadmap & Governance', desc: 'Create phased adoption roadmap with milestones, team training plans, and cloud governance framework.' },
      { title: 'Executive Presentation', desc: 'Deliver board-ready business case with ROI projections, risk analysis, and recommended investment timeline.' }
    ],
    archHtml: true,
    arch: '',
    tech: ['Azure CAF', 'AWS Well-Architected', 'GCP Framework', 'FinOps', 'TOGAF', 'TCO Calculator', 'Azure Advisor', 'Landing Zones', 'Governance', 'ITSM'],
    deploy: [
      { icon: '🗺️', title: 'Phased Roadmap', desc: 'Structured adoption plan with quick wins in months 1-3, core migration in 3-9, and optimisation in 9-12.' },
      { icon: '📊', title: 'Executive Dashboards', desc: 'Real-time visibility into cloud spend, migration progress, and ROI metrics for leadership reporting.' },
      { icon: '🎓', title: 'Team Enablement', desc: 'Tailored training programmes and certification paths to upskill your team on cloud-native practices.' }
    ]
  },
  'web-dev': {
    icon: '🌐', iconBg: 'rgba(129,140,248,0.15)', title: 'Web Development & Cloud Hosting',
    desc: 'We design and build modern, high-performance websites and web applications — from stunning marketing sites and e-commerce platforms to complex SaaS dashboards and progressive web apps. Every project is deployed on cloud-native infrastructure with auto-scaling, global CDN, SSL certificates, and automated CI/CD pipelines for zero-downtime deployments.',
    workflow: [
      { title: 'Requirements & UX Design', desc: 'Deep-dive into your brand, audience, and goals. We create wireframes, user flows, and interactive prototypes in Figma before writing a single line of code.' },
      { title: 'Frontend Development', desc: 'Build responsive, accessible interfaces using React, Next.js, or Vue.js with server-side rendering, lazy loading, and optimised Core Web Vitals for top SEO performance.' },
      { title: 'Backend & API Development', desc: 'Architect RESTful or GraphQL APIs with Node.js, Python, or .NET — including authentication, rate limiting, caching, and database design with PostgreSQL, MongoDB, or MySQL.' },
      { title: 'Cloud Infrastructure Setup', desc: 'Provision production-grade hosting on Azure App Service, AWS Amplify, or Vercel — with custom domains, SSL certificates, environment variables, and managed databases.' },
      { title: 'CI/CD & Automated Testing', desc: 'Configure GitHub Actions or Azure DevOps pipelines for automated builds, linting, unit tests, and deployment to staging then production on every merge to main.' },
      { title: 'Launch, Monitor & Iterate', desc: 'Go live with DNS cutover, uptime monitoring, error tracking (Sentry), analytics (GA4), and performance dashboards. We provide post-launch support and feature iterations.' }
    ],
    archHtml: true,
    arch: '',
    tech: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Express', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Redis', 'Azure App Service', 'Vercel', 'GitHub Actions', 'Docker', 'Cloudflare CDN', 'Sentry'],
    deploy: [
      { icon: '🚀', title: 'Zero-Downtime Deployments', desc: 'Deployment slots (Azure) or atomic deployments (Vercel) ensure the old version serves traffic until the new build is fully ready — users never see a broken page.' },
      { icon: '🌍', title: 'Global Edge Delivery', desc: 'Static assets cached at 300+ CDN edge locations worldwide. Dynamic content served from the nearest region. Result: sub-100ms load times globally.' },
      { icon: '🔄', title: 'Preview Environments', desc: 'Every pull request gets its own live preview URL for stakeholder review before merging — eliminating surprises in production.' },
      { icon: '📊', title: 'Performance Monitoring', desc: 'Real-time Core Web Vitals tracking, uptime monitoring with instant alerts, and error tracking with Sentry for proactive issue resolution.' }
    ]
  }
};

function getVisualArch(key) {
  const L = 'https://api.iconify.design/logos';
  const S = 'https://api.iconify.design/simple-icons';
  const ico = {
    azure: L + '/microsoft-azure.svg',
    aws: L + '/aws.svg',
    gcp: L + '/google-cloud.svg',
    docker: L + '/docker-icon.svg',
    k8s: L + '/kubernetes.svg',
    terraform: L + '/terraform-icon.svg',
    postgresql: L + '/postgresql.svg',
    mysql: L + '/mysql.svg',
    redis: L + '/redis.svg',
    react: L + '/react.svg',
    nextjs: L + '/nextjs-icon.svg',
    github: L + '/github-icon.svg',
    gitlab: L + '/gitlab.svg',
    grafana: L + '/grafana.svg',
    cloudflare: L + '/cloudflare-icon.svg',
    elasticsearch: L + '/elasticsearch.svg',
    datadog: L + '/datadog-icon.svg',
    vmware: L + '/vmware.svg',
    serverless: L + '/serverless.svg',
    letsencrypt: L + '/letsencrypt.svg',
    bigquery: S + '/googlebigquery.svg',
    googleearth: S + '/googleearth.svg',
    icloud: S + '/icloud.svg',
  };
  if (key === 'web-dev') return `
    <div class="arch-visual">
      <!-- Users / Browsers -->
      <div class="arch-people">👨‍💻👩‍💻📱</div>
      <div class="arch-box" style="border-radius:20px;">
        <div class="arch-box-title">USERS / BROWSERS</div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Global CDN -->
      <div class="arch-box">
        <div class="arch-box-logos">
          <div class="arch-logo-item">
            <img class="arch-logo" src="${ico.cloudflare}" alt="Cloudflare">
          </div>
          <div class="arch-logo-item">
            <img class="arch-logo" src="${ico.googleearth}" alt="Globe">
          </div>
          <div class="arch-logo-item">
            <img class="arch-logo" src="${ico.azure}" alt="Azure Front Door">
          </div>
        </div>
        <div class="arch-box-title">GLOBAL CDN</div>
        <div class="arch-box-desc" style="font-size:11px;">Cloudflare / AFD</div>
        <div class="arch-box-desc">SSL Termination &mdash; DDoS Protection</div>
        <div class="arch-box-desc">Edge Caching &mdash; Geo-Routing</div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Web Application Layer -->
      <div class="arch-webapp-container">
        <div class="arch-webapp-title">WEB APPLICATION LAYER</div>
        <div class="arch-webapp-split">
          <div class="arch-webapp-half">
            <div class="arch-box-logos">
              <div class="arch-logo-item">
                <img class="arch-logo" src="${ico.cloudflare}" alt="CDN Edge">
                <div class="arch-logo-label">CDN Edge</div>
              </div>
              <div class="arch-logo-item">
                <img class="arch-logo" src="${ico.nextjs}" alt="Next.js">
                <div class="arch-logo-label">Next.js</div>
              </div>
              <div class="arch-logo-item">
                <img class="arch-logo" src="${ico.react}" alt="React">
                <div class="arch-logo-label">React</div>
              </div>
            </div>
            <div class="arch-webapp-half-title">Static Site</div>
          </div>
          <div class="arch-webapp-half">
            <div class="arch-box-logos">
              <div class="arch-logo-item">
                <img class="arch-logo" src="${ico.docker}" alt="ECS">
                <div class="arch-logo-label">ECS</div>
              </div>
              <div class="arch-logo-item">
                <img class="arch-logo" src="${ico.k8s}" alt="K8s">
                <div class="arch-logo-label">Auto-Scale</div>
              </div>
              <div class="arch-logo-item">
                <img class="arch-logo" src="${ico.react}" alt="SSR">
                <div class="arch-logo-label">SSR</div>
              </div>
            </div>
            <div class="arch-webapp-half-title">SSR / App</div>
          </div>
        </div>
        <div class="arch-features">
          <span class="arch-feature">Express / FastAPI / .NET</span>
          <span class="arch-feature">Auth &mdash; Rate Limiting</span>
          <span class="arch-feature">Serverless Functions &mdash; Queue Workers</span>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- API / Backend Layer -->
      <div class="arch-box">
        <div class="arch-box-title">API / BACKEND LAYER</div>
        <div class="arch-api-grid">
          <div class="arch-api-item">
            <span class="arch-api-bullet">Express / FastAPI / .NET</span>
          </div>
          <div class="arch-api-item">
            <img src="${ico.letsencrypt}" alt="Auth" style="width:20px;height:20px;"> Auth &ndash; Rate Limiting
          </div>
          <div class="arch-api-item">
            <span class="arch-api-bullet">Serverless Functions</span>
          </div>
          <div class="arch-api-item">
            <img src="${ico.serverless}" alt="Workers" style="width:20px;height:20px;"> Queue Workers
          </div>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Data Layer -->
      <div class="arch-box data-layer">
        <div class="arch-box-title">DATA LAYER</div>
        <div class="arch-data-logos">
          <div class="arch-data-item">
            <img src="${ico.postgresql}" alt="PostgreSQL" style="width:40px;height:40px;">
            <div class="arch-data-label">PostgreSQL / MySQL</div>
          </div>
          <div class="arch-data-item">
            <img src="${ico.mysql}" alt="MySQL" style="width:40px;height:40px;">
            <div class="arch-data-label">MySQL</div>
          </div>
          <div class="arch-data-item">
            <img src="${ico.redis}" alt="Redis" style="width:40px;height:40px;">
            <div class="arch-data-label">Redis Cache</div>
          </div>
          <div class="arch-data-item">
            <img src="${ico.azure}" alt="Blob" style="width:40px;height:40px;">
            <div class="arch-data-label">Blob Storage</div>
          </div>
          <div class="arch-data-item">
            <img src="${ico.elasticsearch}" alt="Elastic" style="width:40px;height:40px;">
            <div class="arch-data-label">Search Index (Elastic)</div>
          </div>
        </div>
      </div>
    </div>`;
  if (key === 'managed-cloud') return `
    <div class="arch-visual">
      <!-- Centralised Management -->
      <div class="arch-box">
        <div class="arch-box-title">CENTRALISED MANAGEMENT</div>
        <div class="arch-box-logos" style="margin-top:8px;">
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.azure}" alt="Azure Lighthouse" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">Azure Lighthouse</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.aws}" alt="AWS Orgs" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">AWS Organisations</div>
          </div>
        </div>
        <div style="border-top:1px solid rgba(96,165,250,0.15);margin-top:16px;padding-top:14px;">
          <div class="arch-box-logos">
            <div class="arch-logo-item">
              <div class="caf-flow-icon" style="background:rgba(234,88,12,0.15);border-color:rgba(234,88,12,0.3);">⚙️</div>
              <div class="arch-logo-label">Monitoring</div>
            </div>
            <div class="arch-logo-item">
              <div class="caf-flow-icon"><img src="${ico.grafana}" alt="Grafana" style="width:28px;height:28px;"></div>
              <div class="arch-logo-label">Grafana + Prometheus</div>
            </div>
            <div class="arch-logo-item">
              <div class="caf-flow-icon" style="background:rgba(34,197,94,0.15);border-color:rgba(34,197,94,0.3);">💲</div>
              <div class="arch-logo-label">Management</div>
            </div>
            <div class="arch-logo-item">
              <div class="caf-flow-icon"><img src="${ico.datadog}" alt="FinOps" style="width:28px;height:28px;"></div>
              <div class="arch-logo-label">FinOps Hub</div>
            </div>
          </div>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Automation Engine -->
      <div class="arch-box">
        <div class="arch-box-title">AUTOMATION ENGINE</div>
        <div class="arch-box-logos" style="margin-top:8px;">
          <div class="arch-logo-item">
            <div class="caf-flow-icon">⚡</div>
            <div class="arch-logo-label">Lambda</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon">⚙️</div>
            <div class="arch-logo-label">Azure Functions</div>
          </div>
        </div>
        <div class="caf-checklist" style="margin-top:14px;">
          <span class="caf-check">Runbooks / Lambda / Azure</span>
          <span class="caf-check">Functions for auto-remediation</span>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Your Cloud Environments -->
      <div class="arch-box data-layer">
        <div class="arch-box-title">YOUR CLOUD ENVIRONMENTS</div>
        <div class="arch-box-logos" style="margin-top:12px;">
          <div class="arch-logo-item">
            <div class="caf-flow-icon" style="background:rgba(34,197,94,0.15);border-color:rgba(34,197,94,0.4);">Dev</div>
          </div>
          <div class="arch-logo-item" style="font-size:16px;color:rgba(96,165,250,0.5);align-self:center;">&#x25B6;</div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon" style="background:rgba(234,179,8,0.15);border-color:rgba(234,179,8,0.4);">Stg</div>
          </div>
          <div class="arch-logo-item" style="font-size:16px;color:rgba(96,165,250,0.5);align-self:center;">&#x25B6;</div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon" style="background:rgba(239,68,68,0.15);border-color:rgba(239,68,68,0.4);">Prod</div>
          </div>
        </div>
      </div>
    </div>`;
  if (key === 'cloud-migration') return `
    <div class="arch-visual">
      <!-- Source → Target side-by-side -->
      <div class="mig-split">
        <!-- Source -->
        <div class="mig-half">
          <div class="mig-half-title">SOURCE</div>
          <div class="mig-half-subtitle">(On-Prem or Other Cloud)</div>
          <div class="mig-row">
            <span class="caf-check">App Servers</span>
          </div>
          <div class="mig-row">
            <span class="caf-check">Databases</span>
          </div>
          <div class="mig-row">
            <span class="caf-check">File Storage</span>
          </div>
        </div>
        <!-- Target -->
        <div class="mig-half">
          <div class="mig-half-title">TARGET CLOUD</div>
          <div class="arch-box-logos" style="margin:0 0 12px;justify-content:center;">
            <div class="arch-logo-item">
              <img src="${ico.azure}" alt="Azure" style="width:24px;height:24px;">
            </div>
            <div class="arch-logo-item">
              <img src="${ico.aws}" alt="AWS" style="width:24px;height:24px;">
            </div>
            <div class="arch-logo-item">
              <img src="${ico.gcp}" alt="GCP" style="width:24px;height:24px;">
            </div>
          </div>
          <div class="mig-row">
            <span class="caf-check">App Service / ECS / GKE</span>
          </div>
          <div class="mig-row">
            <span class="caf-check">Managed DB</span>
          </div>
          <div class="mig-row">
            <span class="caf-check">Blob / S3</span>
          </div>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- VPN / ExpressRoute -->
      <div class="arch-box" style="border-style:dashed;">
        <div class="arch-box-title">VPN / ExpressRoute / Direct Connect</div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Kubernetes / Orchestration -->
      <div class="arch-box data-layer">
        <div class="arch-box-logos" style="margin-bottom:8px;">
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.k8s}" alt="K8s" style="width:28px;height:28px;"></div>
          </div>
        </div>
        <div class="caf-checklist">
          <span class="caf-check">Auto-scaling</span>
          <span class="caf-check">Load Balancing</span>
          <span class="caf-check">Service Mesh</span>
          <span class="caf-check">Monitoring</span>
        </div>
      </div>
    </div>`;
  if (key === 'devops') return `
    <div class="arch-visual">
      <!-- Developers / Commit -->
      <div class="arch-people">👨‍💻👩‍💻👨‍💻</div>
      <div class="arch-box" style="border-radius:20px;">
        <div class="arch-box-title">COMMIT</div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- GitHub / GitLab -->
      <div class="arch-box">
        <div class="arch-box-logos" style="margin-top:8px;">
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.github}" alt="GitHub" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">GitHub</div>
          </div>
          <div class="arch-logo-item" style="font-size:20px;color:rgba(148,163,184,0.6);align-self:center;">&#x2192;</div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.gitlab}" alt="GitLab" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">GitLab</div>
          </div>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Artefact Registry -->
      <div class="arch-box" style="border-style:dashed;">
        <div class="arch-box-title">ARTEFACT REGISTRY</div>
        <div class="arch-box-logos" style="margin-top:8px;">
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.docker}" alt="ACR" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">ACR / ECR</div>
          </div>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- CD Pipeline -->
      <div class="arch-box">
        <div class="arch-box-title">CD PIPELINE</div>
        <div class="arch-box-logos" style="margin-top:12px;">
          <div class="arch-logo-item">
            <div class="caf-flow-icon" style="background:rgba(34,197,94,0.15);border-color:rgba(34,197,94,0.4);">Dev</div>
            <div class="arch-logo-label">(auto)</div>
          </div>
          <div class="arch-logo-item" style="font-size:20px;color:rgba(148,163,184,0.6);align-self:center;">&#x2192;</div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon" style="background:rgba(234,179,8,0.15);border-color:rgba(234,179,8,0.4);">Stg</div>
            <div class="arch-logo-label">(auto)</div>
          </div>
          <div class="arch-logo-item" style="font-size:20px;color:rgba(148,163,184,0.6);align-self:center;">&#x2192;</div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon" style="background:rgba(239,68,68,0.15);border-color:rgba(239,68,68,0.4);">Prod</div>
            <div class="arch-logo-label">(approval)</div>
          </div>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Kubernetes Cluster -->
      <div class="arch-box data-layer">
        <div class="arch-box-title">KUBERNETES CLUSTER</div>
        <div class="arch-box-logos" style="margin-top:8px;">
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.k8s}" alt="K8s" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">K8s</div>
          </div>
        </div>
        <div class="caf-checklist" style="margin-top:14px;">
          <span class="caf-check">Pods</span>
          <span class="caf-check">Services</span>
          <span class="caf-check">Ingress</span>
          <span class="caf-check">HPA</span>
          <span class="caf-check">Secrets</span>
          <span class="caf-check">ConfigMaps</span>
        </div>
      </div>
    </div>`;
  if (key === 'security') return `
    <div class="arch-visual">
      <!-- Cloud Governance -->
      <div class="arch-box">
        <div class="arch-box-title">CLOUD GOVERNANCE</div>
        <div class="arch-box-logos" style="margin-top:8px;">
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.azure}" alt="Azure AD" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">Azure AD</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.aws}" alt="AWS IAM" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">AWS IAM</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.gcp}" alt="GCP IAM" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">GCP IAM</div>
          </div>
        </div>
        <div class="caf-checklist" style="margin-top:14px;">
          <span class="caf-check">MFA + Conditional Access + RBAC</span>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Network Layer -->
      <div class="arch-box">
        <div class="arch-box-title">NETWORK LAYER</div>
        <div class="arch-box-logos" style="margin-top:8px;">
          <div class="arch-logo-item">
            <div class="caf-flow-icon">🛡️</div>
            <div class="arch-logo-label">SAST/DAST</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.postgresql}" alt="DB Geo-Replica" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">DB Geo-Replica</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon">🔗</div>
            <div class="arch-logo-label">Private Links</div>
          </div>
        </div>
        <div class="caf-checklist" style="margin-top:14px;">
          <span class="caf-check">Storage GRS &ndash; Firewalls</span>
          <span class="caf-check">Micro-Segmentation</span>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Application Layer -->
      <div class="arch-box">
        <div class="arch-box-title">APPLICATION LAYER</div>
        <div class="arch-box-logos" style="margin-top:8px;">
          <div class="arch-logo-item">
            <div class="caf-flow-icon">🛡️</div>
            <div class="arch-logo-label">SAST/DAST</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.docker}" alt="Container Scanning" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">Container Scanning</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon">🌐</div>
            <div class="arch-logo-label">API Gateway</div>
          </div>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Data Layer -->
      <div class="arch-box data-layer">
        <div class="arch-box-title">DATA LAYER</div>
        <div class="caf-checklist" style="margin-top:12px;">
          <span class="caf-check">Encryption (AES-256)</span>
          <span class="caf-check">Key Vault</span>
          <span class="caf-check">Backup Encryption</span>
          <span class="caf-check">DLP Policies</span>
        </div>
      </div>
    </div>`;
  if (key === 'backup-dr') return `
    <div class="arch-visual">
      <!-- Primary Region (Active) -->
      <div class="arch-box">
        <div class="arch-box-title">PRIMARY REGION (Active)</div>
        <div class="arch-box-logos" style="margin-top:8px;">
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.azure}" alt="App Services" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">App Services</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.postgresql}" alt="Databases" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">Databases</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.azure}" alt="Storage" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">Storage</div>
          </div>
        </div>
        <div class="caf-checklist" style="margin-top:14px;">
          <span class="caf-check">Automated Backups (Daily)</span>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- DR Region (Standby) -->
      <div class="arch-box">
        <div class="arch-box-title">DR REGION (Standby)</div>
        <div class="arch-box-logos" style="margin-top:8px;">
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.vmware}" alt="VMs" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">Replicated VMs</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.postgresql}" alt="DB Replica" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">DB Geo-Replica</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.icloud}" alt="GRS" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">Storage GRS</div>
          </div>
        </div>
        <div class="caf-checklist" style="margin-top:14px;">
          <span class="caf-check">Pre-configured Networking</span>
          <span class="caf-check">Auto-Failover (&lt; 15 min RTO)</span>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Backup Vault (Immutable) -->
      <div class="arch-box data-layer">
        <div class="arch-box-title">BACKUP VAULT (Immutable)</div>
        <div class="arch-box-logos" style="margin-top:8px;">
          <div class="arch-logo-item">
            <div class="caf-flow-icon">🔒</div>
            <div class="arch-logo-label">Encrypted</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.azure}" alt="Vault" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">Azure Vault</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.aws}" alt="AWS Backup" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">AWS Backup</div>
          </div>
        </div>
        <div class="caf-checklist" style="margin-top:14px;">
          <span class="caf-check">30-day retention</span>
          <span class="caf-check">Point-in-time</span>
          <span class="caf-check">Geo-redundant</span>
          <span class="caf-check">Encrypted at rest</span>
        </div>
      </div>
    </div>`;
  if (key === 'ai-ml') return `
    <div class="arch-visual">
      <!-- Data Ingestion -->
      <div class="arch-box">
        <div class="arch-box-title">DATA INGESTION</div>
        <div class="arch-box-logos" style="margin-top:8px;">
          <div class="arch-logo-item">
            <div class="caf-flow-icon">🔌</div>
            <div class="arch-logo-label">APIs</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.postgresql}" alt="DB" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">Databases</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon">📡</div>
            <div class="arch-logo-label">IoT</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon">📄</div>
            <div class="arch-logo-label">Documents</div>
          </div>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Data Lake / Warehouse -->
      <div class="arch-box">
        <div class="arch-box-title">DATA LAKE / WAREHOUSE</div>
        <div class="arch-box-logos" style="margin-top:8px;">
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.azure}" alt="Azure Data Lake" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">Azure Data Lake</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.aws}" alt="S3" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">S3</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.bigquery}" alt="BigQuery" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">BigQuery</div>
          </div>
        </div>
        <div class="arch-features" style="margin-top:14px;">
          <span class="arch-feature">ETL Pipelines</span>
          <span class="arch-feature">Data Quality Checks</span>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- ML Training Platform -->
      <div class="arch-box">
        <div class="arch-box-title">ML TRAINING PLATFORM</div>
        <div class="arch-box-logos" style="margin-top:8px;">
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.azure}" alt="Azure ML" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">Azure ML</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.aws}" alt="SageMaker" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">SageMaker</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.gcp}" alt="Vertex AI" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">Vertex AI</div>
          </div>
        </div>
        <div class="caf-checklist" style="margin-top:14px;">
          <span class="caf-check">Experiment Tracking</span>
          <span class="caf-check">Hyperparameter Tuning</span>
          <span class="caf-check">Data Quality Checks</span>
          <span class="caf-check">Model Registry</span>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Model Serving & Inference -->
      <div class="arch-box data-layer">
        <div class="arch-box-title">MODEL SERVING & INFERENCE</div>
        <div class="arch-features" style="margin-top:8px;">
          <span class="arch-feature">REST API</span>
          <span class="arch-feature">Batch</span>
          <span class="arch-feature">Real-time Stream</span>
        </div>
        <div class="caf-checklist" style="margin-top:14px;">
          <span class="caf-check">Auto-scaling</span>
          <span class="caf-check">A/B Testing</span>
          <span class="caf-check">A/B Testing</span>
          <span class="caf-check">Canary</span>
        </div>
      </div>
    </div>`;
  if (key === 'cloud-strategy') return `
    <div class="arch-visual">
      <!-- Cloud icon + title -->
      <div style="font-size:56px;line-height:1;margin-bottom:12px;">☁️🚀</div>
      <div class="arch-box" style="border-radius:20px;">
        <div class="arch-box-title">CLOUD ADOPTION FRAMEWORK</div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Strategy → Plan → Ready / Govern ← Manage ← Adopt -->
      <div class="caf-flow-box">
        <div class="caf-flow-row">
          <div class="caf-flow-item">
            <div class="caf-flow-icon">🎯</div>
            <div class="caf-flow-label">Strategy</div>
          </div>
          <div class="caf-flow-arrow">→</div>
          <div class="caf-flow-item">
            <div class="caf-flow-icon">📋</div>
            <div class="caf-flow-label">Plan</div>
          </div>
          <div class="caf-flow-arrow">→</div>
          <div class="caf-flow-item">
            <div class="caf-flow-icon">🚀</div>
            <div class="caf-flow-label">Ready</div>
          </div>
        </div>
        <hr class="caf-flow-divider">
        <div class="caf-flow-row">
          <div class="caf-flow-item">
            <div class="caf-flow-icon">🔒</div>
            <div class="caf-flow-label">Govern</div>
          </div>
          <div class="caf-flow-arrow">←</div>
          <div class="caf-flow-item">
            <div class="caf-flow-icon">🖥️</div>
            <div class="caf-flow-label">Manage</div>
          </div>
          <div class="caf-flow-arrow">←</div>
          <div class="caf-flow-item">
            <div class="caf-flow-icon">☁️</div>
            <div class="caf-flow-label">Adopt</div>
          </div>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Governance Pillars -->
      <div class="arch-box">
        <div class="arch-box-title">GOVERNANCE PILLARS</div>
        <div class="caf-pillars">
          <div class="caf-pillar">
            <div class="caf-pillar-icon">💰</div>
            <div class="caf-pillar-label">Cost</div>
          </div>
          <div class="caf-pillar">
            <div class="caf-pillar-icon">🛡️</div>
            <div class="caf-pillar-label">Security</div>
          </div>
          <div class="caf-pillar">
            <div class="caf-pillar-icon">👤</div>
            <div class="caf-pillar-label">Identity</div>
          </div>
          <div class="caf-pillar">
            <div class="caf-pillar-icon">🗄️</div>
            <div class="caf-pillar-label">Resource</div>
          </div>
          <div class="caf-pillar">
            <div class="caf-pillar-icon">📊</div>
            <div class="caf-pillar-label">Operations</div>
          </div>
        </div>
        <div class="caf-checklist">
          <span class="caf-check">Cost</span>
          <span class="caf-check">Identity</span>
          <span class="caf-check">Security</span>
          <span class="caf-check">Resource Management</span>
          <span class="caf-check">Compliance</span>
          <span class="caf-check">Operations</span>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Landing Zone -->
      <div class="arch-box data-layer">
        <div class="arch-box-title">LANDING ZONE</div>
        <div class="caf-landing-items">
          <div class="caf-landing-item">
            <div class="caf-landing-icon"><img src="${ico.azure}" alt="Subscriptions" style="width:28px;height:28px;"></div>
            <div class="caf-landing-label">Subscriptions</div>
          </div>
          <div class="caf-landing-item">
            <div class="caf-landing-icon">📦</div>
            <div class="caf-landing-label">Resource Groups</div>
          </div>
          <div class="caf-landing-item">
            <div class="caf-landing-icon">📋</div>
            <div class="caf-landing-label">Policies</div>
          </div>
          <div class="caf-landing-item">
            <div class="caf-landing-icon">🔐</div>
            <div class="caf-landing-label">RBAC</div>
          </div>
          <div class="caf-landing-item">
            <div class="caf-landing-icon">🌐</div>
            <div class="caf-landing-label">Networking</div>
          </div>
          <div class="caf-landing-item">
            <div class="caf-landing-icon">📝</div>
            <div class="caf-landing-label">Logging</div>
          </div>
        </div>
      </div>
    </div>`;
  if (key === 'cloud-infra') return `
    <div class="arch-visual">
      <!-- Cloud Icon -->
      <div style="font-size:56px;line-height:1;margin-bottom:12px;">☁️</div>

      <!-- Load Balancer (L7) -->
      <div class="arch-box">
        <div class="arch-box-title">LOAD BALANCER (L7)</div>
        <div class="arch-box-logos" style="margin-top:8px;">
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.azure}" alt="Azure Front Door" style="width:28px;height:28px;"></div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.aws}" alt="AWS ALB" style="width:28px;height:28px;"></div>
          </div>
        </div>
        <div style="font-size:12px;color:rgba(148,163,184,0.8);margin-top:8px;">Azure Front Door / AWS ALB</div>
      </div>

      <!-- Split arrow to two regions -->
      <div class="arch-arrow-split">
        <div class="arch-arrow-split-left">
          <div class="arch-arrow-split-head"></div>
        </div>
        <div class="arch-arrow-split-right">
          <div class="arch-arrow-split-head"></div>
        </div>
      </div>

      <!-- Region A & B side by side -->
      <div class="infra-regions">
        <div class="infra-region">
          <div class="infra-region-title">Region A</div>
          <div class="arch-box-logos" style="margin-bottom:10px;">
            <div class="arch-logo-item">
              <div class="caf-flow-icon"><img src="${ico.azure}" alt="Azure" style="width:28px;height:28px;"></div>
            </div>
            <div class="arch-logo-item">
              <div class="caf-flow-icon"><img src="${ico.k8s}" alt="AKS" style="width:28px;height:28px;"></div>
            </div>
          </div>
          <div class="infra-region-desc">App GW +<br>VM Scale Set / AKS</div>
        </div>
        <div class="infra-region">
          <div class="infra-region-title">Region B</div>
          <div class="arch-box-logos" style="margin-bottom:10px;">
            <div class="arch-logo-item">
              <div class="caf-flow-icon"><img src="${ico.aws}" alt="AWS" style="width:28px;height:28px;"></div>
            </div>
            <div class="arch-logo-item">
              <div class="caf-flow-icon"><img src="${ico.k8s}" alt="AKS" style="width:28px;height:28px;"></div>
            </div>
          </div>
          <div class="infra-region-desc">App GW +<br>VM Scale Set / AKS</div>
        </div>
      </div>

      <!-- Merge arrow from two regions -->
      <div class="arch-arrow-merge">
        <div class="arch-arrow-merge-left"></div>
        <div class="arch-arrow-merge-right"></div>
        <div class="arch-arrow-merge-head"></div>
      </div>

      <!-- Managed DB -->
      <div class="arch-box">
        <div class="arch-box-title">MANAGED DB (GEO-REPLICATED)</div>
        <div style="font-size:12px;color:rgba(148,163,184,0.8);margin:6px 0 10px;">Azure SQL / RDS / Cloud SQL</div>
        <div class="arch-box-logos">
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.postgresql}" alt="SQL" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">SQL</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.mysql}" alt="MySQL" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">MySQL</div>
          </div>
          <div class="arch-logo-item">
            <div class="caf-flow-icon"><img src="${ico.redis}" alt="Redis" style="width:28px;height:28px;"></div>
            <div class="arch-logo-label">Redis</div>
          </div>
        </div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Blob / S3 / GCS Storage -->
      <div class="arch-box">
        <div class="arch-box-title">BLOB / S3 / GCS STORAGE</div>
        <div style="font-size:12px;color:rgba(148,163,184,0.8);margin-top:6px;">CDN + Static Assets</div>
      </div>

      <div class="arch-arrow"><div class="arch-arrow-line"></div><div class="arch-arrow-head"></div></div>

      <!-- Bottom 4-grid: CDN, Static Assets, Backups, Monitoring -->
      <div class="infra-bottom-grid">
        <div class="infra-bottom-item">
          <div class="infra-bottom-icon">🌐</div>
          <div class="infra-bottom-title">CDN</div>
          <div class="infra-bottom-desc">Edge + Caching</div>
        </div>
        <div class="infra-bottom-item">
          <div class="infra-bottom-icon">📄</div>
          <div class="infra-bottom-title">Static Assets</div>
          <div class="infra-bottom-desc">Web / Media</div>
        </div>
        <div class="infra-bottom-item">
          <div class="infra-bottom-icon">💾</div>
          <div class="infra-bottom-title">Backups</div>
          <div class="infra-bottom-desc">Automated Snapshots</div>
        </div>
        <div class="infra-bottom-item">
          <div class="infra-bottom-icon"><img src="${ico.grafana}" alt="Monitoring" style="width:22px;height:22px;"></div>
          <div class="infra-bottom-title">Monitoring</div>
          <div class="infra-bottom-desc">Logs + Metrics</div>
        </div>
      </div>
    </div>`;
  return '';
}

function openServiceModal(serviceKey) {
  const data = serviceDetails[serviceKey];
  if (!data) return;
  let html = `
    <div class="sdm-header">
      <div class="sdm-icon" style="background:${data.iconBg}">${data.icon}</div>
      <div>
        <h2>${data.title}</h2>
        <p>${data.desc}</p>
      </div>
    </div>
    <div class="sdm-section">
      <div class="sdm-section-title"><span class="sdm-title-icon">📋</span> Our Workflow</div>
      <div class="sdm-steps">
        ${data.workflow.map((s,i) => `<div class="sdm-step"><div class="sdm-step-num">${i+1}</div><h4>${s.title}</h4><p>${s.desc}</p></div>`).join('')}
      </div>
    </div>
    <div class="sdm-section">
      <div class="sdm-section-title"><span class="sdm-title-icon">🏗️</span> Architecture</div>
      ${data.archHtml ? getVisualArch(serviceKey) : `<div class="sdm-arch"><span class="sdm-arch-label">Architecture</span>${data.arch}</div>`}
    </div>
    <div class="sdm-section">
      <div class="sdm-section-title"><span class="sdm-title-icon">🔧</span> Technologies We Use</div>
      <div class="sdm-tech-grid">
        ${data.tech.map(t => `<span class="sdm-tech">${t}</span>`).join('')}
      </div>
    </div>
    <div class="sdm-section">
      <div class="sdm-section-title"><span class="sdm-title-icon">🚀</span> Deployment Strategies</div>
      <div class="sdm-deploy-cards">
        ${data.deploy.map(d => `<div class="sdm-deploy-card"><h4>${d.icon} ${d.title}</h4><p>${d.desc}</p></div>`).join('')}
      </div>
    </div>
    <div class="sdm-cta">
      <a href="#contact" class="btn btn-glow" style="justify-content:center;padding:14px 40px;" onclick="closeServiceModal()">
        Discuss Your Project →
      </a>
    </div>`;
  document.getElementById('serviceDetailContent').innerHTML = html;
  document.getElementById('serviceDetailOverlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
  document.getElementById('serviceDetailOverlay').style.display = 'none';
  document.body.style.overflow = '';
}

// ── Platform Detail Modal Data ──
const platformDetails = {
  azure: {
    logo: 'https://api.iconify.design/logos/microsoft-azure.svg',
    title: 'Microsoft Azure',
    tagline: 'Your trusted partner for enterprise-grade Azure solutions',
    accentColor: '#0078D4',
    why: 'Azure is the ideal choice for enterprises already invested in the Microsoft ecosystem. With 60+ regions worldwide, deep hybrid cloud capabilities, and unmatched enterprise integrations with Active Directory, Office 365, and Dynamics 365, Azure provides the most comprehensive cloud platform for businesses of all sizes.',
    expertise: [
      { icon: '🖥️', title: 'Compute & VMs', desc: 'Virtual Machines, App Services, Azure Functions, Container Apps' },
      { icon: '🧠', title: 'AI & Cognitive', desc: 'Azure OpenAI, Cognitive Services, Machine Learning Studio' },
      { icon: '🗄️', title: 'Data & Analytics', desc: 'Cosmos DB, Synapse Analytics, Data Factory, SQL Database' },
      { icon: '🔐', title: 'Security & Identity', desc: 'Active Directory, Key Vault, Sentinel, Defender for Cloud' },
      { icon: '🌐', title: 'Networking', desc: 'Virtual Networks, Front Door, Application Gateway, ExpressRoute' },
      { icon: '☸️', title: 'Containers & K8s', desc: 'AKS, Container Registry, Container Instances, Service Fabric' }
    ],
    certs: [
      { icon: '🏅', label: 'Microsoft Solutions Partner' },
      { icon: '📜', label: 'Azure Administrator Associate' },
      { icon: '📜', label: 'Azure Solutions Architect Expert' },
      { icon: '📜', label: 'Azure Security Engineer Associate' }
    ],
    services: ['App Services', 'AKS', 'Cosmos DB', 'Azure AI', 'Virtual Networks', 'Key Vault', 'Azure DevOps', 'Logic Apps', 'Service Bus', 'Blob Storage', 'Azure Monitor', 'Defender for Cloud']
  },
  aws: {
    logo: 'https://api.iconify.design/logos/aws.svg',
    title: 'Amazon AWS',
    tagline: 'Scalable, reliable cloud infrastructure built on AWS',
    accentColor: '#FF9900',
    why: 'AWS is the world\'s most comprehensive cloud platform with 200+ fully featured services. Its unmatched breadth of services, global infrastructure spanning 33 regions, and mature ecosystem make it the go-to choice for startups scaling rapidly and enterprises running mission-critical workloads.',
    expertise: [
      { icon: '🖥️', title: 'Compute', desc: 'EC2, Lambda, ECS, Fargate, Lightsail, Batch' },
      { icon: '📦', title: 'Storage & CDN', desc: 'S3, EBS, CloudFront, Glacier, Storage Gateway' },
      { icon: '🗄️', title: 'Databases', desc: 'RDS, DynamoDB, Aurora, ElastiCache, Redshift' },
      { icon: '🤖', title: 'AI & ML', desc: 'SageMaker, Bedrock, Rekognition, Comprehend, Lex' },
      { icon: '🔧', title: 'DevOps & IaC', desc: 'CloudFormation, CodePipeline, CodeBuild, CDK' },
      { icon: '🔒', title: 'Security', desc: 'IAM, GuardDuty, WAF, Shield, Security Hub, KMS' }
    ],
    certs: [
      { icon: '🏅', label: 'AWS Partner Network (APN)' },
      { icon: '📜', label: 'AWS Solutions Architect Professional' },
      { icon: '📜', label: 'AWS DevOps Engineer Professional' },
      { icon: '📜', label: 'AWS Security Specialty' }
    ],
    services: ['EC2', 'Lambda', 'S3', 'SageMaker', 'EKS', 'RDS', 'CloudFormation', 'CloudFront', 'DynamoDB', 'Aurora', 'Step Functions', 'EventBridge']
  },
  gcp: {
    logo: 'https://api.iconify.design/logos/google-cloud.svg',
    title: 'Google Cloud',
    tagline: 'Data-driven cloud solutions powered by Google Cloud',
    accentColor: '#4285F4',
    why: 'Google Cloud excels in data analytics, machine learning, and open-source technologies. With the same infrastructure that powers Google Search, YouTube, and Gmail, GCP offers best-in-class data services like BigQuery, world-leading AI/ML tools with Vertex AI, and a strong commitment to open-source and multi-cloud with Anthos.',
    expertise: [
      { icon: '📊', title: 'Data & Analytics', desc: 'BigQuery, Dataflow, Dataproc, Looker, Pub/Sub' },
      { icon: '🧠', title: 'AI & ML', desc: 'Vertex AI, AutoML, TensorFlow, Gemini API' },
      { icon: '☸️', title: 'Containers & K8s', desc: 'GKE, Cloud Run, Artifact Registry, Anthos' },
      { icon: '⚡', title: 'Serverless', desc: 'Cloud Functions, Cloud Run, App Engine, Workflows' },
      { icon: '🌐', title: 'Networking', desc: 'Cloud CDN, Cloud Armor, Load Balancing, VPC' },
      { icon: '🗄️', title: 'Databases', desc: 'Cloud SQL, Spanner, Firestore, Bigtable, Memorystore' }
    ],
    certs: [
      { icon: '🏅', label: 'Google Cloud Partner' },
      { icon: '📜', label: 'Professional Cloud Architect' },
      { icon: '📜', label: 'Professional Data Engineer' },
      { icon: '📜', label: 'Professional ML Engineer' }
    ],
    services: ['GKE', 'BigQuery', 'Cloud Run', 'Vertex AI', 'Cloud Functions', 'Pub/Sub', 'Cloud SQL', 'Spanner', 'Dataflow', 'Cloud Armor', 'Anthos', 'Looker']
  },
  alibaba: {
    logo: 'https://api.iconify.design/simple-icons/alibabacloud.svg?color=%23FF6A00',
    title: 'Alibaba Cloud',
    tagline: 'Asia-Pacific cloud expertise with Alibaba Cloud',
    accentColor: '#FF6A00',
    why: 'Alibaba Cloud is the leading cloud provider in Asia-Pacific and the 3rd largest globally. It\'s the ideal choice for businesses expanding into China, Southeast Asia, and emerging markets, offering localized compliance, low-latency infrastructure across 28 regions, and specialized services for e-commerce, fintech, and AI.',
    expertise: [
      { icon: '🖥️', title: 'Elastic Compute', desc: 'ECS, Function Compute, Container Service, SAE' },
      { icon: '🤖', title: 'AI Platform', desc: 'PAI, ModelScope, Qwen LLM, Machine Learning Platform' },
      { icon: '📊', title: 'Big Data', desc: 'MaxCompute, DataWorks, Flink, AnalyticDB' },
      { icon: '🗄️', title: 'Databases', desc: 'ApsaraDB RDS, PolarDB, Tair, Lindorm' },
      { icon: '🔒', title: 'Security', desc: 'Cloud Firewall, WAF, Anti-DDoS, Security Center' },
      { icon: '🌏', title: 'Global Network', desc: 'CDN, Global Accelerator, Smart Access Gateway, CEN' }
    ],
    certs: [
      { icon: '🏅', label: 'Alibaba Cloud Partner' },
      { icon: '📜', label: 'ACA Cloud Computing' },
      { icon: '📜', label: 'ACP Cloud Computing' },
      { icon: '📜', label: 'ACE Cloud Computing' }
    ],
    services: ['ECS', 'MaxCompute', 'PAI', 'Container Service', 'Function Compute', 'PolarDB', 'OSS', 'CDN', 'DataWorks', 'Flink', 'AnalyticDB', 'Cloud Firewall']
  }
};

function openPlatformModal(key) {
  const d = platformDetails[key];
  if (!d) return;
  const html = `
    <div class="pdm-header">
      <div class="pdm-logo"><img src="${d.logo}" alt="${d.title}"></div>
      <div>
        <h2>${d.title}</h2>
        <p>${d.tagline}</p>
      </div>
    </div>
    <div class="pdm-section">
      <div class="pdm-section-title"><span class="pdm-icon">💡</span> Why ${d.title}?</div>
      <div class="pdm-why">${d.why}</div>
    </div>
    <div class="pdm-section">
      <div class="pdm-section-title"><span class="pdm-icon">🚀</span> Our Expertise</div>
      <div class="pdm-expertise-grid">
        ${d.expertise.map(e => `
          <div class="pdm-exp-card">
            <div class="pdm-exp-icon">${e.icon}</div>
            <h4>${e.title}</h4>
            <p>${e.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="pdm-section">
      <div class="pdm-section-title"><span class="pdm-icon">🏆</span> Certifications & Partnerships</div>
      <div class="pdm-certs">
        ${d.certs.map(c => `<div class="pdm-cert"><span class="pdm-cert-icon">${c.icon}</span>${c.label}</div>`).join('')}
      </div>
    </div>
    <div class="pdm-section">
      <div class="pdm-section-title"><span class="pdm-icon">🔧</span> Key Services We Deliver</div>
      <div class="pdm-services">
        ${d.services.map(s => `<span>${s}</span>`).join('')}
      </div>
    </div>
    <div class="pdm-cta">
      <a href="#contact" class="btn btn-glow" onclick="closeServiceModal()">
        Discuss Your ${d.title} Project &rarr;
      </a>
    </div>`;
  document.getElementById('serviceDetailContent').innerHTML = html;
  document.getElementById('serviceDetailOverlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.service-card[data-service]').forEach(card => {
    card.addEventListener('click', () => openServiceModal(card.dataset.service));
  });
  document.querySelectorAll('.platform-hex[data-platform]').forEach(card => {
    card.addEventListener('click', () => openPlatformModal(card.dataset.platform));
  });
  document.getElementById('serviceDetailOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeServiceModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('serviceDetailOverlay').style.display !== 'none') {
      closeServiceModal();
    }
  });
});

// ── Theme Toggle ──
function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  document.getElementById('toggleIcon').textContent = next === 'dark' ? '☀️' : '🌙';
  // Smooth body transition
  document.body.style.transition = 'background 0.6s ease, color 0.4s ease';
}

// ── Custom Cursor ──
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top = mouseY + 'px';
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover effect on interactive elements
document.querySelectorAll('a, button, .glass-card, .nav-link, .service-card, input, textarea, select').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// ── Navbar Scroll ──
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Mobile Nav ──
function openMobile() { document.getElementById('mobileNav').classList.add('active'); }
function closeMobile() { document.getElementById('mobileNav').classList.remove('active'); }

// ── Scroll Reveal ──
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── Counter Animation ──
function animateCounters() {
  document.querySelectorAll('.counter').forEach(c => {
    const target = +c.dataset.target;
    const start = performance.now();
    const duration = 2500;
    (function update(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      c.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(update);
    })(start);
  });
}
const heroObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { animateCounters(); heroObs.disconnect(); } });
}, { threshold: 0.3 });
heroObs.observe(document.querySelector('.hero'));

// ── 3D Tilt on Service Cards ──
document.querySelectorAll('.service-card, .platform-hex, .metric-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-8px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ── Active nav link ──
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const sy = window.scrollY + 120;
  sections.forEach(sec => {
    const top = sec.offsetTop, h = sec.offsetHeight, id = sec.id;
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) link.classList.toggle('active', sy >= top && sy < top + h);
  });
});

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth' });
  });
});

// ── OTP Verification Contact Form ──
const RECAPTCHA_SITE_KEY = '6LdXnXwsAAAAABSQ8AwQUPGtiKYZGXmNBX4XWdxJ';
const API_BASE = '';
let currentEmail = '';
let otpTimerInterval = null;
let otpExpiresAt = null;

async function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const errorEl = document.getElementById('formError');
  errorEl.style.display = 'none';

  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const company = document.getElementById('company').value.trim();
  const service = document.getElementById('service').value;
  const projectDetails = document.getElementById('projectDetails').value.trim();

  if (!fullName || !email) {
    showFormError('Please fill in all required fields.');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showFormError('Please enter a valid email address.');
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Verifying...';

  try {
    let recaptchaToken = '';
    if (typeof grecaptcha !== 'undefined' && RECAPTCHA_SITE_KEY !== '6LdXnXwsAAAAABSQ8AwQUPGtiKYZGXmNBX4XWdxJ') {
      recaptchaToken = await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit_contact' });
    }

    const response = await fetch(API_BASE + '/api/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recaptchaToken, fullName, email, company, service, projectDetails })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Something went wrong.');

    currentEmail = email;
    openOtpModal(email);
  } catch (err) {
    showFormError(err.message);
  } finally {
    btn.disabled = false;
    btn.textContent = 'Send Message →';
  }
}

function showFormError(msg) {
  const el = document.getElementById('formError');
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 6000);
}

function maskEmail(email) {
  const [user, domain] = email.split('@');
  const masked = user.length > 2 ? user[0] + '*'.repeat(Math.min(user.length - 2, 5)) + user.slice(-1) : user[0] + '*';
  return masked + '@' + domain;
}

function openOtpModal(email) {
  document.getElementById('otpEmailDisplay').textContent = maskEmail(email);
  document.getElementById('otpOverlay').style.display = 'flex';
  document.getElementById('otpError').style.display = 'none';
  document.body.style.overflow = 'hidden';
  const inputs = document.querySelectorAll('.otp-digit');
  inputs.forEach(i => { i.value = ''; i.classList.remove('error', 'success', 'filled'); });
  inputs[0].focus();
  startOtpTimer(5 * 60);
}

function closeOtpModal() {
  document.getElementById('otpOverlay').style.display = 'none';
  document.body.style.overflow = '';
  clearInterval(otpTimerInterval);
}

function startOtpTimer(seconds) {
  clearInterval(otpTimerInterval);
  otpExpiresAt = Date.now() + seconds * 1000;
  const timerEl = document.getElementById('otpTimer');
  function update() {
    const rem = Math.max(0, Math.ceil((otpExpiresAt - Date.now()) / 1000));
    const m = Math.floor(rem / 60), s = rem % 60;
    timerEl.textContent = rem > 0 ? 'Code expires in ' + m + ':' + s.toString().padStart(2, '0') : 'Code expired. Please request a new one.';
    if (rem <= 0) clearInterval(otpTimerInterval);
  }
  update();
  otpTimerInterval = setInterval(update, 1000);
}

// OTP digit input behavior
document.addEventListener('DOMContentLoaded', function() {
  var inputs = document.querySelectorAll('.otp-digit');
  inputs.forEach(function(input, idx) {
    input.addEventListener('input', function(e) {
      var val = e.target.value.replace(/[^0-9]/g, '');
      e.target.value = val;
      if (val) {
        e.target.classList.add('filled');
        if (idx < inputs.length - 1) inputs[idx + 1].focus();
        if (idx === inputs.length - 1 && getAllDigits().length === 6) verifyOtp();
      } else {
        e.target.classList.remove('filled');
      }
    });
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Backspace' && !e.target.value && idx > 0) {
        inputs[idx - 1].focus();
        inputs[idx - 1].value = '';
        inputs[idx - 1].classList.remove('filled');
      }
    });
    input.addEventListener('paste', function(e) {
      e.preventDefault();
      var pasted = (e.clipboardData.getData('text') || '').replace(/[^0-9]/g, '').slice(0, 6);
      if (pasted.length === 6) {
        inputs.forEach(function(inp, i) { inp.value = pasted[i]; inp.classList.add('filled'); });
        inputs[5].focus();
        verifyOtp();
      }
    });
  });
});

function getAllDigits() {
  return Array.from(document.querySelectorAll('.otp-digit')).map(function(i) { return i.value; }).join('');
}

async function verifyOtp() {
  var otp = getAllDigits();
  if (otp.length !== 6) return;

  var btn = document.getElementById('otpVerifyBtn');
  var errorEl = document.getElementById('otpError');
  errorEl.style.display = 'none';
  btn.disabled = true;
  btn.textContent = 'Verifying...';

  try {
    var response = await fetch(API_BASE + '/api/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: currentEmail, otp: otp })
    });
    var data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Verification failed.');

    document.querySelectorAll('.otp-digit').forEach(function(i) { i.classList.add('success'); });
    btn.textContent = 'Message Sent! ✓';

    setTimeout(function() {
      closeOtpModal();
      document.getElementById('contactForm').reset();
      var mainBtn = document.getElementById('submitBtn');
      mainBtn.textContent = 'Message Sent! ✓';
      mainBtn.style.background = 'linear-gradient(135deg, #34d399, #10b981)';
      setTimeout(function() { mainBtn.textContent = 'Send Message →'; mainBtn.style.background = ''; }, 4000);
    }, 1500);
  } catch (err) {
    var container = document.getElementById('otpInputs');
    container.classList.add('shake');
    setTimeout(function() { container.classList.remove('shake'); }, 400);
    document.querySelectorAll('.otp-digit').forEach(function(i) { i.classList.add('error'); });
    setTimeout(function() { document.querySelectorAll('.otp-digit').forEach(function(i) { i.classList.remove('error'); }); }, 1500);
    errorEl.textContent = err.message;
    errorEl.style.display = 'block';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Verify & Send Message';
  }
}

async function resendOtp(e) {
  e.preventDefault();
  var link = document.getElementById('resendOtpLink');
  link.style.pointerEvents = 'none';
  link.textContent = 'Sending...';

  try {
    var recaptchaToken = '';
    if (typeof grecaptcha !== 'undefined' && RECAPTCHA_SITE_KEY !== '6LdXnXwsAAAAABSQ8AwQUPGtiKYZGXmNBX4XWdxJ') {
      recaptchaToken = await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit_contact' });
    }
    var response = await fetch(API_BASE + '/api/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        recaptchaToken: recaptchaToken,
        fullName: document.getElementById('fullName').value.trim(),
        email: currentEmail,
        company: document.getElementById('company').value.trim(),
        service: document.getElementById('service').value,
        projectDetails: document.getElementById('projectDetails').value.trim()
      })
    });
    var data = await response.json();
    if (!response.ok) throw new Error(data.message);

    document.querySelectorAll('.otp-digit').forEach(function(i) { i.value = ''; i.classList.remove('error', 'success', 'filled'); });
    document.querySelectorAll('.otp-digit')[0].focus();
    startOtpTimer(5 * 60);
    link.textContent = 'Code resent!';
  } catch (err) {
    link.textContent = err.message;
  }
  setTimeout(function() { link.style.pointerEvents = ''; link.textContent = "Didn't receive the code? Resend"; }, 5000);
}

// ── Scroll Progress Bar ──
window.addEventListener('scroll', function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var progress = (scrollTop / scrollHeight) * 100;
  var bar = document.getElementById('scrollProgress');
  if (bar) bar.style.width = progress + '%';
});

// ── Particle Canvas ──
(function() {
  var canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var particles = [];
  var particleCount = 40;
  var mouse = { x: -1000, y: -1000 };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  document.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.size = Math.random() * 2 + 0.5;
    this.alpha = Math.random() * 0.3 + 0.1;
  }

  for (var i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var theme = document.documentElement.getAttribute('data-theme');
    var baseColor = theme === 'light' ? '37, 99, 235' : '59, 130, 246';

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Mouse interaction — subtle push
      var dx = p.x - mouse.x;
      var dy = p.y - mouse.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        p.x += dx * 0.01;
        p.y += dy * 0.01;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + baseColor + ',' + p.alpha + ')';
      ctx.fill();

      // Connect nearby particles
      for (var j = i + 1; j < particles.length; j++) {
        var p2 = particles[j];
        var dx2 = p.x - p2.x;
        var dy2 = p.y - p2.y;
        var dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
        if (dist2 < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = 'rgba(' + baseColor + ',' + (0.05 * (1 - dist2 / 150)) + ')';
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
})();

// ── AI Chatbot (auto-injected on every page) ──
(function() {
  // Inject chatbot HTML if not already present
  if (!document.getElementById('chatFab')) {
    var chatHTML = ''
      + '<button class="chat-fab" id="chatFab" aria-label="Chat with us">'
      +   '<div class="chat-fab-pulse"></div>'
      +   '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>'
      +   '<span class="chat-fab-close">✕</span>'
      + '</button>'
      + '<div class="chat-window" id="chatWindow">'
      +   '<div class="chat-header">'
      +     '<div class="chat-header-dot"></div>'
      +     '<div class="chat-header-text">'
      +       '<h4>TotalCloudAI Assistant</h4>'
      +       '<span>Online 24/7 — Typically replies instantly</span>'
      +     '</div>'
      +   '</div>'
      +   '<div class="chat-messages" id="chatMessages">'
      +     '<div class="chat-msg bot">'
      +       'Hi! I\'m the TotalCloudAI assistant. How can I help you today?'
      +       '<div class="chat-quick-btns">'
      +         '<button class="chat-quick-btn">Our Services</button>'
      +         '<button class="chat-quick-btn">Platforms</button>'
      +         '<button class="chat-quick-btn">Pricing</button>'
      +         '<button class="chat-quick-btn">Contact Us</button>'
      +         '<button class="chat-quick-btn">Download Brochure</button>'
      +       '</div>'
      +     '</div>'
      +   '</div>'
      +   '<div class="chat-input-area">'
      +     '<input type="text" class="chat-input" id="chatInput" placeholder="Ask about services, pricing, architecture..." autocomplete="off">'
      +     '<button class="chat-send" id="chatSend" aria-label="Send"><svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button>'
      +   '</div>'
      + '</div>';
    document.body.insertAdjacentHTML('beforeend', chatHTML);
  }

  var fab = document.getElementById('chatFab');
  var win = document.getElementById('chatWindow');
  var input = document.getElementById('chatInput');
  var msgs = document.getElementById('chatMessages');
  if (!fab || !win) return;

  // ── Contact constants ──
  var PHONE = '+44-(0)7487681898';
  var PHONE_LINK = 'tel:+447487681898';
  var WHATSAPP = 'https://wa.me/447487681898';
  var EMAIL = 'Info@totalcloudai.com';
  var ADDRESS = 'Maxi House, Halesfield 20, Telford TF7 4QU, UK';
  var CONTACT_BLOCK = '<div style="margin-top:10px;padding:10px;border-radius:8px;background:rgba(96,165,250,0.08);border:1px solid rgba(96,165,250,0.2);font-size:0.88rem;line-height:1.6">'
    + '<strong>Get in touch:</strong><br>'
    + '📞 <a href="' + PHONE_LINK + '">' + PHONE + '</a><br>'
    + '💬 <a href="' + WHATSAPP + '" target="_blank">WhatsApp Us</a><br>'
    + '📧 <a href="mailto:' + EMAIL + '">' + EMAIL + '</a><br>'
    + '📍 ' + ADDRESS
    + '</div>';

  // ── Weighted keyword Q&A database ──
  var qaDatabase = [

    // ═══ SERVICES ═══

    // Cloud Infrastructure
    { keywords: ['cloud infrastructure', 'iaas', 'infrastructure as a service'],
      response: '<strong>Enterprise Cloud Infrastructure (IaaS)</strong><br><br>We design multi-region, highly available cloud infrastructure across Azure, AWS, GCP, and Alibaba Cloud.<br><br><strong>What\'s included:</strong><br>• Multi-cloud architecture design<br>• Compute & VM provisioning with rightsizing<br>• Enterprise networking (VPNs, ExpressRoute, load balancers)<br>• Storage & data management with encryption<br>• Monitoring & observability (Prometheus, Grafana, Datadog)<br>• Cost governance & FinOps strategies<br><br><strong>Results:</strong> 30-40% cost reduction | 99.99% uptime | 60% faster time to market<br><br><strong>Timeline:</strong> 2-12 weeks depending on complexity<br><br><a href="/services/cloud-infrastructure">Learn more →</a>' },

    // Managed Cloud
    { keywords: ['managed cloud', 'managed service', '24/7 monitoring', 'managed operations'],
      response: '<strong>Managed Cloud Services (24/7 Operations)</strong><br><br>We take full operational ownership of your cloud environments with round-the-clock monitoring and support.<br><br><strong>What\'s included:</strong><br>• 24/7 proactive monitoring & alerting<br>• OS patching & zero-downtime maintenance<br>• Cost optimisation & FinOps<br>• Infrastructure as Code management<br>• Security posture management<br>• Dedicated account manager<br><br><strong>SLA:</strong> P1 incidents — 15 min acknowledgement, 1 hr resolution<br><strong>Results:</strong> 45% lower ops costs | 78% faster incident resolution | 32% cloud waste eliminated<br><br><strong>Timeline:</strong> 2-4 weeks onboarding<br><br><a href="/services/managed-cloud">Learn more →</a>' },

    // Cloud Migration
    { keywords: ['cloud migration', 'migrate', 'move to cloud', 'rehost', 'lift and shift', 'refactor', 'rearchitect'],
      response: '<strong>Zero-Downtime Cloud Migration</strong><br><br>We plan and execute seamless migrations using the 6 Rs framework — Rehost, Refactor, Rearchitect, Rebuild, Replatform, and Retire.<br><br><strong>What\'s included:</strong><br>• Migration assessment & discovery<br>• Lift-and-shift & re-platform strategies<br>• Application modernisation<br>• Hybrid cloud architecture<br>• Database migration & modernisation<br>• Landing zone build-out<br><br><strong>Results:</strong> 20-30% TCO reduction | 94% improved security | Zero data loss guaranteed<br><br><strong>Timeline:</strong> 4-8 weeks (simple) to 3-6 months (complex)<br><br><a href="/services/cloud-migration">Learn more →</a>' },

    // DevOps & Automation
    { keywords: ['devops', 'ci/cd', 'cicd', 'pipeline', 'automation', 'gitops', 'continuous integration', 'continuous delivery', 'continuous deployment'],
      response: '<strong>DevOps & CI/CD Transformation</strong><br><br>We build end-to-end CI/CD pipelines with Infrastructure as Code, container orchestration, and GitOps.<br><br><strong>What\'s included:</strong><br>• CI/CD pipeline design (GitHub Actions, Azure DevOps, GitLab CI)<br>• Infrastructure as Code (Terraform, Bicep, Pulumi)<br>• Kubernetes & container orchestration<br>• GitOps with ArgoCD & Helm<br>• Observability & SRE practices<br>• DevSecOps integration<br><br><strong>Results:</strong> 208x more frequent deployments | 106x faster lead time | 7x lower change failure rate<br><br><strong>Timeline:</strong> 6-10 weeks initial + 4-8 weeks enablement<br><br><a href="/services/devops-automation">Learn more →</a>' },

    // Security & Compliance
    { keywords: ['security', 'compliance', 'gdpr', 'iso 27001', 'soc 2', 'hipaa', 'pci-dss', 'pci dss', 'zero trust', 'iam', 'identity'],
      response: '<strong>Cloud Security & Compliance</strong><br><br>We implement defence-in-depth security and help you achieve compliance certifications.<br><br><strong>What\'s included:</strong><br>• Zero Trust architecture design<br>• Identity & Access Management (IAM)<br>• Compliance frameworks: GDPR, SOC 2, ISO 27001, HIPAA, PCI-DSS<br>• Cloud Security Posture Management (CSPM)<br>• Data protection & encryption<br>• Security operations & incident response<br><br><strong>Tools:</strong> Microsoft Sentinel, Defender for Cloud, AWS GuardDuty, Security Hub, HashiCorp Vault, Snyk<br><br><strong>Results:</strong> 73% fewer security incidents | 80% faster compliance audits<br><br><strong>Timeline:</strong> SOC 2 Type I: 3-6 months | SOC 2 Type II: 9-12 months<br><br><a href="/services/security-compliance">Learn more →</a>' },

    // Backup & DR
    { keywords: ['backup', 'disaster recovery', 'business continuity', 'failover', 'rto', 'rpo', 'dr plan'],
      response: '<strong>Enterprise Disaster Recovery & Business Continuity</strong><br><br>We design comprehensive DR solutions to keep your business running no matter what.<br><br><strong>What\'s included:</strong><br>• Automated cloud backup (daily/policy-driven)<br>• Geo-redundant storage & replication<br>• Automated failover orchestration<br>• Immutable & air-gapped backups (ransomware-resistant)<br>• Business continuity planning (BCP)<br>• Regular DR testing & validation<br><br><strong>Tools:</strong> Azure Site Recovery, AWS CloudEndure, GCP Backup & DR, Terraform<br><br><strong>Results:</strong> &lt;15 minute RTO | $5,600/min of downtime avoided | 100% audit readiness<br><br><a href="/services/backup-disaster-recovery">Learn more →</a>' },

    // AI & Machine Learning
    { keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'nlp', 'llm', 'openai', 'predictive', 'generative ai', 'rag', 'chatbot development'],
      response: '<strong>Enterprise AI & Machine Learning Solutions</strong><br><br>We build production-ready AI solutions — from intelligent chatbots to predictive analytics and custom ML models.<br><br><strong>What\'s included:</strong><br>• Intelligent chatbots & virtual agents (LLM + RAG)<br>• Predictive analytics & forecasting<br>• Custom ML model development<br>• Natural Language Processing (NLP)<br>• MLOps & model lifecycle management<br>• Generative AI & LLM applications<br><br><strong>Tools:</strong> Azure OpenAI, AWS Bedrock, PyTorch, TensorFlow, LangChain, Vertex AI, SageMaker<br><br><strong>Results:</strong> 40-60% customer service cost reduction | 3-5x ROI in 18-24 months<br><br><strong>Timeline:</strong> 4-16 weeks depending on complexity<br><br><a href="/services/ai-machine-learning">Learn more →</a>' },

    // Cloud Strategy
    { keywords: ['cloud strategy', 'advisory', 'consulting', 'roadmap', 'cloud adoption', 'tco', 'total cost of ownership', 'cloud readiness'],
      response: '<strong>Strategic Cloud Consulting & Advisory</strong><br><br>We help you build a clear, actionable cloud strategy aligned to your business goals.<br><br><strong>What\'s included:</strong><br>• Cloud readiness assessment<br>• 12-24 month technology roadmap<br>• Total cost of ownership (TCO) analysis<br>• Platform & vendor selection (vendor-neutral)<br>• Cloud operating model design<br>• Skills & organisation assessment<br><br><strong>Results:</strong> 2.5x higher cloud ROI | 40% reduced implementation risk | 30% lower long-term costs<br><br><strong>Timeline:</strong> 4-12 weeks<br><br><a href="/services/cloud-strategy">Learn more →</a>' },

    // Web Development
    { keywords: ['web development', 'website', 'wordpress', 'next.js', 'nextjs', 'react', 'web app', 'web application', 'hosting', 'full stack', 'full-stack'],
      response: '<strong>Full-Stack Web Development & Cloud Hosting</strong><br><br>We build high-performance websites and web applications deployed on enterprise cloud infrastructure.<br><br><strong>What\'s included:</strong><br>• Custom website design & development<br>• WordPress development & cloud hosting<br>• Full-stack web applications (React, Next.js, Node.js)<br>• Cloud-native hosting with CDN & SSL<br>• CI/CD & DevOps for web<br>• Performance optimisation & SEO<br><br><strong>Tech:</strong> React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, Tailwind CSS<br><br><strong>Results:</strong> 70% higher conversion rates | 99.9%+ uptime | 53% mobile traffic captured<br><br><strong>Timeline:</strong> 4-20 weeks<br><br><a href="/services/web-development">Learn more →</a>' },

    // ═══ PLATFORMS ═══

    // Azure
    { keywords: ['azure', 'microsoft cloud', 'microsoft azure'],
      response: '<strong>Microsoft Azure Expertise</strong><br><br>We\'re a Microsoft Azure partner with deep expertise across the Azure ecosystem.<br><br><strong>Key capabilities:</strong><br>• Azure Infrastructure & Networking (VMs, AKS, App Services)<br>• Azure AI & ML (Azure OpenAI, Cognitive Services)<br>• Azure DevOps & CI/CD Pipelines<br>• Azure Security (Entra ID, Defender, Sentinel)<br>• Azure Data & Analytics (Synapse, Cosmos DB, Power BI)<br>• Azure Migration & Hybrid Cloud (Arc, Stack HCI)<br><br><strong>Certifications:</strong> AZ-305, AZ-400, AZ-500, AZ-104, AZ-204, AI-102, DP-203, DP-600, SC-200<br><br><strong>Case Study:</strong> UK Fintech — 99.99% uptime, 62% cost reduction, PCI-DSS in 90 days<br><br><a href="/platforms/azure">Explore Azure services →</a>' },

    // AWS
    { keywords: ['aws', 'amazon web services', 'amazon cloud'],
      response: '<strong>Amazon Web Services (AWS) Expertise</strong><br><br>We deliver enterprise-grade solutions on the world\'s most comprehensive cloud platform.<br><br><strong>Key capabilities:</strong><br>• AWS Compute & Networking (EC2, EKS, Lambda, Fargate)<br>• AWS AI & ML (SageMaker, Bedrock, Comprehend, Lex)<br>• AWS DevOps & CI/CD (CodePipeline, Terraform, GitHub Actions)<br>• AWS Security (Security Hub, GuardDuty, WAF, Shield)<br>• AWS Data & Analytics (S3, Redshift, Glue, Kinesis, QuickSight)<br>• AWS Migration (Migration Hub, DMS, CloudEndure)<br><br><strong>Certifications:</strong> Solutions Architect Pro, DevOps Engineer Pro, Security Specialty, ML Specialty<br><br><strong>Case Study:</strong> UK Healthcare — 100x patient scale, 47% cost reduction, NHS DSPT compliant<br><br><a href="/platforms/aws">Explore AWS services →</a>' },

    // GCP
    { keywords: ['gcp', 'google cloud', 'google cloud platform'],
      response: '<strong>Google Cloud Platform (GCP) Expertise</strong><br><br>We build data-intensive and AI-first solutions on Google Cloud.<br><br><strong>Key capabilities:</strong><br>• GKE & Anthos (Kubernetes orchestration)<br>• BigQuery & Data Warehousing<br>• Vertex AI & Gemini (ML/AI)<br>• Cloud Run & Serverless<br>• Chronicle Security & Cloud Armor<br>• Dataflow & real-time data pipelines<br><br><strong>Certifications:</strong> Professional Cloud Architect, DevOps Engineer, Security Engineer, Data Engineer, ML Engineer<br><br><strong>Case Study:</strong> UK Streaming — 98% less buffering, 34% more watch time, 5PB+ monthly data<br><br><a href="/platforms/gcp">Explore GCP services →</a>' },

    // Alibaba Cloud
    { keywords: ['alibaba', 'alibaba cloud', 'china', 'cross-border', 'uk-china'],
      response: '<strong>Alibaba Cloud — UK-China Solutions</strong><br><br>We specialise in cross-border e-commerce and UK-China digital operations on Alibaba Cloud.<br><br><strong>Key capabilities:</strong><br>• ECS Compute & Container Service (ACK)<br>• MaxCompute & DataWorks (big data)<br>• PAI Machine Learning Platform<br>• CDN & DCDN for China delivery<br>• ICP Filing & China Compliance<br>• Cloud Enterprise Network (cross-region)<br><br><strong>Certifications:</strong> Alibaba Cloud Certified Professional — Cloud Computing, Big Data, Security, Networking<br><br><strong>Case Study:</strong> UK Luxury Brand — 97% faster page loads in China, 340% revenue growth Year 1<br><br><a href="/platforms/alibaba-cloud">Explore Alibaba Cloud services →</a>' },

    // ═══ PRICING ═══
    { keywords: ['pricing', 'price', 'how much', 'cost', 'plan', 'starter', 'professional', 'enterprise', 'package', 'quote', 'budget'],
      response: '<strong>Our Pricing Plans</strong><br><br><strong>Starter — £3,999/month</strong><br>• Single cloud platform, basic monitoring<br>• 8/5 email support, up to 10 managed resources<br>• Monthly reviews, 99.9% SLA<br><br><strong>Professional — £9,999/month</strong> (Most Popular)<br>• Multi-cloud support (2+ platforms)<br>• 24/7 priority support, AI/ML integration<br>• CI/CD pipelines, GDPR & SOC 2 compliance<br>• Up to 50 resources, dedicated account manager<br>• 99.95% SLA<br><br><strong>Enterprise — Custom Pricing</strong><br>• Dedicated cloud architect, custom AI/ML<br>• Full compliance (HIPAA, PCI-DSS, ISO 27001)<br>• 24/7 dedicated team, 99.99% SLA<br>• Unlimited resources, on-site consulting<br><br><strong>Add-ons:</strong> Security Audit £2,500 | Migration Assessment £1,500 | AI PoC £5,000<br><br>15% discount on annual billing. <a href="/pricing">See full pricing →</a>' },

    // ═══ ABOUT / COMPANY ═══
    { keywords: ['about', 'company', 'who are you', 'totalcloudai', 'what do you do'],
      response: '<strong>About TotalCloudAI</strong><br><br>TotalCloudAI Limited is a UK-based cloud consultancy registered in England & Wales. We help businesses modernise with enterprise-grade cloud, AI, and security solutions.<br><br><strong>Mission:</strong> Empower businesses with cloud, AI, and security solutions that drive growth, reduce costs, and accelerate innovation.<br><br><strong>Key stats:</strong><br>• 99.99% Uptime SLA<br>• 40% Average Cost Savings<br>• 50+ Enterprise Projects delivered<br>• 24/7 Expert Support<br><br><strong>Core values:</strong> Innovation First | Customer-Centric | Security by Design | Transparent Partnership<br><br><a href="/about">Read our full story →</a>' },

    // Team
    { keywords: ['team', 'people', 'staff', 'who works', 'architect', 'engineer', 'founder', 'director'],
      response: '<strong>Our Team</strong><br><br>• <strong>Sanghamitra Sethi, PhD</strong> — Founder & Director. 10+ years in materials science research, leads strategy & partnerships.<br>• <strong>Managobinda Sethi</strong> — Cloud & AI Strategy Advisor. ~20 years in cloud transformation. Azure Solutions Architect Expert, DevOps Engineer Expert, Security Engineer Associate.<br>• <strong>Nirrlipta Padhee</strong> — Head of Marketing. 10+ years in B2B strategy & demand generation.<br>• <strong>Lohit Kumar Das</strong> — Technology Advisor. 15+ years in AI, robotics & blockchain.<br>• <strong>Balaram Dash</strong> — Finance & Compliance Advisor. 30+ years in financial planning.<br><br><a href="/team">Meet the full team →</a>' },

    // Careers
    { keywords: ['career', 'job', 'hiring', 'work for you', 'vacancy', 'join', 'open position', 'recruitment'],
      response: '<strong>Careers at TotalCloudAI</strong><br><br>We\'re always looking for talented cloud engineers, architects, and DevOps specialists to join our team.<br><br>Send your CV to <a href="mailto:careers@totalcloudai.com">careers@totalcloudai.com</a> or visit our <a href="/team">Team page</a> for more info.' },

    // Blog
    { keywords: ['blog', 'article', 'read', 'insight', 'resource'],
      response: '<strong>Our Blog & Insights</strong><br><br>We publish in-depth articles on cloud transformation, DevOps, security, and AI:<br><br>• Cloud Transformation with AI<br>• Choosing Your Cloud Model: Public, Private, or Hybrid<br>• Top Cloud Migration Mistakes to Avoid<br>• DevOps & CI/CD Best Practices<br>• Zero Trust Architecture Guide<br>• Building AI Pipelines on Azure, AWS & GCP<br><br><a href="/blog">Read all articles →</a>' },

    // Certifications
    { keywords: ['certification', 'certified', 'qualification', 'accreditation', 'partner'],
      response: '<strong>Our Certifications</strong><br><br><strong>Microsoft Azure:</strong> AZ-305, AZ-400, AZ-500, AZ-104, AZ-204, AZ-700, AI-102, DP-203, DP-600, SC-200<br><br><strong>AWS:</strong> Solutions Architect Pro, DevOps Engineer Pro, Security Specialty, ML Specialty, Data Analytics Specialty<br><br><strong>GCP:</strong> Professional Cloud Architect, DevOps Engineer, Security Engineer, Data Engineer, ML Engineer<br><br><strong>Alibaba:</strong> Cloud Computing, Big Data, Security, Networking<br><br><a href="/about">Learn more about our expertise →</a>' },

    // Services overview
    { keywords: ['services', 'what do you offer', 'our services', 'all services', 'service list'],
      response: '<strong>Our 9 Core Services</strong><br><br>1. <a href="/services/cloud-infrastructure">Cloud Infrastructure (IaaS)</a><br>2. <a href="/services/managed-cloud">Managed Cloud Services (24/7)</a><br>3. <a href="/services/cloud-migration">Cloud Migration</a><br>4. <a href="/services/devops-automation">DevOps & CI/CD</a><br>5. <a href="/services/security-compliance">Security & Compliance</a><br>6. <a href="/services/backup-disaster-recovery">Backup & Disaster Recovery</a><br>7. <a href="/services/ai-machine-learning">AI & Machine Learning</a><br>8. <a href="/services/cloud-strategy">Cloud Strategy & Advisory</a><br>9. <a href="/services/web-development">Web Development & Hosting</a><br><br>We cover Azure, AWS, GCP & Alibaba Cloud. <a href="/services">Explore all →</a>' },

    // Platforms overview
    { keywords: ['platforms', 'cloud providers', 'which cloud', 'multi-cloud', 'multicloud'],
      response: '<strong>Cloud Platforms We Work With</strong><br><br>• <a href="/platforms/azure">Microsoft Azure</a> — Our primary platform. Deep expertise in Azure infra, AI, DevOps & security.<br>• <a href="/platforms/aws">Amazon Web Services</a> — Enterprise solutions with EC2, EKS, Lambda, SageMaker & more.<br>• <a href="/platforms/gcp">Google Cloud Platform</a> — Data & AI-first with BigQuery, Vertex AI, GKE & Cloud Run.<br>• <a href="/platforms/alibaba-cloud">Alibaba Cloud</a> — UK-China cross-border solutions.<br><br>We\'re vendor-neutral and help you choose the right platform for your needs. <a href="/platforms">Compare platforms →</a>' },

    // ═══ SPECIFIC TECHNOLOGIES ═══
    { keywords: ['kubernetes', 'k8s', 'aks', 'eks', 'gke', 'container'],
      response: '<strong>Kubernetes & Container Orchestration</strong><br><br>We deploy and manage production Kubernetes clusters across all major clouds:<br><br>• <strong>Azure AKS</strong> — multi-node pools, KEDA autoscaling, Azure CNI<br>• <strong>AWS EKS</strong> — Fargate integration, managed node groups<br>• <strong>GCP GKE</strong> — Autopilot, Anthos for hybrid/multi-cloud<br><br>We implement GitOps with ArgoCD, Helm charts, service meshes (Istio/Linkerd), and full observability.<br><br><a href="/services/devops-automation">Learn more →</a>' },

    { keywords: ['terraform', 'infrastructure as code', 'iac', 'bicep', 'pulumi', 'cloudformation'],
      response: '<strong>Infrastructure as Code (IaC)</strong><br><br>We manage all infrastructure through code for consistency, repeatability, and version control:<br><br>• <strong>Terraform</strong> — multi-cloud standard, modules, state management<br>• <strong>Bicep</strong> — Azure-native IaC<br>• <strong>Pulumi</strong> — TypeScript/Python-based IaC<br>• <strong>CloudFormation</strong> — AWS-native IaC<br><br>All deployments are version-controlled, peer-reviewed, and deployed via CI/CD pipelines.<br><br><a href="/services/devops-automation">Learn more →</a>' },

    { keywords: ['serverless', 'lambda', 'functions', 'cloud functions', 'azure functions'],
      response: '<strong>Serverless Architecture</strong><br><br>We build event-driven, pay-per-use serverless applications:<br><br>• <strong>AWS Lambda</strong> + API Gateway + Step Functions<br>• <strong>Azure Functions</strong> + Event Grid + Durable Functions<br>• <strong>GCP Cloud Functions</strong> + Cloud Run + Eventarc<br><br>Ideal for APIs, data processing, scheduled tasks, and event-driven workflows. Zero server management, auto-scaling, and pay only for what you use.<br><br><a href="/services/cloud-infrastructure">Learn more →</a>' },

    { keywords: ['data', 'database', 'analytics', 'bigquery', 'synapse', 'redshift', 'data lake', 'data warehouse'],
      response: '<strong>Data & Analytics Solutions</strong><br><br>We build modern data platforms for analytics, reporting, and AI:<br><br>• <strong>Azure:</strong> Synapse Analytics, Cosmos DB, Data Factory, Power BI<br>• <strong>AWS:</strong> Redshift, Glue, Athena, Kinesis, QuickSight<br>• <strong>GCP:</strong> BigQuery, Dataflow, Dataproc, Looker<br><br>From data lakes to real-time streaming pipelines and BI dashboards.<br><br><a href="/services/cloud-infrastructure">Learn more →</a>' },

    // ═══ CASE STUDIES ═══
    { keywords: ['case study', 'case studies', 'portfolio', 'client', 'project', 'example', 'success story', 'testimonial', 'reference'],
      response: '<strong>Client Success Stories</strong><br><br>• <strong>UK Fintech (Azure):</strong> 99.99% uptime, 62% cost reduction, PCI-DSS in 90 days, 15x faster deployments<br>• <strong>UK Healthcare (AWS):</strong> 100x patient capacity, 47% cost reduction, &lt;50ms latency, NHS DSPT compliant<br>• <strong>UK Streaming (GCP):</strong> 98% less buffering, 34% more watch time, 5PB+ monthly data<br>• <strong>UK Luxury Brand (Alibaba):</strong> 97% faster page loads in China, 340% revenue growth<br><br><em>"TotalCloudAI reduced our cloud costs by 45% while improving reliability."</em> — Dr Sahdev Swain, SJSUK<br><br><a href="/about">Read more on our About page →</a>' },

    // Free Assessment
    { keywords: ['free', 'assessment', 'consultation', 'demo', 'discovery', 'trial'],
      response: '<strong>Free Cloud Assessment</strong><br><br>We offer a complimentary cloud assessment to evaluate your current infrastructure, identify opportunities for improvement, and recommend next steps.<br><br><strong>What you get:</strong><br>• Infrastructure audit & cost analysis<br>• Security posture review<br>• Migration readiness assessment<br>• Personalised recommendations report<br><br>No obligation — just expert insight into your cloud potential.<br><br><a href="/contact">Book your free assessment →</a><br>' + CONTACT_BLOCK },

    // ═══ BROCHURES / PDFs ═══
    { keywords: ['pdf', 'brochure', 'download', 'document', 'share', 'send me', 'architecture doc', 'datasheet', 'whitepaper', 'proposal'],
      response: '<strong>Downloadable Brochures</strong><br><br>Here are our brochures — you can save them as PDF:<br><br>• <a href="/brochures/services-overview" target="_blank"><strong>Services Overview</strong></a> — All 9 cloud services at a glance<br>• <a href="/brochures/cloud-architecture" target="_blank"><strong>Architecture & Solutions</strong></a> — Reference architectures for Azure, AWS, GCP & Alibaba<br>• <a href="/brochures/company-profile" target="_blank"><strong>Company Profile</strong></a> — About us, team & certifications<br><br>Need a custom proposal? Contact us:<br>' + CONTACT_BLOCK },

    // ═══ CONTACT ═══
    { keywords: ['contact', 'reach', 'speak', 'talk', 'get in touch', 'enquiry', 'inquiry'],
      response: '<strong>Contact TotalCloudAI</strong><br><br>We\'d love to hear from you! Here\'s how to reach us:<br>' + CONTACT_BLOCK + '<br>We typically respond within 24 hours. For urgent matters, call or WhatsApp us directly.<br><br><a href="/contact">Visit our Contact page →</a>' },

    { keywords: ['phone', 'call', 'call us', 'ring', 'telephone', 'number'],
      response: 'You can call us at <strong><a href="' + PHONE_LINK + '">' + PHONE + '</a></strong>. We\'re available during UK business hours, or leave a voicemail and we\'ll get back to you within 24 hours.<br>' + CONTACT_BLOCK },

    { keywords: ['whatsapp', 'wa', 'message us', 'text'],
      response: 'Chat with us on WhatsApp! <strong><a href="' + WHATSAPP + '" target="_blank">Click here to WhatsApp us →</a></strong><br><br>Our WhatsApp number is ' + PHONE + '. We typically reply within a few hours.<br>' + CONTACT_BLOCK },

    { keywords: ['email', 'mail', 'email address'],
      response: 'Email us at <strong><a href="mailto:' + EMAIL + '">' + EMAIL + '</a></strong>. We respond to all enquiries within 24 hours.<br>' + CONTACT_BLOCK },

    { keywords: ['address', 'location', 'office', 'where are you', 'based', 'headquarters', 'visit'],
      response: '<strong>Our Office</strong><br><br>TotalCloudAI Limited<br>' + ADDRESS + '<br><br>Registered in England & Wales.<br>' + CONTACT_BLOCK },

    // ═══ SUPPORT / SLA ═══
    { keywords: ['support', 'help', 'sla', 'uptime', 'response time', 'incident'],
      response: '<strong>Support & SLA</strong><br><br><strong>Starter:</strong> 8/5 email support, 99.9% SLA<br><strong>Professional:</strong> 24/7 priority support, 99.95% SLA, dedicated account manager<br><strong>Enterprise:</strong> 24/7 dedicated team, 99.99% SLA, on-site consulting<br><br><strong>Incident SLAs (Professional+):</strong><br>• P1 Critical: 15 min acknowledgement, 1 hr resolution<br>• P2 High: 30 min acknowledgement, 4 hr resolution<br>• P3 Medium: 2 hr acknowledgement, next business day<br><br><a href="/pricing">See full pricing & SLA details →</a>' }
  ];

  // ── Unmatched counter for human fallback ──
  var unmatchedCount = 0;

  fab.addEventListener('click', function() {
    win.classList.toggle('open');
    fab.classList.toggle('open');
  });

  function addMsg(text, type) {
    var div = document.createElement('div');
    div.className = 'chat-msg ' + type;
    div.innerHTML = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function showTyping() {
    var div = document.createElement('div');
    div.className = 'chat-msg bot';
    div.id = 'chatTyping';
    div.innerHTML = '<div class="chat-typing"><span></span><span></span><span></span></div>';
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function removeTyping() {
    var el = document.getElementById('chatTyping');
    if (el) el.remove();
  }

  function respond(userText) {
    var lower = userText.toLowerCase();
    var response = '';

    // ── Greeting check ──
    if (/^(hi|hello|hey|good morning|good afternoon|good evening|howdy)\b/.test(lower)) {
      response = 'Hello! Welcome to TotalCloudAI. I can help you with:<br><br>'
        + '<div class="chat-quick-btns">'
        + '<button class="chat-quick-btn">Our Services</button>'
        + '<button class="chat-quick-btn">Platforms</button>'
        + '<button class="chat-quick-btn">Pricing</button>'
        + '<button class="chat-quick-btn">Contact Us</button>'
        + '<button class="chat-quick-btn">Download Brochure</button>'
        + '</div>';
      unmatchedCount = 0;
      showTyping();
      setTimeout(function() { removeTyping(); addMsg(response, 'bot'); }, 600);
      return;
    }

    // ── Thank you check ──
    if (/thank|cheers|appreciate|great|awesome|perfect/.test(lower)) {
      response = 'You\'re welcome! Happy to help. If you need anything else, just ask. You can also reach our team directly:<br>' + CONTACT_BLOCK;
      unmatchedCount = 0;
      showTyping();
      setTimeout(function() { removeTyping(); addMsg(response, 'bot'); }, 600);
      return;
    }

    // ── Weighted keyword matching ──
    var bestScore = 0;
    var bestResponse = '';

    for (var i = 0; i < qaDatabase.length; i++) {
      var entry = qaDatabase[i];
      var score = 0;
      for (var k = 0; k < entry.keywords.length; k++) {
        if (lower.indexOf(entry.keywords[k]) !== -1) {
          // Longer keyword = higher weight (more specific match)
          score += entry.keywords[k].length;
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestResponse = entry.response;
      }
    }

    if (bestScore > 0) {
      response = bestResponse;
      unmatchedCount = 0;
    } else {
      unmatchedCount++;
      if (unmatchedCount >= 3) {
        // After 3 unmatched messages, suggest human contact
        response = 'I might not have the answer to that specific question. Let me connect you with our team for a personalised response:<br>' + CONTACT_BLOCK
          + '<br>Or try asking about: <strong>Services</strong>, <strong>Pricing</strong>, <strong>Azure</strong>, <strong>AWS</strong>, <strong>GCP</strong>, <strong>Security</strong>, <strong>AI/ML</strong>, or <strong>DevOps</strong>.';
        unmatchedCount = 0;
      } else {
        response = 'I\'d be happy to help! Try asking about:<br><br>'
          + '<div class="chat-quick-btns">'
          + '<button class="chat-quick-btn">Our Services</button>'
          + '<button class="chat-quick-btn">Cloud Migration</button>'
          + '<button class="chat-quick-btn">DevOps</button>'
          + '<button class="chat-quick-btn">Security</button>'
          + '<button class="chat-quick-btn">AI & ML</button>'
          + '<button class="chat-quick-btn">Pricing</button>'
          + '<button class="chat-quick-btn">Contact Us</button>'
          + '</div>';
      }
    }

    showTyping();
    setTimeout(function() {
      removeTyping();
      addMsg(response, 'bot');
    }, 800 + Math.random() * 600);
  }

  // Quick button handler
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('chat-quick-btn')) {
      var q = e.target.textContent;
      addMsg(q, 'user');
      // Remove this set of quick buttons
      var btnContainer = e.target.parentElement;
      if (btnContainer) btnContainer.remove();
      respond(q);
    }
  });

  // Send message
  function sendMsg() {
    var val = input.value.trim();
    if (!val) return;
    addMsg(val, 'user');
    input.value = '';
    respond(val);
  }

  document.getElementById('chatSend').addEventListener('click', sendMsg);
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') sendMsg();
  });
})();

// ── Tilt effect on hero stat cards ──
document.querySelectorAll('.hero-stat').forEach(function(card) {
  card.addEventListener('mousemove', function(e) {
    var rect = card.getBoundingClientRect();
    var x = (e.clientX - rect.left) / rect.width - 0.5;
    var y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = 'translateY(-4px) rotateX(' + (-y * 8) + 'deg) rotateY(' + (x * 8) + 'deg)';
  });
  card.addEventListener('mouseleave', function() {
    card.style.transform = '';
  });
});
