import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractEntity } from 'src/common/database/abstract.entity';

@ObjectType()
@Schema()
export class Chat extends AbstractEntity{
  @Field()
  @Prop()
  userId:String

  @Field()
  @Prop()
  isPrivate:Boolean

  @Field(()=>[String])
  @Prop([String])
  userIds:String[]

  @Field({nullable:true})
  @Prop()
  name?:String

}

export const ChatSchema = SchemaFactory.createForClass(Chat);

