const URI: string = "http://localhost:5000";

export const createDataFeedback = async (feedback: any) => {
    try {
        const request = async () => {
            const res = await fetch(`${URI}/feedback`, {
                credentials: "same-origin",
                method: "POST",
                body: feedback,
            })
            const data = await res.json()
            if (!res.ok) {
                throw new Error(data)
            }
        }
        if (feedback) {
            request()
        }
    } catch (e) {
        return e
    }
}