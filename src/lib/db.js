const { USER_NAME, USER_PASSWORD } = process.env;

export const connectionString = "mongodb+srv://" + USER_NAME + ":" + USER_PASSWORD + "@nextclustor.ccbp6ho.mongodb.net/productDb?retryWrites=true&w=majority&appName=nextClustor";