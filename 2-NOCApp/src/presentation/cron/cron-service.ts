import { CronJob } from "cron";

type CronTime = string | Date;
type OnTick = ()=> void;

export class CronService {
    static createJob(cronTime: CronTime, onTick: OnTick ) : CronJob{
        // Additional server initialization logic can go here
        var job = new CronJob(
            cronTime, //'*/2 * * * * *',
            onTick,
            // () => {
            //     const date = new Date;
            //     console.log('2 seconds', date)
            // },
            // null,
            // true,
            // 'America/Los_Angeles'
        )
        job.start();
        return job
    }
}