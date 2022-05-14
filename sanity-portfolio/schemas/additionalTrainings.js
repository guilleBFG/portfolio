export default{
    name:"additionalTrainings",
    title: "Additional Trainings - General Knoledge",
    type: "document",
    fields:[
        {
            name: "date",
            title: "Date",
            type: "date"
        },
        {
            name: "degreeTitle",
            title: "Degree Obtained",
            type: "string"
        },
        {
            name: "degreeDescription",
            title: "Degree Description",
            type: 'array', 
            of: [{type: 'block'}]
        },
    ],
}