
export const mapApiErrors = (err) => {
    if (err?.status === 422 && err.errors) {
        const mapped = {};
        for (const [field, messages] of Object.entries(err.errors)) {
            mapped[field] = Array.isArray(messages) ? messages[0] : messages;
        }
        return mapped;
    }

    return {
        _global: err?.message ?? "Не удалось выполнить запрос",
    };
};