import {GatewayContext, MiddlewareNext} from "sasdn";
import * as fs from 'fs';
import {Question, CreateQuestionRequest, CreateQuestionResponse,
    UpdateQuestionRequest,UpdateQuestionResponse,
    DeleteQuestionRequest,DeleteQuestionResponse,
    QuestionListRequest,QuestionListResponse
} from "../../proto/question/question_pb";
import {getCustomRepository} from "typeorm";
import {PostRepository} from "../../model/CRUD";


interface RequestParamsCreate {
    body: CreateQuestionRequest.AsObject;
}
interface RequestParamsUpdate{
    body: UpdateQuestionRequest.AsObject;
}
interface RequestParamsDelete {
    body: DeleteQuestionRequest.AsObject;
}
interface RequestParamsList {
    body: QuestionListRequest.AsObject;
}



let filePath = './configs/user.json' //json文件路径

let readFromFile = () => {  //读文件函数
    return new Promise((resolve, reject) => { //封装成Promise对象
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}




export namespace questionLogic {

    export async function createQuestion(ctx: GatewayContext, next?: MiddlewareNext, params?: RequestParamsCreate): Promise<CreateQuestionResponse> {
        const response = new CreateQuestionResponse();
        try{
            if (ctx === null) {
                throw new Error('koa context is null');
            }
            //  response
            
    
            response.setMessage('ok');
            response.setCode(1);
    
            const postRepository = getCustomRepository(PostRepository);
    
            const question = await postRepository.createModel(params);
            console.log(question)
            let questionObj = new Question()
            questionObj.setId(question.id);
            questionObj.setTitle(question.title);
            questionObj.setAnswera(question.answerA);
            questionObj.setAnswerb(question.answerB)
            questionObj.setScore(question.score)
            questionObj.setTrueanswer(question.trueAnswer)
            let arr = []
            arr.push(questionObj)
            response.setDataList(arr)
            return Promise.resolve(response);
        }catch(err){
            response.setMessage('err');
            response.setCode(0);
            return Promise.reject(response);
        }
    }

    export async function updateQuestion(ctx: GatewayContext, next?: MiddlewareNext, params?: RequestParamsUpdate): Promise<UpdateQuestionResponse> {
        if (ctx === null) {
            throw new Error('koa context is null');
        }
        
        //  response
        const response = new UpdateQuestionResponse();
        try{
            response.setMessage('update sucess');
            response.setCode(1);
    
            const postRepository = getCustomRepository(PostRepository);       
            const question = await postRepository.updateModel({'title': '1'},{'socre':'100'});
            console.log(question)
            
            return Promise.resolve(response);
        }catch(err){
            response.setMessage('err');
            response.setCode(0);
            return Promise.reject(response);
        }
        
    }

    export async function deleteQuestion(ctx: GatewayContext, next?: MiddlewareNext, params?: RequestParamsDelete): Promise<DeleteQuestionResponse> {
        if (ctx === null) {
            throw new Error('koa context is null');
        }
        //  response
        const response = new DeleteQuestionResponse();
        try{
            response.setMessage('delete sucess');
            response.setCode(1);
    
            const postRepository = getCustomRepository(PostRepository);       
            const question = await postRepository.deleteModel({'title':'123'});
            console.log(question)
        
            return Promise.resolve(response);
        }catch(err){
            response.setMessage('err');
            response.setCode(0);
            return Promise.reject(response);
        }
        
    }

    export async function questionList(ctx: GatewayContext, next?: MiddlewareNext, params?: RequestParamsList): Promise<QuestionListResponse> {
        if (ctx === null) {
            throw new Error('koa context is null');
        }
        //  response
        const response = new QuestionListResponse();
        try{
            response.setMessage('ok');
            response.setCode(1);
    
            const postRepository = getCustomRepository(PostRepository);
            const questionList = await postRepository.findModel();
            let arr = []
            for(let i in questionList) {
                let questionObj = new Question()
                questionObj.setId(questionList[i].id);
                questionObj.setTitle(questionList[i].title);
                questionObj.setAnswera(questionList[i].answerA);
                questionObj.setAnswerb(questionList[i].answerB)
                questionObj.setScore(questionList[i].score)
                questionObj.setTrueanswer(questionList[i].trueAnswer)
                arr.push(questionObj)
            }
            response.setDataList(arr)
            return Promise.resolve(response);
        }catch(err){
            response.setMessage('err');
            response.setCode(0);
            return Promise.reject(response);
        }
        
    }
}