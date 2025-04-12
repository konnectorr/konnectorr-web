/**
 * Utility functions for exporting data
 */

/**
 * Convert array of objects to CSV format
 * @param data Array of objects to convert
 * @param headers Optional headers to use
 * @returns CSV string
 */
export function objectsToCSV(data: any[], headers?: Record<string, string>): string {
  if (!data.length) return '';
  
  // Get all possible keys from all objects
  const allKeys = new Set<string>();
  data.forEach(item => {
    Object.keys(item).forEach(key => {
      allKeys.add(key);
    });
  });
  
  // Use provided headers or generate from keys
  const keys = headers ? Object.keys(headers) : Array.from(allKeys);
  const headerRow = headers 
    ? Object.values(headers).map(h => `"${h}"`).join(',')
    : keys.map(k => `"${k}"`).join(',');
  
  // Generate CSV rows
  const rows = data.map(item => {
    return keys.map(key => {
      const value = item[key] === undefined || item[key] === null ? '' : item[key];
      // Handle strings with commas, quotes, or newlines
      if (typeof value === 'string') {
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value;
    }).join(',');
  });
  
  return [headerRow, ...rows].join('\n');
}

/**
 * Download data as a CSV file
 * @param data Array of objects to export
 * @param filename Filename without extension
 * @param headers Optional headers mapping
 */
export function downloadCSV(data: any[], filename: string, headers?: Record<string, string>): void {
  const csv = objectsToCSV(data, headers);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Generate Google Sheets URL with data
 * @param data Array of objects to export
 * @param headers Optional headers mapping
 * @returns Google Sheets URL with data
 */
export function getGoogleSheetsUrl(data: any[], headers?: Record<string, string>): string {
  const csv = objectsToCSV(data, headers);
  // Encode the CSV data for URL
  const encodedData = encodeURIComponent(csv);
  // Create a Google Sheets URL that will open a new sheet with the data
  return `https://docs.google.com/spreadsheets/d/e/2PACX-1vQoJK9BXrDhxP1QQcBiW8xMiydk6z_CJOWPZQlvkNKx7cR2tJf7ZFy0SQC22YEUZTKs-8Ka1u12xFqE/pub?output=csv&data=${encodedData}`;
}

/**
 * Format a Google Sheets export URL to make it easier to use
 * @param data Array of objects to export
 * @param title Title for the Google Sheet
 * @param headers Optional headers mapping
 * @returns HTML string with a link to open in Google Sheets
 */
export function createGoogleSheetsLink(data: any[], title: string, headers?: Record<string, string>): string {
  // Since we can't directly create a Google Sheet via URL, we'll create a data URL
  // that can be opened in a new tab, and the user can then copy-paste to Google Sheets
  const csv = objectsToCSV(data, headers);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const dataUrl = URL.createObjectURL(blob);
  
  return dataUrl;
}