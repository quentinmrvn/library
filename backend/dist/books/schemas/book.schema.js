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
exports.BookSchema = exports.Book = exports.BookStatus = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var BookStatus;
(function (BookStatus) {
    BookStatus["TO_READ"] = "\u00C0 lire";
    BookStatus["READING"] = "En cours";
    BookStatus["FINISHED"] = "Termin\u00E9";
})(BookStatus || (exports.BookStatus = BookStatus = {}));
let Book = class Book {
    title;
    author;
    status;
    rating;
};
exports.Book = Book;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Book.prototype, "author", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: BookStatus.TO_READ }),
    __metadata("design:type", String)
], Book.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ min: 0, max: 5, default: 0 }),
    __metadata("design:type", Number)
], Book.prototype, "rating", void 0);
exports.Book = Book = __decorate([
    (0, mongoose_1.Schema)()
], Book);
exports.BookSchema = mongoose_1.SchemaFactory.createForClass(Book);
//# sourceMappingURL=book.schema.js.map