interface CheckServicesUseCase {
    execute(url: string): Promise<boolean>;
}

export class CheckServices implements CheckServicesUseCase {

    async execute(url: string): Promise<boolean> {

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Service check failed for ${url}: ${response.statusText}`);
            }
            console.log(`${url} is up and running`);
            return true;
        } catch (error) {
            console.error(`Error checking service ${url}:`, error);
            return false;
        }
    }
}