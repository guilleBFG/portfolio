export default{
    name:"user",
    title: "User Information",
    type: "document",
    fields:[
        {
            name: "profilePicture",
            title: "Profile Picture",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "fullName",
            title: "Full Name",
            type: "string"
        },
        {
            name: "jobTitle",
            title: "Job Title",
            type: "string"
        },
        {
            title: 'Main email',
            name: 'email',
            type: 'url',
            validation: Rule => Rule.uri({
              scheme: ['http', 'https', 'mailto', 'tel']
            })
        },
        {
            title: 'LinkedIn',
            name: 'linkedIn',
            type: 'url',
            validation: Rule => Rule.uri({
              scheme: ['http', 'https', 'mailto', 'tel']
            })
        },
        {
            title: 'Telephone',
            name: 'telephone',
            type: 'url',
            validation: Rule => Rule.uri({
              scheme: ['http', 'https', 'mailto', 'tel']
            })
        },
        {
            name: "introduction",
            title: "Introduction",
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            name: "coverLetter",
            title: "Cover Letter",
            type: 'array', 
            of: [{type: 'block'}]
        },
        
    ],
}