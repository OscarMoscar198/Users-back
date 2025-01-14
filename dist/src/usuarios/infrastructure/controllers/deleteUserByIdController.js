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
exports.DeleteUserController = void 0;
class DeleteUserController {
    constructor(deleteUserUseCase) {
        this.deleteUserUseCase = deleteUserUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.body;
                if (!id) {
                    return res.status(400).send({
                        status: "error",
                        message: "Se requiere un ID válido en la solicitud.",
                    });
                }
                yield this.deleteUserUseCase.run(id);
                res.status(204).json({
                    message: "Usuario eliminado correctamente"
                });
            }
            catch (error) {
                console.error("Error al eliminar el usuario:", error);
                return res.status(500).send({
                    status: "error",
                    message: "Se produjo un error en el servidor al eliminar el usuario.",
                });
            }
        });
    }
}
exports.DeleteUserController = DeleteUserController;
