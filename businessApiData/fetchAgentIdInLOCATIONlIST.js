const locationList=[
        {
            "name": "brands/9dd3b4d2-c49a-4c8e-b809-586f1b3e70be/locations/3744f279-a675-4962-aa98-5a0f1dfb438f",
            "placeId": "ChIJ-X5l_79ZFzkRWAOiMAHpcP8",
            "locationEntryPointConfigs": [
                {
                    "allowedEntryPoint": "PLACESHEET"
                },
                {
                    "allowedEntryPoint": "MAPS_TACTILE"
                }
            ],
            "agent": "brands/9dd3b4d2-c49a-4c8e-b809-586f1b3e70be/agents/52c5af58-1b02-4b80-bd0f-b6e93f3c667d",
            "defaultLocale": "en",
            "listingId": "-8439409752155103950"
        },
        {
            "name": "brands/9dd3b4d2-c49a-4c8e-b809-586f1b3e70be/locations/57015e51-a184-4632-8b89-7adda2538b83",
            "placeId": "ChIJ7ZZzYhQFDTkRIUiuj2z8GwM",
            "locationEntryPointConfigs": [
                {
                    "allowedEntryPoint": "PLACESHEET"
                },
                {
                    "allowedEntryPoint": "MAPS_TACTILE"
                }
            ],
            "agent": "brands/9dd3b4d2-c49a-4c8e-b809-586f1b3e70be/agents/52c5af58-1b02-4b80-bd0f-b6e93f3c667d",
            "defaultLocale": "en",
            "listingId": "-7828231993632792598"
        },
        {
            "name": "brands/9dd3b4d2-c49a-4c8e-b809-586f1b3e70be/locations/629f20be-0b13-4726-8661-0b0e4f88fe87",
            "placeId": "ChIJ-_7WvqErCTkRXja-EbvUKiY",
            "locationEntryPointConfigs": [
                {
                    "allowedEntryPoint": "PLACESHEET"
                },
                {
                    "allowedEntryPoint": "MAPS_TACTILE"
                }
            ],
            "agent": "brands/9dd3b4d2-c49a-4c8e-b809-586f1b3e70be/agents/52c5af58-1b02-4b80-bd0f-b6e93f3c667d",
            "defaultLocale": "en",
            "listingId": "2244455295266730038"
        },
        {
            "name": "brands/9dd3b4d2-c49a-4c8e-b809-586f1b3e70be/locations/94cdf931-e1a9-48f0-8a1b-fae31fea6216",
            "placeId": "ChIJ-y_EOAWXyzsRe4RD6PknF9w",
            "locationEntryPointConfigs": [
                {
                    "allowedEntryPoint": "PLACESHEET"
                },
                {
                    "allowedEntryPoint": "MAPS_TACTILE"
                }
            ],
            "agent": "brands/9dd3b4d2-c49a-4c8e-b809-586f1b3e70be/agents/52c5af58-1b02-4b80-bd0f-b6e93f3c667d",
            "defaultLocale": "en",
            "listingId": "5984233336184753801"
        },
        {
            "name": "brands/9dd3b4d2-c49a-4c8e-b809-586f1b3e70be/locations/c7bbbe2e-c4ad-4337-a0f1-736cd7050c9e",
            "placeId": "ChIJJ9UGdDflDDkROtXQVfD0Brg",
            "locationEntryPointConfigs": [
                {
                    "allowedEntryPoint": "PLACESHEET"
                },
                {
                    "allowedEntryPoint": "MAPS_TACTILE"
                }
            ],
            "agent": "brands/9dd3b4d2-c49a-4c8e-b809-586f1b3e70be/agents/517e2c4a-9b57-4b76-bd10-a55fd12c669d",
            "defaultLocale": "en",
            "listingId": "-1751429756869094562"
        },
        {
            "name": "brands/9dd3b4d2-c49a-4c8e-b809-586f1b3e70be/locations/d9fbbe76-96f3-4c60-8acd-adacaecfacaf",
            "placeId": "ChIJ-SJebiaTyzsRnvqBTastUVE",
            "locationEntryPointConfigs": [
                {
                    "allowedEntryPoint": "PLACESHEET"
                },
                {
                    "allowedEntryPoint": "MAPS_TACTILE"
                }
            ],
            "agent": "brands/9dd3b4d2-c49a-4c8e-b809-586f1b3e70be/agents/52c5af58-1b02-4b80-bd0f-b6e93f3c667d",
            "defaultLocale": "en",
            "listingId": "-7393651060864253058"
        }
    ]



    // Define the agent you want to search for
const agentToFind = "brands/9dd3b4d2-c49a-4c8e-b809-586f1b3e70be/agents/52c5af58-1b02-4b80-bd0f-b6e93f3c667d";

const locationsWithAgent = locationList.filter(location => location.agent === agentToFind);
const length=locationsWithAgent.length
console.log(length);
console.log(locationsWithAgent);



/**Example2 */
// const agentIdToFind = "52c5af58-1b02-4b80-bd0f-b6e93f3c667d";
// const locationsWithAgent = locationList.filter(location => location.agent.includes(agentIdToFind));

// // Output the locations found
// console.log(locationsWithAgent);
// const length=locationsWithAgent.length
// console.log(length);

