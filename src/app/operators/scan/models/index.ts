
export interface Evaluation {
  employeeId: string;
  taskId: string;
  score: number;
}

export interface EmployeePerformance {
  employeeId: string;
  totalScore: number;
  taskCount: number;
  weightedAverage: number;
}
