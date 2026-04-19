// src/services/api.js
// Backend ile iletişim kuran "gizli kurye" — API isteklerini buradan yönet

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

/**
 * GET isteği gönderir
 * @param {string} endpoint  - Örn: '/users'
 */
export async function get(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) throw new Error(`GET ${endpoint} başarısız: ${response.status}`);
  return response.json();
}

/**
 * POST isteği gönderir
 * @param {string} endpoint - Örn: '/users'
 * @param {object} data     - Gönderilecek veri
 */
export async function post(endpoint, data) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error(`POST ${endpoint} başarısız: ${response.status}`);
  return response.json();
}

/**
 * DELETE isteği gönderir
 * @param {string} endpoint - Örn: '/users/42'
 */
export async function remove(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`, { method: 'DELETE' });
  if (!response.ok) throw new Error(`DELETE ${endpoint} başarısız: ${response.status}`);
  return response.json();
}
