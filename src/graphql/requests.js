import { gql } from "@apollo/client";
import client from "./config";

export function getLaunches() {
    return new Promise((resolve, reject) => {
        client.query({
            query: gql`
                {
                    launches {
                        details
                        launch_date_local
                        launch_site {
                            site_name_long
                        }
                        launch_success
                        links {
                            video_link
                        }
                        mission_name
                        rocket {
                            rocket_name
                        }
                    }
                }
            `
        }).then((result) => {
            console.log(result);
            resolve({success: true, data: result});
        }).catch((error) => {
            reject(error);
        })
    })
}