const employees = [
    {
        id: 1,
        firstname: "John",
        email: "employee1@example.com",
        password: "password123",
        tasks: [
            {
                title: "Prepare Monthly Report",
                description: "Compile and analyze data for the monthly financial report.",
                date: "2024-12-05",
                category: "Finance",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Team Meeting",
                description: "Present progress in the weekly team meeting.",
                date: "2024-12-06",
                category: "Management",
                active: false,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Client Feedback Analysis",
                description: "Analyze feedback from recent client surveys.",
                date: "2024-12-07",
                category: "Research",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ],
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 0,
            failed: 0
        }
    },
    {
        id: 2,
        firstname: "Alice",
        email: "employee2@example.com",
        password: "password123",
        tasks: [
            {
                title: "Database Backup",
                description: "Perform a backup of the company's database.",
                date: "2024-12-05",
                category: "IT",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Website Update",
                description: "Update the homepage with new promotional banners.",
                date: "2024-12-06",
                category: "Web Development",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Server Maintenance",
                description: "Ensure the server is running optimally and apply updates.",
                date: "2024-12-07",
                category: "IT",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ],
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 0,
            failed: 1
        }
    },
    {
        id: 3,
        firstname: "David",
        email: "employee3@example.com",
        password: "password123",
        tasks: [
            {
                title: "Product Review",
                description: "Test and review the new product prototype.",
                date: "2024-12-05",
                category: "Product Development",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Social Media Campaign",
                description: "Plan and execute the holiday marketing campaign.",
                date: "2024-12-08",
                category: "Marketing",
                active: true,
                newTask: false,
                completed: true,
                failed: false
            }
        ],
        taskCounts: {
            active: 2,
            newTask: 0,
            completed: 1,
            failed: 0
        }
    },
    {
        id: 4,
        firstname: "Emma",
        email: "employee4@example.com",
        password: "password123",
        tasks: [
            {
                title: "Inventory Check",
                description: "Verify stock levels in the warehouse.",
                date: "2024-12-06",
                category: "Logistics",
                active: false,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Supplier Follow-up",
                description: "Contact suppliers for order updates.",
                date: "2024-12-07",
                category: "Procurement",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Shipment Planning",
                description: "Organize shipment schedules for the upcoming week.",
                date: "2024-12-10",
                category: "Logistics",
                active: true,
                newTask: false,
                completed: true,
                failed: false
            }
        ],
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 0
        }
    },
    {
        id: 5,
        firstname: "Sophia",
        email: "employee5@example.com",
        password: "password123",
        tasks: [
            {
                title: "Customer Support",
                description: "Respond to support tickets and resolve issues.",
                date: "2024-12-05",
                category: "Customer Service",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Training Session",
                description: "Conduct a training session for new hires.",
                date: "2024-12-06",
                category: "Human Resources",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                title: "Policy Update",
                description: "Draft updates for the employee handbook.",
                date: "2024-12-10",
                category: "HR",
                active: false,
                newTask: true,
                completed: false,
                failed: false
            }
        ],
        taskCounts: {
            active: 1,
            newTask: 1,
            completed: 0,
            failed: 1
        }
    }
];


const admin = [
    {
        "id": 1,
        "email": "admin1@example.com",
        "password": "password123"
    }
   
]
export const setLocalstorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalstorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
   return{employees,admin}
}
