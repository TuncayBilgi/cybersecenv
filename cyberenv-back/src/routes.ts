import { UserController } from "./controller/UserController"
import { AccountController } from "./controller/AccountController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "post",
    route: "/account/create",
    controller: AccountController,
    action: "save"
}, {
    method: "get",
    route: "/account",
    controller: AccountController,
    action: "find"
}]