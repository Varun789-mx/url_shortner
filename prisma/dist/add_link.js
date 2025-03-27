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
const client_1 = require("@prisma/client'");
const prisma = new client_1.PrismaClient();
const urlprop, { original_url: string };
short_url: string;
const prop = {
    original_url: "Random.xyx",
    short_url: "xefsfaga"
};
function main(prop) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.link.create({
            data: {
                original_url: prop.original,
                short_url: prop.short_url
            }
        });
    });
}
main(prop)
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
    console.log("Query ran succesfully");
}));
try { }
catch (async) { }
(e) => {
    yield prisma.$disconnect();
    console.log(e);
    process.exit(1);
};
