const getRequest = async (url: string) => await (globalThis as any).$nuxt.$http.$get(url);

export {
    getRequest
}