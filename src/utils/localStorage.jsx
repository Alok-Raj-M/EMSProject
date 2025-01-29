const employees = [
  {
      id: 1,
      firstName: "Aarav",
      email: "employee1@example.com",
      password: "123",
      tasks: [
          {
              title: "Task 1",
              description: "Prepare the monthly report.",
              date: "2024-12-22",
              category: "Reporting",
              active: true,
              newTask: true,
              completed: false,
              failed: false,
          },
          {
              title: "Task 2",
              description: "Team meeting with project stakeholders.",
              date: "2024-12-23",
              category: "Meeting",
              active: false,
              newTask: false,
              completed: true,
              failed: false,
          },
          {
              title: "Task 3",
              description: "Fix critical bug in module A.",
              date: "2024-12-24",
              category: "Development",
              active: true,
              newTask: false,
              completed: false,
              failed: false,
          },
      ],
      taskCount: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
      id: 2,
      firstName: "Ishita",
      email: "employee2@example.com",
      password: "123",
      tasks: [
          {
              title: "Task 1",
              description: "Review design documents.",
              date: "2024-12-22",
              category: "Review",
              active: true,
              newTask: true,
              completed: false,
              failed: false,
          },
          {
              title: "Task 2",
              description: "Client presentation preparation.",
              date: "2024-12-23",
              category: "Presentation",
              active: false,
              newTask: false,
              completed: true,
              failed: false,
          },
          {
              title: "Task 3",
              description: "Update user manual.",
              date: "2024-12-24",
              category: "Documentation",
              active: true,
              newTask: false,
              completed: false,
              failed: false,
          },
      ],
      taskCount: { active: 2, newTask: 1, completed: 1, failed: 0 },
  },
  {
      id: 3,
      firstName: "Rohan",
      email: "employee3@example.com",
      password: "123",
      tasks: [
          {
              title: "Task 1",
              description: "Draft project timeline.",
              date: "2024-12-22",
              category: "Planning",
              active: true,
              newTask: false,
              completed: false,
              failed: false,
          },
          {
              title: "Task 2",
              description: "Code review for team submissions.",
              date: "2024-12-23",
              category: "Review",
              active: false,
              newTask: true,
              completed: false,
              failed: true,
          },
          {
              title: "Task 3",
              description: "Backup database.",
              date: "2024-12-24",
              category: "Maintenance",
              active: false,
              newTask: false,
              completed: true,
              failed: false,
          },
      ],
      taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 },
  },
  {
      id: 4,
      firstName: "Ananya",
      email: "employee4@example.com",
      password: "123",
      tasks: [
          {
              title: "Task 1",
              description: "Organize team-building activities.",
              date: "2024-12-22",
              category: "HR",
              active: false,
              newTask: false,
              completed: false,
              failed: true,
          },
          {
              title: "Task 2",
              description: "Develop a feature prototype.",
              date: "2024-12-23",
              category: "Development",
              active: true,
              newTask: true,
              completed: false,
              failed: false,
          },
          {
              title: "Task 3",
              description: "Test software deployment.",
              date: "2024-12-24",
              category: "Testing",
              active: false,
              newTask: false,
              completed: true,
              failed: false,
          },
      ],
      taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 },
  },
  {
      id: 5,
      firstName: "Kabir",
      email: "employee5@example.com",
      password: "123",
      tasks: [
          {
              title: "Task 1",
              description: "Plan marketing campaign.",
              date: "2024-12-22",
              category: "Marketing",
              active: true,
              newTask: false,
              completed: false,
              failed: false,
          },
          {
              title: "Task 2",
              description: "Analyze sales data.",
              date: "2024-12-23",
              category: "Analysis",
              active: false,
              newTask: true,
              completed: false,
              failed: true,
          },
          {
              title: "Task 3",
              description: "Update customer records.",
              date: "2024-12-24",
              category: "Database",
              active: false,
              newTask: false,
              completed: true,
              failed: false,
          },
      ],
      taskCount: { active: 1, newTask: 1, completed: 1, failed: 1 },
  },
];

  
  const admin = {
    id: 1,
    email: "admin@example.com",
    password: "123"
  };
  
export const setLocalStorage = ()=>{
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin =JSON.parse(localStorage.getItem('admin'))

  return {employees,admin}
}