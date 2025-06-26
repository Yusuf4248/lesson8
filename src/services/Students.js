import axiosInstance from "../api"

export const Users = {
  async getAll() {
    try {
      const res = await axiosInstance.get("/users");
      return res.data
    } catch (error) {
      console.log(error)
    }
  },
  async createUser(modal) {
    try {
      const res = await axiosInstance.post("/users", modal)
      return res
    } catch (error) {
      console.log(error)
    }
  },
  async delete(id) {
    try {
      const res = await axiosInstance.delete(`/users/${id}`)
      return res
    } catch (error) {
      console.log(error)
    }
  },
  async update(id, modal) {
    try {
      const res = await axiosInstance.put(`/users/${id}`, modal);
      return res;
    } catch (error) {
      console.log(error)
    }
  }
}