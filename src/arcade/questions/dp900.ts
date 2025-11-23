// DP-900 (Microsoft Fabric Data Fundamentals) Level 1 Question Bank
// Domains (aligned to exam outline):
// 1. Core Data Concepts
// 2. Relational Data in Azure
// 3. Non-Relational Data in Azure
// 4. Analytics Workloads & Fabric

export const dp900Questions = [
  // ------------------------------------------------------
  // DOMAIN 1 — CORE DATA CONCEPTS
  // ------------------------------------------------------
  {
    id: 1,
    question: "Which term describes data that is organized into rows and columns?",
    options: [
      "Structured data",
      "Unstructured data",
      "Semi-structured data",
      "Event data",
    ],
    answer: 0,
    domain: "Core Data Concepts",
  },
  {
    id: 2,
    question: "Which characteristic best describes batch processing?",
    options: [
      "Data is processed in large groups at scheduled times",
      "Data is processed immediately as it arrives",
      "Data is always unstructured",
      "Data must come from IoT devices",
    ],
    answer: 0,
    domain: "Core Data Concepts",
  },
  {
    id: 3,
    question: "Which scenario is best suited for streaming data?",
    options: [
      "Monitoring sensor readings in real-time",
      "Running a monthly financial report",
      "Archiving old backups",
      "Uploading static reference data once per year",
    ],
    answer: 0,
    domain: "Core Data Concepts",
  },
  {
    id: 4,
    question: "Which term describes a uniquely identifiable piece of information about an entity?",
    options: [
      "Attribute",
      "Blob",
      "Shard",
      "Cluster",
    ],
    answer: 0,
    domain: "Core Data Concepts",
  },
  {
    id: 5,
    question: "Which data store is typically optimized for transactional workloads?",
    options: [
      "OLTP system",
      "OLAP system",
      "Data lake",
      "File share",
    ],
    answer: 0,
    domain: "Core Data Concepts",
  },
  {
    id: 6,
    question: "Which data store is typically optimized for analytical workloads?",
    options: [
      "OLAP system",
      "Key-value store",
      "Message queue",
      "Log file",
    ],
    answer: 0,
    domain: "Core Data Concepts",
  },
  {
    id: 7,
    question: "Which term describes combining data from multiple sources into a single, unified view?",
    options: [
      "Data integration",
      "Data masking",
      "Data compression",
      "Data encryption",
    ],
    answer: 0,
    domain: "Core Data Concepts",
  },
  {
    id: 8,
    question: "Which concept focuses on ensuring data is accurate, complete, and reliable?",
    options: [
      "Data quality",
      "Data redundancy",
      "Data obfuscation",
      "Data caching",
    ],
    answer: 0,
    domain: "Core Data Concepts",
  },
  {
    id: 9,
    question: "Which term describes data that continues to grow with time, such as logs or telemetry?",
    options: [
      "Time-series data",
      "Hierarchical data",
      "Graph data",
      "Aggregate data",
    ],
    answer: 0,
    domain: "Core Data Concepts",
  },
  {
    id: 10,
    question: "Which term describes the process of converting raw data into a usable format?",
    options: [
      "Data transformation",
      "Data deletion",
      "Data archiving",
      "Data replication",
    ],
    answer: 0,
    domain: "Core Data Concepts",
  },

  // ------------------------------------------------------
  // DOMAIN 2 — RELATIONAL DATA IN AZURE
  // ------------------------------------------------------
  {
    id: 11,
    question: "Which Azure service provides a fully managed SQL database engine?",
    options: [
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure Blob Storage",
      "Azure Files",
    ],
    answer: 0,
    domain: "Relational Data in Azure",
  },
  {
    id: 12,
    question: "Which key uniquely identifies a row in a relational table?",
    options: [
      "Primary key",
      "Foreign key",
      "Surrogate key",
      "Composite key",
    ],
    answer: 0,
    domain: "Relational Data in Azure",
  },
  {
    id: 13,
    question: "Which key in a table references a primary key in another table?",
    options: [
      "Foreign key",
      "Clustered key",
      "Unique key",
      "Candidate key",
    ],
    answer: 0,
    domain: "Relational Data in Azure",
  },
  {
    id: 14,
    question: "Which term describes organizing tables to reduce redundancy and improve integrity?",
    options: [
      "Normalization",
      "Indexing",
      "Partitioning",
      "Caching",
    ],
    answer: 0,
    domain: "Relational Data in Azure",
  },
  {
    id: 15,
    question: "Which Azure offering is best for migrating an on-premises SQL Server with minimal changes?",
    options: [
      "Azure SQL Managed Instance",
      "Azure Database for MySQL",
      "Azure Blob Storage",
      "Azure Static Web Apps",
    ],
    answer: 0,
    domain: "Relational Data in Azure",
  },
  {
    id: 16,
    question: "Which Azure service provides a PostgreSQL-compatible relational database?",
    options: [
      "Azure Database for PostgreSQL",
      "Azure SQL Edge",
      "Azure Cosmos DB for PostgreSQL API only",
      "Azure Files",
    ],
    answer: 0,
    domain: "Relational Data in Azure",
  },
  {
    id: 17,
    question: "Which SQL operation combines rows from two tables based on a related column?",
    options: [
      "JOIN",
      "GROUP BY",
      "ORDER BY",
      "DISTINCT",
    ],
    answer: 0,
    domain: "Relational Data in Azure",
  },
  {
    id: 18,
    question: "Which SQL clause filters rows returned by a query?",
    options: [
      "WHERE",
      "SELECT",
      "FROM",
      "JOIN",
    ],
    answer: 0,
    domain: "Relational Data in Azure",
  },
  {
    id: 19,
    question: "Which SQL statement is used to modify existing rows in a table?",
    options: [
      "UPDATE",
      "INSERT",
      "CREATE",
      "DROP",
    ],
    answer: 0,
    domain: "Relational Data in Azure",
  },
  {
    id: 20,
    question: "Which benefit do managed relational services like Azure SQL Database provide?",
    options: [
      "Automatic backups, updates, and built-in high availability",
      "Mandatory on-premises hardware",
      "Manual patching only",
      "No security features",
    ],
    answer: 0,
    domain: "Relational Data in Azure",
  },

  // ------------------------------------------------------
  // DOMAIN 3 — NON-RELATIONAL DATA IN AZURE
  // ------------------------------------------------------
  {
    id: 21,
    question: "Which Azure service is designed for globally distributed, multi-model NoSQL data?",
    options: [
      "Azure Cosmos DB",
      "Azure SQL Database",
      "Azure Data Factory",
      "Azure Virtual Machines",
    ],
    answer: 0,
    domain: "Non-Relational Data in Azure",
  },
  {
    id: 22,
    question: "Azure Cosmos DB supports which consistency models?",
    options: [
      "Multiple tunable consistency levels",
      "Only strong consistency",
      "Only eventual consistency",
      "No consistency guarantees",
    ],
    answer: 0,
    domain: "Non-Relational Data in Azure",
  },
  {
    id: 23,
    question: "Which workload is best suited for a key-value store?",
    options: [
      "Session state or user profile lookups",
      "Complex joins across multiple tables",
      "High-latency batch reporting",
      "Fixed-length audio streams",
    ],
    answer: 0,
    domain: "Non-Relational Data in Azure",
  },
  {
    id: 24,
    question: "Which storage type is ideal for large binary files like images and videos?",
    options: [
      "Azure Blob Storage",
      "Azure Queue Storage",
      "Azure Table Storage",
      "Azure Files only",
    ],
    answer: 0,
    domain: "Non-Relational Data in Azure",
  },
  {
    id: 25,
    question: "Which Azure service is best for storing semi-structured JSON documents?",
    options: [
      "Azure Cosmos DB with Core (SQL) API",
      "Azure Files",
      "Azure NetApp Files",
      "Azure VPN Gateway",
    ],
    answer: 0,
    domain: "Non-Relational Data in Azure",
  },
  {
    id: 26,
    question: "Which type of database is best suited for social network relationship data?",
    options: [
      "Graph database",
      "Time-series database",
      "Relational OLTP database only",
      "In-memory cache",
    ],
    answer: 0,
    domain: "Non-Relational Data in Azure",
  },
  {
    id: 27,
    question: "Which Cosmos DB API is recommended for document-style JSON data and SQL-like queries?",
    options: [
      "Core (SQL) API",
      "Table API",
      "MongoDB API",
      "Cassandra API",
    ],
    answer: 0,
    domain: "Non-Relational Data in Azure",
  },
  {
    id: 28,
    question: "Which storage option is best for large-scale, low-cost archival data?",
    options: [
      "Azure Blob Storage cool or archive tiers",
      "Premium SSD disks",
      "Azure SQL Database",
      "Azure Cache for Redis",
    ],
    answer: 0,
    domain: "Non-Relational Data in Azure",
  },
  {
    id: 29,
    question: "Which Azure storage service provides message queues for asynchronous communication?",
    options: [
      "Azure Queue Storage",
      "Azure Files",
      "Azure Data Lake Storage Gen1 only",
      "Azure Automation",
    ],
    answer: 0,
    domain: "Non-Relational Data in Azure",
  },
  {
    id: 30,
    question: "Which is a primary benefit of schema-less databases like Cosmos DB?",
    options: [
      "Flexible data model that can evolve without schema migrations",
      "Mandatory fixed-schema enforcement",
      "Requires on-premises deployment",
      "Only supports numeric data types",
    ],
    answer: 0,
    domain: "Non-Relational Data in Azure",
  },

  // ------------------------------------------------------
  // DOMAIN 4 — ANALYTICS WORKLOADS & FABRIC
  // ------------------------------------------------------
  {
    id: 31,
    question: "Which service in Microsoft Fabric unifies storage for all analytics workloads?",
    options: [
      "OneLake",
      "Azure Blob Storage",
      "Azure File Sync",
      "Key Vault",
    ],
    answer: 0,
    domain: "Analytics Workloads & Fabric",
  },
  {
    id: 32,
    question: "Which Fabric item is optimized for large-scale SQL analytics?",
    options: [
      "Warehouse",
      "Kusto Database",
      "Function App",
      "Azure Bastion",
    ],
    answer: 0,
    domain: "Analytics Workloads & Fabric",
  },
  {
    id: 33,
    question: "Which Fabric engine provides Apache Spark compute?",
    options: [
      "Data Engineering",
      "Power BI",
      "Azure DevOps",
      "App Service",
    ],
    answer: 0,
    domain: "Analytics Workloads & Fabric",
  },
  {
    id: 34,
    question: "A Lakehouse in Fabric is used for:",
    options: [
      "Combining data lake storage with warehouse-style tables",
      "Hosting Azure Virtual Machines",
      "Managing DNS zones",
      "Configuring VPN tunnels",
    ],
    answer: 0,
    domain: "Analytics Workloads & Fabric",
  },
  {
    id: 35,
    question: "Which technology underpins Fabric Lakehouse tables?",
    options: [
      "Delta Lake",
      "Text files only",
      "Fixed-width binary logs",
      "XML documents",
    ],
    answer: 0,
    domain: "Analytics Workloads & Fabric",
  },
  {
    id: 36,
    question: "Which workload in Fabric is best for building interactive dashboards?",
    options: [
      "Power BI",
      "Data Factory",
      "Real-Time Analytics only",
      "Azure Key Vault",
    ],
    answer: 0,
    domain: "Analytics Workloads & Fabric",
  },
  {
    id: 37,
    question: "Which Fabric feature allows low-code data transformation and ingestion?",
    options: [
      "Data Factory Dataflows",
      "VPN Gateway",
      "Azure Route Table",
      "Windows Admin Center",
    ],
    answer: 0,
    domain: "Analytics Workloads & Fabric",
  },
  {
    id: 38,
    question: "Real-time analytics in Fabric can be implemented using:",
    options: [
      "KQL databases and Event streaming",
      "Only batch Data Factory pipelines",
      "Azure DevOps Boards",
      "GitHub Issues",
    ],
    answer: 0,
    domain: "Analytics Workloads & Fabric",
  },
  {
    id: 39,
    question: "Semantic Models in Fabric are primarily used for:",
    options: [
      "Defining business-friendly data for reporting",
      "Storing backup archives",
      "Hosting Linux containers",
      "Managing network ACLs",
    ],
    answer: 0,
    domain: "Analytics Workloads & Fabric",
  },
  {
    id: 40,
    question: "Shortcuts in OneLake allow you to:",
    options: [
      "Reference external data without copying it",
      "Encrypt data with customer-managed keys",
      "Create new managed VNets",
      "Deploy AKS clusters automatically",
    ],
    answer: 0,
    domain: "Analytics Workloads & Fabric",
  },
];
