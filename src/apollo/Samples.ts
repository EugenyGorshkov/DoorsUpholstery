import {gql} from "@apollo/client";

export const FETCH_SAMPLES_GROUP = gql`
    query Samples {
        Samples {
            group
            name
            picture
        }
    }
`