import { Global, Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';

const API_KEY = 'API_KEY';
const PROD_API_KEY = 'PRO-KEY';

@Global()
@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'production' ? PROD_API_KEY : API_KEY,
    },
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const tasks = await http
          .get('https://jsonplaceholder.typicode.com/todos')
          .toPromise();
        return tasks.data;
      },
      inject: [HttpService],
    },
  ],
  exports: ['API_KEY', 'TASKS'],
})
export class DatabaseModule {}
