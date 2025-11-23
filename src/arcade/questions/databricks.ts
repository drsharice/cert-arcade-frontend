export const databricksQuestions = [
  // ------------------------------------------------------
  // DOMAIN 1 — LAKEHOUSE ARCHITECTURE
  // ------------------------------------------------------
  {
    id: 1,
    question: "What is the primary goal of the Databricks Lakehouse architecture?",
    options: [
      "Combine the reliability of data warehouses with the scale of data lakes",
      "Replace Power BI with dashboards",
      "Store only machine learning models",
      "Manage Azure Active Directory permissions",
    ],
    answer: 0,
    domain: "Lakehouse Architecture",
  },
  {
    id: 2,
    question: "Which layer is responsible for storing raw, unprocessed data?",
    options: [
      "Bronze layer",
      "Silver layer",
      "Gold layer",
      "Database layer",
    ],
    answer: 0,
    domain: "Lakehouse Architecture",
  },
  {
    id: 3,
    question: "The Gold layer is primarily used for:",
    options: [
      "Business-ready, aggregated outputs",
      "Raw ingestion",
      "Schema inference",
      "Storing checkpoint logs",
    ],
    answer: 0,
    domain: "Lakehouse Architecture",
  },
  {
    id: 4,
    question: "Which file format is most commonly used in Databricks Lakehouse?",
    options: ["Delta Lake", "XML", "Avro only", "Protobuf"],
    answer: 0,
    domain: "Lakehouse Architecture",
  },
  {
    id: 5,
    question: "A key advantage of the Lakehouse architecture is:",
    options: [
      "Unifying BI, streaming, ML, and ETL on a single platform",
      "Hosting websites",
      "Running GPU clusters only",
      "Managing PowerShell scripts",
    ],
    answer: 0,
    domain: "Lakehouse Architecture",
  },
  {
    id: 6,
    question: "Which compute environment supports SQL, Python, R, and Scala in Databricks?",
    options: [
      "Notebooks",
      "Azure Functions",
      "Docker Services",
      "GitHub Actions",
    ],
    answer: 0,
    domain: "Lakehouse Architecture",
  },

  // ------------------------------------------------------
  // DOMAIN 2 — DELTA LAKE & STORAGE
  // ------------------------------------------------------
  {
    id: 7,
    question: "Delta Lake provides which major capability?",
    options: [
      "ACID transactions on data lakes",
      "Running only batch processes",
      "Serving static web apps",
      "Encrypting YAML pipelines automatically",
    ],
    answer: 0,
    domain: "Delta Lake & Storage",
  },
  {
    id: 8,
    question: "Which feature supports time travel in Delta Lake?",
    options: [
      "Versioned Parquet files",
      "Docker version tags",
      "Blob snapshots",
      "SQL branching",
    ],
    answer: 0,
    domain: "Delta Lake & Storage",
  },
  {
    id: 9,
    question: "Z-Ordering improves performance by:",
    options: [
      "Optimizing data layout for faster queries",
      "Encrypting table metadata",
      "Scaling compute nodes",
      "Backing up data automatically",
    ],
    answer: 0,
    domain: "Delta Lake & Storage",
  },
  {
    id: 10,
    question: "Delta Live Tables (DLT) are used for:",
    options: [
      "Modern declarative ETL pipelines",
      "Git repository hosting",
      "Azure Networking",
      "GPU model serving",
    ],
    answer: 0,
    domain: "Delta Lake & Storage",
  },
  {
    id: 11,
    question: "Auto Optimize and Auto Compact help with:",
    options: [
      "Small file management and performance improvements",
      "Data encryption",
      "Cluster autoscaling",
      "Version control",
    ],
    answer: 0,
    domain: "Delta Lake & Storage",
  },
  {
    id: 12,
    question: "What does `VACUUM` do in Delta Lake?",
    options: [
      "Removes old data files no longer referenced by the table",
      "Cleans malformed JSON",
      "Creates new table schemas",
      "Backs up Azure Key Vault",
    ],
    answer: 0,
    domain: "Delta Lake & Storage",
  },

  // ------------------------------------------------------
  // DOMAIN 3 — APACHE SPARK & COMPUTE
  // ------------------------------------------------------
  {
    id: 13,
    question: "Which engine powers distributed data processing in Databricks?",
    options: [
      "Apache Spark",
      "Kusto",
      "MongoDB engine",
      "Azure SQL Edge",
    ],
    answer: 0,
    domain: "Apache Spark & Compute",
  },
  {
    id: 14,
    question: "A Spark DataFrame is best described as:",
    options: [
      "A distributed table-like data structure",
      "A local Excel workbook",
      "A NoSQL document store",
      "A zipped CSV file",
    ],
    answer: 0,
    domain: "Apache Spark & Compute",
  },
  {
    id: 15,
    question: "Spark lazy evaluation means:",
    options: [
      "Transformations are not executed until an action is triggered",
      "Queries run before data arrives",
      "Clusters never shut down",
      "Jobs always run sequentially",
    ],
    answer: 0,
    domain: "Apache Spark & Compute",
  },
  {
    id: 16,
    question: "Which Spark action triggers execution?",
    options: ["collect()", "select()", "withColumn()", "filter()"],
    answer: 0,
    domain: "Apache Spark & Compute",
  },
  {
    id: 17,
    question: "Databricks Jobs are used to:",
    options: [
      "Schedule and run production Spark workloads",
      "Monitor VM costs",
      "Create Azure Function Apps",
      "Convert CSV to XML automatically",
    ],
    answer: 0,
    domain: "Apache Spark & Compute",
  },
  {
    id: 18,
    question: "What does cluster autoscaling do?",
    options: [
      "Automatically adjusts worker nodes based on load",
      "Selects ML algorithms",
      "Optimizes SQL queries",
      "Rewrites job definitions",
    ],
    answer: 0,
    domain: "Apache Spark & Compute",
  },

  // ------------------------------------------------------
  // DOMAIN 4 — UNITY CATALOG & GOVERNANCE
  // ------------------------------------------------------
  {
    id: 19,
    question: "Unity Catalog is used for:",
    options: [
      "Centralized governance across all data and AI assets",
      "Train deep learning models",
      "Host notebooks",
      "Configure Azure networking",
    ],
    answer: 0,
    domain: "Unity Catalog & Governance",
  },
  {
    id: 20,
    question:
      "Which Unity Catalog concept organizes data assets into catalogs and schemas?",
    options: ["Three-level namespace", "Resource groups", "Shard groups", "Clusters"],
    answer: 0,
    domain: "Unity Catalog & Governance",
  },
  {
    id: 21,
    question: "Unity Catalog enforces permissions at which level?",
    options: [
      "Table, view, column",
      "Only at the workspace level",
      "Only at the cluster level",
      "Only for MLflow runs",
    ],
    answer: 0,
    domain: "Unity Catalog & Governance",
  },
  {
    id: 22,
    question: "What does Column-Level Lineage provide?",
    options: [
      "End-to-end traceability of how individual columns are produced",
      "Visualization of network packets",
      "Spark executor logs",
      "Pipeline dependency cycles",
    ],
    answer: 0,
    domain: "Unity Catalog & Governance",
  },
  {
    id: 23,
    question: "Which feature allows data sharing across clouds?",
    options: [
      "Delta Sharing",
      "Cosmos Replication",
      "Blob Versioning",
      "Azure Arc",
    ],
    answer: 0,
    domain: "Unity Catalog & Governance",
  },
  {
    id: 24,
    question: "Unity Catalog supports which asset types?",
    options: [
      "Files, tables, volumes, models, dashboards",
      "Only Parquet files",
      "Only SQL views",
      "Only Python notebooks",
    ],
    answer: 0,
    domain: "Unity Catalog & Governance",
  },

  // ------------------------------------------------------
  // DOMAIN 5 — WORKFLOWS, PIPELINES & SQL WAREHOUSE
  // ------------------------------------------------------
  {
    id: 25,
    question: "Databricks Workflows are used for:",
    options: [
      "Orchestrating notebooks, DLT pipelines, and jobs",
      "Hosting data warehouses",
      "Running Kubernetes pods",
      "Configuring network rules",
    ],
    answer: 0,
    domain: "Workflows & SQL Warehouse",
  },
  {
    id: 26,
    question: "What is a SQL Warehouse in Databricks?",
    options: [
      "A serverless compute endpoint for SQL analytics",
      "A GPU cluster for ML",
      "A logging platform",
      "A scripting environment",
    ],
    answer: 0,
    domain: "Workflows & SQL Warehouse",
  },
  {
    id: 27,
    question: "Which SQL command creates a Delta table?",
    options: [
      "CREATE TABLE USING DELTA",
      "CREATE DATABASE DELTAONLY",
      "SELECT * FROM delta.enable()",
      "EXEC delta.create.table()",
    ],
    answer: 0,
    domain: "Workflows & SQL Warehouse",
  },
  {
    id: 28,
    question: "What is a DLT pipeline?",
    options: [
      "A declarative ETL workflow with automatic data quality checks",
      "A Power BI refresh job",
      "A Kusto cluster deployment",
      "A VM provisioning script",
    ],
    answer: 0,
    domain: "Workflows & SQL Warehouse",
  },
  {
    id: 29,
    question: "Tasks in a Databricks Workflow can run:",
    options: [
      "In parallel or with dependencies",
      "Only sequentially",
      "Only on GPU hardware",
      "Only during off-peak hours",
    ],
    answer: 0,
    domain: "Workflows & SQL Warehouse",
  },
  {
    id: 30,
    question: "What does job clustering allow?",
    options: [
      "Creating a cluster specifically for production tasks",
      "Sharing cluster state across notebooks",
      "Pinning jobs to VM workloads",
      "Creating global UDF registries",
    ],
    answer: 0,
    domain: "Workflows & SQL Warehouse",
  },
  {
    id: 31,
    question: "Which SQL Warehouse feature helps control compute cost?",
    options: [
      "Auto-stop",
      "Blob tiering",
      "Event Grid triggers",
      "Spark Broadcast joins",
    ],
    answer: 0,
    domain: "Workflows & SQL Warehouse",
  },
  {
    id: 32,
    question: "Notebook tasks in workflows support which languages?",
    options: ["SQL, Python, R, Scala", "Java only", "C# only", "HTML only"],
    answer: 0,
    domain: "Workflows & SQL Warehouse",
  },
  {
    id: 33,
    question: "What does MLflow track?",
    options: [
      "Experiments, models, parameters, metrics",
      "Firewall logs",
      "Power BI dashboards",
      "Notebook font settings",
    ],
    answer: 0,
    domain: "Workflows & SQL Warehouse",
  },
  {
    id: 34,
    question: "Which component can call Databricks Workflows via API?",
    options: [
      "Azure Logic Apps",
      "Excel macros",
      "MS Teams chat",
      "Apache Tomcat",
    ],
    answer: 0,
    domain: "Workflows & SQL Warehouse",
  },
  {
    id: 35,
    question: "Which SQL clause optimizes Delta Lake updates?",
    options: ["MERGE INTO", "TRANSFORM APPLY", "FOR EACH ROW", "BATCH UPDATE"],
    answer: 0,
    domain: "Workflows & SQL Warehouse",
  },
];
