import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3200',
  headers: { 'Content-Type': 'application/json' }
})

export const getTeamQuery = () => {
  return {
    queryKey: ['employees'],
    queryFn: async () => {
      // simulate network slowness
      await new Promise((r) => setTimeout(r, 1000))
      return api.get('/employees').then((response) => response.data)
    }
  }
}
