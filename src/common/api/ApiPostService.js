import {apiClient} from "./ApiClient";

export const executeJwtAuthenticationTokenService = (username, password) => apiClient.post('/api/v1/authenticate', {username, password})

export const reservationInfo = (userInfo) => apiClient.post('/api/v1/reservation', {userInfo})
