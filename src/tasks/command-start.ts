import * as program from "commander";
import * as uuid from "uuid";
import { GameyeClient } from "../clients";

function collectArray(value: string, previous: string[]) {
    return previous.concat([value]);
}

function collectKeyValue(value: string, previous: any) {
    const keyValuePair = value.match(/^(.+?)=(.+)$/);
    if (!keyValuePair) {
        throw new Error("Invalid parameter for config");
    }
    previous[keyValuePair[1]] = keyValuePair[2];
    return previous;
}

program.
    command("command-start").
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
    option(
        "--location-key <location>",
        "Location key. If multiple are specified",
        collectArray,
        [],
    ).
    option(
        "--match-key <match-key>",
        "User determined identifier for the match (default to uuid)",
        String,
        uuid(),
    ).
    option(
        "--game-key <game-key>",
        "The game that you would like to start the server",
        String,
    ).
    option(
        "--template-key <template-key>",
        "The template of the game you would like to create",
        String,
    ).
    option(
        "--config [config]",
        "The json config for the match",
        collectKeyValue,
        {},
    ).
    action(async (options: any) => {
        // tslint:disable: no-console

        const {
            apiKey,
            apiEndpoint,
            matchKey,
            gameKey,
            locationKey: locationKeys,
            templateKey,
            config,
        } = options;

        const client = new GameyeClient({
            token: apiKey,
            endpoint: apiEndpoint,
        });

        try {
            console.log(`starting match with id ${matchKey}`);

            await client.commandStartMatch(
                matchKey,
                gameKey,
                locationKeys,
                templateKey,
                config,
            );

            console.log(`match started`);

        } catch (message) {
            console.error(`Something went wrong ${message}`);
        }
    });
