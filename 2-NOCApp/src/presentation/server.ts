import { CheckServices } from "../domain/use-cases/checks/check-services";
import { CronService } from "./cron/cron-service";

export class Server {

    public static start() {
        console.log("Server is starting...");
        CronService.createJob('*/5 * * * * *',
            () => {
                const date = new Date;
                // new CheckServices().execute('https://jsonplaceholder.typicode.com/todos/1')
                new CheckServices().execute('http://localhost:3000/')
                console.log('5 seconds ', date, )
            },)
    }
}
