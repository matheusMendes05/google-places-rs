
interface IGoogleService {
    getSearchAddress(latitude: string, longitude: string): Promise<any>;
}

export { IGoogleService }