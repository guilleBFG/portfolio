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
            name: "companyLogo",
            title: "Company Logo",
            type: "image",
            options: {
                hotspot: true,
            },
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
            type: "stringLocale"
        },
        {
            name: "jobDescription",
            title: "Job Description",
            type: 'blockLocale'
        },
    ],
    preview:{
        select: {
            title: "companyName",
            companyLogo: "companyLogo",
            jobTitle: "jobTitle",
            fromDate: "fromDate",
            toDate: "toDate",            
        },
        prepare(selection){
            const {title, companyLogo, jobTitle, fromDate, toDate} = selection;
            return {
                media: companyLogo,
                title: title,
                subtitle: `${jobTitle} - ${fromDate} - ${toDate ? toDate: 'Current'}`,
            }
        }
    }
}