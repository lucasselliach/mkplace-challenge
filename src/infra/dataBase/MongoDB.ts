import * as mongoose from 'mongoose';

export class DatabaseConfig {
    static async connect() {
        console.log('Connection to Database');
        await mongoose.connect('mongodb+srv://lucas:lucas1234@cluster0.hmfsulv.mongodb.net/?retryWrites=true&w=majority');
        console.log('Database successfully connected!');
    }
}
