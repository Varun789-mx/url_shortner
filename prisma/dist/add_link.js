"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const prop = {
    original_url: "Random.xyx",
    short_url: "xefsfaga"
};
function main(prop) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.linkTable.create({
            data: {
                original_url: prop.original_url,
                short_url: prop.short_url
            }
        }).then(() => __awaiter(this, void 0, void 0, function* () {
            yield prisma.$disconnect();
            console.log("Query ran succesfully");
        })).catch((e) => __awaiter(this, void 0, void 0, function* () {
            yield prisma.$disconnect();
            console.log(e);
        }));
    });
}
main(prop);
exports.default = main;
