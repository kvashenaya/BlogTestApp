"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = exports.Post = void 0;
const post_entity_1 = require("./post.entity");
Object.defineProperty(exports, "Post", { enumerable: true, get: function () { return post_entity_1.Post; } });
const comment_entity_1 = require("./comment.entity");
Object.defineProperty(exports, "Comment", { enumerable: true, get: function () { return comment_entity_1.Comment; } });
const entities = [post_entity_1.Post, comment_entity_1.Comment];
exports.default = entities;
//# sourceMappingURL=index.js.map