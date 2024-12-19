import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCustomers = createAsyncThunk(
  "ADD_MANY_CUSTOMERS",
  async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!response.ok) {
      throw new Error("Ошибка при получении данных");
    }
    return await response.json();
  }
);
