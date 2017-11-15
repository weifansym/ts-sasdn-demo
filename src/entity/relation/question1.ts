import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity()
export class Question1 {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    title: number;

    @Column()
    answerA: string;

    @Column()
    answerB: string;

    @Column()
    score: number;

    @Column()
    trueAnswer: string;

}