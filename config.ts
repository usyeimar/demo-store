import {registerAs} from '@nestjs/config';

export default registerAs('config', () => ({
    database: {
        name: process.env.DATABASE_NAME
    },
    apiKey: process.env.API_KEY
}));

