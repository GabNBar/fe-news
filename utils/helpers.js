export function formatCreatedAt(created_at) {
  const createdAt = new Date(created_at);
  return createdAt.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
}
