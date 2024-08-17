import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Schema } from '@nestjs/mongoose';
import { AbstractEntity } from 'src/common/database/abstract.entity';

@ObjectType()
@Schema()
export class Chat extends AbstractEntity{
  
}
