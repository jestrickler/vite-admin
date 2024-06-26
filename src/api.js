import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3200',
  headers: { 'Content-Type': 'application/json' }
})

const simulateNetworkDelay = async () =>
  await new Promise((r) => setTimeout(r, 500))

export const getEmployeesQuery = () => {
  return {
    queryKey: ['employees'],
    queryFn: async () => {
      await simulateNetworkDelay()
      return api.get('/employees').then((response) => response.data)
    }
  }
}

export const getContactsQuery = () => {
  return {
    queryKey: ['contacts'],
    queryFn: async () => {
      await simulateNetworkDelay()
      return api.get('/contacts').then((response) => response.data)
    }
  }
}

export const getInvoicesQuery = () => {
  return {
    queryKey: ['invoices'],
    queryFn: async () => {
      await simulateNetworkDelay()
      return api.get('/invoices').then((response) => response.data)
    }
  }
}

export const getEventsQuery = () => {
  return {
    queryKey: ['events'],
    queryFn: async () => {
      await simulateNetworkDelay()
      return api.get('/events').then((response) => response.data)
    }
  }
}

export const getFaqsQuery = () => {
  return {
    queryKey: ['faqs'],
    queryFn: async () => {
      await simulateNetworkDelay()
      return api.get('/faqs').then((response) => response.data)
    }
  }
}

export const getBarQuery = () => {
  return {
    queryKey: ['barData'],
    queryFn: async () => {
      await simulateNetworkDelay()
      return api.get('/barData').then((response) => response.data)
    }
  }
}

export const getPieQuery = () => {
  return {
    queryKey: ['pieData'],
    queryFn: async () => {
      await simulateNetworkDelay()
      return api.get('/pieData').then((response) => response.data)
    }
  }
}

export const getLineQuery = () => {
  return {
    queryKey: ['lineData'],
    queryFn: async () => {
      await simulateNetworkDelay()
      return api.get('/lineData').then((response) => response.data)
    }
  }
}

export const getGeographyQuery = () => {
  return {
    queryKey: ['geographyData'],
    queryFn: async () => {
      await simulateNetworkDelay()
      return api.get('/geographyData').then((response) => response.data)
    }
  }
}

export const getDashboardQuery = () => {
  return {
    queryKey: ['dashboardData'],
    queryFn: async () => {
      await simulateNetworkDelay()
      return api.get('/dashboardData').then((response) => response.data)
    }
  }
}
