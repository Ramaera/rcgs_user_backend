/* eslint-disable */
export default async () => {
    const t = {
        ["./users/models/user.model"]: await import("./users/models/user.model"),
        ["./rewards/dto/reward-order.input"]: await import("./rewards/dto/reward-order.input")
    };
    return { "@nestjs/swagger/plugin": { "models": [], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String }, "getHelloName": { type: String } } }]] }, "@nestjs/graphql/plugin": { "models": [[import("./auth/dto/signup.input"), { "SignupInput": { email: {}, password: {}, name: { nullable: true }, city: { nullable: true }, photo: { nullable: true } } }], [import("./auth/models/token.model"), { "Token": { accessToken: {}, refreshToken: {} } }], [import("./common/models/base.model"), { "BaseModel": { id: {}, createdAt: {}, updatedAt: {} } }], [import("./rewards/models/reward.model"), { "Reward": { rewardCode: {} } }], [import("./users/models/user.model"), { "User": { email: {}, name: { nullable: true }, city: { nullable: true }, photo: { nullable: true }, rewards: { nullable: true } } }], [import("./auth/models/auth.model"), { "Auth": { user: { type: () => t["./users/models/user.model"].User } } }], [import("./auth/dto/login.input"), { "LoginInput": { email: {}, password: {} } }], [import("./auth/dto/refresh-token.input"), { "RefreshTokenInput": { token: {} } }], [import("./users/dto/change-password.input"), { "ChangePasswordInput": { oldPassword: {}, newPassword: {} } }], [import("./users/dto/update-user.input"), { "UpdateUserInput": { name: { nullable: true }, city: { nullable: true }, photo: { nullable: true } } }], [import("./common/pagination/pagination.args"), { "PaginationArgs": { skip: { nullable: true, type: () => Number }, after: { nullable: true, type: () => String }, before: { nullable: true, type: () => String }, first: { nullable: true, type: () => Number }, last: { nullable: true, type: () => Number } } }], [import("./rewards/args/reward-id.args"), { "RewardIdArgs": { rewardId: { type: () => String } } }], [import("./rewards/args/user-id.args"), { "UserIdArgs": { userId: { type: () => String } } }], [import("./common/pagination/page-info.model"), { "PageInfo": { endCursor: { nullable: true }, hasNextPage: {}, hasPreviousPage: {}, startCursor: { nullable: true } } }], [import("./rewards/models/reward-connection.model"), { "RewardConnection": {} }], [import("./rewards/dto/reward-order.input"), { "RewardOrder": { field: { type: () => t["./rewards/dto/reward-order.input"].RewardOrderField } } }], [import("./rewards/dto/createReward.input"), { "CreateRewardInput": { rewardCode: {} } }]] } };
};