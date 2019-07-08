import * as program from "commander";
import { GameyeClient } from "../clients";
import * as selectors from "../selectors";

program.
    command("query-match").
    option(
        "--api-key <api-key>",
        "API key provided by Gameye",
        String,
        process.env.GAMEYE_API_TOKEN,
    ).
    option(
        "--api-endpoint <api-endpoint>",
        "The url where the gameye service is hosted",
        String,
        process.env.GAMEYE_API_ENDPOINT || "https://api.gameye.com",
    ).
    action(async (options: any) => {
        // tslint:disable: no-console

        const {
            apiKey,
            apiEndpoint,
        } = options;

        const client = new GameyeClient({
            token: apiKey,
            endpoint: apiEndpoint,
        });

        const matchState = await client.queryMatch();
        const matchList = selectors.selectMatchList(matchState);

        const printRow = (elements: string[]) => console.log(elements.map(s => s.padEnd(columnWidth)).join(""));
        const columnWidth = 36;
        const headers = [
            "Duration",
            "Game key",
            "Match key",
        ];
        printRow(headers);

        matchList.forEach((match) => {
            const durationMinutes = Math.round((new Date().valueOf() - match.created) / (1000 * 60));
            printRow([`${durationMinutes}m`, match.gameKey, match.matchKey]);
        });
    });
