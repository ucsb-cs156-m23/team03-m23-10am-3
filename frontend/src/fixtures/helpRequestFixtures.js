const helpRequestFixtures = {
    oneHelpRequest: {
        "id": 1,
        "requesterEmail": "mizore@osakaaquarium.org",
        "teamId": "5",
        "tableOrBreakoutRoom": "5",
        "requestTime": "2022-01-02T12:00:00",
        "explanation": "azarshi",
        "solved": "false"
    },
    threeHelpRequests: [
        {
            "id": 1,
            "requesterEmail": "mizore@osakaaquarium.org",
            "teamId": "5",
            "tableOrBreakoutRoom": "5",
            "requestTime": "2022-01-02T12:00:00",
            "explanation": "azarshi",
            "solved": "false"
        },
        {
            "id": 2,
            "requesterEmail": "yuki@osakaaquarium.org",
            "teamId": "6",
            "tableOrBreakoutRoom": "7",
            "requestTime": "2022-04-03T12:00:00",
            "explanation": "xiao xue",
            "solved": "true"
           
        },
        {
            "id": 3,
            "requesterEmail": "niko@tobaaquarium.org",
            "teamId": "8",
            "tableOrBreakoutRoom": "8",
            "requestTime": "2022-07-04T12:00:00",
            "explanation": "bei jia er hai bao",
            "solved": "false"
        }
    ]
};


export { helpRequestFixtures };