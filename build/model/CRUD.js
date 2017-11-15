"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const question1_1 = require("../entity/relation/question1");
let PostRepository = class PostRepository extends typeorm_1.AbstractRepository {
    constructor() {
        super();
        this.userRepository = typeorm_1.getMongoRepository(question1_1.Question1);
    }
    createModel(params) {
        const post = new question1_1.Question1();
        post.title = params.body.title;
        post.answerA = params.body.answerA;
        post.answerB = params.body.answerB;
        post.score = params.body.score;
        post.trueAnswer = params.body.trueAnswer;
        return this.userRepository.save(post);
    }
    findModel(where, order, offset, limit) {
        const search = {
            where: where || {},
            order: order || {},
            skip: offset || 0,
            take: limit || 10
        };
        return this.userRepository.find(search);
    }
    updateModel(condition, set) {
        return this.userRepository.updateOne(condition, { '$set': set });
    }
    deleteModel(condition) {
        return this.userRepository.deleteOne(condition);
    }
    countModel(condition) {
        return this.userRepository.count(condition);
    }
};
PostRepository = __decorate([
    typeorm_1.EntityRepository(question1_1.Question1),
    __metadata("design:paramtypes", [])
], PostRepository);
exports.PostRepository = PostRepository;
//# sourceMappingURL=CRUD.js.map