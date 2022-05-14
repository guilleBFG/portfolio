export default{
    name:"workHistory",
    title: "Work History",
    type: "document",
    fields:[
        {
            name: "companyName",
            title: "Company Name",
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
            name: "jobTitle",
            title: "Job Title",
            type: "string"
        },
        {
            name: "jobDescription",
            title: "Job Description",
            type: 'array', 
            of: [{type: 'block'}]
        },
    ],
}