export default {
    name:"shows",
    type:"document",
    title:'Shows',
   groups:[{
        name: 'infoSet',
        title: 'Info',
        options: { columns: 2 },
      }],
    fields:[
        {
            type:"object",
            name:"cover",
            title:'Cover',
            fields:[
                
                    {
                        name:"image",
                        type:'image',
                        title:"file"
                    },
                    {
                        name:"video",
                        type:'mux.video',
                        title:"Video"
                    }
                
            ]

        },
        {
            type:'string',
            name:'title',
            title:'Title',
        },
        {
            type:'slug',
            name:'slug',
            title:'Slug',
            group:'infoSet',
            options:{
                source:'title'
            }

        },
        {
            type:'object',
            name:'info',
            title:'Inforamtion',
            fieldsets:[{
                name:'2col',
                options:{columns:2}
            }],
            fields:[
                {name:"date", type:"datetime", title:"data", fieldset: '2col'},
                {name:"timeStart",type:"string", title:"Time Start", fieldset: '2col'},
                {name:"timeStop",type:"string", title:"Time Stop", fieldset: '2col'},
                {name:"location",type:"text",title:"Location"},
                {name:"url",type:"url",title:"Link to Tickets"},
                {name:"cta",type:"string",title:"CTA"}
            ]
        },
        {
            type:'array', name:'description',title:'Description',of:[{type:'block'}]
        },
        {
            type:"object",
            name:"bg",
            title:'background',
            fields:[
                
                    {
                        name:"image",
                        type:'image',
                        title:"file"
                    },
                    {
                        name:"video",
                        type:'mux.video',
                        title:"Video"
                    }
                
            ]

        },
        {
            name:"orderRank",type:"string",title:"Rank"
        }

        
       
    ]
}