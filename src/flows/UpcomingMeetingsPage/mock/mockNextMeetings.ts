import { Meeting, NextMeetings } from "../data/nextMeetingsState";

export const mockNextMeetings: Meeting[] = [
  {
    ID: "1",
    roomID: "1",
    consultant: {
      ID: "1",
      name: "John Doe",
      email: "jhonDoe@gmail.com",
      imageUrl: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    topic: {
      ID: "1",
      name: "kubernetes",
      description:
        "consulting on kubernetes for beginners to advanced, hands-on experience. we can discuss the best practices, common pitfalls, and how to avoid them. we can build a kubernetes cluster from scratch, deploy applications, and monitor them. or any other topic you are interested in.",
      hourlyRate: 100,
    },
    additionalClients: [
      {
        ID: "2",
        name: "Jane Doe",
        email: "jame-doe@gmail.com",
      },
    ],
    date: 1639296000000,
  },
  {
    ID: "2",
    roomID: "2",
    consultant: {
      ID: "2",
      name: "Alice Smith",
      email: "alice.smith@gmail.com",
      imageUrl: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    topic: {
      ID: "2",
      name: "React Native",
      description:
        "consulting on React Native development, including building cross-platform mobile apps, optimizing performance, and integrating with native modules.",
      hourlyRate: 120,
    },
    additionalClients: [
      {
        ID: "3",
        name: "Bob Johnson",
        email: "bob.johnson@gmail.com",
      },
    ],
    date: 1639382400000,
  },
  {
    ID: "3",
    roomID: "3",
    consultant: {
      ID: "3",
      name: "Emily Brown",
      email: "emily.brown@gmail.com",
      imageUrl: "https://randomuser.me/api/portraits/men/79.jpg",
    },
    topic: {
      ID: "3",
      name: "GraphQL",
      description:
        "consulting on GraphQL implementation, schema design, and performance optimization. We can discuss best practices, tooling, and integrating GraphQL with existing systems.",
      hourlyRate: 90,
    },
    additionalClients: [
      {
        ID: "4",
        name: "Michael Wilson",
        email: "michael.wilson@gmail.com",
      },
      {
        ID: "5",
        name: "Olivia Davis",
        email: "olivia.davis@gmail.com",
      },
    ],
    date: 1639468800000,
  },
  {
    ID: "4",
    roomID: "4",
    consultant: {
      ID: "4",
      name: "David Johnson",
      email: "david.johnson@gmail.com",
      imageUrl: "https://randomuser.me/api/portraits/women/89.jpg",
    },
    topic: {
      ID: "4",
      name: "AWS Lambda",
      description:
        "consulting on AWS Lambda functions, serverless architecture, and event-driven programming. We can discuss best practices, deployment strategies, and integrating with other AWS services.",
      hourlyRate: 110,
    },
    additionalClients: [],
    date: 1639555200000,
  },
  {
    ID: "5",
    roomID: "5",
    consultant: {
      ID: "5",
      name: "Sophia Wilson",
      email: "sophia.wilson@gmail.com",
      imageUrl: "https://via.placeholder.com/150",
    },
    topic: {
      ID: "5",
      name: "TypeScript",
      description:
        "consulting on TypeScript usage, type annotations, and advanced type system features. We can discuss best practices, migration strategies, and integrating TypeScript into existing projects.",
      hourlyRate: 100,
    },
    additionalClients: [
      {
        ID: "6",
        name: "James Smith",
        email: "james.smith@gmail.com",
      },
      {
        ID: "7",
        name: "Ava Johnson",
        email: "ava.johnson@gmail.com",
      },
    ],
    date: 1639641600000,
  },
  {
    ID: "6",
    roomID: "6",
    consultant: {
      ID: "6",
      name: "Ethan Davis",
      email: "ethan.davis@gmail.com",
      imageUrl: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    topic: {
      ID: "6",
      name: "Docker",
      description:
        "consulting on Docker containerization, container orchestration, and Docker best practices. We can discuss building Docker images, managing containers, and deploying applications with Docker.",
      hourlyRate: 95,
    },
    additionalClients: [
      {
        ID: "8",
        name: "Mia Brown",
        email: "mia.brown@gmail.com",
      },
    ],
    date: 1639728000000,
  },
  {
    ID: "7",
    roomID: "7",
    consultant: {
      ID: "7",
      name: "Liam Johnson",
      email: "liam.johnson@gmail.com",
      imageUrl: "https://via.placeholder.com/150",
    },
    topic: {
      ID: "7",
      name: "Angular",
      description:
        "consulting on Angular development, including building scalable web applications, optimizing performance, and using Angular CLI. We can discuss best practices, component architecture, and state management.",
      hourlyRate: 105,
    },
    additionalClients: [
      {
        ID: "9",
        name: "Charlotte Wilson",
        email: "charlotte.wilson@gmail.com",
      },
      {
        ID: "10",
        name: "Lucas Davis",
        email: "lucas.davis@gmail.com",
      },
    ],
    date: 1639814400000,
  },
  {
    ID: "8",
    roomID: "8",
    consultant: {
      ID: "8",
      name: "Ava Wilson",
      email: "ava.wilson@gmail.com",
      imageUrl: "https://via.placeholder.com/150",
    },
    topic: {
      ID: "8",
      name: "Python",
      description:
        "consulting on Python programming, including language features, libraries, and frameworks. We can discuss best practices, code organization, and performance optimization.",
      hourlyRate: 95,
    },
    additionalClients: [],
    date: 1639900800000,
  },
];
