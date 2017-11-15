"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const question_pb_1 = require("../../proto/question/question_pb");
const typeorm_1 = require("typeorm");
const CRUD_1 = require("../../model/CRUD");
let filePath = './configs/user.json'; //json文件路径
let readFromFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};
var questionLogic;
(function (questionLogic) {
    function createQuestion(ctx, next, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = new question_pb_1.CreateQuestionResponse();
            try {
                if (ctx === null) {
                    throw new Error('koa context is null');
                }
                //  response
                response.setMessage('ok');
                response.setCode(1);
                const postRepository = typeorm_1.getCustomRepository(CRUD_1.PostRepository);
                const question = yield postRepository.createModel(params);
                console.log(question);
                let questionObj = new question_pb_1.Question();
                questionObj.setId(question.id);
                questionObj.setTitle(question.title);
                questionObj.setAnswera(question.answerA);
                questionObj.setAnswerb(question.answerB);
                questionObj.setScore(question.score);
                questionObj.setTrueanswer(question.trueAnswer);
                let arr = [];
                arr.push(questionObj);
                response.setDataList(arr);
                return Promise.resolve(response);
            }
            catch (err) {
                response.setMessage('err');
                response.setCode(0);
                return Promise.reject(response);
            }
        });
    }
    questionLogic.createQuestion = createQuestion;
    function updateQuestion(ctx, next, params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (ctx === null) {
                throw new Error('koa context is null');
            }
            //  response
            const response = new question_pb_1.UpdateQuestionResponse();
            try {
                response.setMessage('update sucess');
                response.setCode(1);
                const postRepository = typeorm_1.getCustomRepository(CRUD_1.PostRepository);
                const question = yield postRepository.updateModel({ 'title': '1' }, { 'socre': '100' });
                console.log(question);
                return Promise.resolve(response);
            }
            catch (err) {
                response.setMessage('err');
                response.setCode(0);
                return Promise.reject(response);
            }
        });
    }
    questionLogic.updateQuestion = updateQuestion;
    function deleteQuestion(ctx, next, params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (ctx === null) {
                throw new Error('koa context is null');
            }
            //  response
            const response = new question_pb_1.DeleteQuestionResponse();
            try {
                response.setMessage('delete sucess');
                response.setCode(1);
                const postRepository = typeorm_1.getCustomRepository(CRUD_1.PostRepository);
                const question = yield postRepository.deleteModel({ 'title': '123' });
                console.log(question);
                return Promise.resolve(response);
            }
            catch (err) {
                response.setMessage('err');
                response.setCode(0);
                return Promise.reject(response);
            }
        });
    }
    questionLogic.deleteQuestion = deleteQuestion;
    function questionList(ctx, next, params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (ctx === null) {
                throw new Error('koa context is null');
            }
            //  response
            const response = new question_pb_1.QuestionListResponse();
            try {
                response.setMessage('ok');
                response.setCode(1);
                const postRepository = typeorm_1.getCustomRepository(CRUD_1.PostRepository);
                const questionList = yield postRepository.findModel();
                let arr = [];
                for (let i in questionList) {
                    let questionObj = new question_pb_1.Question();
                    questionObj.setId(questionList[i].id);
                    questionObj.setTitle(questionList[i].title);
                    questionObj.setAnswera(questionList[i].answerA);
                    questionObj.setAnswerb(questionList[i].answerB);
                    questionObj.setScore(questionList[i].score);
                    questionObj.setTrueanswer(questionList[i].trueAnswer);
                    arr.push(questionObj);
                }
                response.setDataList(arr);
                return Promise.resolve(response);
            }
            catch (err) {
                response.setMessage('err');
                response.setCode(0);
                return Promise.reject(response);
            }
        });
    }
    questionLogic.questionList = questionList;
})(questionLogic = exports.questionLogic || (exports.questionLogic = {}));
//# sourceMappingURL=questionLogic.js.map