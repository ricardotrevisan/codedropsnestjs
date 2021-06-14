import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      //'mongodb://root:senha@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false',
      //'mongodb://root:senha@8.tcp.ngrok.io:12140/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false',
      'mongodb+srv://trevisan:wqQkawTNusUY-Z9@cluster0.3vdsa.mongodb.net/codedrops?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
