"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const common_1 = require("@nestjs/common");
const comment_controller_1 = require("./controllers/comment.controller");
const comment_service_1 = require("./services/comment.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../typeorm");
let CommentsModule = class CommentsModule {
};
CommentsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([typeorm_2.Comment])],
        controllers: [comment_controller_1.CommentsController],
        providers: [comment_service_1.CommentsService]
    })
], CommentsModule);
exports.CommentsModule = CommentsModule;
//# sourceMappingURL=comment.module.js.map