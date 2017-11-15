import {EntityRepository, AbstractRepository,getMongoRepository} from "typeorm";
import {Question1} from "../entity/relation/question1";

@EntityRepository(Question1)
export class PostRepository extends AbstractRepository<Question1> {

    private userRepository: any
    
    constructor () {
        super()
        this.userRepository = getMongoRepository(Question1);
      }
    
    createModel(params: any) {
        const post = new Question1();
        post.title =  params.body.title;
        post.answerA =  params.body.answerA;
        post.answerB =  params.body.answerB;
        post.score =  params.body.score;
        post.trueAnswer =  params.body.trueAnswer;
        return this.userRepository.save(post);
    }

    findModel(where?: any,order?: any, offset?: number, limit?: number) {
        const search = {
            where: where || {},
            order: order || {},
            skip: offset || 0,
            take: limit || 10
        }
        return this.userRepository.find(search);
    }

    updateModel(condition: any,set: any) {
        return this.userRepository.updateOne(condition,{'$set':set})
    }

    deleteModel(condition: any) {
        return this.userRepository.deleteOne(condition)
    }

    countModel(condition?: any) {
        return this.userRepository.count(condition)
    }
}