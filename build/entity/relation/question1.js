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
let Question1 = class Question1 {
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    __metadata("design:type", typeorm_1.ObjectID)
], Question1.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Question1.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Question1.prototype, "answerA", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Question1.prototype, "answerB", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Question1.prototype, "score", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Question1.prototype, "trueAnswer", void 0);
Question1 = __decorate([
    typeorm_1.Entity()
], Question1);
exports.Question1 = Question1;
//# sourceMappingURL=question1.js.map