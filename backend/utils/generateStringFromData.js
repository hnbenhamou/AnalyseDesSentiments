function dataToString(data) {
  // Check if the input is an array
  if (Array.isArray(data)) {
    return `[${data.map((item) => dataToString(item)).join(", ")}]`;
  }
  // Check if the input is an object
  else if (typeof data === "object" && data !== null) {
    return `{${Object.entries(data)
      .map(([key, value]) => `"${key}": ${dataToString(value)}`)
      .join(", ")}}`;
  }
  // Handle primitive types
  else if (typeof data === "string") {
    return `"${data}"`; // Wrap strings in quotes
  } else {
    return String(data); // Convert other primitives to string
  }
}
