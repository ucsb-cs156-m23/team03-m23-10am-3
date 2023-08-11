const ucsbDatesFixtures = {
    oneDate: {
        "id": 1,
        "prequesterEmail" : "cgaucho1@ucsb.edu",
        "professorEmail" : "prof1@ucsb.edu",
        "explanation" : "For X graduate program",
        "dateRequested": "2022-01-02T12:00:00",
        "dateNeeded" : "2022-01-02T12:00:00",
        "done" : true
    },  
    threeDates: [
        {
            "id": 1,
            "prequesterEmail" : "cgaucho1@ucsb.edu",
            "professorEmail" : "prof1@ucsb.edu",
            "explanation" : "For X graduate program",
            "dateRequested": "2022-01-02T12:00:00",
            "dateNeeded" : "2022-01-02T12:00:00",
            "done" : true
        },
        {
            "id": 2,
            "prequesterEmail" : "cgaucho2@ucsb.edu",
            "professorEmail" : "prof2@ucsb.edu",
            "explanation" : "For Y graduate program",
            "dateRequested": "2022-02-02T12:00:00",
            "dateNeeded" : "2022-02-02T12:00:00",
            "done" : false
        },
        {
            "id": 3,
            "prequesterEmail" : "cgaucho3@ucsb.edu",
            "professorEmail" : "prof3@ucsb.edu",
            "explanation" : "For Z graduate program",
            "dateRequested": "2022-03-02T12:00:00",
            "dateNeeded" : "2022-03-02T12:00:00",
            "done" : true
        }
    ]
};


export { ucsbDatesFixtures };