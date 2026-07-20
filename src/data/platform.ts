//
export const navItems = [
  { label: "Platform", href: "/platform/" },
  { label: "Architecture", href: "/architecture/" },
  { label: "Demos", href: "/demos/" },
  { label: "Blog", href: "/blog/" },
  { label: "About", href: "/about/" },
  { label: "Resume", href: "/resume/" },
];

export const platformOverview = [
  {
    title: "Kubernetes Cluster",
    status: "operational",
    rows: [
      ["runtime", "kubernetes"],
      ["deployment", "gitops"],
      ["source", "homelab-infra"],
    ],
  },
  {
    title: "Nodes",
    status: "ready",
    rows: [
      ["control plane", "managed"],
      ["workers", "homelab"],
      ["provisioning", "ansible"],
    ],
  },
  {
    title: "Running Applications",
    status: "serving",
    rows: [
      ["entrypoint", "gateway api"],
      ["exposure", "cloudflare tunnel"],
      ["telemetry", "otel enabled"],
    ],
  },
  {
    title: "GitOps Status",
    status: "synced",
    rows: [
      ["controller", "argocd"],
      ["manifests", "helm"],
      ["drift", "monitored"],
    ],
  },
  {
    title: "Monitoring Status",
    status: "collecting",
    rows: [
      ["metrics", "prometheus"],
      ["logs", "loki"],
      ["traces", "tempo"],
    ],
  },
  {
    title: "Platform Health",
    status: "nominal",
    rows: [
      ["dashboards", "public"],
      ["alerts", "configured"],
      ["identity", "oidc"],
    ],
  },
  {
    title: "Public Demos",
    status: "available",
    rows: [
      ["backend api", "online"],
      ["frontend telemetry", "online"],
      ["analytics", "public"],
    ],
  },
  {
    title: "Infrastructure Components",
    status: "managed",
    rows: [
      ["cloud", "aws"],
      ["edge", "cloudflare"],
      ["iac", "terraform"],
    ],
  },
];

export const capabilities = [
  {
    title: "Infrastructure",
    description:
      "Cluster, cloud and node provisioning primitives for a production-style homelab platform.",
    items: [
      "Kubernetes",
      "Terraform",
      "AWS",
      "Cloudflare",
      "Ansible",
      "GitHub Actions",
    ],
  },
  {
    title: "Networking",
    description:
      "Ingress, edge routing, DNS and workload exposure patterns for public services.",
    items: ["Gateway API", "Cloudflare Tunnel", "DNS", "Load Balancing"],
  },
  {
    title: "Observability",
    description:
      "Metrics, logs, traces and dashboarding pipelines for application and platform visibility.",
    items: ["Grafana", "Prometheus", "Loki", "Tempo", "OpenTelemetry", "Alloy"],
  },
  {
    title: "Security",
    description:
      "Identity, authorization and secret delivery controls for platform workloads.",
    items: ["Authentik", "OIDC", "RBAC", "External Secrets"],
  },
  {
    title: "Storage",
    description:
      "Persistent application data, database operations and recovery-oriented platform services.",
    items: ["CloudNativePG", "Persistent Volumes", "Backups"],
  },
  {
    title: "Automation",
    description:
      "Declarative delivery and reconciliation from repositories to running infrastructure.",
    items: ["GitOps", "ArgoCD", "Helm", "Terraform"],
  },
];

export const demos = [
  {
    name: "Backend API Demo",
    type: "public workload",
    status: "available",
    description:
      "A TypeScript backend service deployed to Kubernetes with observability hooks and public dashboards.",
    stack: ["TypeScript", "Kubernetes", "OpenTelemetry", "Grafana"],
    architecture: "client -> gateway -> service -> telemetry pipeline",
    links: [
      {
        label: "Source",
        href: "https://github.com/rubenspensky-homelab/ts-backend-demo",
      },
      { label: "Live Demo", href: "https://ts-backend-demo.rubenspensky.com/" },
      {
        label: "Dashboard",
        href: "https://grafana.rubenspensky.com/public-dashboards/670e197c902a4c179d9e2a92812b8f07",
      },
    ],
  },
  {
    name: "Frontend Telemetry Demo",
    type: "browser workload",
    status: "available",
    description:
      "Frontend demo instrumented for analytics and platform visibility through public observability surfaces.",
    stack: ["Frontend", "Umami", "Grafana", "Kubernetes"],
    architecture: "browser -> app -> analytics -> dashboards",
    links: [
      {
        label: "Source",
        href: "https://github.com/rubenspensky-homelab/frontend-demo",
      },
      { label: "Live Demo", href: "https://ts-backend-demo.rubenspensky.com/" },
      {
        label: "Umami",
        href: "https://umami.rubenspensky.com/share/s3QkwqQShAbACHBo",
      },
      {
        label: "Dashboard",
        href: "https://grafana.rubenspensky.com/public-dashboards/df9fad9aa1c64fada6322b014557f8b4",
      },
    ],
  },
  {
    name: "Public Grafana Dashboards",
    type: "observability surface",
    status: "published",
    description:
      "Public dashboards exposing runtime signals from platform workloads and analytics pipelines.",
    stack: ["Grafana", "Prometheus", "Loki", "Tempo"],
    architecture: "workloads -> collectors -> storage -> dashboards",
    links: [
      {
        label: "Backend",
        href: "https://grafana.rubenspensky.com/public-dashboards/670e197c902a4c179d9e2a92812b8f07",
      },
      {
        label: "Analytics",
        href: "https://grafana.rubenspensky.com/public-dashboards/df9fad9aa1c64fada6322b014557f8b4",
      },
    ],
  },
  {
    name: "GitOps Infrastructure",
    type: "platform repository",
    status: "source available",
    description:
      "Kubernetes platform definitions, application delivery configuration and GitOps-managed runtime resources.",
    stack: ["Kubernetes", "ArgoCD", "Helm", "GitOps"],
    architecture: "github -> argocd -> kubernetes -> workloads",
    links: [
      {
        label: "Source",
        href: "https://github.com/rubenspensky-homelab/homelab-infra",
      },
    ],
  },
  {
    name: "External Infrastructure",
    type: "provisioning repository",
    status: "source available",
    description:
      "Terraform and Ansible automation for node setup, cloud dependencies and external infrastructure.",
    stack: ["Terraform", "Ansible", "AWS", "Cloudflare"],
    architecture: "terraform -> cloud resources -> ansible -> nodes",
    links: [
      {
        label: "Source",
        href: "https://github.com/rubenspensky-homelab/infrastructure",
      },
    ],
  },
];

export const architectureFlow = [
  "Developer",
  "GitHub",
  "GitHub Actions",
  "Terraform",
  "Cloudflare + AWS",
  "ArgoCD",
  "Kubernetes",
  "Applications",
  "Grafana / Prometheus / Loki / Tempo",
];
