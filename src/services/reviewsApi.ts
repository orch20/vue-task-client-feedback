import { api } from '@/services/api'

export const getReviews = () => api.get('/reviews')
