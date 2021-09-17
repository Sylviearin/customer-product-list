export const generateUniqueId = (): number => {
    return parseInt(Date.now().toString(36) + Math.random().toString(36).substr(2), 10);
}
