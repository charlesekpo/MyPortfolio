import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';

dotenv.config();

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with cart, checkout, and payment integration.',
    imageUrl: 'https://via.placeholder.com/600x400?text=E-Commerce',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/yourname/ecommerce',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Task Manager App',
    description: 'A kanban-style task manager with drag-and-drop and team collaboration.',
    imageUrl: 'https://via.placeholder.com/600x400?text=Task+Manager',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/yourname/taskmanager',
    tags: ['React', 'Express', 'Socket.io'],
  },
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Project.deleteMany();
  await Project.insertMany(projects);
  console.log('Database seeded!');
  process.exit(0);
});
