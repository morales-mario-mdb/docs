import type { TocItem } from "../types";

const tocData: TocItem[] = [
  {
    label: "Atlas Kubernetes Operator",
    contentSite: "atlas-operator",
    collapsible: true,
    items: [
      {
        label: "Get Started",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/ak8so-get-started",
        collapsible: true,
        items: [
          {
            label: "Quick Start",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-quick-start",
          },
          {
            label: "Helm Charts Quick Start",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-quick-start-helm",
          },
          {
            label: "Atlas for Government",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-for-gov",
          },
          {
            label: "Compatibility",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-compatibility",
          },
        ],
      },
      {
        label: "Atlas Access",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/configure-ak8so-access-to-atlas",
        collapsible: true,
        items: [
          {
            label: "Secret Storage",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-secret-storage",
          },
          {
            label: "Network Peering",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-network-peering",
          },
          {
            label: "Private Endpoints",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-private-link",
            collapsible: true,
            items: [
              {
                label: "Dedicated",
                contentSite: "atlas-operator",
                url: "/docs/atlas/operator/:version/ak8so-private-link-dedicated",
              },
              {
                label: "Serverless",
                contentSite: "atlas-operator",
                url: "/docs/atlas/operator/:version/ak8so-private-link-serverless",
              },
              {
                label: "Federated",
                contentSite: "atlas-operator",
                url: "/docs/atlas/operator/:version/ak8so-private-link-datafederation",
              },
            ],
          },
          {
            label: "Cloud Provider Integrations",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-unified-access",
          },
          {
            label: "Custom Database Roles",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-configure-custom-database-roles",
          },
          {
            label: "X.509",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-x509",
          },
          {
            label: "Encrypt Data",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-encryption-at-rest-customer-keys",
          },
          {
            label: "Federated Authentication",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-configure-federated-authentication",
          },
          {
            label: "Teams",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-configure-teams",
          },
        ],
      },
      {
        label: "Import Projects",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/ak8so-import-projects",
      },
      {
        label: "Data Federation",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/ak8so-set-up-data-federation",
      },
      {
        label: "Atlas Cluster Backup",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/ak8so-back-up-deployment",
      },
      {
        label: "Monitor Deployments",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/ak8so-monitoring",
        collapsible: true,
        items: [
          {
            label: "Project Alerts",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-alert-configurations",
          },
          {
            label: "Audit Logs",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-configure-audit-logs",
          },
          {
            label: "Third-Party Services",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-integrate-third-party",
          },
        ],
      },
      {
        label: "Custom Resources",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/custom-resources",
        collapsible: true,
        items: [
          {
            label: "AtlasProject",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasproject-custom-resource",
          },
          {
            label: "AtlasDeployment",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasdeployment-custom-resource",
          },
          {
            label: "AtlasDatabaseUser",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasdatabaseuser-custom-resource",
          },
          {
            label: "AtlasBackupPolicy",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasbackuppolicy-custom-resource",
          },
          {
            label: "AtlasBackupSchedule",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasbackupschedule-custom-resource",
          },
          {
            label: "AtlasTeam",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasteam-custom-resource",
          },
          {
            label: "AtlasDataFederation",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasdatafederation-custom-resource",
          },
          {
            label: "AtlasFederatedAuth",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasfederatedauth-custom-resource",
          },
        ],
      },
      {
        label: "Production Notes",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/production-notes",
      },
      {
        label: "Changelog",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/ak8so-changelog",
      },
      {
        label: "Upgrade from v1.x to v2.x",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/upgrade-ako-v1-to-v2",
      },
      {
        label: "Overview",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/",
      },
      {
        label: "Get Started",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/ak8so-get-started",
        collapsible: true,
        items: [
          {
            label: "Quick Start",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-quick-start",
          },
          {
            label: "Verify Package Integrity",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-verify-packages",
          },
          {
            label: "Helm Charts Quick Start",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-quick-start-helm",
          },
          {
            label: "Atlas for Government",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-for-gov",
          },
          {
            label: "Independent Custom Resource Definitions",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-independent-crd",
          },
          {
            label: "Migrate Parameters to CRDs",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/migrate-parameter-to-resource",
          },
          {
            label: "Compatibility",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-compatibility",
          },
        ],
      },
      {
        label: "Atlas Access",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/configure-ak8so-access-to-atlas",
        collapsible: true,
        items: [
          {
            label: "Secret Storage",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-secret-storage",
          },
          {
            label: "Network Peering",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-network-peering",
          },
          {
            label: "Private Endpoints",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-private-link",
            collapsible: true,
            items: [
              {
                label: "Dedicated",
                contentSite: "atlas-operator",
                url: "/docs/atlas/operator/:version/ak8so-private-link-dedicated",
              },
              {
                label: "Serverless",
                contentSite: "atlas-operator",
                url: "/docs/atlas/operator/:version/ak8so-private-link-serverless",
              },
              {
                label: "Federated",
                contentSite: "atlas-operator",
                url: "/docs/atlas/operator/:version/ak8so-private-link-datafederation",
              },
            ],
          },
          {
            label: "Cloud Provider Integrations",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-unified-access",
          },
          {
            label: "X.509",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-x509",
          },
          {
            label: "Encrypt Data",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-encryption-at-rest-customer-keys",
          },
          {
            label: "Federated Authentication",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-configure-federated-authentication",
          },
          {
            label: "Teams",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-configure-teams",
          },
        ],
      },
      {
        label: "Import Projects",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/ak8so-import-projects",
      },
      {
        label: "Data Federation",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/ak8so-set-up-data-federation",
      },
      {
        label: "Atlas Search",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/ak8so-create-atlas-search-index",
      },
      {
        label: "Atlas Vector Search",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/ak8so-create-vector-search-index",
      },
      {
        label: "Atlas Stream Processing",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/ak8so-stream-processing",
      },
      {
        label: "Atlas Cluster Backup",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/ak8so-back-up-deployment",
        collapsible: true,
        items: [
          {
            label: "Compliance Policies",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-bcp",
          },
        ],
      },
      {
        label: "Monitor Deployments",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/ak8so-monitoring",
        collapsible: true,
        items: [
          {
            label: "Project Alerts",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-alert-configurations",
          },
          {
            label: "Audit Logs",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-configure-audit-logs",
          },
          {
            label: "Third-Party Services",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/ak8so-integrate-third-party",
          },
        ],
      },
      {
        label: "Custom Resources",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/custom-resources",
        collapsible: true,
        items: [
          {
            label: "AtlasProject",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasproject-custom-resource",
          },
          {
            label: "AtlasDeployment",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasdeployment-custom-resource",
          },
          {
            label: "AtlasDatabaseUser",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasdatabaseuser-custom-resource",
          },
          {
            label: "AtlasCustomRole",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlascustomrole-custom-resource",
          },
          {
            label: "AtlasBackupPolicy",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasbackuppolicy-custom-resource",
          },
          {
            label: "AtlasBackupSchedule",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasbackupschedule-custom-resource",
          },
          {
            label: "AtlasBackupCompliancePolicy",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/bcp-custom-resource",
          },
          {
            label: "AtlasIPAccessList",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasipaccesslist-custom-resource",
          },
          {
            label: "AtlasPrivateEndpoint",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasprivateendpoint-custom-resource",
          },
          {
            label: "AtlasTeam",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasteam-custom-resource",
          },
          {
            label: "AtlasDataFederation",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasdatafederation-custom-resource",
          },
          {
            label: "AtlasSearchIndexConfig",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlassearchindexconfig-custom-resource",
          },
          {
            label: "AtlasStreamConnection",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasstreamconnection-custom-resource",
          },
          {
            label: "AtlasStreamInstance",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasstreaminstance-custom-resource",
          },
          {
            label: "AtlasFederatedAuth",
            contentSite: "atlas-operator",
            url: "/docs/atlas/operator/:version/atlasfederatedauth-custom-resource",
          },
        ],
      },
      {
        label: "Production Notes",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/production-notes",
      },
      {
        label: "Changelog",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/ak8so-changelog",
      },
      {
        label: "Upgrade",
        contentSite: "atlas-operator",
        url: "/docs/atlas/operator/:version/upgrade-ako-v1-to-v2",
      },
    ],
  },
];

export default tocData;
