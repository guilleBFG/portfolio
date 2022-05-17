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
            type: "stringLocale"
        },
        {
            name: "degreeDescription",
            title: "Degree Description",
            type: 'blockLocale', 
        },
    ],
}