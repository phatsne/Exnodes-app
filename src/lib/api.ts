// import { User } from "@phosphor-icons/react";

const API_BASE_URL = 'http://localhost:3001';

export const api = {
  // Check-in/out
  async getCheckInOuts() {
    const response = await fetch(`${API_BASE_URL}/checkInOuts`);
    return response.json();
  },

  async getCheckInOutsByDate(date: string) {
    const response = await fetch(`${API_BASE_URL}/checkInOuts?date=${date}`);
    return response.json();
  },

  // Employees
  async getEmployees() {
    const response = await fetch(`${API_BASE_URL}/employees`);
    return response.json();
  },

  async getEmployeeById(id: number) {
    const response = await fetch(`${API_BASE_URL}/employees/${id}`);
    return response.json();
  },

  // Departments
  async getDepartments() {
    const response = await fetch(`${API_BASE_URL}/departments`);
    return response.json();
  },

  // Positions
  async getPositions() {
    const response = await fetch(`${API_BASE_URL}/positions`);
    return response.json();
  },

  //POST API 
  async createUser(user: {
    username: string;
    password: string;
    role: string;
  }) {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error('Failed to create user');
    }
    return response.json();
  },
  
};