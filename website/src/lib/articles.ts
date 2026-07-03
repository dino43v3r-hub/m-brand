export const getReadingTime = (content: string) => {
  const words = content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const minutes = Math.max(1, Math.ceil(words.length / 200));
  return `${minutes} min read`;
};
