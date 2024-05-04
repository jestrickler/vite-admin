import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3200',
  headers: { 'Content-Type': 'application/json' }
})

export const getEmployeesQuery = () => {
  return {
    queryKey: ['employees'],
    queryFn: async () => {
      // simulate network slowness
      await new Promise((r) => setTimeout(r, 1000))
      return api.get('/employees').then((response) => response.data)
    }
  }
}

export const getContactsQuery = () => {
  return {
    queryKey: ['contacts'],
    queryFn: async () => {
      // simulate network slowness
      await new Promise((r) => setTimeout(r, 1000))
      return api.get('/contacts').then((response) => response.data)
    }
  }
}

export const getInvoicesQuery = () => {
  return {
    queryKey: ['invoices'],
    queryFn: async () => {
      // simulate network slowness
      await new Promise((r) => setTimeout(r, 1000))
      return api.get('/invoices').then((response) => response.data)
    }
  }
}

export const getEventsQuery = () => {
  return {
    queryKey: ['events'],
    queryFn: async () => {
      // simulate network slowness
      await new Promise((r) => setTimeout(r, 1000))
      return api.get('/events').then((response) => response.data)
    }
  }
}

export const getFaqsQuery = () => {
  return {
    queryKey: ['faqs'],
    queryFn: async () => {
      // simulate network slowness
      await new Promise((r) => setTimeout(r, 1000))
      return api.get('/faqs').then((response) => response.data)
    }
  }
}

export const getBarQuery = () => {
  return {
    queryKey: ['barData'],
    queryFn: async () => {
      // simulate network slowness
      await new Promise((r) => setTimeout(r, 1000))
      return api.get('/barData').then((response) => response.data)
    }
  }
}

export const getPieQuery = () => {
  return {
    queryKey: ['pieData'],
    queryFn: async () => {
      // simulate network slowness
      await new Promise((r) => setTimeout(r, 1000))
      return api.get('/pieData').then((response) => response.data)
    }
  }
}

export const getLineQuery = () => {
  return {
    queryKey: ['lineData'],
    queryFn: async () => {
      // simulate network slowness
      await new Promise((r) => setTimeout(r, 1000))
      return api.get('/lineData').then((response) => response.data)
    }
  }
}

export const getGeographyQuery = () => {
  return {
    queryKey: ['geographyData'],
    queryFn: async () => {
      // simulate network slowness
      await new Promise((r) => setTimeout(r, 1000))
      return api.get('/geographyData').then((response) => response.data)
    }
  }
}

export const getTransactionsQuery = () => {
  return {
    queryKey: ['transactions'],
    queryFn: async () => {
      // simulate network slowness
      await new Promise((r) => setTimeout(r, 1000))
      return api.get('/transactions').then((response) => response.data)
    }
  }
}
