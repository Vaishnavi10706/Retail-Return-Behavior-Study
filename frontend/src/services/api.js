const BASE_URL = "https://retail-return-behavior-study.onrender.com";
export async function fetchMeta() {
  const res = await fetch(`${BASE_URL}/meta`);
  if (!res.ok) throw new Error("Failed to fetch filter options");
  return res.json();
}
/**
 * Fetch dashboard data.
 * @param {string} country
 * @param {string|number} year
 * @param {number[]} months - array of month numbers
 */
export async function fetchDashboardData({ country = "all", year = "all", months = [] } = {}) {
  const params = new URLSearchParams();
  params.append("country", country);
  params.append("year", year);
  months.forEach((m) => params.append("month", m));

  const res = await fetch(`${BASE_URL}/dashboard-data?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch dashboard data");
  return res.json();
}