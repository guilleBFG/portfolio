export default{
    name:"skills",
    title: "Skills",
    type: "document",
    fields:[
        {
            name: "skillType",
            title: "Skill Type",
            type: "string"
        },
        {
            name: "skillDescription",
            title: "Skill Description",
            type: 'array', 
            of: [{type: 'block'}]
        },
    ],
}