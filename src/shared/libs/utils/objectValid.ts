export const objectIsValid = <T>(obj: T): boolean => {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  return Object.values(obj as Record<string, unknown>).every((item) =>
    Boolean(item)
  );
};
