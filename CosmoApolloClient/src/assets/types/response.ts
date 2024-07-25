import { ApolloError } from "@apollo/client";

export type ResponseData = {
    data: any; loading?: boolean; error: ApolloError | undefined;
}