import { Logger } from '@nestjs/common';
import {
  Process,
  OnQueueActive,
  OnQueueEvent,
  BullQueueEvents,
  Processor,
} from 'nest-bull';
import { Job } from 'bull';

@Processor({ name: 'test-queue' })
export class AppJob {
  private readonly logger = new Logger('MyQueue');

  @Process({ name: 'sample-job' })
  processTwice(job: Job<number>) {
    return 'succssfully executed a job';
  }

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }

  @OnQueueEvent(BullQueueEvents.COMPLETED)
  onCompleted(job: Job) {
    this.logger.log(
      `Completed job ${job.id} of type ${job.name} with result ${
        job.returnvalue
      }`,
    );
  }
}
