export default{
    name:"education",
    title: "Education History",
    type: "document",
    fields:[
        {
            name: "institutionName",
            title: "Institution Name",
            type: "string"
        },
        {
            name: "fromDate",
            title: "From Date",
            type: "date"
        },
        {
            name: "toDate",
            title: "To Date",
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